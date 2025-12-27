import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Silver",
    price: "$2,500",
    description: "Perfect for intimate gatherings",
    guests: "Up to 100 guests",
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
    description: "Ideal for medium-sized celebrations",
    guests: "Up to 250 guests",
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
        subtitle="Flexible packages designed for every celebration and budget"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="Choose Your Package"
            title="Event Packages That Fit Your Needs"
          >
            <p>
              All packages are customizable. Contact us to discuss your specific requirements and we'll create a perfect solution for you.
            </p>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground shadow-elegant scale-105"
                    : "bg-card shadow-card"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className={`font-display text-2xl font-bold mb-2 ${pkg.popular ? "text-accent" : "text-foreground"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 ${pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {pkg.description}
                  </p>
                  <div className="mb-6">
                    <span className={`text-4xl font-display font-bold ${pkg.popular ? "text-primary-foreground" : "text-foreground"}`}>
                      {pkg.price}
                    </span>
                    <span className={pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                      {" "}/ event
                    </span>
                  </div>
                  <p className={`font-medium mb-6 pb-6 border-b ${pkg.popular ? "border-primary-foreground/20 text-accent" : "border-border text-accent"}`}>
                    {pkg.guests}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? "text-accent" : "text-accent"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={pkg.popular ? "gold" : "elegant"}
                    className="w-full"
                    asChild
                  >
                    <Link to="/book">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <div className="mt-16 text-center bg-muted rounded-xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Need a Custom Package?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Every celebration is unique. Let us create a tailored package that perfectly matches your vision and requirements.
            </p>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
