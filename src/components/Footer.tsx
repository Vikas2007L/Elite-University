import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed!", { description: "You'll now receive our monthly newsletter." });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center font-bold text-lg text-accent-foreground">U</div>
              <h3 className="text-xl font-bold tracking-tight">ELITE University</h3>
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Empowering Minds, Shaping Futures. Join the ranks of global leaders and innovators.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-xl bg-primary-foreground/5 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-primary-foreground/10 pb-2">Quick Navigation</h4>
            <ul className="grid grid-cols-1 gap-4 text-sm opacity-70">
              {["About EU", "Admissions", "Academic Calendar", "Placements", "Research Labs", "Campus Map"].map((l) => (
                <li key={l}>
                  <Link to={`/${l.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-accent hover:translate-x-1 transition-all inline-block">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-primary-foreground/10 pb-2">Contact Center</h4>
            <ul className="space-y-5 text-sm opacity-70">
              <li className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-accent" /> 
                <span>123 University Road, Innovation District, <br/>Tech City, ST 560001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-accent" /> 
                <span>+91 1234 567 890</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-accent" /> 
                <span>info@eliteuniversity.edu</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-6 border-b border-primary-foreground/10 pb-2">Stay Updated</h4>
            <p className="text-sm opacity-70">Subscribe to our monthly newsletter for latest news and events.</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input 
                placeholder="Email address" 
                className="bg-primary-foreground/5 border-primary-foreground/10 rounded-xl h-12 focus:ring-accent" 
                required 
              />
              <Button type="submit" size="icon" className="h-12 w-12 rounded-xl bg-accent text-accent-foreground hover:opacity-90 shrink-0">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} ELITE University. Excellence in Education.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
            <a href="#" className="hover:text-accent">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
