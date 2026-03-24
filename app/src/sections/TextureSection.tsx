import { useEffect, useRef, useState } from 'react';

const textures = [
  {
    name: 'Silky Serum',
    description: 'Lightweight, fast-absorbing',
    image: './images/ingredient-liquid.jpg'
  },
  {
    name: 'Rich Cream',
    description: 'Luxuriously nourishing',
    image: './images/product-cream-jar.jpg'
  },
  {
    name: 'Dewy Finish',
    description: 'Natural glow, never greasy',
    image: './images/model-glow-skin.jpg'
  }
];

export default function TextureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTexture, setActiveTexture] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-ivory overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-soft-beige/50 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blush-pink/30 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Main Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              {/* Main texture display */}
              <div className="relative rounded-2xl overflow-hidden shadow-luxury aspect-[4/5]">
                <img 
                  src={textures[activeTexture].image}
                  alt={textures[activeTexture].name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900/80 to-transparent">
                  <p className="font-body text-xs tracking-widest text-white/70 mb-2">
                    TEXTURE
                  </p>
                  <h3 className="font-display text-3xl text-white mb-1">
                    {textures[activeTexture].name}
                  </h3>
                  <p className="font-body text-sm text-white/80">
                    {textures[activeTexture].description}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent-rose/30 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blush-pink rounded-full" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="font-body text-xs tracking-[0.3em] text-accent-rose mb-4">
              SENSORIAL EXPERIENCE
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-800 mb-6">
              Texture That Transforms
            </h2>
            <p className="font-body text-gray-600 leading-relaxed mb-10">
              Our formulas are crafted to delight your senses. From the moment they 
              touch your skin, you'll experience the perfect balance of luxury and efficacy 
              — rich enough to nourish, light enough to absorb instantly.
            </p>

            {/* Texture selectors */}
            <div className="space-y-4">
              {textures.map((texture, index) => (
                <button
                  key={texture.name}
                  onClick={() => setActiveTexture(index)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    activeTexture === index 
                      ? 'bg-white shadow-soft' 
                      : 'bg-transparent hover:bg-white/50'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                    activeTexture === index ? 'ring-2 ring-accent-rose' : ''
                  }`}>
                    <img 
                      src={texture.image}
                      alt={texture.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-left">
                    <h4 className={`font-display text-lg transition-colors duration-300 ${
                      activeTexture === index ? 'text-gray-800' : 'text-gray-500'
                    }`}>
                      {texture.name}
                    </h4>
                    <p className="font-body text-sm text-gray-400">
                      {texture.description}
                    </p>
                  </div>

                  {/* Indicator */}
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTexture === index ? 'bg-accent-rose scale-125' : 'bg-gray-300'
                  }`} />
                </button>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-rose" />
                  <span className="font-body text-sm text-gray-600">Non-comedogenic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-rose" />
                  <span className="font-body text-sm text-gray-600">Fast absorbing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-rose" />
                  <span className="font-body text-sm text-gray-600">Silicone-free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
