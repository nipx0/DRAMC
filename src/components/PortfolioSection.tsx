import { motion, useScroll, useTransform } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import { useRef } from "react";

const items = [
  { src: "/portfolio-1.jpg", label: "الدكتور أحمد الخواجه", span: "row-span-2" },
  { src: "/portfolio-2.jpg", label: "الدكتور محمد البحراني", span: "" },
  { src: "/portfolio-3.jpg", label: "الدكتور مصطفى الوباري", span: "" },
  { src: "/portfolio-4.jpg", label: "طبيب عام", span: "row-span-2" },
  { src: "/portfolio-5.jpg", label: "طبيب أسنان", span: "" },
  { src: "/portfolio-6.jpg", label: "طبيب عيون", span: "" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="portfolio" className="py-24 px-6 bg-gradient-to-b from-white to-muted relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            style={{ y }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient-gold">فريقنا الطبي</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg">طاقم من الخبراء</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateZ: i % 2 === 0 ? 2 : -2, zIndex: 10 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${item.span}`}
              style={{ perspective: 1000 }}
            >
              <motion.img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <span className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.label}
                </span>
              </div>
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-cmyk"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
