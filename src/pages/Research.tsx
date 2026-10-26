import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, BookOpen, Lightbulb, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Research = () => (
  <div className="min-h-screen bg-muted/30">
    <section className="relative h-[300px] flex items-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop"
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
          { icon: FlaskConical, title: "50+ Research Labs", desc: "State-of-the-art facilities across all departments.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80" },
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

    <section className="pb-20">
      <div className="container">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Explore our facilities</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Research Labs</h2>
          <p className="text-muted-foreground leading-relaxed">
            Students work alongside faculty on practical projects, experiments, and prototypes across computing, electronics, and sustainable engineering.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "AI & Data Science Lab", focus: "Machine learning, responsible AI, data analytics, and software prototypes.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop" },
            { name: "Electronics & IoT Lab", focus: "Embedded systems, connected devices, sensors, and rapid prototyping.", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=900&auto=format&fit=crop" },
            { name: "Sustainable Energy Lab", focus: "Energy efficiency, renewable technology, and environmental monitoring.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop" },
          ].map((lab) => (
            <Card key={lab.name} className="overflow-hidden border-0 shadow-lg">
              <img src={lab.image} alt={`${lab.name} research laboratory`} className="h-48 w-full object-cover" />
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{lab.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{lab.focus}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
          alt="Students developing a prototype at the Innovation Centre"
          className="h-[320px] w-full rounded-3xl object-cover shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Innovation Centre</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Centre brings students, faculty, and mentors together to shape early ideas into prototypes. Teams can take part in design sprints, interdisciplinary projects, and campus demonstrations.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Research;
