import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Stethoscope, Syringe, Smile, Scissors, Ambulance } from "lucide-react";
import { LiaToothSolid } from "react-icons/lia";
import { useRef } from "react";

const services = [
  {
    titleAr: "العيون",
    titleEn: "EYES",
    description: "فحص وعلاج جميع أمراض العيون بأحدث الأجهزة",
    image: "/service-1.png",
    icon: Eye,
  },
  {
    titleAr: "الطب العام",
    titleEn: "GENERAL",
    description: "رعاية صحية شاملة لجميع أفراد العائلة",
    image: "/service-2.png",
    icon: Stethoscope,
  },
  {
    titleAr: "الأسنان",
    titleEn: "DENTAL",
    description: "علاج وتجميل الأسنان بأعلى معايير الجودة",
    image: "/service-3.png",
    icon: LiaToothSolid,
  },
  {
    titleAr: "الجراحة العامة",
    titleEn: "SURGERY",
    description: "عمليات جراحية متقدمة بأيدي خبراء",
    image: "/service-5.png",
    icon: Scissors,
  },
  {
    titleAr: "الطوارئ",
    titleEn: "EMERGENCY",
    description: "خدمات طوارئ على مدار الساعة",
    image: "/service-4.png",
    icon: Ambulance,
  },
];

const DualServices = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} id="services" className="py-24 px-6 relative z-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">الخدمات الطبية</span>
          </h2>
          <p className="text-muted-foreground text-lg">رعاية صحية متكاملة</p>
        </motion.div>

        <motion.div style={{ scale }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.titleEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: index === 0 ? -2 : 2 }}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-white border-2 border-primary/20 hover:border-primary transition-all"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <service.icon className="w-12 h-12 text-primary mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-1">
                  {service.titleAr}
                </h3>
                <p className="text-primary font-semibold text-xs tracking-[0.2em] mb-2">
                  {service.titleEn}
                </p>
                <p className="text-muted-foreground text-xs max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DualServices;
