import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Bundle size visualization (helpful for optimization)
    // Uncomment to generate bundle analysis
    // visualizer({
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
  
  // Build optimizations for better performance (Core Web Vitals)
  build: {
    // Target modern browsers for smaller bundles
    target: 'es2015',
    
    // Optimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    
    // Code splitting for better loading performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['motion/react'],
        },
      },
    },
    
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets < 4kb as base64
    chunkSizeWarningLimit: 1000, // Warn for chunks > 1000kb
    
    // Source maps for production debugging (optional)
    sourcemap: false, // Set to true if you need source maps
  },
  
  // Performance optimizations
  optimizeDeps: {
    exclude: ['@heroicons/react'],
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  
  // Server configuration for development
  server: {
    port: 3000,
    strictPort: false,
    open: true, // Auto-open browser
    cors: true,
  },
  
  // Preview server (for production builds)
  preview: {
    port: 4173,
    strictPort: false,
    open: true,
  },
  
  // Environment variables prefix
  envPrefix: 'VITE_',
  
  // CSS optimization
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      // Add any CSS preprocessor options here
    },
  },
  
  // Resolve configuration for cleaner imports
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
    },
  },
  
  // Production-specific optimizations
  esbuild: {
    // Remove console.log in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none', // Remove comments in production
  },
})