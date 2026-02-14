import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white sticky top-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/hero-bg.PNG" alt="" className="w-full h-full object-cover opacity-5" />
      </div>

      {/* Content */}
      <motion.div style={{ opacity, y }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-loose px-4 py-4"
          style={{ filter: 'drop-shadow(0 3px 4px rgba(0,0,0,0.7))' }}
        >
          <span className="text-gradient-gold block mb-2 break-words py-3">مجمع الدكتور أحمد الخواجه</span>
          <span className="text-black text-2xl md:text-4xl py-3">رعاية صحية على مدار الساعة</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto"
          style={{ filter: 'drop-shadow(0 3px 3px rgba(0,0,0,0.6))' }}
        >
          24/7 Healthcare Services
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfG1UKQj71Qjze8jbQeyFbepqGKhjnvM69zGkBMtEDPEpEf3Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-gold"
          >
            احجز موعدك
          </a>
          <a
            href="#services"
            className="bg-cyan text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
          >
            الخدمات
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-cyan flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-cyan" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
