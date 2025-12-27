import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container-custom text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Plan Your Dream Event?
        </h2>
        <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          Let us help you create an unforgettable celebration. Contact us today to schedule a venue tour and discuss your requirements.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="elegant"
            size="xl"
            asChild
          >
            <Link to="/book">
              <Calendar className="w-5 h-5" />
              Schedule a Visit
            </Link>
          </Button>
          <Button
            size="xl"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            asChild
          >
            <a href="tel:+1234567890">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
