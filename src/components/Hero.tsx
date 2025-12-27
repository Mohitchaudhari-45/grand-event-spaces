import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-banquet.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/30 via-transparent to-royal/20" />
      </div>

      {/* Animated Particles/Sparkles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-gold-light rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-gold-light rounded-full animate-float opacity-40" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-20 pb-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-medium tracking-[0.3em] uppercase text-xs md:text-sm">
              Welcome to Royal Palace
            </span>
            <div className="w-12 h-px bg-accent" />
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-ivory text-shadow-lg animate-fade-in-delay-1">
            Where Every Celebration{" "}
            <br className="hidden md:block" />
            Becomes a{" "}
            <span className="text-gradient-gold italic">Royal Memory</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-ivory/90 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-delay-2">
            A perfect destination for weddings, receptions & unforgettable moments.
            Experience elegance redefined in our magnificent venue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-delay-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/book" className="group">
                Book Your Event
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/gallery" className="group">
                <Play className="w-4 h-4" />
                View Gallery
              </Link>
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 animate-fade-in-delay-4">
            {[
              { label: "500+ Guests", sublabel: "Capacity" },
              { label: "Premium", sublabel: "Catering" },
              { label: "Luxury", sublabel: "Décor" },
              { label: "Free", sublabel: "Parking" },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4 md:p-5 text-center hover:border-accent/40 transition-all duration-500"
              >
                <div className="font-display text-xl md:text-2xl font-bold text-accent">
                  {item.label}
                </div>
                <div className="text-ivory/70 text-sm uppercase tracking-wider">
                  {item.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-11 rounded-full border-2 border-ivory/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
