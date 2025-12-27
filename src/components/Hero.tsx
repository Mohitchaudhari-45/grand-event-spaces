import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-banquet.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-primary-foreground pt-20">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm md:text-base animate-fade-in-delay-1">
            Welcome to Royal Palace
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-delay-2">
            Perfect Venue for{" "}
            <span className="text-accent">Weddings</span>, Receptions &{" "}
            <span className="text-accent">Grand Celebrations</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-delay-3">
            Experience elegance redefined. Let us transform your special moments into unforgettable memories in our luxurious venue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">
                Book Your Event
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
