import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Silver",
    price: "$2,500",
    description: "Perfect for intimate gatherings",
    guests: "Up to 100 guests",
    icon: Sparkles,
    features: [
      "5-hour venue rental",
      "Basic décor setup",
      "Standard catering menu",
      "Sound system access",
      "Event coordinator",
      "Complimentary parking",
    ],
    popular: false,
  },
  {
    name: "Gold",
    price: "$5,000",
    description: "Ideal for medium celebrations",
    guests: "Up to 250 guests",
    icon: Star,
    features: [
      "8-hour venue rental",
      "Premium décor package",
      "Multi-cuisine catering",
      "DJ & sound system",
      "Dedicated coordinator",
      "Valet parking",
      "Photography setup area",
      "Bridal suite access",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    price: "$10,000",
    description: "Ultimate luxury experience",
    guests: "Up to 500 guests",
    icon: Crown,
    features: [
      "12-hour venue rental",
      "Luxury custom décor",
      "Gourmet multi-cuisine",
      "Live band & DJ",
      "Premium bar service",
      "Full coordination team",
      "Valet & security",
      "Bridal & groom suites",
      "Professional photography",
      "Complimentary suite stay",
    ],
    popular: false,
  },
];

const Packages = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Packages"
        subtitle="Flexible packages designed for every celebration"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="Choose Your Package"
            title="Event Packages That Fit Your Dreams"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 group ${
                  pkg.popular
                    ? "glass-card bg-gradient-to-b from-charcoal to-primary border-accent/30 scale-105 z-10"
                    : "bg-card border border-border shadow-card hover:shadow-elegant hover:border-accent/30"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
                )}
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 bg-gradient-gold text-charcoal px-3 py-1 rounded-full text-xs font-bold">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    pkg.popular ? "bg-accent/20" : "bg-accent/10"
                  }`}>
                    <pkg.icon className={`w-7 h-7 ${pkg.popular ? "text-accent" : "text-accent"}`} />
                  </div>
                  
                  <h3 className={`font-display text-2xl font-bold mb-2 ${pkg.popular ? "text-accent" : "text-foreground"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 ${pkg.popular ? "text-ivory/70" : "text-muted-foreground"}`}>
                    {pkg.description}
                  </p>
                  <div className="mb-6">
                    <span className={`text-4xl font-display font-bold ${pkg.popular ? "text-ivory" : "text-foreground"}`}>
                      {pkg.price}
                    </span>
                    <span className={pkg.popular ? "text-ivory/60" : "text-muted-foreground"}>
                      {" "}/ event
                    </span>
                  </div>
                  <p className={`font-medium mb-6 pb-6 border-b ${
                    pkg.popular ? "border-ivory/20 text-accent" : "border-border text-accent"
                  }`}>
                    {pkg.guests}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className={`flex items-center gap-3 text-sm ${pkg.popular ? "text-ivory/90" : ""}`}>
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={pkg.popular ? "gold" : "elegant"}
                    className="w-full"
                    size="lg"
                    asChild
                  >
                    <Link to="/book">Enquire Now</Link>
                  </Button>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                  pkg.popular ? "opacity-0 group-hover:opacity-100 shadow-glow" : ""
                }`} />
              </div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <div className="mt-20 text-center glass-dark rounded-2xl p-10 md:p-14 max-w-4xl mx-auto">
            <Crown className="w-12 h-12 text-accent mx-auto mb-6" />
            <h3 className="font-display text-2xl md:text-4xl font-bold mb-4 text-ivory">
              Need a Custom Package?
            </h3>
            <p className="text-ivory/70 max-w-2xl mx-auto mb-8">
              Every celebration is unique. Let us create a tailored package that perfectly matches your vision.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
