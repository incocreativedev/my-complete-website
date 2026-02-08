import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAlbumBySlug } from '../utils/airtable';
import PhotoLightbox from '../components/PhotoLightbox';

export default function AlbumDetail() {
  const { slug } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  useEffect(() => {
    async function loadAlbum() {
      try {
        const data = await fetchAlbumBySlug(slug);
        setAlbum(data);
      } catch (err) {
        console.error('Error loading album:', err);
        setError('Album not found or unable to load.');
      } finally {
        setLoading(false);
      }
    }

    loadAlbum();
  }, [slug]);

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-grey-300 text-lg">Loading album...</div>
        </div>
      </div>
    );
  }

  if (error || !album) {
    return (
      <div className="min-h-screen pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-grey-300 text-lg mb-4">{error}</p>
          <Link to="/albums" className="btn btn-primary">
            Back to Albums
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center space-x-2 text-sm text-grey-400">
          <Link to="/albums" className="hover:text-grey-100 transition-colors">
            Albums
          </Link>
          <span>/</span>
          <span className="text-grey-200">{album.name}</span>
        </nav>

        {/* Album Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 mb-4">
            {album.category && (
              <span className="text-xs text-grey-400 uppercase tracking-wider">
                {album.category}
              </span>
            )}
            <span className="text-grey-500">•</span>
            <span className="text-sm text-grey-400">
              {album.photos.length} {album.photos.length === 1 ? 'print' : 'prints'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-grey-100 mb-6">
            {album.name}
          </h1>
          
          <p className="text-grey-300 text-lg leading-relaxed">
            {album.description}
          </p>
        </div>

        {/* Photo Gallery - Masonry Grid */}
        {album.photos.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-grey-400">No photos in this album yet.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {album.photos.map((photo, index) => (
              <div
                key={photo.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-lg bg-dark-700">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full image-hover"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-grey-100 font-semibold text-lg mb-1">
                      {photo.title}
                    </h3>
                    {photo.location && (
                      <p className="text-grey-300 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {photo.location}
                      </p>
                    )}
                    {photo.availableForSale && (
                      <div className="mt-3 flex items-center text-grey-100 text-sm font-medium">
                        <span>View Print Options</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <PhotoLightbox
          photos={album.photos}
          initialIndex={selectedPhotoIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
