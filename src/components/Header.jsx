import { Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG, NAVIGATION } from '../constants';
import { useState, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Will integrate with cart state in Phase 2

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-600'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 group focus-ring rounded-md"
        >
          <div className="text-2xl font-bold text-grey-100 transition-transform duration-300 group-hover:scale-110">
            {SITE_CONFIG.logo}
          </div>
          <div className="flex flex-col">
            <span className="text-grey-100 font-semibold text-lg leading-tight tracking-tight">
              {SITE_CONFIG.name}
            </span>
            <span className="text-grey-400 text-xs tracking-wide">
              {SITE_CONFIG.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 focus-ring rounded-md px-3 py-2 ${
                  isActive
                    ? 'text-grey-100'
                    : 'text-grey-300 hover:text-grey-100'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Cart Icon */}
        <Link
          to="/cart"
          className="relative group focus-ring rounded-md p-2"
          aria-label="Shopping cart"
        >
          <svg
            className="w-6 h-6 text-grey-200 group-hover:text-grey-100 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-grey-100 text-dark-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>

      {/* Mobile Navigation (Phase 1.5 enhancement) */}
      <div className="md:hidden border-t border-dark-600 bg-dark-900/95 backdrop-blur-md">
        <div className="flex justify-around py-3">
          {NAVIGATION.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-medium transition-colors duration-200 px-4 py-2 ${
                  isActive
                    ? 'text-grey-100'
                    : 'text-grey-300'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
