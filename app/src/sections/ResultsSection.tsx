import { useEffect, useRef, useState } from 'react';
import { Star, Check } from 'lucide-react';

const results = [
  { label: 'Brighter Complexion', percentage: 94 },
  { label: 'Improved Hydration', percentage: 97 },
  { label: 'Smoother Texture', percentage: 91 },
  { label: 'Reduced Fine Lines', percentage: 86 }
];

const highlights = [
  'Visible results in 7 days',
  'Clinically proven formula',
  'Dermatologist tested',
  'Suitable for all skin types'
];

export default function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>(results.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate percentages when visible
  useEffect(() => {
    if (isVisible) {
      const duration = 1500;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setAnimatedPercentages(results.map(r => Math.round(r.percentage * easeOut)));
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-soft-beige overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-rose/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blush-pink/30 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src="/images/model-profile.jpg"
                  alt="Results"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-soft max-w-xs">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-rose text-accent-rose" />
                  ))}
                </div>
                <p className="font-body text-sm text-gray-600 italic mb-2">
                  "My skin has never looked this radiant. Absolutely transformative!"
                </p>
                <p className="font-body text-xs text-gray-400">
                  — Sarah M., Verified Buyer
                </p>
              </div>

              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blush-pink rounded-full opacity-60" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="font-body text-xs tracking-[0.3em] text-accent-rose mb-4">
              CLINICAL RESULTS
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-800 mb-6">
              Real Results, Real Glow
            </h2>
            <p className="font-body text-gray-600 leading-relaxed mb-10">
              In an independent clinical study of 100 women over 4 weeks, 
              our Radiance Ritual delivered remarkable improvements in skin health and appearance.
            </p>

            {/* Progress bars */}
            <div className="space-y-6 mb-10">
              {results.map((result, index) => (
                <div key={result.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-sm text-gray-700">{result.label}</span>
                    <span className="font-body text-sm font-medium text-accent-rose">
                      {animatedPercentages[index]}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent-rose rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${result.percentage}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight}
                  className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent-rose/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-rose" />
                  </div>
                  <span className="font-body text-sm text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
