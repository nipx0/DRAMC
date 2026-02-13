import { Star } from "lucide-react";
import React from "react";

const reviews = [
  { name: "Noor", text: "منذ لحظة دخولي شعرت بالراحة بسبب النظافة العالية، والتنظيم، والاهتمام بأدق التفاصيل. تعامل موظفات الاستقبال كان راقيًا، والممرضات في قمة اللطف، والدكتور أحمد الخواجه قمة في الهدوء والاحترافية.", rating: 5 },
  { name: "زينب موسى", text: "ماشاءالله تبارك الله هو أسلوب جميل هو معامله لطيفه هو طاقم رائع هو دكتور متميز ويد خفيفه. سويت عنده تصحيح نظر روحو شيلو النظاره وارتاحو", rating: 5 },
  { name: "نورا احمد", text: "ماشاء الله تبارك الله، كل شيء كان رائع من الاستقبال الى الممرضات وصولًا بالدكتور احمد. سويت تصحيح نظر والعملية ما اخذت ربع ساعه، الدكتور يده خفيفة جدًا", rating: 5 },
  { name: "Fatimah Ali", text: "تجربتي في مجمع الدكتور أحمد الخواجه الطبي كانت أكثر من رائعة! سويت عملية الالترا ليزك والحمد لله النتيجة ممتازة من أول يوم. الدكتور كان قمة في الاحترافية والدقة", rating: 5 },
  { name: "Ahmed Mohammed", text: "عيادة ١٠ نجوم صراحه. مسوي أنا عندهم ألترا ليزك معاملة الدكتور وخبرته في المجال لاتوصف انصح بشدة جدا", rating: 5 },
  { name: "Mohammed الحدب", text: "المجمع الطبي هادىء ونظيف من ناحية المكان ، اما الدكتور أحمد الخواجة والطاقم الطبي والإستقبال فخير من يمثل وزارة الصحة وجودة الأداء ورقي التعامل", rating: 5 },
  { name: "Abdullah Ali", text: "حقيقة انصدمت من المجمع كبير والمرافق فيه تفتح النفس كل زاوية مصممة لأجل راحة وثقة المريض حرفياً", rating: 5 },
  { name: "فاطمه", text: "المجمع نظيف و جميل و الموظفين كلهم تعاملهم عسل و الدكتور احمد شاطر و يعرف شنو يناسب كل مريض انصح اي احد يعاني من مشاكل بالنظر", rating: 5 },
  { name: "نرجس", text: "عملت عملية الالترا ليزك عند الدكتور احمد الخواجه من بعد الله ثم الدكتور ولله الحمد تمت العمليه بنجاح عالي جداً ولم اندم ابداً على الاختيار", rating: 5 },
];

const ReviewsScroll = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 px-6 bg-muted">
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          <span className="text-gradient-gold">آراء عملائنا</span>
        </h2>
        <p className="text-center text-muted-foreground">Google Reviews</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {getVisibleReviews().map((review, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="bg-white rounded-2xl p-6 shadow-lg animate-slide-in"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4 line-clamp-4 leading-relaxed">
                {review.text}
              </p>
              <p className="font-bold text-primary">{review.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0.5;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default ReviewsScroll;
