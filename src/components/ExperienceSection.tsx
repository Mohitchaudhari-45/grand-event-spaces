import { Users, UtensilsCrossed, Car, Snowflake, Sparkles, Crown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    icon: Users,
    title: "500+ Guest Capacity",
    description: "Grand halls that accommodate celebrations of any scale",
  },
  {
    icon: Crown,
    title: "Luxury Decoration",
    description: "Exquisite décor tailored to your dream theme",
  },
  {
    icon: Car,
    title: "Spacious Parking",
    description: "Valet parking for 200+ vehicles with security",
  },
  {
    icon: UtensilsCrossed,
    title: "Premium Catering",
    description: "Multi-cuisine gourmet menu by master chefs",
  },
  {
    icon: Snowflake,
    title: "AC Banquet Hall",
    description: "Climate-controlled comfort for all seasons",
  },
  {
    icon: Sparkles,
    title: "Custom Themes",
    description: "From traditional to contemporary designs",
  },
];

const ExperienceSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="The Royal Experience"
          title="Everything You Need for a Perfect Event"
        >
          <p>
            World-class amenities and personalized services to make your celebration truly magnificent.
          </p>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group relative p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <exp.icon className="w-8 h-8 text-accent" />
                <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <h3 className="relative font-display text-xl md:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {exp.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {exp.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
