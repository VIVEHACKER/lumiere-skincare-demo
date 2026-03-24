import { useEffect, useRef, useState } from 'react';

const ingredients = [
  {
    name: 'Hyaluronic Acid',
    description: 'Holds 1000x its weight in water for deep, lasting hydration',
    image: './images/ingredient-water.jpg',
    benefit: 'Hydration'
  },
  {
    name: 'Centella Asiatica',
    description: 'Ancient healing herb that calms and repairs sensitive skin',
    image: './images/ingredient-leaves.jpg',
    benefit: 'Soothing'
  },
  {
    name: 'Vitamin C Complex',
    description: 'Brightening antioxidant that reveals natural radiance',
    image: './images/ingredient-liquid.jpg',
    benefit: 'Radiance'
  }
];

export default function IngredientStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
      className="relative py-24 sm:py-32 bg-soft-beige overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blush-pink/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-xs tracking-[0.3em] text-accent-rose mb-4">
            NATURE'S FINEST
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gray-800 mb-6">
            The Science of Glow
          </h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every drop is crafted with meticulously sourced ingredients, 
            chosen for their proven ability to transform your skin from within.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={ingredient.name}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-ivory shadow-soft transition-all duration-500 group-hover:shadow-luxury">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                  
                  {/* Benefit badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full font-body text-xs tracking-wider text-gray-700">
                      {ingredient.benefit}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl text-gray-800 mb-2">
                    {ingredient.name}
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {ingredient.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-accent-rose transition-transform duration-500 ${activeIndex === index ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '98%', label: 'Natural Origin' },
            { value: '0%', label: 'Artificial Fragrance' },
            { value: '24H', label: 'Hydration' },
            { value: '100%', label: 'Cruelty Free' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl text-accent-rose mb-2">{stat.value}</p>
              <p className="font-body text-xs tracking-widest text-gray-500 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
