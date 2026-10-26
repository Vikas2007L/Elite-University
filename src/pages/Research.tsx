import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, BookOpen, Lightbulb, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Research = () => (
  <div className="min-h-screen bg-muted/30">
    <section className="relative h-[300px] flex items-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1532187863486-abf9d39d9992?q=80&w=1200&auto=format&fit=crop" 
        alt="Research Hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
      <div className="container relative z-10 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Research & Innovation
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg opacity-80 max-w-2xl"
        >
          Driving innovation through cutting-edge research, interdisciplinary collaboration, and global partnerships.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-8">
        {[
          { icon: FlaskConical, title: "50+ Research Labs", desc: "State-of-the-art facilities across all departments.", img: "https://images.unsplash.com/photo-1579154341098-99e1d4d6232a?w=600&q=80" }, // New Lab ID
          { icon: BookOpen, title: "500+ Publications", desc: "Papers published in top international journals annually.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80" },
          { icon: Lightbulb, title: "25+ Patents", desc: "Innovations filed and granted in recent years.", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80" }, // New Innovation ID
          { icon: Globe, title: "Global Collaborations", desc: "Partnerships with 30+ international universities.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl h-full flex flex-col hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4 h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Research;
