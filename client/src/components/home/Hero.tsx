import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);

  const slides = [
    {
      type: "video",
      image: "/assets/hero-video-1.mp4",
      title: "Timeless Elegance",
      subtitle: "Discover the world's most exquisite gemstones",
    },
    {
      type: "video",
      image: "/assets/hero-video-2.mp4",
      title: "Royal Collection",
      subtitle: "Handpicked sapphires for the discerning collector",
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none" />
      
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] h-full min-w-0" key={index}>
              {slide.type === "video" ? (
                <video
                  src={slide.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover opacity-80"
                />
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover opacity-80"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center z-20 text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-4xl"
                >
                  <span className="text-accent tracking-[0.3em] uppercase text-sm md:text-base font-medium mb-4 block">
                    Established 1995
                  </span>
                  <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/category/all">
                      <Button 
                        size="lg" 
                        className="bg-accent text-primary hover:bg-white hover:text-primary min-w-[180px] h-14 text-base tracking-wide uppercase font-medium rounded-none cursor-pointer relative"
                      >
                        View Collection
                      </Button>
                    </Link>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-primary min-w-[180px] h-14 text-base tracking-wide uppercase font-medium rounded-none"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
