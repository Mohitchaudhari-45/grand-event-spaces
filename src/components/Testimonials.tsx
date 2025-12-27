import { Star, Quote, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Sarah & Michael",
    event: "Wedding Reception",
    text: "Royal Palace made our wedding day absolutely magical. The attention to detail, the stunning venue, and the impeccable service exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "Priya & Rahul",
    event: "Engagement Ceremony",
    text: "From the beautiful décor to the delicious food, everything was flawless. The team went above and beyond to ensure our engagement ceremony was memorable.",
    rating: 5,
  },
  {
    name: "The Wilson Family",
    event: "Golden Anniversary",
    text: "We hosted our parents' 50th anniversary here and the experience was exceptional. Professional staff, elegant ambiance, and seamless coordination.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-charcoal to-primary text-ivory relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border border-accent/20 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-64 h-64 border border-accent/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full" />

      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Testimonials"
          title="Love Stories from Happy Couples"
          light
        >
          <p className="text-ivory/80">
            Real experiences from families who trusted us with their most precious celebrations.
          </p>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 group"
            >
              <Quote className="w-12 h-12 text-accent/40 mb-6 group-hover:text-accent transition-colors" />
              <p className="text-ivory/90 leading-relaxed mb-6 text-lg font-light italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-accent text-sm">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
