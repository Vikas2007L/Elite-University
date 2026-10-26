import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, FlaskConical, Trophy, BookOpen, Building2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { icon: GraduationCap, value: 15000, label: "Students", suffix: "+" },
  { icon: Users, value: 800, label: "Faculty Members", suffix: "+" },
  { icon: FlaskConical, value: 50, label: "Research Labs", suffix: "+" },
  { icon: Trophy, value: 200, label: "Awards Won", suffix: "+" },
];

const Typewriter = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const departments = [
  { name: "Computer Science & Engineering", code: "cs", students: "3,200" },
  { name: "Electronics & Communication", code: "ece", students: "2,800" },
  { name: "Mechanical Engineering", code: "mech", students: "2,400" },
  { name: "Civil Engineering", code: "civil", students: "1,800" },
];

const news = [
  { date: "Mar 25, 2026", title: "ELITE University Ranked #12 in National Rankings 2026", category: "Achievement", image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop" },
  { date: "Mar 20, 2026", title: "International Conference on AI & Machine Learning", category: "Event", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" },
  { date: "Mar 15, 2026", title: "Campus Placement Drive — 95% Students Placed", category: "Placements", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop" },
  { date: "Mar 10, 2026", title: "New Research Centre for Sustainable Energy Inaugurated", category: "Research", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop" },
];

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue.toLocaleString()}{suffix}</span>;
};

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary text-primary-foreground">
        {/* Background Video / Image Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
            poster="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-campus-with-large-buildings-4435-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/60" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,hsl(220_60%_35%)_0%,transparent_60%)] opacity-60" />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-accent/10 blur-3xl"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 py-20 md:py-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">
              Established 1985
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <Typewriter text="Shaping Tomorrow's " />
              <span className="text-accent relative">
                Leaders
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2, duration: 0.8 }}
                />
              </span>
              <br /> Today
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="text-lg mb-8 leading-relaxed max-w-xl"
            >
              A premier institution dedicated to academic excellence, cutting-edge research, and holistic development. Join a community of innovators and changemakers.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg hover:shadow-accent/20 transition-all hover:-translate-y-1">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm transition-all hover:-translate-y-1">
                <Link to="/about">Explore Campus</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center shadow-xl border-0 bg-background/80 backdrop-blur-md group hover:bg-primary transition-colors duration-300">
                  <CardContent className="pt-8 pb-6">
                    <s.icon className="h-10 w-10 mx-auto mb-4 text-accent group-hover:text-accent-foreground transition-colors" />
                    <p className="text-3xl md:text-4xl font-bold text-primary group-hover:text-primary-foreground">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-sm font-medium text-muted-foreground group-hover:text-primary-foreground/70 uppercase tracking-wider">{s.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Our Departments</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              World-class departments offering cutting-edge programs with state-of-the-art facilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((d) => (
              <Link key={d.code} to={`/departments/${d.code}`} className="group">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl h-full flex flex-col group-hover:-translate-y-2">
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={d.code === 'cs' ? "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop" :
                           d.code === 'ece' ? "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=400&auto=format&fit=crop" :
                           d.code === 'mech' ? "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400&auto=format&fit=crop" :
                      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400&auto=format&fit=crop"}
                      alt={d.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors leading-tight">{d.name}</h3>
                    <p className="text-sm text-muted-foreground flex-1 mb-4">{d.students} Students</p>
                    <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest">
                      Explore Curriculum <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/departments">View All Departments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Why Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous curriculum designed by industry experts and renowned academicians." },
              { icon: FlaskConical, title: "Research & Innovation", desc: "50+ research labs with funding from national and international agencies." },
            ].map((item) => (
              <Card key={item.title} className="text-center border-0 shadow-md">
                <CardContent className="pt-8 pb-6">
                  <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                  alt="Student collaborating in the Innovation Center"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-accent font-bold mb-2">Campus Hub</p>
                    <h3 className="text-2xl font-bold">Innovation Center</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">News & Events</h2>
            <Button variant="ghost" className="text-accent">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((n, i) => (
              <Card key={i} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl h-full flex flex-col hover:-translate-y-2">
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground font-bold text-[10px] uppercase tracking-widest shadow-lg">{n.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">{n.date}</p>
                  <h3 className="font-bold leading-tight group-hover:text-accent transition-colors cursor-pointer line-clamp-2">{n.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="opacity-80 mb-8 max-w-lg mx-auto">
            Admissions are open for 2026-27. Take the first step towards an extraordinary future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
