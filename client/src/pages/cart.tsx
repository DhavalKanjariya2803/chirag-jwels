import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/hooks/useCart";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function Cart() {
    const { items, updateQuantity, removeFromCart, clearCart } = useCart();
    const { toast } = useToast();

    const cartItems = items.map((item) => ({
        ...item,
        product: products.find((p) => p.id === item.productId)!,
    }));

    const handleRemove = (productId: string, productName: string) => {
        removeFromCart(productId);
        toast({
            title: "Removed from cart",
            description: `${productName} has been removed from your cart.`,
        });
    };

    const handleClearCart = () => {
        clearCart();
        toast({
            title: "Cart cleared",
            description: "All items have been removed from your cart.",
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <ShoppingBag className="h-24 w-24 text-muted-foreground/30 mb-6" />
                        <h2 className="font-serif text-2xl font-medium text-primary mb-4">Your cart is empty</h2>
                        <p className="text-muted-foreground mb-8 text-center max-w-md">
                            Start adding beautiful gemstones to your inquiry list.
                        </p>
                        <Link href="/">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none uppercase tracking-wide">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {cartItems.map(({ product, quantity, productId }) => (
                                <div key={productId} className="flex gap-6 p-6 border border-border bg-white">
                                    <Link href={`/product/${productId}`}>
                                        <div className="w-28 h-28 bg-secondary flex-shrink-0 cursor-pointer overflow-hidden group">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    </Link>

                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <Link href={`/product/${productId}`}>
                                                <h3 className="font-serif text-xl font-medium text-primary mb-1 hover:text-accent transition-colors cursor-pointer">
                                                    {product.name}
                                                </h3>
                                            </Link>
                                            <p className="text-sm text-muted-foreground uppercase tracking-wide">
                                                {product.category}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center gap-3">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8 rounded-none"
                                                    onClick={() => updateQuantity(productId, quantity - 1)}
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </Button>
                                                <span className="text-primary font-medium w-8 text-center">{quantity}</span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8 rounded-none"
                                                    onClick={() => updateQuantity(productId, quantity + 1)}
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>

                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-destructive hover:text-destructive hover:bg-destructive/5"
                                                onClick={() => handleRemove(productId, product.name)}
                                            >
                                                <Trash2 className="h-4 w-4 mr-2" />
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-1">
                            <div className="border border-border p-6 bg-white sticky top-32">
                                <h2 className="font-serif text-2xl font-bold text-primary mb-6">Cart Summary</h2>

                                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Total Items</span>
                                        <span className="font-medium text-primary">
                                            {items.reduce((sum, item) => sum + item.quantity, 0)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Unique Products</span>
                                        <span className="font-medium text-primary">{items.length}</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Link href="/contact">
                                        <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 h-14 uppercase tracking-wide rounded-none text-base">
                                            Inquire Now
                                        </Button>
                                    </Link>

                                    <Link href="/">
                                        <Button size="lg" variant="outline" className="w-full h-14 uppercase tracking-wide rounded-none border-primary/20">
                                            Continue Shopping
                                        </Button>
                                    </Link>

                                    <Button
                                        size="lg"
                                        variant="ghost"
                                        className="w-full text-destructive hover:text-destructive hover:bg-destructive/5"
                                        onClick={handleClearCart}
                                    >
                                        Clear Cart
                                    </Button>
                                </div>

                                <p className="text-xs text-muted-foreground text-center mt-6">
                                    Need help? Call us at <span className="text-primary font-medium">+1 (555) 123-4567</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
