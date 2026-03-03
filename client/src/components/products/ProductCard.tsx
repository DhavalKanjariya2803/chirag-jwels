import { Link } from "wouter";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { toast } = useToast();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);

    toast({
      title: inWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${inWishlist ? "removed from" : "added to"} your wishlist.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <Link href={`/product/${product.id}`}>
        <Card className="group overflow-hidden border-none shadow-none bg-transparent cursor-pointer">
          <CardContent className={`p-0 relative aspect-[4/5] overflow-hidden ${product.className}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain object-center transition-transform duration-700"
            />
            <div className="absolute left-3 right-3 bottom-3 bg-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button className="w-full bg-white text-primary hover:bg-accent hover:text-primary rounded-none translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Details
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start pt-6 px-0 pb-0">
            <span className="text-muted-foreground text-xs uppercase tracking-widest mb-2">{product.category}</span>
            <h3 className="font-serif text-base sm:text-xl font-medium text-primary mb-2 group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            <p className="text-accent text-sm font-medium tracking-wide uppercase">
              Price Upon Inquiry
            </p>
          </CardFooter>
        </Card>
      </Link>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 h-10 w-10 bg-white/90 hover:bg-white hover:scale-110 text-primary z-10 transition-all duration-300"
        onClick={handleWishlistToggle}
      >
        <Heart
          className={`h-5 w-5 transition-all duration-300 ${inWishlist ? "fill-current text-red-500 scale-110" : ""}`}
        />
      </Button>
    </motion.div>
  );
}
