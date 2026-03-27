import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Send, 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  FileCheck,
  Loader2
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const steps = [
  "Check eligibility criteria for your chosen program",
  "Fill out the online application form",
  "Upload required documents and pay application fee",
  "Appear for entrance examination / counselling",
  "Receive offer letter and confirm admission",
];

const Admissions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Application Submitted!", {
        description: "Your application ID is EU-2026-8842. Check your email for next steps.",
      });
    }, 2000);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop" 
          alt="Admissions Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        <div className="container relative z-10 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Admissions <span className="text-accent underline decoration-4 underline-offset-8">2026</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-80 max-w-2xl leading-relaxed"
          >
            Join our vibrant academic community. We are looking for innovators, leaders, and dreamers to shape the future.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">Your Journey <span className="text-accent">Starts Here</span></h2>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow group">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="h-10 w-10 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        {i + 1}
                      </div>
                      <p className="text-muted-foreground pt-2 text-sm leading-relaxed">{step}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-accent/20 bg-accent/5 backdrop-blur-sm shadow-xl p-8 sticky top-24">
                <div className="text-center mb-8">
                  <div className="h-16 w-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <FileCheck className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Apply for Admission</h3>
                  <p className="text-sm text-muted-foreground mt-2">Phase 1 Applications close April 30, 2026</p>
                </div>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full h-14 rounded-2xl bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground font-bold text-lg shadow-lg shadow-primary/20 transition-all">
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] rounded-3xl p-0 overflow-hidden border-0 shadow-2xl">
                    {!isSuccess ? (
                      <div className="p-8">
                        <DialogHeader className="mb-6">
                          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                            <GraduationCap className="h-7 w-7 text-accent" />
                            Admission Form
                          </DialogTitle>
                          <DialogDescription>
                            Please fill in your details accurately. All fields are required.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold opacity-70">Full Name</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input id="name" placeholder="John Doe" className="pl-10 h-12 rounded-xl bg-muted/50 border-0 focus-visible:ring-accent" required />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold opacity-70">Email ID</Label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="email" type="email" placeholder="john@example.com" className="pl-10 h-12 rounded-xl bg-muted/50 border-0 focus-visible:ring-accent" required />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold opacity-70">Phone Number</Label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="phone" placeholder="+91 98765 43210" className="pl-10 h-12 rounded-xl bg-muted/50 border-0 focus-visible:ring-accent" required />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="course" className="text-xs uppercase tracking-widest font-bold opacity-70">Course Interest</Label>
                            <Select required>
                              <SelectTrigger className="h-12 rounded-xl bg-muted/50 border-0 focus:ring-accent w-full">
                                <SelectValue placeholder="Select a program" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl border-accent/20">
                                <SelectItem value="cs">B.Tech Computer Science</SelectItem>
                                <SelectItem value="ece">B.Tech Electronics</SelectItem>
                                <SelectItem value="mba">MBA (Leadership)</SelectItem>
                                <SelectItem value="physics">B.Sc Applied Physics</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button 
                            disabled={isSubmitting} 
                            type="submit" 
                            className="w-full h-14 mt-4 rounded-xl bg-accent text-accent-foreground hover:opacity-90 font-bold transition-all shadow-lg shadow-accent/20"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...
                              </>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" /> Submit Application
                              </>
                            )}
                          </Button>
                        </form>
                      </div>
                    ) : (
                      <div className="p-12 text-center animate-in zoom-in-95 duration-500">
                        <div className="h-24 w-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-200">
                          <CheckCircle2 className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-3">Congratulations!</h3>
                        <p className="text-muted-foreground mb-8">
                          Your application has been received successfully. Our admissions team will reach out to you within 48 hours.
                        </p>
                        <Button 
                          onClick={resetForm}
                          className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold transition-all"
                        >
                          Close Portal
                        </Button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>

                <div className="mt-8 pt-8 border-t border-accent/20">
                  <h4 className="font-bold text-sm mb-4">Upcoming Deadlines</h4>
                  <ul className="space-y-3">
                    {[
                      ["Application Opens", "Jan 15"],
                      ["Entrance Exam", "May 15"],
                      ["Counseling Start", "June 20"],
                    ].map(([label, date]) => (
                      <li key={label} className="flex justify-between items-center text-xs">
                        <span className="opacity-70">{label}</span>
                        <span className="px-3 py-1 bg-accent/20 rounded-full text-accent font-bold">{date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
