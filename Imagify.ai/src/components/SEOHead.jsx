import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title = "Imagify AI - Create Stunning AI Wallpapers Instantly | Free Download",
  description = "Transform ideas into beautiful wallpapers with AI. Generate unique, high-quality wallpapers for mobile & desktop. Free download on iOS & Android.",
  canonical = "https://imagifyai.io/",
  ogImage = "https://imagifyai.io/og-image.jpg"
}) => {
  const currentURL = typeof window !== "undefined" ? window.location.href : canonical;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MobileApplication",
        "name": "Imagify AI",
        "operatingSystem": ["iOS", "Android"],
        "applicationCategory": "DesignApplication",
        "description": "Create stunning AI-generated wallpapers instantly. Transform text into beautiful wallpapers with 68+ AI models.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "2500",
          "bestRating": "5"
        },
        "downloadUrl": [
          "https://apps.apple.com/app/imagify-ai",
          "https://play.google.com/store/apps/details?id=com.imagify"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I create AI wallpapers for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Download Imagify AI for free on iOS or Android. You get daily free credits to generate AI wallpapers. Simply describe your wallpaper idea, choose a style, and let our AI create stunning backgrounds instantly."
            }
          },
          {
            "@type": "Question",
            "name": "What's the best AI wallpaper generator app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Imagify AI is rated 4.8/5 stars with 50,000+ downloads. It offers 68+ AI models, 4K quality output, and instant wallpaper generation with both free and premium options."
            }
          },
          {
            "@type": "Question",
            "name": "Can I make 4K wallpapers with AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Imagify AI Pro offers 4K Ultra-HD quality wallpapers. The Pro plan includes unlimited generations, exclusive styles, and priority AI processing for the highest quality results."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Imagify AI",
        "url": "https://imagifyai.io",
        "logo": "https://imagifyai.io/logo.png",
        "sameAs": [
          "https://twitter.com/imagifyai",
          "https://instagram.com/imagifyai",
          "https://facebook.com/imagifyai"
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="AI wallpaper generator, AI wallpaper app, create wallpapers with AI, custom wallpaper maker, AI background generator, free wallpaper creator, 4K wallpaper app, anime wallpaper AI, how to create AI wallpapers" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Imagify AI" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentURL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
