import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar as CalendarIcon, ArrowRight, Music, FlaskConical, Trophy, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  { id: 1, date: new Date(2026, 10, 7), title: "Tech Innovate 2026", time: "10:00 AM", location: "Auditorium", category: "Technical", icon: FlaskConical, image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop" },
  { id: 2, date: new Date(2026, 10, 14), title: "Annual Sports Meet", time: "08:00 AM", location: "Sports Complex", category: "Sports", icon: Trophy, image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop" },
  { id: 3, date: new Date(2026, 11, 4), title: "Cultural Night", time: "06:00 PM", location: "Open Air Theatre", category: "Cultural", icon: Music, image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=900&auto=format&fit=crop" },
  { id: 4, date: new Date(2026, 11, 12), title: "Alumni Meetup", time: "11:00 AM", location: "Main Hall", category: "Alumni", icon: Users, image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=900&auto=format&fit=crop" },
];

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(() => (
    events.find((event) => event.date >= new Date())?.date ?? new Date()
  ));

  const selectedEvents = events.filter(e => e.date.toDateString() === date?.toDateString());

  return (
    <div className="min-h-screen bg-muted/30">
      <section className="relative h-[300px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop" 
          alt="Events Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />
        <div className="container relative z-10 text-white text-center">
          <Badge variant="outline" className="mb-4 border-accent text-accent">Monthly Schedule</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">University <span className="text-accent underline">Events</span></h1>
          <p className="text-lg opacity-80">Stay updated with the latest happenings on campus.</p>
        </div>
      </section>

      <div className="container py-20">

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Calendar Card */}
          <div className="lg:col-span-5">
            <Card className="shadow-2xl border-0 overflow-hidden bg-background/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-3xl border shadow-sm mx-auto"
                />
                <div className="mt-8 pt-8 border-t flex items-center justify-between text-sm">
                  <span className="font-bold flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-accent" /> Upcoming Today</span>
                  <span className="text-muted-foreground">{selectedEvents.length} Events listed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events List */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {selectedEvents.length > 0 ? (
                <motion.div 
                  key={date?.toDateString()}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CalendarIcon className="text-accent" /> Events on {date?.toDateString()}
                  </h2>
                  {selectedEvents.map(e => (
                    <Card key={e.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-background overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <img
                          src={e.image}
                          alt={`${e.title} event`}
                          className="h-52 w-full object-cover md:h-auto md:w-56"
                        />
                        <div className="w-2 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardContent className="p-8 flex-1 flex flex-col md:flex-row items-center gap-8">
                          <div className="h-20 w-20 rounded-3xl bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                            <e.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <Badge variant="secondary" className="mb-2">{e.category}</Badge>
                            <h3 className="text-2xl font-bold mb-3">{e.title}</h3>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {e.time}</span>
                              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {e.location}</span>
                            </div>
                          </div>
                          <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground font-bold rounded-2xl">
                            Register <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 bg-background/50 rounded-3xl shadow-inner"
                >
                   <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                      <CalendarIcon className="h-10 w-10 text-muted-foreground opacity-20" />
                   </div>
                   <h3 className="text-2xl font-bold mb-2">No events scheduled</h3>
                   <p className="text-muted-foreground">Please select another date from the calendar.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
