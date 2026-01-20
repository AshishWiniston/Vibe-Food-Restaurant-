import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Ashish</h3>
            <p className="text-gray-400 mb-4">
              Experience authentic South Indian and Korean cuisines prepared with love and tradition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/food" className="hover:text-amber-500 transition-colors duration-300">Menu</a></li>
              <li><a href="/combo" className="hover:text-amber-500 transition-colors duration-300">Combos</a></li>
              <li><a href="/services" className="hover:text-amber-500 transition-colors duration-300">Services</a></li>
              <li><a href="/contact" className="hover:text-amber-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <span>9487311335</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <span>ashishwiniton1125@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ashish Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
