import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Award, Heart, Users, Calendar } from "lucide-react";
import gallery2 from "@/assets/gallery-2.jpg";

const stats = [
  { icon: Calendar, value: "15+", label: "Years of Excellence" },
  { icon: Heart, value: "2000+", label: "Happy Celebrations" },
  { icon: Users, value: "500+", label: "Guest Capacity" },
  { icon: Award, value: "50+", label: "Industry Awards" },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        subtitle="Discover our story of elegance and excellence"
      />

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-accent font-medium text-sm tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                A Legacy of Creating <span className="text-accent">Unforgettable</span> Moments
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For over 15 years, Royal Palace Banquet Hall has been the premier destination for weddings, receptions, and grand celebrations. Our journey began with a simple vision: to create a space where dreams come to life.
                </p>
                <p>
                  Nestled in the heart of the city, our elegant venue combines timeless architecture with modern amenities. Every corner of our hall speaks of sophistication, from the crystal chandeliers that illuminate our grand ballroom to the meticulously maintained gardens that provide a picturesque backdrop for outdoor ceremonies.
                </p>
                <p>
                  Our dedicated team of event specialists, culinary experts, and hospitality professionals work tirelessly to ensure that every event we host is executed to perfection. We believe that every celebration is unique, and we pride ourselves on our ability to customize our services to match your vision.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={gallery2}
                alt="Royal Palace Interior"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-accent rounded-lg hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Values"
            title="What Sets Us Apart"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for perfection in every detail, ensuring that your event exceeds expectations.",
              },
              {
                title: "Personalization",
                description: "Every celebration is unique. We tailor our services to reflect your personal style and vision.",
              },
              {
                title: "Hospitality",
                description: "Our warm and attentive team treats every guest like family, creating a welcoming atmosphere.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg shadow-card text-center hover:shadow-elegant transition-shadow"
              >
                <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
