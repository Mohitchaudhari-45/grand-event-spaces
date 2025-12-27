import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Clock, Sparkles, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const eventTypes = [
  "Wedding Ceremony",
  "Wedding Reception",
  "Engagement Party",
  "Corporate Event",
  "Birthday Celebration",
  "Anniversary Party",
  "Cultural Event",
  "Other",
];

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    eventTime: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted! Our team will contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      eventTime: "",
      requirements: "",
    });
  };

  return (
    <Layout>
      <PageHeader
        title="Book Your Event"
        subtitle="Start planning your dream celebration today"
      />

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Calendar, label: "Choose Date" },
              { icon: Users, label: "Guest Count" },
              { icon: Sparkles, label: "Customize" },
              { icon: CheckCircle, label: "Confirm" },
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Step {index + 1}</span>
                  <p className="font-medium text-foreground text-sm">{step.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="bg-card rounded-xl p-8 md:p-10 shadow-elegant">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Event Booking Form
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Fill in the details below and we'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground border-b border-border pb-2">
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground border-b border-border pb-2">
                  Event Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Event Type *
                    </label>
                    <select
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      required
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Expected Guests *
                    </label>
                    <Input
                      type="number"
                      placeholder="Number of guests"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Event Date *
                    </label>
                    <Input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Time
                    </label>
                    <Input
                      type="time"
                      value={formData.eventTime}
                      onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Requirements */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground border-b border-border pb-2">
                  Additional Information
                </h3>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Special Requirements or Questions
                  </label>
                  <Textarea
                    placeholder="Tell us about your vision, special requirements, or any questions you have..."
                    rows={5}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  />
                </div>
              </div>

              <Button type="submit" variant="gold" size="xl" className="w-full">
                <Clock className="w-5 h-5" />
                Submit Booking Request
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By submitting this form, you agree to our terms and privacy policy. 
                We'll contact you within 24 hours to confirm your booking.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
