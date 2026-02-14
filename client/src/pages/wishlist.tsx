import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Wishlist() {
    const { items: wishlistIds, removeFromWishlist, clearWishlist } = useWishlist();
    const { addToCart, getItemQuantity } = useCart();
    const { toast } = useToast();

    const wishlistItems = wishlistIds
        .map((id) => products.find((p) => p.id === id))
        .filter(Boolean) as typeof products;

    const handleAddToCart = (productId: string, productName: string) => {
        addToCart(productId, 1);
        toast({
            title: "Added to cart",
            description: `${productName} has been added to your cart.`,
        });
    };

    const handleRemoveFromWishlist = (productId: string, productName: string) => {
        removeFromWishlist(productId);
        toast({
            title: "Removed from wishlist",
            description: `${productName} has been removed from your wishlist.`,
        });
    };

    const handleClearWishlist = () => {
        clearWishlist();
        toast({
            title: "Wishlist cleared",
            description: "All items have been removed from your wishlist.",
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">My Wishlist</h1>
                    {wishlistItems.length > 0 && (
                        <Button
                            variant="ghost"
                            className="text-destructive hover:text-destructive hover:bg-destructive/5"
                            onClick={handleClearWishlist}
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Clear Wishlist
                        </Button>
                    )}
                </div>

                {wishlistItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Heart className="h-24 w-24 text-muted-foreground/30 mb-6" />
                        <h2 className="font-serif text-2xl font-medium text-primary mb-4">Your wishlist is empty</h2>
                        <p className="text-muted-foreground mb-8 text-center max-w-md">
                            Save your favorite gemstones to your wishlist for later.
                        </p>
                        <Link href="/">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none uppercase tracking-wide">
                                Explore Gemstones
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {wishlistItems.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="group"
                            >
                                <div className="relative">
                                    <Link href={`/product/${product.id}`}>
                                        <div className="aspect-[4/5] bg-secondary overflow-hidden cursor-pointer mb-4">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                    </Link>

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-3 right-3 h-10 w-10 bg-white/90 hover:bg-white text-destructive hover:text-destructive"
                                        onClick={() => handleRemoveFromWishlist(product.id, product.name)}
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                </div>

                                <div className="space-y-3">
                                    <Link href={`/product/${product.id}`}>
                                        <div className="cursor-pointer">
                                            <span className="text-muted-foreground text-xs uppercase tracking-widest block mb-1">
                                                {product.category}
                                            </span>
                                            <h3 className="font-serif text-lg font-medium text-primary group-hover:text-accent transition-colors">
                                                {product.name}
                                            </h3>
                                        </div>
                                    </Link>

                                    <Button
                                        size="sm"
                                        className="w-full bg-primary text-white hover:bg-primary/90 rounded-none uppercase tracking-wide"
                                        onClick={() => handleAddToCart(product.id, product.name)}
                                    >
                                        <ShoppingCart className="h-4 w-4 mr-2" />
                                        {getItemQuantity(product.id) > 0 ? "Add More" : "Add to Cart"}
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
