import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Award, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Academics = () => (
  <div className="min-h-screen bg-muted/30">
    <section className="relative h-[300px] flex items-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&auto=format&fit=crop" 
        alt="Academics Hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
      <div className="container relative z-10 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Academics
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg opacity-80 max-w-2xl"
        >
          Rigorous programs designed to prepare students for global challenges.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: BookOpen, title: "Undergraduate", desc: "4-year B.Tech programs in 8 engineering disciplines.", img: "https://images.unsplash.com/photo-1523050853271-419fe02e7e49?w=400&q=80" },
          { icon: Award, title: "Postgraduate", desc: "M.Tech & MBA programs with specializations.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80" },
          { icon: FileText, title: "Doctoral", desc: "Ph.D. programs with funded research opportunities.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80" },
          { icon: Calendar, title: "Academic Calendar", desc: "Semester-based system with continuous evaluation.", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=80" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-[2rem] h-full flex flex-col hover:-translate-y-2">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4 h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Academics;
