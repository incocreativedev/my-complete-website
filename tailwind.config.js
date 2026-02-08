/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brian's dark theme palette
        dark: {
          900: '#0a0a0a', // deepest black (backgrounds)
          800: '#141414', // elevated surfaces
          700: '#1f1f1f', // cards, modals
          600: '#2a2a2a', // borders, dividers
          500: '#3d3d3d', // subtle elements
        },
        grey: {
          100: '#f5f5f5', // brightest text
          200: '#e0e0e0', // body text
          300: '#b8b8b8', // muted text
          400: '#8a8a8a', // placeholder text
          500: '#5c5c5c', // disabled state
        },
        accent: {
          white: '#ffffff', // pure white for emphasis
          taiwan: '#ff4d4d', // subtle red accent for 张 logo (optional)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Clash Display', 'Inter', 'sans-serif'], // For headings
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        // Consistent spacing rhythm (8px base)
        '18': '4.5rem',
        '88': '22rem',
        '104': '26rem',
        '128': '32rem',
      },
      fontSize: {
        // Typographic scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
