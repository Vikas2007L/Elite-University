import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Info, MapPin, Building2, BookOpen, FlaskConical, Trophy, Monitor, Home } from "lucide-react";

const buildings = [
  { id: "admin", name: "Administration Block", x: 100, y: 150, info: "Main office, Admissions, and Finance department.", icon: Building2 },
  { id: "engg", name: "Engineering Wing", x: 300, y: 100, info: "Home to CS, ECE, and Mechanical departments. 24/7 Labs.", icon: Monitor },
  { id: "library", name: "Central Library", x: 500, y: 200, info: "Over 100,000 books, digital archives, and study halls.", icon: BookOpen },
  { id: "research", name: "Innovation Hub", x: 250, y: 350, info: "50+ Advanced research labs and incubation center.", icon: FlaskConical },
  { id: "sports", name: "Sports Complex", x: 600, y: 400, info: "Olympic size pool, indoor stadium, and athletic tracks.", icon: Trophy },
  { id: "hostel", name: "Residency Towers", x: 100, y: 450, info: "Modern accommodation for 5,000+ students.", icon: Home },
];

export const CampusMap = () => {
  const [selected, setSelected] = useState<typeof buildings[0] | null>(null);

  return (
    <div className="relative w-full aspect-[16/9] bg-muted rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050335102-c32509087459?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 pointer-events-none" />
      
      {/* SVG Map Layer */}
      <svg viewBox="0 0 800 600" className="w-full h-full relative z-10 cursor-crosshair">
        {/* Paths connecting buildings */}
        <path d="M 100 150 L 300 100 L 500 200 L 600 400 M 300 100 L 250 350 L 100 450" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8,8" className="text-primary/20" />
        
        {buildings.map((b) => (
          <g key={b.id} onClick={() => setSelected(b)} className="cursor-pointer group">
            <motion.circle
              cx={b.x}
              cy={b.y}
              r="25"
              className={`${selected?.id === b.id ? 'fill-accent' : 'fill-primary'} transition-colors`}
              whileHover={{ scale: 1.2 }}
            />
            <motion.circle
              cx={b.x}
              cy={b.y}
              r="35"
              className="fill-accent/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <foreignObject x={b.x - 12} y={b.y - 12} width="24" height="24">
              <b.icon className="text-primary-foreground h-6 w-6" />
            </foreignObject>
            <text x={b.x} y={b.y + 45} textAnchor="middle" className="text-[12px] font-bold fill-primary/80 group-hover:fill-accent transition-colors select-none">
              {b.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Info Card Overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="absolute top-6 right-6 z-20 w-80"
          >
            <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur-md">
              <CardContent className="p-6">
                <button 
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <selected.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{selected.name}</h3>
                    <p className="text-[10px] uppercase text-accent font-bold tracking-widest leading-none mt-1">Interactive Map</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {selected.info}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs p-2 bg-muted rounded-lg">
                    <span className="flex items-center gap-2"><MapPin className="h-3 w-3 text-accent" /> Latitude</span>
                    <span className="font-mono">12.9716° N</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 bg-muted rounded-lg">
                    <span className="flex items-center gap-2"><Info className="h-3 w-3 text-accent" /> Longitude</span>
                    <span className="font-mono">77.5946° E</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary font-bold shadow-lg shadow-primary/20">
                  Virtual Tour
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-6 left-6 z-20">
        <Badge variant="secondary" className="px-4 py-2 bg-background/50 backdrop-blur-md flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          Interactive 3D View Enabled
        </Badge>
      </div>
    </div>
  );
};
