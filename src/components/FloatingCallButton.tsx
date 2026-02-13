import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:0500307700"
      className="fixed bottom-6 left-6 z-50 bg-gradient-gold text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-300"
      aria-label="اتصل بنا"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;
