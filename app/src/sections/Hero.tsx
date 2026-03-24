import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach((el, i) => {
          const speed = 0.3 + i * 0.1;
          (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-ivory"
    >
      {/* Background Image */}
      <div className="absolute inset-0 parallax">
        <img 
          src="./images/hero-main.jpg" 
          alt="LUMIÈRE Premium Skincare"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-transparent to-ivory/80" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent-rose/40 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-accent-rose/30 animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-white/50 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-accent-rose/50 animate-float-slow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Brand name */}
          <p className="font-body text-sm tracking-[0.3em] text-gray-600 mb-4 animate-fade-in">
            PREMIUM SKINCARE
          </p>
          
          {/* Main headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-800 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            LUMIÈRE
          </h1>
          
          {/* Tagline */}
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-gray-600 italic mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Where Light Meets Skin
          </p>
          
          {/* Description */}
          <p className="font-body text-sm sm:text-base text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Discover the art of luminous beauty. Our advanced formulas harness 
            nature's most precious ingredients to reveal your skin's natural radiance.
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={scrollToProduct}
            className="btn-luxury group relative px-10 py-4 bg-gray-800 text-white font-body text-sm tracking-widest rounded-full overflow-hidden transition-all duration-500 hover:shadow-luxury hover:bg-gray-900 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <span className="relative z-10">DISCOVER MORE</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer animate-fade-in"
          style={{ animationDelay: '1.2s' }}
          onClick={scrollToProduct}
        >
          <span className="font-body text-xs tracking-widest text-gray-500 mb-2">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
