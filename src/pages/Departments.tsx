import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Monitor, Cpu, Wrench, Building, Search, Filter, FlaskConical, Briefcase } from "lucide-react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const departments = [
  { name: "Computer Science & Engineering", code: "cs", icon: Monitor, faculty: 85, students: "3,200", category: "Engineering", desc: "AI, ML, Cybersecurity, Data Science, and Software Engineering.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop" },
  { name: "Electronics & Communication", code: "ece", icon: Cpu, faculty: 72, students: "2,800", category: "Engineering", desc: "VLSI, Embedded Systems, Signal Processing, and IoT.", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600&auto=format&fit=crop" },
  { name: "Mechanical Engineering", code: "mech", icon: Wrench, faculty: 68, students: "2,400", category: "Engineering", desc: "Robotics, Thermal Engineering, Manufacturing, and Design.", image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=600&auto=format&fit=crop" },
  { name: "Civil Engineering", code: "civil", icon: Building, faculty: 55, students: "1,800", category: "Engineering", desc: "Structural, Environmental, Transportation, and Geotechnical Engineering.", image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop" },
  { name: "Applied Physics", code: "physics", icon: FlaskConical, faculty: 40, students: "1,200", category: "Science", desc: "Condensed Matter, Optics, and Quantum Mechanics.", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop" },
  { name: "Business Administration", code: "mba", icon: Briefcase, faculty: 45, students: "1,500", category: "Management", desc: "Marketing, Finance, HR, and Operations Management.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600&auto=format&fit=crop" },
];

const categories = ["All", "Engineering", "Science", "Management"];

const Departments = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDeps = useMemo(() => {
    return departments.filter((d) => {
      const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || 
                           d.desc.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" || d.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const suggestions = useMemo(() => {
    if (!search) return [];
    return departments
      .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 3);
  }, [search]);

  return (
    <div className="min-h-screen bg-muted/30">
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full -mr-20 -mt-20 blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Academic <span className="text-accent underline decoration-4 underline-offset-8">Departments</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-80 max-w-2xl mx-auto leading-relaxed"
          >
            Nurturing innovation across diverse disciplines with world-class faculty and facilities.
          </motion.p>
        </div>
      </section>

      <div className="container -mt-10 relative z-20">
        <Card className="p-4 shadow-2xl border-0 bg-background/80 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search departments, courses, or specializations..." 
                className="pl-12 h-14 rounded-2xl border-muted bg-background/50 focus:ring-accent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <AnimatePresence>
                {suggestions.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-full bg-background border rounded-2xl mt-2 shadow-2xl p-2 z-50"
                  >
                    {suggestions.map(s => (
                      <button 
                        key={s.code}
                        onClick={() => { setSearch(s.name); }}
                        className="w-full text-left px-4 py-3 hover:bg-muted rounded-xl transition-colors flex items-center justify-between group"
                      >
                        <span className="font-medium">{s.name}</span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full cursor-pointer transition-all h-10 text-sm ${
                    selectedCategory === cat 
                      ? "bg-accent text-accent-foreground border-accent shadow-lg shadow-accent/20" 
                      : "hover:bg-accent/10 hover:border-accent"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <section className="py-20">
        <div className="container">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredDeps.map((d) => (
                <motion.div
                  key={d.code}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-background h-full flex flex-col hover:-translate-y-2 rounded-[2rem]">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={d.image} 
                        alt={d.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-4 left-4 h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <d.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="secondary" className="bg-muted text-muted-foreground uppercase text-[10px] tracking-widest">{d.category}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{d.name}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{d.desc}</p>
                      <div className="flex items-center gap-6 text-sm mb-8 pt-6 border-t font-medium">
                        <div className="flex flex-col">
                          <span className="text-primary text-lg">{d.faculty}</span>
                          <span className="text-muted-foreground text-xs uppercase tracking-tighter">Faculty</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-primary text-lg">{d.students}</span>
                          <span className="text-muted-foreground text-xs uppercase tracking-tighter">Students</span>
                        </div>
                      </div>
                      <Button asChild className="w-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all h-12 rounded-xl group/btn">
                        <Link to={`/departments/${d.code}`} className="flex items-center justify-center gap-2">
                          View Curriculum <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredDeps.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
                <Search className="h-10 w-10 text-muted-foreground opacity-20" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No departments found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
              <Button 
                variant="ghost" 
                className="mt-6 text-accent"
                onClick={() => { setSearch(""); setSelectedCategory("All"); }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Departments;
