import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Packages", path: "/packages" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-elegant py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Sparkles className={cn(
            "w-6 h-6 transition-colors",
            isScrolled ? "text-accent" : "text-accent"
          )} />
          <span className={cn(
            "font-display text-2xl md:text-3xl font-bold transition-colors",
            isScrolled ? "text-foreground" : "text-ivory"
          )}>
            Royal <span className="text-accent">Palace</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative group",
                location.pathname === link.path ? "text-accent" : "",
                isScrolled 
                  ? "text-foreground hover:text-accent" 
                  : "text-ivory hover:text-accent"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+1234567890" 
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              isScrolled 
                ? "text-foreground hover:text-accent" 
                : "text-ivory hover:text-accent"
            )}
          >
            <Phone className="w-4 h-4" />
            +1 234 567 890
          </a>
          <Button variant="gold" asChild>
            <Link to="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            isScrolled 
              ? "text-foreground hover:bg-muted" 
              : "text-ivory hover:bg-ivory/10"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-elegant transition-all duration-500 overflow-hidden",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-custom py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "py-3 px-4 rounded-lg text-foreground font-medium transition-all duration-300 hover:bg-accent/10 hover:text-accent",
                location.pathname === link.path && "bg-accent/10 text-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-border flex flex-col gap-3">
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 text-foreground py-3 px-4"
            >
              <Phone className="w-5 h-5 text-accent" />
              +1 234 567 890
            </a>
            <Button variant="gold" className="w-full" asChild>
              <Link to="/book">Book Now</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
