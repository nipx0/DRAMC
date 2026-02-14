const InstagramFeed = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">تابعنا على إنستغرام</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/reel/DPR_am3Cktj/embed"
            width="400"
            height="600"
            frameBorder="0"
            scrolling="no"
            allowTransparency
            className="border-0 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
