import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/hooks/useCart";
import { WishlistProvider } from "@/hooks/useWishlist";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ProductDetails from "@/pages/product";
import Contact from "@/pages/contact";
import Category from "@/pages/category";
import Cart from "@/pages/cart";
import Wishlist from "@/pages/wishlist";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/category/:slug" component={Category} />
      <Route path="/contact" component={Contact} />
      <Route path="/cart" component={Cart} />
      <Route path="/wishlist" component={Wishlist} />
      {/* Fallback routes */}
      <Route path="/collections" component={() => <Category />} />
      <Route path="/about" component={Contact} /> {/* Just reusing contact for now for simplicity */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <WishlistProvider>
          <TooltipProvider>
            <Toaster />
            <ScrollToTop />
            <Router />
          </TooltipProvider>
        </WishlistProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
