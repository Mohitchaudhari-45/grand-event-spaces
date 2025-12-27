import { Users, UtensilsCrossed, Music, Camera, Sparkles, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Users,
    title: "500+ Guest Capacity",
    description: "Spacious halls that can accommodate intimate gatherings to grand celebrations with up to 500 guests.",
  },
  {
    icon: UtensilsCrossed,
    title: "Gourmet Catering",
    description: "Exquisite multi-cuisine menu crafted by expert chefs to delight your guests' palates.",
  },
  {
    icon: Music,
    title: "Entertainment Setup",
    description: "State-of-the-art sound systems, stage, and lighting for live performances and DJ nights.",
  },
  {
    icon: Camera,
    title: "Photography Spaces",
    description: "Beautiful backdrops and dedicated areas for capturing your precious moments.",
  },
  {
    icon: Sparkles,
    title: "Custom Decorations",
    description: "Personalized décor themes from traditional to contemporary, tailored to your vision.",
  },
  {
    icon: Clock,
    title: "Dedicated Coordination",
    description: "Professional event managers ensuring seamless execution of your celebration.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Everything You Need for a Perfect Event"
        >
          <p>
            From intimate gatherings to grand celebrations, we provide world-class amenities and personalized services to make your event truly memorable.
          </p>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 md:p-8 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
