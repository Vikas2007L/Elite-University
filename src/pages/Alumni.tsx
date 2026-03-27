import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";

const alumni = [
  { name: "Ananya Desai", batch: "2015", role: "VP Engineering, Google", quote: "The foundation I built here shaped my entire career.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Rohan Kapoor", batch: "2012", role: "Founder & CEO, TechStart", quote: "The entrepreneurial spirit at this university is unmatched.", img: "https://images.unsplash.com/photo-1507003211162-0a1cc7228f2d?w=400&q=80" },
  { name: "Dr. Meera Joshi", batch: "2008", role: "Research Scientist, NASA", quote: "The research culture here prepared me for global challenges.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
];

const Alumni = () => (
  <div className="min-h-screen bg-muted/30">
    <section className="relative h-[300px] flex items-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
        alt="Alumni Hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
      <div className="container relative z-10 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Alumni Network
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg opacity-80 max-w-2xl"
        >
          Our graduates are leaders across the globe, driving innovation and excellence in every field.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Users, value: "50,000+", label: "Alumni Worldwide" },
            { icon: Globe, value: "40+", label: "Countries" },
            { icon: Award, value: "500+", label: "CEOs & Founders" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="text-center shadow-lg border-0 bg-background h-full flex flex-col justify-center py-8">
                <CardContent className="pt-0 pb-0">
                  <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <s.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">{s.value}</p>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{s.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-primary text-center mb-12">Notable Alumni Spotlight</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {alumni.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-background overflow-hidden rounded-[2rem] h-full flex flex-col hover:-translate-y-2">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={a.img} 
                    alt={a.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                </div>
                <CardContent className="p-8 text-center flex-1 flex flex-col">
                  <h3 className="font-bold text-xl mb-1 group-hover:text-accent transition-colors">{a.name}</h3>
                  <p className="text-sm font-bold text-accent mb-3 uppercase tracking-widest">{a.role}</p>
                  <Badge variant="outline" className="mb-6 mx-auto">Batch of {a.batch}</Badge>
                  <p className="text-muted-foreground leading-relaxed italic flex-1">"{a.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Alumni;
