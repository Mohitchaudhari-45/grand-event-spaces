import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Sarah & Michael",
    event: "Wedding Reception",
    text: "Royal Palace made our wedding day absolutely magical. The attention to detail, the stunning venue, and the impeccable service exceeded all our expectations. We couldn't have asked for a more perfect day!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    event: "Engagement Ceremony",
    text: "From the beautiful décor to the delicious food, everything was flawless. The team went above and beyond to ensure our engagement ceremony was memorable. Highly recommended!",
    rating: 5,
  },
  {
    name: "James Wilson",
    event: "Corporate Gala",
    text: "We hosted our annual corporate gala here and the experience was exceptional. Professional staff, elegant ambiance, and seamless coordination. Our guests were thoroughly impressed.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-accent/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-accent/20 rounded-full" />

      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          light
        >
          <p className="text-primary-foreground/80">
            Don't just take our word for it. Here's what our valued guests have to say about their experience with us.
          </p>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-primary-foreground/10 hover:border-accent/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-accent/50 mb-4" />
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div>
                <p className="font-display font-semibold text-lg">{testimonial.name}</p>
                <p className="text-accent text-sm">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
