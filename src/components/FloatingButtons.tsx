import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890?text=Hello! I'm interested in booking your banquet hall."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-charcoal text-ivory text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
      </a>

      {/* Call Now Button */}
      <a
        href="tel:+1234567890"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-gold rounded-full shadow-lg hover:shadow-gold hover:scale-110 transition-all duration-300"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-charcoal" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-charcoal text-ivory text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
