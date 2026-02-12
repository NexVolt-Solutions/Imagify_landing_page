import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Helmet } from 'react-helmet';

// Get root element safely
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Render the app
createRoot(rootElement).render(
  <StrictMode>
    <Helmet>
      <title>Imagify AI - Create Stunning AI Wallpapers Instantly | Free Download</title>
      <meta name="description" content="Transform ideas into beautiful wallpapers with AI. Generate unique, high-quality wallpapers for mobile & desktop. Free download on iOS & Android." />
      <meta name="keywords" content="Imagify AI, AI Wallpaper Generator, Free Wallpaper Download, Mobile Wallpaper, Desktop Wallpaper, AI Wallpaper, Wallpaper Generator, Wallpaper Download, Wallpaper App, Wallpaper Software" />
      <meta name="author" content="Imagify AI" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
    </Helmet>
    <App />
  </StrictMode>
);

// Optional: Report Web Vitals for SEO performance monitoring
if (typeof window !== 'undefined' && 'performance' in window) {
  const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(onPerfEntry);
          getFID(onPerfEntry);
          getFCP(onPerfEntry);
          getLCP(onPerfEntry);
          getTTFB(onPerfEntry);
        }
      );
    }
  };

  reportWebVitals(console.log);
}
