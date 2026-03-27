import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Departments",
    path: "/departments",
    children: [
      { label: "Computer Science", path: "/departments/cs" },
      { label: "Electronics", path: "/departments/ece" },
      { label: "Mechanical", path: "/departments/mech" },
      { label: "Civil", path: "/departments/civil" },
      { label: "All Departments", path: "/departments" },
    ],
  },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Placements", path: "/placements" },
  { label: "Research", path: "/research" },
  { label: "Campus Life", path: "/campus-life" },
  { label: "Events", path: "/events" },
  { label: "Alumni", path: "/alumni" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      {/* Top bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container flex items-center justify-between py-2 text-xs opacity-80">
          <span>📞 +91 1234 567 890 &nbsp;|&nbsp; ✉️ info@eliteuniversity.edu</span>
          <span></span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg">
            U
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight font-sans">ELITE University</h1>
            <p className="text-[10px] tracking-widest uppercase opacity-70">Excellence in Education</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm gap-1 ${
                      location.pathname.startsWith(link.path) ? "bg-primary-foreground/15" : ""
                    }`}
                  >
                    {link.label} <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.path} asChild>
                      <Link to={child.path}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={link.label} to={link.path}>
                <Button
                  variant="ghost"
                  className={`text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm ${
                    location.pathname === link.path ? "bg-primary-foreground/15" : ""
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            )
          )}
          
          <div className="ml-4 flex items-center gap-2 border-l border-primary-foreground/20 pl-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2">
                  <Sun className="h-4 w-4" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2">
                  <Moon className="h-4 w-4" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2">
                  <Laptop className="h-4 w-4" /> System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-primary-foreground/10 pb-4">
          <div className="container flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2 rounded-md text-sm hover:bg-primary-foreground/10 ${
                  location.pathname === link.path ? "bg-primary-foreground/15 font-medium" : "opacity-90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
