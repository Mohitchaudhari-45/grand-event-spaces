import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Check } from "lucide-react";

const services = [
  {
    title: "Wedding Ceremonies",
    description: "Create the wedding of your dreams in our enchanting venue. From intimate ceremonies to grand celebrations, we offer customizable packages to suit every style.",
    features: [
      "Traditional & Contemporary Setups",
      "Mandap & Stage Decoration",
      "Bridal Suite Access",
      "Valet Parking",
      "Professional Coordination",
    ],
  },
  {
    title: "Reception Parties",
    description: "Celebrate your union in style with our exceptional reception services. Our grand ballroom provides the perfect setting for an unforgettable evening.",
    features: [
      "Gourmet Multi-Cuisine Catering",
      "Premium Bar Services",
      "Dance Floor & Stage Setup",
      "Custom Lighting Design",
      "Live Entertainment Support",
    ],
  },
  {
    title: "Corporate Events",
    description: "Impress your clients and team with professional corporate events in our sophisticated spaces. We handle everything from conferences to gala dinners.",
    features: [
      "AV Equipment & Presentation Setup",
      "Customizable Seating Arrangements",
      "Business Catering Options",
      "Breakout Room Access",
      "On-site Technical Support",
    ],
  },
  {
    title: "Birthday Celebrations",
    description: "Make birthdays extra special with our themed party packages. From kids' parties to milestone celebrations, we create memorable experiences.",
    features: [
      "Theme-Based Decorations",
      "Custom Cake Arrangements",
      "Entertainment Options",
      "Kids' Activity Zones",
      "Photography Services",
    ],
  },
  {
    title: "Anniversary Parties",
    description: "Honor your journey of love with an elegant anniversary celebration. Our team crafts intimate gatherings that reflect your unique story.",
    features: [
      "Romantic Décor Themes",
      "Memory Wall Displays",
      "Special Dining Experiences",
      "Live Music Options",
      "Photo & Video Services",
    ],
  },
  {
    title: "Cultural & Religious Events",
    description: "Celebrate traditions with authenticity and grandeur. We accommodate various cultural and religious ceremonies with respect and attention to detail.",
    features: [
      "Custom Ritual Arrangements",
      "Traditional Décor Options",
      "Authentic Cuisine Menus",
      "Sound System for Ceremonies",
      "Guest Coordination",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive event solutions for every celebration"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Offer"
            title="Tailored Services for Every Occasion"
          >
            <p>
              From intimate gatherings to grand celebrations, we provide end-to-end event solutions with meticulous attention to detail.
            </p>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            subtitle="Add-On Services"
            title="Enhance Your Celebration"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "Floral Arrangements",
              "Photography",
              "Videography",
              "Live Music",
              "DJ Services",
              "Mehendi Artists",
              "Valet Parking",
              "Security Services",
            ].map((addon, index) => (
              <div
                key={index}
                className="bg-background p-4 md:p-6 rounded-lg text-center shadow-card hover:shadow-elegant transition-shadow"
              >
                <p className="font-medium text-foreground">{addon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
