import { Star, Truck, MapPin, ExternalLink } from "lucide-react";

const TrustBar = () => {
  return (
    <section className="py-20 px-6 bg-white relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#1a1a1a' }}>
            مجمع الدكتور أحمد الخواجه
          </h2>
          <p style={{ color: '#666' }}>Dr. Ahmed Al-Khawajah Medical Complex</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {/* Rating */}
          <div style={{ backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <div className="flex justify-center gap-1 mb-3">
              <Star style={{ width: '20px', height: '20px', fill: '#0891b2', color: '#0891b2' }} />
              <Star style={{ width: '20px', height: '20px', fill: '#0891b2', color: '#0891b2' }} />
              <Star style={{ width: '20px', height: '20px', fill: '#0891b2', color: '#0891b2' }} />
              <Star style={{ width: '20px', height: '20px', fill: '#0891b2', color: '#0891b2' }} />
              <Star style={{ width: '20px', height: '20px', fill: '#0891b2', color: '#0891b2' }} />
            </div>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '4px' }}>4.8</p>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>250+ تقييم</p>
            <a
              href="https://maps.google.com/?q=مجمع+الدكتور+أحمد+الخواجه"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0891b2', fontSize: '14px', fontWeight: '500' }}
            >
              عرض على Google Maps
              <ExternalLink style={{ width: '14px', height: '14px' }} />
            </a>
          </div>

          {/* Emergency */}
          <div style={{ backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(8, 145, 178, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Truck style={{ width: '28px', height: '28px', color: '#0891b2' }} />
            </div>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '4px' }}>خدمات طوارئ</p>
            <p style={{ color: '#666', fontSize: '14px' }}>24/7 Emergency Services</p>
          </div>

          {/* Location */}
          <div style={{ backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(8, 145, 178, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <MapPin style={{ width: '28px', height: '28px', color: '#0891b2' }} />
            </div>
            <p style={{ fontWeight: 'bold', color: '#1a1a1a', marginBottom: '4px' }}>الموقع</p>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
              حي البستان - خلف مجمع العثيم
              <br />
              الاحساء
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
