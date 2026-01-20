import { UtensilsCrossed, ShoppingBag, Truck, Users, PartyPopper, Clock } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: UtensilsCrossed,
      title: 'Dine-In',
      description: 'Experience luxury dining in our elegant restaurant ambiance with comfortable seating and premium service.',
      features: [
        'Comfortable seating arrangements',
        'Family-friendly atmosphere',
        'Live music on weekends',
        'Air-conditioned dining area'
      ],
      image: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: ShoppingBag,
      title: 'Takeaway',
      description: 'Quick and convenient takeaway service for those on the go. Order ahead and pick up at your convenience.',
      features: [
        'Pre-order option available',
        'Eco-friendly packaging',
        'Ready in 15-20 minutes',
        'Special packaging for long travel'
      ],
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      description: 'Enjoy restaurant-quality food in the comfort of your home with our fast and reliable delivery service.',
      features: [
        'Free delivery above ₹300',
        'Track your order in real-time',
        'Contactless delivery option',
        'Delivery within 30-40 minutes'
      ],
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'Catering',
      description: 'Professional catering services for corporate events, meetings, and small gatherings with customizable menus.',
      features: [
        'Customizable menu options',
        'Serves 20-100 people',
        'Professional setup and service',
        'Vegetarian and non-veg options'
      ],
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: PartyPopper,
      title: 'Party Orders',
      description: 'Make your celebrations special with our bulk party orders and special combo deals for large groups.',
      features: [
        'Special party combos',
        'Advance booking required',
        'Discounts on bulk orders',
        'Custom decoration support'
      ],
      image: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Clock,
      title: 'Express Service',
      description: 'Need food fast? Our express service ensures your order is prepared and ready in record time.',
      features: [
        'Ready in 10-15 minutes',
        'Limited menu items',
        'Available during peak hours',
        'Priority preparation'
      ],
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer a variety of services to make your dining experience exceptional
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300`}
            >
              <div className="lg:w-1/2 h-64 lg:h-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-amber-600 dark:text-amber-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-amber-600 dark:bg-amber-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 w-fit">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-700 dark:to-orange-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Service?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            We're flexible and can accommodate special requests. Contact us to discuss your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-amber-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};
