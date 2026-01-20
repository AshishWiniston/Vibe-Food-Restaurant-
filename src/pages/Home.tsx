import { Link } from 'react-router-dom';
import { ChefHat, UtensilsCrossed, Clock, Award } from 'lucide-react';

export const Home = () => {
  const cuisines = [
    {
      name: 'Tamil Nadu',
      image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Authentic Tamil flavors with rich spices and traditional recipes'
    },
    {
      name: 'Kerala',
      image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Coastal delicacies with coconut-infused curries'
    },
    {
      name: 'Karnataka',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Traditional Karnataka cuisine with unique flavors'
    },
    {
      name: 'Korean',
      image: 'https://images.pexels.com/photos/8751219/pexels-photo-8751219.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Bold Korean flavors with a modern twist'
    }
  ];

  const features = [
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'Experienced chefs crafting authentic dishes'
    },
    {
      icon: UtensilsCrossed,
      title: 'Fresh Ingredients',
      description: 'Only the finest and freshest ingredients'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick preparation and timely delivery'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Award-winning cuisine and service'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Welcome to <span className="text-amber-500">Vibe Food</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up">
            Experience the finest blend of South Indian and Korean cuisines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/food"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Menu
            </Link>
            <Link
              to="/combo"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-amber-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Combos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            We bring you the perfect combination of authentic flavors, premium quality, and exceptional service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-amber-600 dark:text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Our Signature Cuisines
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore our diverse menu featuring authentic dishes from different regions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cuisines.map((cuisine, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{cuisine.name}</h3>
                  <p className="text-gray-200 text-sm">{cuisine.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/food"
              className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-700 dark:to-orange-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Experience Premium Dining?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Order now and taste the difference
          </p>
          <Link
            to="/food"
            className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-amber-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};
