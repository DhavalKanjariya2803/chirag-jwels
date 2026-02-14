import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/lib/data";

const CART_STORAGE_KEY = "chirag-jewels-cart";

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface CartContextType {
    items: CartItem[];
    addToCart: (productId: string, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getItemQuantity: (productId: string) => number;
    totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>(() => {
        // Initialize from localStorage
        try {
            const stored = localStorage.getItem(CART_STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Failed to load cart from localStorage:", error);
            return [];
        }
    });

    // Persist to localStorage whenever items change
    useEffect(() => {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
        } catch (error) {
            console.error("Failed to save cart to localStorage:", error);
        }
    }, [items]);

    const addToCart = (productId: string, quantity: number = 1) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.productId === productId);

            if (existingItem) {
                // Update quantity of existing item
                return currentItems.map((item) =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Add new item
                return [...currentItems, { productId, quantity }];
            }
        });
    };

    const removeFromCart = (productId: string) => {
        setItems((currentItems) =>
            currentItems.filter((item) => item.productId !== productId)
        );
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setItems((currentItems) =>
            currentItems.map((item) =>
                item.productId === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const getItemQuantity = (productId: string): number => {
        const item = items.find((item) => item.productId === productId);
        return item ? item.quantity : 0;
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const value: CartContextType = {
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemQuantity,
        totalItems,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
