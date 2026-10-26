import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Dumbbell, Music, Utensils, BookOpen, Heart, Camera, Heart as HeartFilled, MessageCircle, Send, Play } from "lucide-react";
import { CampusMap } from "@/components/CampusMap";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const facilities = [
  { icon: Home, title: "Hostels", desc: "Separate hostels for boys and girls with modern amenities.", category: "Living", image: "https://images.unsplash.com/photo-1555854817-2b2260340319?q=80&w=600&auto=format&fit=crop" },
  { icon: Dumbbell, title: "Sports Complex", desc: "Olympic-size pool, cricket ground, basketball & tennis courts.", category: "Recreation", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
  { icon: Music, title: "Cultural Hub", desc: "Auditorium, music room, dance studio, and art gallery.", category: "Social", image: "https://images.unsplash.com/photo-1514525253361-bee8718a300c?q=80&w=600&auto=format&fit=crop" },
  { icon: Utensils, title: "Dining", desc: "Multiple canteens and cafeterias with diverse cuisines.", category: "Dining", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=600&auto=format&fit=crop" },
  { icon: BookOpen, title: "Library", desc: "Central library with 2 lakh+ books and digital resources.", category: "Academic", image: "https://images.unsplash.com/photo-1507842217357-1943c8290333?q=80&w=600&auto=format&fit=crop" }, // Updated Library ID
  { icon: Heart, title: "Health Centre", desc: "24/7 medical facility with ambulance service on campus.", category: "Wellness", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" }, // Updated Health ID
];

const storyCards = [
  { 
    id: 1, 
    user: "Aravind_k", 
    role: "Student, CS", 
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop",
    likes: "1.2k",
    comments: 45,
    caption: "Early morning coding session at the Innovation Hub! 🚀 #LifeAtElite"
  },
  { 
    id: 2, 
    user: "Sneha_Arts", 
    role: "Faculty, Design", 
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop",
    likes: "856",
    comments: 23,
    caption: "Interactive workshop on design thinking today. The energy was amazing! 🎨"
  },
  { 
    id: 3, 
    user: "Elite_Sports", 
    role: "Sports Captain", 
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=400&auto=format&fit=crop",
    likes: "2.4k",
    comments: 112,
    caption: "Final practice before the inter-college tournament. Let's go ELITE! 🏀🏆"
  },
];

const CampusLife = () => {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  return (
    <div className="bg-muted/30 min-h-screen pt-20">
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--accent))_0%,transparent_50%)] opacity-30" />
        <div className="container relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Campus <span className="text-accent underline decoration-4 underline-offset-8">Experience</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-80 max-w-2xl mx-auto"
          >
            A vibrant community where academic excellence meets holistic development.
          </motion.p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 -mt-12 relative z-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-accent text-accent px-4 py-1">Exploring the Grounds</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Campus Map</h2>
            <p className="text-muted-foreground">Click on the markers to explore our cutting-edge facilities and departments.</p>
          </div>
          <CampusMap />
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">World-Class Facilities</h2>
              <p className="text-muted-foreground">Everything you need for a complete university experience.</p>
            </div>
            <div className="hidden md:block h-px flex-1 mx-12 bg-muted-foreground/20" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-none bg-muted/50 hover:bg-white overflow-hidden rounded-[2rem]">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={f.image} 
                      alt={f.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-4 left-4 h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <f.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{f.title}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">{f.category}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Day in Life - Instagram Style */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">Community Hub</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">“Day in the Life” at Elite</h2>
            <p className="text-muted-foreground">Experience campus moments through our community's eyes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {storyCards.map((story) => (
              <motion.div
                key={story.id}
                whileHover={{ y: -10 }}
                className="bg-background rounded-[2rem] overflow-hidden shadow-2xl relative"
              >
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-accent to-primary p-[2px]">
                      <div className="h-full w-full rounded-full bg-background flex items-center justify-center font-bold text-xs text-primary">
                        {story.user[0]}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-none">{story.user}</p>
                      <p className="text-[10px] text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                  <Camera className="h-4 w-4 text-muted-foreground" />
                </div>

                {/* Post Content */}
                <div 
                  className="aspect-square relative overflow-hidden group cursor-pointer"
                  onClick={() => setActiveStory(story.id)}
                >
                  <img 
                    src={story.image} 
                    alt="Campus life post" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="h-12 w-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-white fill-current" />
                     </div>
                  </div>
                </div>

                {/* Post Footer */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-4">
                      <button className="hover:scale-110 transition-transform"><HeartFilled className="h-6 w-6 text-red-500 fill-current" /></button>
                      <button className="hover:scale-110 transition-transform"><MessageCircle className="h-6 w-6" /></button>
                      <button className="hover:scale-110 transition-transform"><Send className="h-6 w-6" /></button>
                    </div>
                  </div>
                  <p className="text-sm font-bold mb-1">{story.likes} likes</p>
                  <p className="text-sm">
                    <span className="font-bold mr-2">{story.user}</span>
                    {story.caption}
                  </p>
                  <button className="text-xs text-muted-foreground mt-3 uppercase font-bold tracking-tighter">View all {story.comments} comments</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
