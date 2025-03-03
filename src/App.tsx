import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Info, Mail } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold">EcoPlast</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <NavLink to="/" active={location.pathname === "/"}>
                <Home size={18} className="mr-1" />
                Home
              </NavLink>
              <NavLink to="/about" active={location.pathname === "/about"}>
                <Info size={18} className="mr-1" />
                About Us
              </NavLink>
              <NavLink to="/contact" active={location.pathname === "/contact"}>
                <Mail size={18} className="mr-1" />
                Contact
              </NavLink>
            </nav>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">EcoPlast</h3>
              <p className="text-gray-300">
                Leading manufacturer of eco-friendly plastic packaging solutions since 1995.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <address className="text-gray-300 not-italic">
                <p>123 Manufacturing Way</p>
                <p>Industrial District</p>
                <p>Anytown, ST 12345</p>
                <p className="mt-2">Email: info@ecoplast.com</p>
                <p>Phone: (555) 123-4567</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EcoPlast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center hover:text-green-200 transition-colors ${active ? 'font-semibold text-white' : 'text-green-100'}`}
    >
      {children}
    </Link>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 rounded text-green-100 hover:text-white hover:bg-green-800"
      >
        <span className="sr-only">Open menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 right-4 w-48 py-2 bg-green-700 rounded-md shadow-xl z-50">
          <Link to="/" className="block px-4 py-2 text-white hover:bg-green-800">
            <div className="flex items-center">
              <Home size={18} className="mr-2" />
              Home
            </div>
          </Link>
          <Link to="/about" className="block px-4 py-2 text-white hover:bg-green-800">
            <div className="flex items-center">
              <Info size={18} className="mr-2" />
              About Us
            </div>
          </Link>
          <Link to="/contact" className="block px-4 py-2 text-white hover:bg-green-800">
            <div className="flex items-center">
              <Mail size={18} className="mr-2" />
              Contact
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;