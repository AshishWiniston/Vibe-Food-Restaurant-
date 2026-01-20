import { Tag } from 'lucide-react';

export const OfferBanner = () => {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-700 dark:to-orange-800 text-white py-3 mt-16 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-3 animate-pulse">
          <Tag className="w-5 h-5" />
          <p className="text-sm md:text-base font-medium">
            Special Offer: Get 20% OFF on all combo orders above ₹500!
          </p>
          <Tag className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
