// Site-wide constants and configuration

export const SITE_CONFIG = {
  name: 'Brian Chang',
  tagline: 'Nature Photography Prints',
  domain: 'brianchangprints.com', // Update when domain is registered
  logo: '张', // Your surname as the brand mark
  
  contact: {
    email: 'hello@brianchangprints.com', // Update with real email
    instagram: '@brianpandachang',
    instagramUrl: 'https://instagram.com/brianpandachang',
  },
  
  // SEO defaults
  seo: {
    defaultTitle: 'Brian Chang Photography Prints',
    defaultDescription: 'Fine art nature photography prints from Taiwan and beyond. Landscape, mountain, and travel photography available as museum-quality prints.',
    keywords: ['photography prints', 'nature photography', 'landscape prints', 'Taiwan photography', 'travel photography', 'fine art prints'],
  },
};

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'Albums', path: '/albums' },
  { name: 'About', path: '/about' },
];

// Print product options (will be synced with Printful in Phase 2)
export const PRINT_FORMATS = {
  poster: {
    name: 'Poster',
    description: 'Unframed print on premium photo paper',
    sizes: [
      { name: '8x10"', price: 29 },
      { name: '11x14"', price: 39 },
      { name: '16x20"', price: 59 },
      { name: '18x24"', price: 79 },
      { name: '24x36"', price: 99 },
    ],
  },
  framedPrint: {
    name: 'Framed Print',
    description: 'Museum-quality print in black, white, or wood frame',
    sizes: [
      { name: '8x10"', price: 79 },
      { name: '11x14"', price: 99 },
      { name: '16x20"', price: 149 },
      { name: '18x24"', price: 189 },
    ],
    frames: ['Black', 'White', 'Natural Wood'],
  },
  canvas: {
    name: 'Canvas',
    description: 'Gallery-wrapped canvas ready to hang',
    sizes: [
      { name: '12x16"', price: 89 },
      { name: '16x20"', price: 119 },
      { name: '18x24"', price: 149 },
      { name: '24x36"', price: 199 },
    ],
  },
  metal: {
    name: 'Metal Print',
    description: 'Vibrant aluminum print with float mount',
    sizes: [
      { name: '12x16"', price: 149 },
      { name: '16x20"', price: 189 },
      { name: '18x24"', price: 249 },
      { name: '24x36"', price: 349 },
    ],
  },
};

// Animation durations (consistent timing)
export const ANIMATION_DURATION = {
  fast: 200,
  medium: 300,
  slow: 500,
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Image loading placeholder (low-quality placeholder)
export const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231f1f1f" width="400" height="300"/%3E%3C/svg%3E';
