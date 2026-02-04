
import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern tan leather reclining sofa"
  },
  {
    url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1200",
    alt: "Cream colored designer swivel recliner"
  },
  {
    url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200",
    alt: "Premium modern sectional sofa"
  }
];

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f5f1ed] pt-16 pb-20 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:pr-12">
          <h1 className="serif text-5xl md:text-7xl leading-[1.1] text-[#2d2a26]">
            Designed for <br />
            Real Living <span className="italic">Comfort</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            Explore buying guides, home ideas, and real-life tips around recliner chairs, 
            reclining sofas, sectionals, and modern living spaces.
          </p>
          <button className="bg-[#2d2a26] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
            Explore Your Comfort
          </button>
        </div>
        
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
            {HERO_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  idx === activeIndex ? 'w-8 bg-[#2d2a26]' : 'w-2 bg-[#2d2a26]/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Side Arrows */}
          <button 
            onClick={() => setActiveIndex((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all hidden md:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all hidden md:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
