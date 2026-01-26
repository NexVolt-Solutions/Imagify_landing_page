import React from "react";
// import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AppFeatures from "../components/AppFeatures";
import ToolsAndSoftware from "../components/ToolsAndSoftware";
import ProPackage from "../components/ProPackage";
import HowItWorks from "../components/HowItWorks";
import OurCreativeTeam from "../components/OurCreativeTeam";
import WhyImagify_AI from "../components/WhyImagify_AI";
import FAQSection from "../components/FAQSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  /* ===============================
     Structured Data
  ================================ */
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Imagify AI",
    url: "https://imagifyai.com",
    description:
      "AI-powered wallpaper generation platform for creating unique, high-quality wallpapers",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://imagifyai.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Imagify AI",
    url: "https://imagifyai.com",
    logo: "https://imagifyai.com/logo.png",
    description: "AI-powered wallpaper generation platform",
    sameAs: [
      "https://twitter.com/imagifyai",
      "https://facebook.com/imagifyai",
      "https://instagram.com/imagifyai",
    ],
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Imagify AI",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "5",
    },
    description:
      "Create stunning AI-generated wallpapers instantly using simple text prompts",
  };

  return (
    <>
      {/* <Helmet>
        <title>
          Imagify AI | AI Wallpaper Generator – Create Stunning Wallpapers
        </title>
        <meta
          name="description"
          content="Generate stunning AI wallpapers instantly with Imagify AI. Custom prompts, multiple styles, and high-resolution downloads."
        />
        <link rel="canonical" href="https://imagifyai.com" />

        {/* Open Graph 
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Imagify AI" />
        <meta property="og:url" content="https://imagifyai.com" />
        <meta
          property="og:title"
          content="Imagify AI – AI Wallpaper Generator"
        />
        <meta
          property="og:description"
          content="Create stunning AI wallpapers instantly."
        />
        <meta
          property="og:image"
          content="https://imagifyai.com/og-image.jpg"
        />

        {/* Twitter 
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data 
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(softwareAppSchema)}
        </script>
      </Helmet> */}

      <main className="min-h-screen bg-black text-white relative pt-20 overflow-x-hidden">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#1a1a1a",
              color: "#fff",
              border: "1px solid #BA8B02",
            },
          }}
        />

        <Navbar />

        <HeroSection />
        <AppFeatures />
        <ToolsAndSoftware />
        <ProPackage />
        <HowItWorks />
        <OurCreativeTeam />
        <WhyImagify_AI />
        <FAQSection />
        <ContactUs />

        <Footer />
      </main>
    </>
  );
};

export default Home;
