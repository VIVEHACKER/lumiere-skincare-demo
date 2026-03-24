import { useEffect, useRef, useState } from 'react';
import { Sparkles, Droplets, Leaf, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Radiance Boost',
    description: 'Enhances natural glow'
  },
  {
    icon: Droplets,
    title: 'Deep Hydration',
    description: '24-hour moisture lock'
  },
  {
    icon: Leaf,
    title: 'Clean Formula',
    description: '98% natural origin'
  },
  {
    icon: Shield,
    title: 'Skin Barrier',
    description: 'Strengthens protection'
  }
];

export default function ProductFocus() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="product"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-ivory overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush-pink/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-soft-beige/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Images */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              {/* Main product image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src="/images/product-serum-studio.jpg" 
                  alt="LUMIÈRE Radiance Serum"
                  className="w-full aspect-square object-cover"
                />
              </div>
              
              {/* Secondary product image - floating */}
              <div className="absolute -bottom-8 -right-8 w-48 sm:w-64 z-20 animate-float-slow">
                <div className="rounded-xl overflow-hidden shadow-luxury border-4 border-ivory">
                  <img 
                    src="/images/product-cream-jar.jpg" 
                    alt="LUMIÈRE Nourishing Cream"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-accent-rose/30" />
            </div>
          </div>

          {/* Product Info */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="font-body text-xs tracking-[0.3em] text-accent-rose mb-4">
              OUR SIGNATURE COLLECTION
            </p>
            
            <h2 className="font-display text-4xl sm:text-5xl text-gray-800 mb-6">
              The Radiance Ritual
            </h2>
            
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Experience the transformative power of our signature duo. The Radiance Serum 
              penetrates deep to awaken your skin's natural luminosity, while the Nourishing 
              Cream seals in hydration for a supple, dewy finish that lasts all day.
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-display text-3xl text-gray-800">$128</span>
              <span className="font-body text-sm text-gray-400 line-through">$156</span>
              <span className="font-body text-xs text-accent-rose bg-blush-pink px-3 py-1 rounded-full">
                Save $28
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="btn-luxury px-8 py-4 bg-gray-800 text-white font-body text-sm tracking-widest rounded-full hover:bg-gray-900 transition-all duration-500 hover:shadow-luxury">
                ADD TO CART
              </button>
              <button className="px-8 py-4 border border-gray-300 text-gray-700 font-body text-sm tracking-widest rounded-full hover:border-accent-rose hover:text-accent-rose transition-all duration-300">
                LEARN MORE
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex items-start gap-3 transition-all duration-500`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blush-pink flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent-rose" />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-medium text-gray-800">{feature.title}</h4>
                    <p className="font-body text-xs text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
