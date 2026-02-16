import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import { Link } from "wouter";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Featured Categories */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-3 block">Collections</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Discover Our Treasures</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground">Explore our curated selection of the finest natural gemstones, hand-selected for their rarity and beauty.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden mb-6 bg-secondary">
                    <img 
                      src={cat.image} 
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 m-4"></div>
                  </div>
                  <h3 className="text-center font-serif text-2xl text-primary group-hover:text-accent transition-colors">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Products */}
      {/* <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-accent uppercase tracking-widest text-sm font-bold mb-3 block">Exclusive</span>
              <h2 className="font-serif text-4xl font-bold text-primary">New Arrivals</h2>
            </div>
            <Link href="/category/all">
              <Button variant="link" className="text-primary hover:text-accent p-0 mt-4 md:mt-0 group">
                View All Products <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Collections Section */}
      <FeaturedCollections />

      {/* Trust Indicators */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Certified Authenticity</h3>
              <p className="text-white/70 max-w-xs mx-auto">Every gemstone comes with a certificate of authenticity from renowned laboratories.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Lifetime Guarantee</h3>
              <p className="text-white/70 max-w-xs mx-auto">We stand by the quality of our gemstones with a comprehensive lifetime guarantee.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Secure Shipping</h3>
              <p className="text-white/70 max-w-xs mx-auto">Fully insured, secure shipping worldwide to ensure your treasure arrives safely.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
