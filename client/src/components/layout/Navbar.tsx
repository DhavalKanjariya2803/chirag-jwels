import { Link, useLocation } from "wouter";
import { Search, ShoppingBag, Heart, Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";

import { products } from "@/lib/data";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems: cartCount } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  useEffect(() => {
    // Reset state when location changes
    setOpenSubmenu(null);
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Gemstones",
      href: "/category/all",
      submenu: products.map(product => ({
        name: product.name,
        href: `/product/${product.id}`
      }))
    },
    { name: "Contact", href: "/contact" },
  ];

  // Check if we're on a page that should always have a solid navbar background
  const isNonHomePage = location !== "/" && location !== "";
  const shouldHaveSolidBg = scrolled || isNonHomePage;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        shouldHaveSolidBg ? "bg-white/90 backdrop-blur-md shadow-sm border-border/40 py-2" : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left side: Logo (visible on all screen sizes) */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <div className="flex flex-col items-center cursor-pointer">
              <img
                src="/assets/logo.webp"
                alt="logo"
                className={cn(
                  "transition-all duration-300",
                  shouldHaveSolidBg ? "h-8 lg:h-10" : "h-10 lg:h-12"
                )}
              />
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-inherit">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-4">
              <Link href={link.href}>
                <span className={cn(
                  "text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent cursor-pointer relative flex items-center gap-1",
                  shouldHaveSolidBg ? "text-primary" : "text-white"
                )}>
                  {link.name}
                  {link.submenu && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </span>
              </Link>

              {link.submenu && (
                <div className="absolute top-full left-0 w-fit bg-white shadow-xl border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[60] py-2 rounded-md">
                  <div className="max-h-[220px] overflow-y-auto custom-scrollbar">
                    {link.submenu.map((sub) => (
                      <Link key={sub.name} href={sub.href}>
                        <div className="px-4 py-2.5 hover:bg-accent/5 transition-colors cursor-pointer group/sub">
                          <span className="text-[13px] text-primary/80 group-hover/sub:text-accent whitespace-nowrap block">
                            {sub.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Icons + Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className={cn("hover:bg-white/10 hidden sm:flex", shouldHaveSolidBg ? "text-primary" : "text-white")}>
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className={cn("hover:bg-white/10 relative", shouldHaveSolidBg ? "text-primary" : "text-white")}>
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className={cn("hover:bg-white/10 relative", shouldHaveSolidBg ? "text-primary" : "text-white")}>
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu - now on the right */}
          <Sheet open={isMenuOpen} onOpenChange={(open) => {
            setIsMenuOpen(open);
            if (!open) setOpenSubmenu(null);
          }}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-inherit hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <img src="/assets/logo.webp" alt="logo" className="h-10 w-auto cursor-pointer" />
                </Link>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col gap-2">
                      {link.submenu ? (
                        <div
                          className="flex items-center justify-between cursor-pointer py-1"
                          onClick={() => setOpenSubmenu(openSubmenu === link.name ? null : link.name)}
                        >
                          <span className={cn(
                            "text-lg font-medium transition-colors hover:text-accent",
                            openSubmenu === link.name ? "text-accent" : "text-foreground"
                          )}>
                            {link.name}
                          </span>
                          <div className="p-2">
                            <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", openSubmenu === link.name ? "rotate-180" : "")} />
                          </div>
                        </div>
                      ) : (
                        <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                          <div className="flex items-center justify-between py-1 cursor-pointer">
                            <span className={cn(
                              "text-lg font-medium transition-colors hover:text-accent",
                              location === link.href ? "text-accent" : "text-foreground"
                            )}>
                              {link.name}
                            </span>
                          </div>
                        </Link>
                      )}

                      {link.submenu && (
                        <div className={cn(
                          "pl-4 flex flex-col gap-3 border-l border-border ml-2 overflow-hidden transition-all duration-300",
                          openSubmenu === link.name ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"
                        )}>
                          {link.submenu.map((sub) => (
                            <Link key={sub.name} href={sub.href} onClick={() => setIsMenuOpen(false)}>
                              <span className="text-sm text-muted-foreground hover:text-accent cursor-pointer">
                                {sub.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
