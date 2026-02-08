import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-dark-800 rounded-lg p-12">
          <svg
            className="w-20 h-20 text-grey-400 mx-auto mb-6"
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
          
          <h1 className="text-3xl md:text-4xl font-bold text-grey-100 mb-4">
            Shopping Cart
          </h1>
          
          <p className="text-grey-300 text-lg mb-8">
            Cart and checkout functionality coming in Phase 2
          </p>

          <div className="bg-dark-700 rounded p-6 mb-8 text-left">
            <h3 className="text-grey-100 font-semibold mb-3">Phase 2 Features:</h3>
            <ul className="text-grey-300 text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-grey-400 mr-2">•</span>
                Add photos to cart with size/format selection
              </li>
              <li className="flex items-start">
                <span className="text-grey-400 mr-2">•</span>
                Dynamic pricing based on Printful products
              </li>
              <li className="flex items-start">
                <span className="text-grey-400 mr-2">•</span>
                Stripe checkout integration
              </li>
              <li className="flex items-start">
                <span className="text-grey-400 mr-2">•</span>
                Automatic order sync to Printful for fulfillment
              </li>
              <li className="flex items-start">
                <span className="text-grey-400 mr-2">•</span>
                Multi-currency support
              </li>
            </ul>
          </div>

          <Link to="/albums" className="btn btn-primary">
            Continue Browsing
          </Link>
        </div>
      </div>
    </div>
  );
}
