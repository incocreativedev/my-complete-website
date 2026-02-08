import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-600 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl font-bold text-grey-100">
                {SITE_CONFIG.logo}
              </span>
              <div className="flex flex-col">
                <span className="text-grey-100 font-semibold text-lg">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-grey-400 text-sm">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </div>
            <p className="text-grey-300 text-sm leading-relaxed">
              Fine art nature photography prints capturing the quiet beauty of mountains, 
              forests, and landscapes from Taiwan and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-grey-100 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/albums"
                  className="text-grey-300 hover:text-grey-100 text-sm transition-colors"
                >
                  All Albums
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-grey-300 hover:text-grey-100 text-sm transition-colors"
                >
                  About Brian
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-grey-300 hover:text-grey-100 text-sm transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-grey-300 hover:text-grey-100 text-sm transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-grey-100 font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey-300 hover:text-grey-100 text-sm transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>{SITE_CONFIG.contact.instagram}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-grey-300 hover:text-grey-100 text-sm transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
            
            {/* Newsletter signup (Phase 2 enhancement) */}
            <div>
              <p className="text-grey-400 text-xs mb-2">
                Stay updated on new releases
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-dark-700 border border-dark-600 rounded px-3 py-2 text-sm text-grey-200 placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-grey-100 focus:border-transparent"
                  disabled
                />
                <button
                  className="btn btn-primary text-sm px-4 py-2 opacity-50 cursor-not-allowed"
                  disabled
                >
                  Soon
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-600 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-grey-400 text-sm">
            © {currentYear} {SITE_CONFIG.name}. All photographs and content are protected by copyright.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-grey-400 hover:text-grey-200 text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-grey-400 hover:text-grey-200 text-sm transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
