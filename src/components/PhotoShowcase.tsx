// src/components/PhotoShowcase.tsx
import { useState, useEffect } from 'react';

const photos = [
  '/showcase/photo1.jpg',
  '/showcase/photo2.jpg',
  '/showcase/photo3.jpg',
  '/showcase/photo4.jpg',
  '/showcase/photo5.jpg',
];

const PhotoShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload all images
    photos.forEach(photo => {
      const img = new Image();
      img.src = photo;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      style={{ 
        backgroundColor: '#f9fafb',
        minHeight: '500px',
        padding: '80px 24px',
        position: 'relative',
        zIndex: 10,
        display: 'block',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ 
          position: 'relative',
          width: '100%',
          minHeight: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#e5e7eb'
          }}>
            <img 
              src={photos[currentIndex]} 
              alt={`Showcase photo ${currentIndex + 1}`} 
              style={{ 
                width: '100%', 
                height: 'auto',
                display: 'block',
                margin: '0 auto'
              }}
              onError={(e) => {
                console.error(`Failed to load: ${photos[currentIndex]}`);
                e.currentTarget.parentElement.style.backgroundColor = '#fecaca';
              }}
              onLoad={() => console.log(`Loaded: ${photos[currentIndex]}`)}
            />
          </div>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px'
          }}>
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: currentIndex === index ? '#1f2937' : '#d1d5db',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoShowcase;
