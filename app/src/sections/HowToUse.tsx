import { useEffect, useRef, useState } from 'react';
import { Droplet, Moon, Sun } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Cleanse',
    description: 'Start with a gentle cleanser to prepare your skin for optimal absorption',
    time: 'AM & PM',
    icon: Sun
  },
  {
    number: '02',
    title: 'Apply Serum',
    description: 'Dispense 2-3 drops of Radiance Serum onto fingertips and press into skin',
    time: 'AM & PM',
    icon: Droplet
  },
  {
    number: '03',
    title: 'Moisturize',
    description: 'Follow with Nourishing Cream to lock in hydration and active ingredients',
    time: 'AM & PM',
    icon: Moon
  }
];

export default function HowToUse() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blush-pink/20 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content - Steps */}
          <div>
            <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="font-body text-xs tracking-[0.3em] text-accent-rose mb-4">
                YOUR RITUAL
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-gray-800 mb-6">
                How to Use
              </h2>
              <p className="font-body text-gray-600 leading-relaxed">
                Transform your skincare routine into a moment of self-care. 
                Follow these simple steps for radiant, healthy-looking skin.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    activeStep === index 
                      ? 'bg-white shadow-soft' 
                      : 'bg-transparent hover:bg-white/50'
                  } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    {/* Step number */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep === index ? 'bg-accent-rose text-white' : 'bg-soft-beige text-gray-600'
                    }`}>
                      <span className="font-display text-lg">{step.number}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl text-gray-800">{step.title}</h3>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <step.icon className="w-3 h-3" />
                          {step.time}
                        </span>
                      </div>
                      <p className={`font-body text-sm leading-relaxed transition-all duration-300 ${
                        activeStep === index ? 'text-gray-600 max-h-20' : 'text-gray-400 max-h-0 overflow-hidden'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Active indicator */}
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-accent-rose rounded-r-full transition-all duration-300 ${
                    activeStep === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Image */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src="./images/texture-application.jpg"
                  alt="Skincare application"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* Floating tip card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-soft max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blush-pink flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-4 h-4 text-accent-rose" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-gray-800 mb-1">Pro Tip</p>
                    <p className="font-body text-xs text-gray-500 leading-relaxed">
                      For best results, apply to slightly damp skin to lock in extra moisture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-accent-rose/30 rounded-full" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent-rose/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
