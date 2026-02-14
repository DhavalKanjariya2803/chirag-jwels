import { useRoute } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Check, Share2, Heart, Truck, ShieldCheck, Package, Minus, Plus } from "lucide-react";
import { useState } from "react";
import NotFound from "@/pages/not-found";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetails() {
  const [, params] = useRoute("/product/:id");
  const id = params?.id;
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addToCart, getItemQuantity } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { toast } = useToast();

  if (!product) return <NotFound />;

  const inWishlist = isInWishlist(product.id);
  const inCartQuantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    });
    setQuantity(1); // Reset quantity after adding
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product.id);
    toast({
      title: inWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${inWishlist ? "removed from" : "added to"} your wishlist.`,
    });
  };

  const featuresIconMap = [
    <Check key="check" className="h-5 w-5" />,
    <Truck key="truck" className="h-5 w-5" />,
    <ShieldCheck key="shield" className="h-5 w-5" />,
    <Package key="package" className="h-5 w-5" />
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-4">
        {/* Breadcrumb - simple text for now */}
        <div className="text-sm text-muted-foreground mb-8">
          Home / {product.category} / <span className="text-primary font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary overflow-hidden relative group">
              <img
                src={product.images && product.images.length > 0 ? product.images[activeImage] : product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`aspect-square bg-secondary cursor-pointer border-2 transition-all ${activeImage === idx ? 'border-primary' : 'border-transparent hover:border-primary/30'}`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover opacity-80 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="text-accent uppercase tracking-widest font-bold text-sm block mb-4">{product.category} Collection</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">{product.name}</h1>
            <p className="text-xl text-accent font-medium tracking-widest uppercase mb-8">Price Upon Inquiry</p>

            <div className="prose prose-stone mb-8">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-primary/70">
                  <span className="text-primary/60">{featuresIconMap[idx]}</span>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="text-sm font-medium text-primary mb-2 block">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-primary font-medium w-12 text-center text-lg">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-none"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                {inCartQuantity > 0 && (
                  <span className="text-sm text-muted-foreground ml-2">
                    ({inCartQuantity} in cart)
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-10">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-primary text-white hover:bg-primary/90 h-14 uppercase tracking-wide rounded-none text-base transition-all duration-300 hover:shadow-lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-14 w-14 rounded-none border-primary/20 hover:scale-110 transition-all duration-300"
                  onClick={handleWishlistToggle}
                >
                  <Heart className={`h-6 w-6 transition-all duration-300 ${inWishlist ? "fill-current text-red-500 scale-110" : ""}`} />
                </Button>
                <Button size="icon" variant="outline" className="h-14 w-14 rounded-none border-primary/20 hover:scale-110 transition-all duration-300">
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Need help? Call us at <span className="text-primary font-medium">+1 (555) 123-4567</span>
              </p>
            </div>

            <div className="w-full space-y-8 border-t border-border pt-8 mt-10">
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-bold text-primary">Product Details</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our gemstones are sourced from the finest mines worldwide. Each stone is carefully selected for its color, clarity, and brilliance. This specific piece features a unique cut that maximizes its natural luster.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-bold text-primary">Shipping & Returns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer complimentary insured shipping worldwide. All items are shipped via secure courier service. Returns are accepted within 30 days of delivery, provided the item is in its original condition.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-bold text-primary">Certification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This gemstone comes with a certificate of authenticity from a recognized gemological laboratory, guaranteeing its natural origin and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
