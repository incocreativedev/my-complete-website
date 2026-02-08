import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../utils/airtable';

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    async function loadAlbums() {
      try {
        const data = await fetchAlbums(); // All albums, not just featured
        setAlbums(data);
      } catch (err) {
        console.error('Error loading albums:', err);
        setError('Unable to load albums. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    loadAlbums();
  }, []);

  // Extract unique categories
  const categories = ['All', ...new Set(albums.map(a => a.category).filter(Boolean))];

  // Filter albums by category
  const filteredAlbums = selectedCategory === 'All'
    ? albums
    : albums.filter(a => a.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-grey-300 text-lg">Loading albums...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-grey-300 text-lg mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-grey-100 mb-4">
            All Albums
          </h1>
          <p className="text-grey-300 text-lg max-w-2xl mx-auto">
            Explore curated collections of nature photography from mountains to oceans, 
            Taiwan to distant horizons.
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 1 && (
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring ${
                  selectedCategory === category
                    ? 'bg-grey-100 text-dark-900'
                    : 'bg-dark-700 text-grey-300 hover:bg-dark-600 hover:text-grey-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Albums Grid */}
        {filteredAlbums.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-grey-400 text-lg">
              {selectedCategory === 'All' 
                ? 'No albums available yet.' 
                : `No albums in "${selectedCategory}" category.`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlbums.map((album, index) => (
              <Link
                key={album.id}
                to={`/albums/${album.slug}`}
                className="group card overflow-hidden hover-lift focus-ring animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Album Cover */}
                <div className="relative aspect-[4/3] overflow-hidden bg-dark-700">
                  <img
                    src={album.coverImage}
                    alt={album.name}
                    className="w-full h-full object-cover image-hover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Photo Count */}
                  <div className="absolute top-4 right-4 bg-dark-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-grey-200 text-sm font-medium">
                      {album.photoCount} {album.photoCount === 1 ? 'print' : 'prints'}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {album.featured && (
                    <div className="absolute top-4 left-4 bg-grey-100/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-dark-900 text-xs font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Album Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-grey-100 group-hover:text-white transition-colors flex-1">
                      {album.name}
                    </h3>
                    {album.category && (
                      <span className="text-xs text-grey-400 uppercase tracking-wider ml-3 mt-1">
                        {album.category}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-grey-300 leading-relaxed line-clamp-3 mb-4">
                    {album.description}
                  </p>

                  {/* View Album Link */}
                  <div className="flex items-center text-grey-100 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                    <span>View Collection</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
