import { Heart, Star, Sparkles } from "lucide-react";

const StorytellingSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-accent rounded-full" />
        <div className="absolute bottom-10 right-20 w-96 h-96 border border-accent rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/30 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Star className="w-6 h-6 text-accent animate-pulse-slow" />
            <Heart className="w-8 h-8 text-accent fill-accent animate-float" />
            <Star className="w-6 h-6 text-accent animate-pulse-slow" />
          </div>

          {/* Main quote */}
          <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-tight mb-8 animate-fade-in-up">
            "From intimate gatherings to{" "}
            <span className="text-accent italic">grand weddings</span>, we create
            moments that{" "}
            <span className="text-accent italic">last forever.</span>"
          </blockquote>

          {/* Supporting text */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-delay-2">
            Every celebration tells a story. Let us help you write yours in the
            most magnificent way possible. Our legacy of excellence spans decades
            of creating unforgettable memories.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20 animate-fade-in-delay-3">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                15+
              </div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                Years of Excellence
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                2000+
              </div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                Events Hosted
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                100%
              </div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                Happy Families
              </div>
            </div>
          </div>

          {/* Sparkle decoration */}
          <Sparkles className="w-8 h-8 text-accent mx-auto mt-12 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
