import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const posts = [
    "https://www.instagram.com/reel/DPR_am3Cktj/",
    // Add more Instagram URLs here
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">تابعنا على إنستغرام</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((url, index) => (
            <blockquote
              key={index}
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
