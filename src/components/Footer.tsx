import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, MapPin, Phone as PhoneIcon } from "lucide-react";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <footer ref={ref} className="bg-card border-t border-border py-16 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/footer-bg.jpg" alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent" />
      </div>
      
      <motion.div 
        style={{ y, opacity }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient-gold mb-3">
              مجمع الدكتور أحمد الخواجه
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              رعاية صحية متكاملة على مدار الساعة. نقدم خدمات طبية متميزة في جميع التخصصات.
            </p>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-bold text-foreground">أوقات العمل</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">السبت حتى الخميس</span>
                <span className="text-foreground font-semibold">8:30 صباحاً - 9:00 مساءً</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">خدمات طوارئ</span>
                <span className="text-foreground font-semibold">24/7</span>
              </div>
            </div>
          </motion.div>

          {/* Contact & Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-bold text-foreground">تواصل معنا</h4>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                حي البستان - خلف مجمع العثيم - الاحساء
              </p>
              <p className="text-xs">info@dramc.org</p>
              <motion.a
                href="tel:0500307700"
                whileHover={{ scale: 1.05, x: -5 }}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <PhoneIcon className="w-4 h-4" />
                0500307700
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border pt-6 text-center"
        >
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} مجمع الدكتور أحمد الخواجه. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
