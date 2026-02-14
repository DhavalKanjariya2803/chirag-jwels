import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-2">CHIRAG JEWELS</h2>
              <p className="text-white/60 text-sm tracking-widest uppercase">Timeless Elegance</p>
            </div>
            <p className="text-white/70 leading-relaxed">
              Discover the world's finest gemstones, ethically sourced and certified for your peace of mind. We bring you the rarest treasures from the earth's depths.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white hover:text-primary text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white hover:text-primary text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white hover:text-primary text-white">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about"><span className="text-white/70 hover:text-accent transition-colors cursor-pointer">About Us</span></Link></li>
              <li><Link href="/collections"><span className="text-white/70 hover:text-accent transition-colors cursor-pointer">Collections</span></Link></li>
              <li><Link href="/category/all"><span className="text-white/70 hover:text-accent transition-colors cursor-pointer">Gemstone Guide</span></Link></li>
              <li><Link href="/contact"><span className="text-white/70 hover:text-accent transition-colors cursor-pointer">Contact Us</span></Link></li>
              <li><Link href="/faq"><span className="text-white/70 hover:text-accent transition-colors cursor-pointer">FAQ</span></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 mt-1 text-accent" />
                <span>123 Jewelers Row,<br />New York, NY 10036</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 text-accent" />
                <span>concierge@chiragjewels.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-6 text-accent">Newsletter</h3>
            <p className="text-white/70 mb-6">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex flex-col gap-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-accent"
              />
              <Button className="bg-accent text-primary hover:bg-white w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Chirag Jewels. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Shipping & Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
