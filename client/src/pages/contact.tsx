import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Send an Inquiry</h2>
            <p className="text-muted-foreground mb-8">
              Whether you're looking for a specific gemstone or have a question about our collection, our experts are here to assist you.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">First Name</label>
                  <Input placeholder="John" className="h-12 bg-secondary/50 border-transparent focus:border-primary rounded-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Last Name</label>
                  <Input placeholder="Doe" className="h-12 bg-secondary/50 border-transparent focus:border-primary rounded-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="h-12 bg-secondary/50 border-transparent focus:border-primary rounded-none" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Subject</label>
                <Input placeholder="Inquiry about Ruby Collection" className="h-12 bg-secondary/50 border-transparent focus:border-primary rounded-none" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[150px] bg-secondary/50 border-transparent focus:border-primary rounded-none resize-none" />
              </div>

              <Button size="lg" className="w-full h-14 bg-primary text-white hover:bg-primary/90 uppercase tracking-wide rounded-none text-base">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-secondary/30 p-10 lg:p-12"
          >
            <h2 className="font-serif text-3xl font-bold text-primary mb-8">Visit Our Showroom</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 shadow-sm">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Jewelers Row,<br />
                    Diamond District,<br />
                    New York, NY 10036
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 shadow-sm">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 shadow-sm">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Email</h3>
                  <p className="text-muted-foreground">concierge@chiragjewels.com</p>
                  <p className="text-muted-foreground">sales@chiragjewels.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 shadow-sm">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Hours</h3>
                  <p className="text-muted-foreground">Mon - Fri: 10:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Sat: 11:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Sun: By Appointment Only</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
