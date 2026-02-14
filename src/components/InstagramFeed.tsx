import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const timer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">تابعنا على إنستغرام</h2>
        <div className="flex justify-center">
          <blockquote 
            className="instagram-media" 
            data-instgrm-captioned 
            data-instgrm-permalink="https://www.instagram.com/reel/DPR_am3Cktj/?utm_source=ig_embed&utm_campaign=loading" 
            data-instgrm-version="14" 
            style={{ 
              background: '#FFF', 
              border: 0, 
              borderRadius: '3px', 
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
              margin: '1px', 
              maxWidth: '540px', 
              minWidth: '326px', 
              padding: 0, 
              width: 'calc(100% - 2px)' 
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
