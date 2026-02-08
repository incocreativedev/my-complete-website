import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-bold text-grey-100 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-grey-200 mb-6">
          Page Not Found
        </h2>
        <p className="text-grey-300 text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
