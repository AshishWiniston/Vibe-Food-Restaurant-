import { Tag, Check } from 'lucide-react';
import { comboItems } from '../data/comboItems';

export const Combo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-4">
            <Tag className="w-5 h-5 text-amber-600 dark:text-amber-500" />
            <span className="text-amber-600 dark:text-amber-500 font-semibold">
              Special Combo Deals
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Value Combo Packs
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Save more with our specially curated combo meals perfect for families and gatherings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comboItems.map((combo) => (
            <div
              key={combo.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Save 20%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {combo.name}
                </h3>
                {combo.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {combo.description}
                  </p>
                )}
                <div className="space-y-2 mb-4">
                  {combo.items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
                      ₹{Math.round(combo.price * 1.25)}
                    </p>
                    <p className="text-3xl font-bold text-amber-600 dark:text-amber-500">
                      ₹{combo.price}
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-700 dark:to-orange-800 rounded-2xl p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Extra 20% OFF on orders above ₹500!
          </h2>
          <p className="text-white/90 text-lg mb-6">
            Limited time offer. Order your favorite combos now!
          </p>
          <button className="px-8 py-4 bg-white hover:bg-gray-100 text-amber-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
            View All Combos
          </button>
        </div>
      </div>
    </div>
  );
};
