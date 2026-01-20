import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Chrome, Facebook } from 'lucide-react';

export const SignIn = () => {
  const { user, signInWithGoogle, signInWithFacebook } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error signing in with Google:', error);
      alert('Failed to sign in with Google. Please try again.');
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
      alert('Failed to sign in with Facebook. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 animate-scale-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to your account to continue
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-500 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <Chrome className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-500" />
              <span>Sign in with Google</span>
            </button>

            <button
              onClick={handleFacebookSignIn}
              className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-500 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <Facebook className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-500" />
              <span>Sign in with Facebook</span>
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <span className="text-amber-600 dark:text-amber-500 font-semibold cursor-pointer hover:underline">
                Sign up with Google or Facebook
              </span>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Continue as guest?{' '}
            <a
              href="/"
              className="text-amber-600 dark:text-amber-500 font-semibold hover:underline"
            >
              Browse Menu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
