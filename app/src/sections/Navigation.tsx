import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Products', href: '#product' },
  { name: 'Ingredients', href: '#ingredients' },
  { name: 'How to Use', href: '#how-to-use' },
  { name: 'Results', href: '#results' },
  { name: 'Reviews', href: '#reviews' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-ivory/90 backdrop-blur-md shadow-soft py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className={`font-display text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              LUMIÈRE
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-body text-sm tracking-wide transition-colors duration-300 hover:text-accent-rose ${
                    isScrolled ? 'text-gray-600' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Cart button */}
              <button className={`relative p-2 rounded-full transition-colors duration-300 hover:bg-blush-pink ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}>
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-rose text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 rounded-full hover:bg-blush-pink transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-800" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div className={`absolute top-0 right-0 w-80 max-w-full h-full bg-ivory shadow-luxury transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8 pt-24">
            <nav className="space-y-6">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block font-display text-2xl text-gray-800 hover:text-accent-rose transition-colors"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen ? 'fade-in-up 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <button className="w-full py-4 bg-gray-800 text-white font-body text-sm tracking-widest rounded-full hover:bg-gray-900 transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
