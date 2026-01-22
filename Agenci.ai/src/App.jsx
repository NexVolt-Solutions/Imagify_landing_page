import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Google Analytics pageview tracking (optional)
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics ID
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// 404 Not Found Page Component
const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition"
          style={{
            background: "linear-gradient(90deg, #BA8B02, #181818)",
          }}
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

const App = () => {
  return (
      <BrowserRouter>
        <ScrollToTop />
        <GoogleAnalytics />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          
          {/* 404 Route - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;