import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const WISHLIST_STORAGE_KEY = "chirag-jewels-wishlist";

export interface WishlistContextType {
    items: string[];
    addToWishlist: (productId: string) => void;
    removeFromWishlist: (productId: string) => void;
    toggleWishlist: (productId: string) => void;
    clearWishlist: () => void;
    isInWishlist: (productId: string) => boolean;
    totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<string[]>(() => {
        // Initialize from localStorage
        try {
            const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Failed to load wishlist from localStorage:", error);
            return [];
        }
    });

    // Persist to localStorage whenever items change
    useEffect(() => {
        try {
            localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
        } catch (error) {
            console.error("Failed to save wishlist to localStorage:", error);
        }
    }, [items]);

    const addToWishlist = (productId: string) => {
        setItems((currentItems) => {
            if (!currentItems.includes(productId)) {
                return [...currentItems, productId];
            }
            return currentItems;
        });
    };

    const removeFromWishlist = (productId: string) => {
        setItems((currentItems) =>
            currentItems.filter((id) => id !== productId)
        );
    };

    const toggleWishlist = (productId: string) => {
        setItems((currentItems) => {
            if (currentItems.includes(productId)) {
                return currentItems.filter((id) => id !== productId);
            } else {
                return [...currentItems, productId];
            }
        });
    };

    const clearWishlist = () => {
        setItems([]);
    };

    const isInWishlist = (productId: string): boolean => {
        return items.includes(productId);
    };

    const totalItems = items.length;

    const value: WishlistContextType = {
        items,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
        isInWishlist,
        totalItems,
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}
