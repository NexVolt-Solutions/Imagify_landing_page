import React, { useEffect } from "react";
// import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  // Force page to open from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://imagifyai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://imagifyai.com/privacy-policy"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Imagify AI",
    "description": "Learn how Imagify AI collects, uses, and protects your personal information and data privacy",
    "url": "https://imagifyai.com/privacy-policy",
    "lastReviewed": "2025-01-08",
    "mainEntity": {
      "@type": "PrivacyPolicy",
      "datePublished": "2025-01-08",
      "dateModified": "2025-01-08"
    }
  };

  return (
    <>
      {/* <Helmet>
        {/* Primary Meta Tags 
        <title>Privacy Policy | Imagify AI - Data Protection & Privacy</title>
        <meta 
          name="title" 
          content="Privacy Policy | Imagify AI - Data Protection & Privacy" 
        />
        <meta 
          name="description" 
          content="Read Imagify AI's Privacy Policy to understand how we collect, use, and protect your personal information. Updated January 8, 2025." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://imagifyai.com/privacy-policy" />

        {/* Open Graph / Facebook 
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imagifyai.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Imagify AI" />
        <meta property="og:description" content="Learn how Imagify AI protects your data and privacy." />
        <meta property="og:site_name" content="Imagify AI" />

        {/* Twitter 
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://imagifyai.com/privacy-policy" />
        <meta name="twitter:title" content="Privacy Policy | Imagify AI" />
        <meta name="twitter:description" content="Learn how Imagify AI protects your data and privacy." />

        {/* Structured Data 
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet> */}

      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <main>
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-6 mt-15 md:px-12 py-16"
            itemScope
            itemType="https://schema.org/Article"
          >
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-400">
                <li>
                  <a href="/" className="hover:text-yellow-400 transition">
                    Home
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  Privacy Policy
                </li>
              </ol>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                itemProp="headline"
              >
                Privacy <span className="text-yellow-400">Policy</span>
              </h1>
              <p className="text-gray-300">
                <time dateTime="2025-01-08" itemProp="datePublished">
                  Last updated: January 8, 2025
                </time>
              </p>
              <meta itemProp="author" content="Imagify AI" />
            </header>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8 leading-relaxed text-gray-300"
              itemProp="articleBody"
            >
              <section aria-labelledby="welcome">
                <h2 id="welcome" className="text-2xl font-semibold mb-4 text-white">
                  Welcome to Imagify AI
                </h2>
                <p>
                  Welcome to Imagify AI! This Privacy Policy explains how we collect,
                  use, and protect your personal information when you use our
                  AI-powered wallpaper generation services. Your privacy is important to us,
                  and we are committed to protecting your data.
                </p>
              </section>

              <section aria-labelledby="collection">
                <h2 id="collection" className="text-2xl font-semibold mb-4 text-white">
                  Information We Collect
                </h2>
                <p className="mb-3">
                  We collect the following types of information to provide and improve our services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" role="list">
                  <li>Email address and account details for authentication</li>
                  <li>Generated wallpapers and AI prompts for service improvement</li>
                  <li>Subscription and transaction history for billing purposes</li>
                  <li>Device information and usage analytics for optimization</li>
                </ul>
              </section>

              <section aria-labelledby="usage">
                <h2 id="usage" className="text-2xl font-semibold mb-4 text-white">
                  How We Use Your Information
                </h2>
                <p className="mb-3">
                  Your data is used to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" role="list">
                  <li>Improve AI results and wallpaper generation quality</li>
                  <li>Manage your account and subscription preferences</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Maintain platform security and prevent fraud</li>
                  <li>Send important updates about our services (with your consent)</li>
                </ul>
              </section>

              <section aria-labelledby="sharing">
                <h2 id="sharing" className="text-2xl font-semibold mb-4 text-white">
                  Data Sharing and Third Parties
                </h2>
                <p>
                  We do not sell your personal information. We may share data with trusted 
                  service providers who help us operate our platform, process payments, 
                  or provide analytics. These partners are bound by confidentiality agreements 
                  and may only use your data for specified purposes.
                </p>
              </section>

              <section aria-labelledby="security">
                <h2 id="security" className="text-2xl font-semibold mb-4 text-white">
                  Data Security
                </h2>
                <p>
                  We use industry-standard encryption and security practices to protect 
                  your information, including SSL/TLS encryption for data transmission 
                  and secure cloud storage. However, no method of transmission over the 
                  internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section aria-labelledby="rights">
                <h2 id="rights" className="text-2xl font-semibold mb-4 text-white">
                  Your Privacy Rights
                </h2>
                <p className="mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" role="list">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </section>

              <section aria-labelledby="cookies">
                <h2 id="cookies" className="text-2xl font-semibold mb-4 text-white">
                  Cookies and Tracking
                </h2>
                <p>
                  We use cookies and similar technologies to enhance your experience, 
                  analyze usage patterns, and remember your preferences. You can control 
                  cookie settings through your browser preferences.
                </p>
              </section>

              <section aria-labelledby="updates">
                <h2 id="updates" className="text-2xl font-semibold mb-4 text-white">
                  Policy Updates
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes 
                  in our practices or legal requirements. Material changes will be posted 
                  on this page with an updated "Last Updated" date. We encourage you to 
                  review this policy periodically.
                </p>
              </section>

              <section aria-labelledby="contact">
                <h2 id="contact" className="text-2xl font-semibold mb-4 text-white">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or how we handle your 
                  data, please contact us at{" "}
                  <a 
                    href="mailto:privacy@imagifyai.com" 
                    className="text-yellow-400 hover:underline"
                  >
                    privacy@imagifyai.com
                  </a>
                  {" "}or through our{" "}
                  <a 
                    href="/#contact-us" 
                    className="text-yellow-400 hover:underline"
                  >
                    contact form
                  </a>.
                </p>
              </section>
            </motion.div>
          </motion.article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;