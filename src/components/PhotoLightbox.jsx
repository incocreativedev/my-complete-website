import { useEffect, useState } from 'react';

export default function PhotoLightbox({ photos, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentPhoto = photos[currentIndex];
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < photos.length - 1;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && canGoPrev) {
        goToPrevious();
      } else if (e.key === 'ArrowRight' && canGoNext) {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const goToPrevious = () => {
    if (canGoPrev) {
      setCurrentIndex(currentIndex - 1);
      setIsZoomed(false);
    }
  };

  const goToNext = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1);
      setIsZoomed(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-dark-900/98 backdrop-blur-sm animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-dark-800/80 hover:bg-dark-700 transition-colors focus-ring group"
        aria-label="Close lightbox"
      >
        <svg
          className="w-6 h-6 text-grey-200 group-hover:text-grey-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Photo Counter */}
      <div className="fixed top-6 left-6 z-50 bg-dark-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
        <span className="text-grey-200 text-sm font-medium">
          {currentIndex + 1} / {photos.length}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="h-full flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-center">
          {/* Photo */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative max-w-full max-h-[70vh]">
              <img
                src={currentPhoto.image}
                alt={currentPhoto.title}
                className={`max-w-full max-h-[70vh] object-contain transition-transform duration-300 cursor-zoom-in ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : ''
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            </div>
          </div>

          {/* Photo Info Sidebar */}
          <div className="w-full lg:w-96 bg-dark-800/60 backdrop-blur-md rounded-lg p-6 lg:max-h-[70vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-grey-100 mb-3">
              {currentPhoto.title}
            </h2>

            {currentPhoto.location && (
              <div className="flex items-center text-grey-300 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">{currentPhoto.location}</span>
                {currentPhoto.year && (
                  <>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{currentPhoto.year}</span>
                  </>
                )}
              </div>
            )}

            {currentPhoto.story && (
              <p className="text-grey-300 leading-relaxed mb-6">
                {currentPhoto.story}
              </p>
            )}

            {currentPhoto.tags && currentPhoto.tags.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {currentPhoto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-700 text-grey-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button (Phase 2) */}
            {currentPhoto.availableForSale && (
              <div className="border-t border-dark-600 pt-6">
                <button
                  className="w-full btn btn-primary flex items-center justify-center space-x-2"
                  disabled
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>Select Print Options</span>
                </button>
                <p className="text-grey-400 text-xs text-center mt-2">
                  Coming in Phase 2
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {canGoPrev && (
        <button
          onClick={goToPrevious}
          className="fixed left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-dark-800/80 hover:bg-dark-700 transition-colors focus-ring group"
          aria-label="Previous photo"
        >
          <svg
            className="w-6 h-6 text-grey-200 group-hover:text-grey-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {canGoNext && (
        <button
          onClick={goToNext}
          className="fixed right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-dark-800/80 hover:bg-dark-700 transition-colors focus-ring group"
          aria-label="Next photo"
        >
          <svg
            className="w-6 h-6 text-grey-200 group-hover:text-grey-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Thumbnail Navigation (bottom) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 max-w-4xl overflow-x-auto">
        <div className="flex space-x-2 px-4">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => {
                setCurrentIndex(index);
                setIsZoomed(false);
              }}
              className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden transition-all duration-200 focus-ring ${
                index === currentIndex
                  ? 'ring-2 ring-grey-100 scale-110'
                  : 'opacity-50 hover:opacity-100'
              }`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
