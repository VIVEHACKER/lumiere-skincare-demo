import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'All Products', href: '#' },
    { name: 'Radiance Serum', href: '#' },
    { name: 'Nourishing Cream', href: '#' },
    { name: 'Gift Sets', href: '#' },
    { name: 'Subscriptions', href: '#' }
  ],
  about: [
    { name: 'Our Story', href: '#' },
    { name: 'Ingredients', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' }
  ],
  help: [
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Track Order', href: '#' }
  ]
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' }
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-accent-rose via-deep-rose to-accent-rose" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <h3 className="font-display text-3xl mb-4">LUMIÈRE</h3>
            <p className="font-body text-sm text-gray-400 leading-relaxed mb-6">
              Where light meets skin. Premium skincare for your most radiant self.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent-rose transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="font-body text-sm tracking-widest text-gray-400 mb-4 uppercase">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-gray-300 hover:text-accent-rose transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About links */}
          <div>
            <h4 className="font-body text-sm tracking-widest text-gray-400 mb-4 uppercase">
              About
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-gray-300 hover:text-accent-rose transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h4 className="font-body text-sm tracking-widest text-gray-400 mb-4 uppercase">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-gray-300 hover:text-accent-rose transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="font-body text-sm tracking-widest text-gray-400 mb-4 uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-rose mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-gray-300">
                  hello@lumiere.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-rose mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-gray-300">
                  +1 (800) 123-4567
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-rose mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-gray-300">
                  123 Glow Street,<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-xl mb-2">Join the Glow List</h4>
              <p className="font-body text-sm text-gray-400">
                Subscribe for exclusive offers and skincare tips.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input 
                type="email"
                placeholder="Your email"
                className="flex-1 md:w-64 px-5 py-3 bg-gray-800 rounded-full font-body text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-rose"
              />
              <button className="px-6 py-3 bg-accent-rose text-white font-body text-sm rounded-full hover:bg-deep-rose transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-500">
            © 2024 LUMIÈRE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-gray-500 hover:text-accent-rose transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-gray-500 hover:text-accent-rose transition-colors">
              Terms of Service
            </a>
            <a href="#" className="font-body text-xs text-gray-500 hover:text-accent-rose transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
