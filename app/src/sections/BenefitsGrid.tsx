import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    title: 'Deep Hydration',
    subtitle: 'Quench Your Skin',
    description: 'Multi-layer moisture technology delivers hydration where it\'s needed most',
    image: '/images/benefit-hydration.jpg',
    stat: '72H',
    statLabel: 'Moisture Retention'
  },
  {
    title: 'Natural Glow',
    subtitle: 'Radiance Unlocked',
    description: 'Vitamin-rich formula brightens and evens skin tone for a luminous complexion',
    image: '/images/benefit-glow.jpg',
    stat: '94%',
    statLabel: 'Saw Brighter Skin'
  },
  {
    title: 'Calming Care',
    subtitle: 'Soothe & Restore',
    description: 'Gentle botanicals reduce redness and irritation for balanced, comfortable skin',
    image: '/images/benefit-calming.jpg',
    stat: '89%',
    statLabel: 'Felt Less Irritation'
  },
  {
    title: 'Barrier Support',
    subtitle: 'Strength Within',
    description: 'Strengthens skin\'s natural defense against environmental stressors',
    image: '/images/benefit-barrier.jpg',
    stat: '3X',
    statLabel: 'Stronger Barrier'
  }
];

export default function BenefitsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-blush-pink/30 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-soft-beige/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-rose/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-xs tracking-[0.3em] text-accent-rose mb-4">
            TRANSFORMATIVE BENEFITS
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gray-800 mb-6">
            Skin That Speaks
          </h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every formula is designed to deliver visible results you can see and feel 
            from the very first application.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Background Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  {/* Stat badge */}
                  <div className="absolute top-6 right-6 text-right">
                    <p className="font-display text-3xl text-white">{benefit.stat}</p>
                    <p className="font-body text-xs text-white/70">{benefit.statLabel}</p>
                  </div>

                  {/* Text content */}
                  <div>
                    <p className="font-body text-xs tracking-widest text-white/70 mb-2 uppercase">
                      {benefit.subtitle}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-sm text-white/80 leading-relaxed max-w-md opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-white/0 rounded-2xl transition-all duration-500 group-hover:border-white/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
