import { useState } from 'react';
import { X, CreditCard, Wallet } from 'lucide-react';
import { FoodItem } from '../types';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

interface OrderModalProps {
  item: FoodItem;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal = ({ item, isOpen, onClose }: OrderModalProps) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [paymentMethod, setPaymentMethod] = useState<'GPay' | 'Cash on Delivery'>('GPay');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const handleOrder = async () => {
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from('orders').insert({
        user_id: user?.id || null,
        user_name: name,
        user_email: email,
        items: [{ ...item, quantity: 1 }],
        total_amount: item.price,
        payment_method: paymentMethod,
        status: 'pending'
      });

      if (error) throw error;

      setOrderPlaced(true);
      setTimeout(() => {
        setOrderPlaced(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto animate-scale-in transition-colors duration-300">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Complete Your Order</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {orderPlaced ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <svg className="w-8 h-8 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Order Placed Successfully!</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Thank you for your order.</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-2xl font-bold text-amber-600 dark:text-amber-500 mt-1">₹{item.price}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setPaymentMethod('GPay')}
                      className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                        paymentMethod === 'GPay'
                          ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500'
                          : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-500'
                      }`}
                    >
                      <Wallet className="w-5 h-5" />
                      <span>GPay</span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('Cash on Delivery')}
                      className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                        paymentMethod === 'Cash on Delivery'
                          ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500'
                          : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-500'
                      }`}
                    >
                      <CreditCard className="w-5 h-5" />
                      <span>COD</span>
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleOrder}
                disabled={loading}
                className="w-full mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? 'Placing Order...' : 'Place Order'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
