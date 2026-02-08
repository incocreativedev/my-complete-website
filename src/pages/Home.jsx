import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAlbums, fetchFeaturedPhotos } from '../utils/airtable';
import { SITE_CONFIG } from '../constants';

export default function Home() {
  const [featuredAlbums, setFeaturedAlbums] = useState([]);
  const [featuredPhotos, setFeaturedPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [albums, photos] = await Promise.all([
          fetchAlbums(true), // Featured albums only
          fetchFeaturedPhotos(6), // 6 featured photos
        ]);
        
        setFeaturedAlbums(albums);
        setFeaturedPhotos(photos);
      } catch (err) {
        console.error('Error loading homepage data:', err);
        setError('Unable to load content. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-grey-300 text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-grey-300 text-lg mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (use first featured photo or placeholder) */}
        {featuredPhotos[0] && (
          <div className="absolute inset-0">
            <img
              src={featuredPhotos[0].image}
              alt="Hero background"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/30 to-dark-900" />
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6">
            <span className="text-7xl md:text-9xl font-bold text-grey-100 block mb-2">
              {SITE_CONFIG.logo}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-grey-100 mb-6 text-balance">
            {SITE_CONFIG.name}
          </h1>
          <p className="text-xl md:text-2xl text-grey-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Fine art nature photography from Taiwan and beyond. 
            Museum-quality prints for collectors and spaces that deserve the extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/albums" className="btn btn-primary text-lg px-8 py-4">
              Explore Albums
            </Link>
            <Link to="/about" className="btn btn-ghost text-lg px-8 py-4">
              About the Photographer
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-grey-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Featured Albums */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grey-100 mb-4">
              Featured Collections
            </h2>
            <p className="text-grey-300 text-lg max-w-2xl mx-auto">
              Curated albums capturing the essence of natural landscapes, from misty mountain peaks to serene coastal horizons.
            </p>
          </div>

          {featuredAlbums.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-grey-400">No featured albums yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAlbums.map((album, index) => (
                <Link
                  key={album.id}
                  to={`/albums/${album.slug}`}
                  className="group card overflow-hidden hover-lift focus-ring"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={album.coverImage}
                      alt={album.name}
                      className="w-full h-full object-cover image-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Photo Count Badge */}
                    <div className="absolute top-4 right-4 bg-dark-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-grey-200 text-sm font-medium">
                        {album.photoCount} {album.photoCount === 1 ? 'photo' : 'photos'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-grey-100 group-hover:text-white transition-colors">
                        {album.name}
                      </h3>
                      {album.category && (
                        <span className="text-xs text-grey-400 uppercase tracking-wider">
                          {album.category}
                        </span>
                      )}
                    </div>
                    <p className="text-grey-300 leading-relaxed line-clamp-3">
                      {album.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/albums" className="btn btn-secondary inline-flex items-center space-x-2">
              <span>View All Albums</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 bg-dark-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grey-100 mb-6">
            About the Artist
          </h2>
          <p className="text-grey-300 text-lg leading-relaxed mb-8">
            Brian Chang is a Taiwanese photographer who captures the quiet grandeur of natural landscapes. 
            Through years of travel and patient observation, his work reveals moments where light, 
            atmosphere, and earth converge into something timeless.
          </p>
          <Link to="/about" className="btn btn-primary">
            Read Full Story
          </Link>
        </div>
      </section>
    </div>
  );
}
