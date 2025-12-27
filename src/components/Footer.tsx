import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter, Sparkles, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="font-display text-2xl font-bold">
                Royal <span className="text-accent">Palace</span>
              </span>
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed">
              Creating unforgettable moments in the heart of elegance. Your perfect venue for weddings, receptions, and grand celebrations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-charcoal transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Packages", path: "/packages" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ivory/70 hover:text-accent transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Wedding Ceremonies",
                "Reception Parties",
                "Corporate Events",
                "Birthday Celebrations",
                "Anniversary Parties",
                "Cultural Events",
              ].map((service) => (
                <li key={service}>
                  <span className="text-ivory/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-ivory/70 text-sm">
                  123 Grand Avenue, Downtown<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-ivory/70 hover:text-accent text-sm transition-colors">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@royalpalace.com" className="text-ivory/70 hover:text-accent text-sm transition-colors">
                  info@royalpalace.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-ivory/70 text-sm">
                  Mon - Sun: 9:00 AM - 10:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10 relative z-10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/50 text-sm text-center md:text-left flex items-center gap-1">
            © {new Date().getFullYear()} Royal Palace Banquet Hall. Made with 
            <Heart className="w-4 h-4 text-accent fill-accent" /> 
            for celebrations.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-ivory/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-ivory/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
