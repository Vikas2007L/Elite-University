import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <img 
        src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&auto=format&fit=crop" 
        alt="404 Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/80" />
      
      <div className="container relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-black text-9xl md:text-[12rem] block leading-none mb-4 opacity-50">404</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Lost in the <span className="text-accent">Campus?</span></h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Even the brightest minds lose their way sometimes. The page you are looking for has either moved to a new building or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 h-14 rounded-2xl shadow-xl shadow-accent/20 transition-all hover:-translate-y-1">
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" /> Back to Entrance
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-md px-8 h-14 rounded-2xl transition-all hover:-translate-y-1">
              <button onClick={() => window.history.back()} className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" /> Previous Building
              </button>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-foreground/10 rounded-full blur-[80px]" />
    </div>
  );
};

export default NotFound;
