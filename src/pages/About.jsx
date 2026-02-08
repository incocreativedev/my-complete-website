import { SITE_CONFIG } from '../constants';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-6xl md:text-8xl font-bold text-grey-100 block">
              {SITE_CONFIG.logo}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-grey-100 mb-4">
            About {SITE_CONFIG.name}
          </h1>
          <p className="text-grey-300 text-xl">
            Taiwanese photographer capturing nature's quiet grandeur
          </p>
        </div>

        {/* Main Story */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-dark-800 rounded-lg p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-grey-100 mb-6">
              The Journey
            </h2>
            
            <p className="text-grey-300 leading-relaxed mb-6">
              Born and raised in Taiwan, I've spent years exploring the natural world through a lens — 
              from the misty highlands of Hehuanshan to remote coastlines where land meets ocean in 
              timeless dialogue. Photography, for me, is not about conquest or documentation. It's about 
              witnessing. It's about being present when the light shifts, when fog reveals mountain ridges 
              slowly, when the ordinary world reveals itself as extraordinary.
            </p>

            <p className="text-grey-300 leading-relaxed mb-6">
              My work focuses on nature photography — landscapes, mountains, forests, and seascapes — 
              captured across Taiwan and my travels beyond. Each photograph is a meditation on patience, 
              on waiting for moments that cannot be forced. I don't manipulate scenes heavily; I seek them 
              as they are, in their raw and unadorned truth.
            </p>

            <p className="text-grey-300 leading-relaxed">
              The prints you see here are museum-quality reproductions, carefully prepared to preserve the 
              depth, texture, and atmosphere of the original moment. They are made for collectors, for 
              thoughtful spaces, for anyone who wants to live with work that invites contemplation rather 
              than demanding attention.
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dark-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-grey-100 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                The Approach
              </h3>
              <p className="text-grey-300 text-sm leading-relaxed">
                Minimal intervention. No staged compositions. I wait for nature to reveal itself, 
                then preserve that moment with technical precision and emotional honesty.
              </p>
            </div>

            <div className="bg-dark-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-grey-100 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                The Craft
              </h3>
              <p className="text-grey-300 text-sm leading-relaxed">
                Every print is produced through trusted partnerships with professional labs using 
                archival materials. Quality isn't negotiable — these are works meant to last generations.
              </p>
            </div>
          </div>

          {/* Taiwan Connection */}
          <div className="bg-dark-800 rounded-lg p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-grey-100 mb-6 flex items-center">
              <span className="text-4xl mr-3">{SITE_CONFIG.logo}</span>
              <span>Taiwan & Identity</span>
            </h2>
            
            <p className="text-grey-300 leading-relaxed mb-4">
              My surname — 张 (Zhang/Chang) — serves as the visual identity for this work. It's a connection 
              to heritage, to lineage, to the island that shaped how I see. Taiwan's landscapes — its volcanic 
              peaks, subtropical forests, and jagged coastlines — taught me to appreciate the drama hidden in 
              subtlety.
            </p>

            <p className="text-grey-300 leading-relaxed">
              Though I travel widely, Taiwan remains a constant point of return. Many of my most intimate 
              photographs come from its mountains and shores, places I've walked countless times yet continue 
              to surprise me with new light, new weather, new moods.
            </p>
          </div>

          {/* Contact & Connect */}
          <div className="text-center bg-dark-800 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-grey-100 mb-6">
              Let's Connect
            </h2>
            
            <p className="text-grey-300 mb-6">
              For inquiries about custom prints, licensing, or collaborations:
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="btn btn-primary inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Me</span>
              </a>

              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow on Instagram</span>
              </a>
            </div>

            <p className="text-grey-400 text-sm">
              Based in Taiwan • Shipping worldwide via trusted print partners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
