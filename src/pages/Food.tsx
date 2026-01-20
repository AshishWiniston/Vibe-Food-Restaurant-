import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { foodItems } from '../data/foodItems';
import { OrderModal } from '../components/OrderModal';
import { FoodItem } from '../types';

export const Food = () => {
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Tamil Nadu', 'Kerala', 'Karnataka', 'Korean'];

  const filteredItems = filter === 'All'
    ? foodItems
    : foodItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Premium Menu
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our diverse selection of authentic dishes crafted with love and tradition
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {item.description}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-500">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="flex items-center space-x-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No items found in this category.
            </p>
          </div>
        )}
      </div>

      {selectedItem && (
        <OrderModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};
