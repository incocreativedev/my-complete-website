# Brian Chang Photography Prints

A modern, dark-themed photography print shop built with React, Vite, Tailwind CSS, and Airtable.

## 🎯 Project Overview

This is a **Phase 1** build focusing on the core gallery experience. Future phases will add shopping cart, payments, and Printful integration.

### Current Features (Phase 1)
- ✅ Dark, cinematic design with Taiwan-inspired branding (张)
- ✅ Homepage with hero and featured albums
- ✅ Album browsing with category filtering
- ✅ Masonry photo galleries
- ✅ Full-screen lightbox with zoom, keyboard navigation
- ✅ Responsive design (mobile-first)
- ✅ Live Airtable integration
- ✅ About page with photographer story
- ✅ Fast loading with optimized images

### Coming in Phase 2
- ⏳ Shopping cart functionality
- ⏳ Print format/size selection
- ⏳ Stripe checkout
- ⏳ Printful API integration
- ⏳ Dynamic pricing
- ⏳ Multi-currency support

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- An Airtable account (free tier is fine)
- Your photography content ready to upload

### 1. Set Up Airtable

Follow the detailed guide in `AIRTABLE_SETUP.md` to:
1. Create your Airtable base with Albums, Photos, and Orders tables
2. Upload your photos and organize into albums
3. Get your API credentials (Base ID and Personal Access Token)

### 2. Clone and Install

```bash
# Navigate to the project directory
cd brian-chang-prints

# Install dependencies
npm install
```

### 3. Configure Environment Variables

```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your Airtable credentials
VITE_AIRTABLE_API_KEY=your_personal_access_token
VITE_AIRTABLE_BASE_ID=your_base_id
```

### 4. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
brian-chang-prints/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   └── PhotoLightbox.jsx # Full-screen photo viewer
│   ├── pages/               # Route pages
│   │   ├── Home.jsx         # Homepage with hero + featured albums
│   │   ├── Albums.jsx       # All albums grid
│   │   ├── AlbumDetail.jsx  # Individual album with gallery
│   │   ├── About.jsx        # Photographer story
│   │   ├── Cart.jsx         # Shopping cart (Phase 2)
│   │   └── NotFound.jsx     # 404 page
│   ├── utils/               # Utility functions
│   │   └── airtable.js      # Airtable API service
│   ├── constants/           # Site configuration
│   │   └── index.js         # Site config, navigation, print options
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles + Tailwind
├── public/                  # Static assets
├── AIRTABLE_SETUP.md        # Detailed Airtable setup guide
├── .env.example             # Environment variable template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎨 Design System

### Colors
The dark theme uses a carefully calibrated grayscale palette:

- **Backgrounds**: `dark-900` (deepest) → `dark-700` (cards)
- **Text**: `grey-100` (brightest) → `grey-400` (muted)
- **Accent**: Pure white for emphasis, optional Taiwan red for 张 logo

### Typography
- **Sans**: Inter (body text, UI)
- **Display**: Clash Display (headings) — optional custom font
- **Scale**: Modular scale from 12px to 72px

### Spacing
8px base grid for consistent rhythm throughout the design.

### Animations
- Fade-in on page load
- Hover effects on images (subtle scale + brightness)
- Smooth transitions (200-500ms)

---

## 🔧 Configuration

### Site Settings
Edit `src/constants/index.js` to customize:
- Site name, tagline, logo
- Contact email and social links
- SEO defaults
- Print product options (for Phase 2)

### Airtable Schema
See `AIRTABLE_SETUP.md` for the complete database structure.

---

## 🌐 Deployment

### Recommended Platform: **Vercel** (free tier)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Phase 1"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite
   - Add environment variables:
     - `VITE_AIRTABLE_API_KEY`
     - `VITE_AIRTABLE_BASE_ID`
   - Deploy!

3. **Custom Domain** (optional)
   - In Vercel project settings → Domains
   - Add `brianchangprints.com` (or your chosen domain)
   - Update DNS records as instructed

### Alternative: Netlify

Similar process to Vercel:
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables

---

## 🖼️ Content Guidelines

### Photos
- **Watermarked versions**: 1200-1600px wide, JPEG, 150-300kb
  - Include 张 watermark (15-20% opacity, bottom corner)
- **Original versions**: Full resolution for future Phase 2 delivery

### Albums
- **Cover image**: Your best/most representative photo
- **Description**: 2-4 sentences telling the story of the collection
- **Slug**: lowercase, hyphens only (e.g., "taiwan-highlands")

### Stories
Write 1-3 paragraphs per photo about:
- Where and when it was taken
- What made you stop and capture it
- Technical or emotional context

---

## 📊 Performance

- **Target load time**: < 3 seconds
- **Lighthouse scores**: 90+ across all categories
- **Image optimization**: Lazy loading, responsive images
- **Code splitting**: Route-based with React Router

---

## 🔐 Security

- API keys stored in environment variables (never committed)
- CORS handled by Airtable
- No server-side code (static hosting)
- Phase 2 will add Stripe (PCI-compliant) for payments

---

## 🛠️ Development Tips

### Adding a New Page
1. Create component in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/constants/index.js` (if needed)

### Customizing Styles
- Global styles: `src/index.css`
- Component styles: Use Tailwind utility classes
- Design tokens: `tailwind.config.js`

### Testing Locally
```bash
# Development server
npm run dev

# Production build (test before deploying)
npm run build
npm run preview
```

---

## 📞 Support & Contact

For questions or issues with this codebase:
- Check `AIRTABLE_SETUP.md` for database issues
- Review Tailwind docs for styling: [tailwindcss.com](https://tailwindcss.com)
- React Router docs: [reactrouter.com](https://reactrouter.com)

---

## 🗺️ Roadmap

### Phase 1 ✅ (Current)
Gallery experience, Airtable integration, responsive design

### Phase 2 (Next)
- Shopping cart with persistent state
- Printful API integration
- Stripe checkout
- Dynamic pricing
- Order management

### Phase 3 (Future)
- User accounts
- Order history
- Favorites/wishlists
- Email notifications
- Advanced search & filters

### Phase 4 (Enhancement)
- Newsletter integration
- Analytics
- Performance monitoring
- SEO optimization
- Automated watermarking

---

## 📄 License

All photographs © Brian Chang. All rights reserved.

Code is provided for Brian Chang's use. Not licensed for redistribution.

---

**Built with care by a designer who codes.**  
Dark theme • Fast loading • Taiwan-inspired • Nature-focused
