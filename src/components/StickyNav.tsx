import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";

const StickyNav = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.1)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm w-full"
    >
      <div className="w-full max-w-full mx-auto px-6 flex items-center justify-between" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img src="/logo.JPG" alt="Logo" className="h-auto max-h-12 md:max-h-24 lg:max-h-32 w-auto max-w-[200px]" />
        </motion.div>

        <motion.a
          href="tel:0500307700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gradient-gold text-white px-6 py-2 rounded-full font-bold shadow-gold"
        >
          <Phone className="w-4 h-4" />
          اتصل بنا
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default StickyNav;
