import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OfferBanner } from './components/OfferBanner';
import { Home } from './pages/Home';
import { Food } from './pages/Food';
import { Combo } from './pages/Combo';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <OfferBanner />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/food" element={<Food />} />
              <Route path="/combo" element={<Combo />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
