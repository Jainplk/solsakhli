import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Content */}
          <div className="relative z-10 max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-12 pt-24 sm:pt-32 pb-16 sm:pb-24 flex flex-col items-center justify-center min-h-screen">

        {/* Badge */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <span className="inline-block px-4 sm:px-6 py-2 text-orange-400 border-2 border-orange-400/50 rounded-full text-xs sm:text-sm font-medium tracking-wide hover:bg-orange-400/10 transition-all duration-300 backdrop-blur-sm">
            Bella LV-3
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-full font-bold text-center mb-6 sm:mb-8 animate-slide-up leading-tight ">
          <span className="text-orange-500 inline-block hover:scale-105 transition-transform duration-300">
            AI Precision.
          </span>{' '}
          <span className="text-white inline-block hover:scale-105 transition-transform duration-300">
            Human Creativity.
          </span>
          <br  />
          <span className="text-white inline-block hover:scale-105 transition-transform duration-300">
            Powerful Websites.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-5xl text-center mb-8 sm:mb-12 leading-relaxed animate-fade-in-delayed px-4">
          Bella LV-3 is our vision, for the future of websites. Human + AI, working together, fully in your control.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-delayed-more px-4 w-full sm:w-auto">
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 text-sm sm:text-base">
            <span className="relative z-10">Start Your Website</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm sm:text-base">
            Contact Us
          </button>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>


    </section>
  );
};

export default HeroSection;