import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Emma Thompson',
    age: 32,
    location: 'New York',
    rating: 5,
    text: "I've tried countless serums, but nothing compares to LUMIÈRE. My skin glows like never before, and the texture is so luxurious. It's become my daily ritual.",
    avatar: 'E'
  },
  {
    name: 'Sophia Chen',
    age: 28,
    location: 'Los Angeles',
    rating: 5,
    text: "Finally, a product that delivers on its promises. My dry skin is now hydrated and radiant. The natural ingredients give me peace of mind too.",
    avatar: 'S'
  },
  {
    name: 'Isabella Martinez',
    age: 35,
    location: 'Miami',
    rating: 5,
    text: "The glow is real! After just two weeks, my friends started asking what I was using. This is luxury skincare that actually works.",
    avatar: 'I'
  },
  {
    name: 'Olivia Williams',
    age: 29,
    location: 'London',
    rating: 5,
    text: "Worth every penny. The formula is so elegant and absorbs beautifully. My skin feels nourished without any heaviness. Absolutely love it!",
    avatar: 'O'
  }
];

export default function Testimonials() {
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-ivory overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blush-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-soft-beige/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-xs tracking-[0.3em] text-accent-rose mb-4">
            LOVED BY MANY
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gray-800 mb-6">
            The Glow Community
          </h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands who have discovered their most radiant skin with LUMIÈRE.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Main testimonial card */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-soft">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-accent-rose rounded-full flex items-center justify-center">
              <Quote className="w-5 h-5 text-white" />
            </div>

            {/* Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-rose text-accent-rose" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-display text-xl sm:text-2xl text-gray-700 italic leading-relaxed mb-8">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blush-pink flex items-center justify-center">
                  <span className="font-display text-xl text-accent-rose">
                    {testimonials[activeIndex].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-body font-medium text-gray-800">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="font-body text-sm text-gray-500">
                    {testimonials[activeIndex].age} • {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-soft-beige flex items-center justify-center hover:bg-accent-rose hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-soft-beige flex items-center justify-center hover:bg-accent-rose hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-accent-rose w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className={`mt-16 flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <p className="font-display text-3xl text-accent-rose mb-1">50K+</p>
            <p className="font-body text-xs tracking-widest text-gray-500 uppercase">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl text-accent-rose mb-1">4.9</p>
            <p className="font-body text-xs tracking-widest text-gray-500 uppercase">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl text-accent-rose mb-1">98%</p>
            <p className="font-body text-xs tracking-widest text-gray-500 uppercase">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
