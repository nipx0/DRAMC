import { Calendar, Phone, MessageCircle, MapPin, Instagram, Camera, Briefcase, BookOpen } from "lucide-react";

const links = [
  { icon: BookOpen, title: "لتحميل موسوعة الليزك و اسرار العين 2026 م", titleEn: "Download LASIK Encyclopedia", url: "https://drive.google.com/file/d/19hoWjheHJLJgoLyD2bEbDH_r-ktfSqEN/view" },
  { icon: Calendar, title: "لحجز موعد الكتروني", titleEn: "E-App", url: "https://docs.google.com/forms/d/e/1FAIpQLSfG1UKQj71Qjze8jbQeyFbepqGKhjnvM69zGkBMtEDPEpEf3Q/viewform" },
  { icon: Phone, title: "اتصال", titleEn: "Call", url: "tel:0500307700" },
  { icon: MessageCircle, title: "واتساب", titleEn: "Whatsapp", url: "https://api.whatsapp.com/send?phone=966500307700" },
  { icon: MapPin, title: "الموقع", titleEn: "Location", url: "https://maps.google.com/?q=مجمع+الدكتور+أحمد+الخواجه" },
  { icon: Instagram, title: "انستغرام", titleEn: "Instagram", url: "https://www.instagram.com/dramc.dramc/" },
  { icon: Camera, title: "سناب شات", titleEn: "Snapchat", url: "https://www.snapchat.com/@dramc_a?invite_id=0wUnXf-S&share_id=PwCs4F44QWuI7-SxqQhQZg&sid=7ac8607945e14d2aa28fd8045db52e9b" },
  { icon: Briefcase, title: "للتقديم على وظيفة", titleEn: "Job Application", url: "https://docs.google.com/forms/d/e/1FAIpQLSdxQKcpS9SfzQhYTfU9hzc2BedOvaCEdvfrkSAxbsb-Nl9h2g/viewform" },
];

const LinktreeSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-muted relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#1a1a1a' }}>
            روابط سريعة
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex items-center gap-4 bg-white border-2 border-primary/20 rounded-2xl p-6 hover:border-primary hover:shadow-gold transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 text-right">
                <p className="font-bold text-foreground text-lg">{link.title}</p>
                <p className="text-muted-foreground text-sm">{link.titleEn}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinktreeSection;
