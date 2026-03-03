import { useRoute, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Category() {
  const [, params] = useRoute("/category/:slug");
  const slug = params?.slug || "all";
  
  // Filter products
  const filteredProducts = slug === "all" 
    ? products 
    : products.filter(p => p.category.toLowerCase() === slug.toLowerCase());

  const categoryName = slug === "all" ? "All Gemstones" : categories.find(c => c.slug === slug)?.name || slug;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-4 uppercase tracking-wider">
            <Link href="/">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Collection</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold capitalize">{categoryName}</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Explore our exclusive collection of {categoryName.toLowerCase()}, hand-selected for their exceptional quality and brilliance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Filters (Visual only for now) */}
        <div className="flex-wrap gap-4 mb-12 justify-center">
          <Link href="/category/all">
            <Button 
                variant={slug === "all" ? "default" : "outline"}
                className={`rounded-none uppercase tracking-wide ${slug === "all" ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
            >
                View All
            </Button>
          </Link>
          {categories.map(cat => (
             <Link key={cat.slug} href={`/category/${cat.slug}`}>
               <Button 
                 variant={slug === cat.slug ? "default" : "outline"}
                 className={`rounded-none uppercase tracking-wide ${slug === cat.slug ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
               >
                 {cat.name}
               </Button>
             </Link>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 lg:gap-x-8 lg:gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="font-serif text-2xl text-primary mb-4">No products found</h3>
            <p className="text-muted-foreground mb-8">We are currently restocking this collection.</p>
            <Link href="/category/all">
              <Button className="rounded-none">View All Gemstones</Button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
