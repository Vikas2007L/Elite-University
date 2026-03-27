import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => (
  <div className="min-h-screen bg-muted/30">
    <section className="relative h-[300px] flex items-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1498243639359-2818a74e2001?q=80&w=1200&auto=format&fit=crop" 
        alt="Contact Hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
      <div className="container relative z-10 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg opacity-80 max-w-2xl"
        >
          We'd love to hear from you. Reach out with any questions or visit our campus for a tour.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
          <div className="grid gap-6">
            {[
              { icon: MapPin, label: "Address", value: "123 University Road, City, State 560001, India", img: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=400&q=80" },
              { icon: Phone, label: "Phone", value: "+91 1234 567 890", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80" },
              { icon: Mail, label: "Email", value: "info@university.edu", img: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&q=80" },
              { icon: Clock, label: "Office Hours", value: "Mon - Sat: 9:00 AM - 5:00 PM", img: "https://images.unsplash.com/photo-1495446815901-a7297e63b18d?w=400&q=80" },
            ].map((c, i) => (
              <Card key={c.label} className="overflow-hidden border-0 shadow-md group hover:shadow-xl transition-all duration-300 rounded-2xl">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-32 h-32 md:h-auto overflow-hidden relative shrink-0">
                    <img src={c.img} alt={c.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                      <c.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-1">{c.label}</p>
                      <p className="font-medium text-primary leading-tight">{c.value}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-2xl rounded-[2rem] overflow-hidden">
            <div className="h-4 bg-accent" />
            <CardContent className="p-10 space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">Send us a Message</h3>
                <p className="text-muted-foreground">Our team typically responds within 24 hours.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold">Name</Label>
                  <Input id="name" placeholder="Your name" className="rounded-xl h-12 border-muted" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" className="rounded-xl h-12 border-muted" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="font-bold">Subject</Label>
                <Input id="subject" placeholder="How can we help?" className="rounded-xl h-12 border-muted" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-bold">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={4} className="rounded-xl border-muted resize-none" />
              </div>
              <Button className="w-full h-14 bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Contact;
