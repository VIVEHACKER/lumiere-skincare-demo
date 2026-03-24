import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Truck, Shield, RefreshCw } from 'lucide-react';

const guarantees = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $75'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure checkout'
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day guarantee'
  }
];

export default function FinalCTA() {
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
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-blush-pink/30 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-soft-beige/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-rose/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <p className="font-body text-xs tracking-[0.3em] text-accent-rose mb-4">
              BEGIN YOUR JOURNEY
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gray-800 mb-6">
              Your Glow Awaits
            </h2>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Experience the transformative power of LUMIÈRE. Join thousands who have 
              discovered their most radiant skin. Your journey to luminous beauty starts now.
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-display text-4xl text-gray-800">$128</span>
              <span className="font-body text-lg text-gray-400 line-through">$156</span>
              <span className="font-body text-sm text-accent-rose bg-white px-4 py-1 rounded-full">
                Limited Time Offer
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button className="group btn-luxury px-10 py-4 bg-gray-800 text-white font-body text-sm tracking-widest rounded-full hover:bg-gray-900 transition-all duration-500 hover:shadow-luxury flex items-center gap-3">
                SHOP NOW
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="px-10 py-4 border border-gray-300 text-gray-700 font-body text-sm tracking-widest rounded-full hover:border-accent-rose hover:text-accent-rose transition-all duration-300">
                VIEW KITS
              </button>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap gap-6">
              {guarantees.map((guarantee, index) => (
                <div 
                  key={guarantee.title}
                  className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <guarantee.icon className="w-5 h-5 text-accent-rose" />
                  <div>
                    <p className="font-body text-sm font-medium text-gray-800">{guarantee.title}</p>
                    <p className="font-body text-xs text-gray-500">{guarantee.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src="./images/product-flatlay.jpg"
                  alt="LUMIÈRE Collection"
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>

              {/* Floating offer badge */}
              <div className="absolute -top-6 -right-6 bg-accent-rose text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-glow">
                <span className="font-display text-2xl">20%</span>
                <span className="font-body text-xs">OFF</span>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-accent-rose/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
