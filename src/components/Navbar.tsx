import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, ShoppingCart, User } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Food", path: "/food" },
    { name: "Combo", path: "/combo" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 
                bg-white/90 dark:bg-gray-900/90 
                backdrop-blur-md shadow-lg 
                transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          <Link
            to="/"
            className="text-2xl font-bold text-amber-600 dark:text-amber-500 hover:scale-105 transition-transform duration-300"
          >
            Vibe Food
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-amber-600 dark:text-amber-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 dark:bg-amber-500 animate-pulse"></span>
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <User className="w-5 h-5" />
                  <span>{user.name}</span>
                </div>
                <button
                  onClick={signOut}
                  className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105"
              >
                Sign In
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {user.name}
                  </span>
                  <button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-all duration-300"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-all duration-300"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
