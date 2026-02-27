import { useState } from "react";
import { products, categoriesData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export function FeaturedCollections() {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;
  const displayedProducts = showAll
    ? products
    : products.slice(0, initialCount);
  const displayedCategories = showAll
    ? categoriesData
    : categoriesData.slice(0, initialCount);

  return (
    <section className="py-10 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Intro Text */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <p className="text-lg italic text-primary/80 leading-relaxed font-light">
            Providing professionally cut, ethically sourced gemstones and rare
            treasures to creative people around the world since 1995.
          </p>
          <div className="mt-8">
            <Link href="/category/all">
              <Button className="text-white px-10 h-12 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:opacity-90">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Product List with Alternating Layout */}
        <div className="space-y-2">
          {displayedCategories.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-6 lg:gap-24 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2">
                <div className="w-full relative group overflow-hidden bg-white h-[400px] md:h-[528px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary uppercase tracking-tight">
                  {product.name}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
                <div>
                  <Link href={`/category/${product.category.toLocaleLowerCase()}`}>
                    <Button className="text-white px-8 h-10 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90">
                      Available Stones
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {products.length > initialCount && (
          <div className="mt-10 md:mt-5 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-primary/20 text-primary hover:bg-primary/5 rounded-full px-10 h-12 text-sm font-bold tracking-widest uppercase transition-all duration-300"
            >
              {showAll ? "Show Less" : "View More Collections"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
