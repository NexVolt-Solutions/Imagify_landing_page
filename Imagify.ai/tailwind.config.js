/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5044E5",
      },
      // Typography optimizations for better readability and SEO
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      // Spacing for better visual hierarchy (SEO considers UX)
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Animation performance (faster = better Core Web Vitals)
      transitionDuration: {
        '0': '0ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      // Optimized animations that don't hurt performance
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      // Container queries for responsive design
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      // Aspect ratios for images (prevents CLS - layout shift)
      aspectRatio: {
        'video': '16 / 9',
        'square': '1 / 1',
        'portrait': '3 / 4',
        'landscape': '4 / 3',
      },
    },
  },
  plugins: [
    // Typography plugin for better content readability (SEO benefit)
    // Uncomment and install if needed: npm install -D @tailwindcss/typography
    // require('@tailwindcss/typography'),
    
    // Forms plugin for accessible form styling
    // Uncomment and install if needed: npm install -D @tailwindcss/forms
    // require('@tailwindcss/forms'),
    
    // Aspect ratio plugin (built-in now, but listed for reference)
    // Container queries plugin
    // Uncomment and install if needed: npm install -D @tailwindcss/container-queries
    // require('@tailwindcss/container-queries'),
  ],
  // Performance optimization
  corePlugins: {
    // Remove unused core plugins to reduce CSS size
    // Uncomment plugins you don't use:
    // preflight: false, // Only if you have custom reset
  },
  // Future flags for better performance
  future: {
    hoverOnlyWhenSupported: true, // Prevents hover on touch devices
  },
  // Safelist (add classes that might be dynamically generated)
  safelist: [
    // Add any dynamically generated classes here
    // Example: 'bg-primary', 'text-primary'
  ],
}