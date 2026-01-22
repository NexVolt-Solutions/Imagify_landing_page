import React, { useEffect } from "react";
// import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
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
        "name": "Terms and Conditions",
        "item": "https://imagifyai.com/terms-and-conditions"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - Imagify AI",
    "description": "Terms of Service and usage guidelines for Imagify AI platform",
    "url": "https://imagifyai.com/terms-and-conditions",
    "lastReviewed": "2025-01-08",
    "mainEntity": {
      "@type": "TermsOfService",
      "datePublished": "2025-01-08",
      "dateModified": "2025-01-08"
    }
  };

  return (
    <>
      {/* <Helmet>
        {/* Primary Meta Tags
        <title>Terms and Conditions | Imagify AI - Terms of Service</title>
        <meta 
          name="title" 
          content="Terms and Conditions | Imagify AI - Terms of Service" 
        />
        <meta 
          name="description" 
          content="Read Imagify AI's Terms and Conditions to understand the rules and guidelines for using our AI wallpaper generation platform. Updated January 8, 2025." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://imagifyai.com/terms-and-conditions" />

        {/* Open Graph / Facebook 
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imagifyai.com/terms-and-conditions" />
        <meta property="og:title" content="Terms and Conditions | Imagify AI" />
        <meta property="og:description" content="Terms of Service for using Imagify AI platform." />
        <meta property="og:site_name" content="Imagify AI" />

        {/* Twitter 
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://imagifyai.com/terms-and-conditions" />
        <meta name="twitter:title" content="Terms and Conditions | Imagify AI" />
        <meta name="twitter:description" content="Terms of Service for using Imagify AI platform." />

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
                  Terms and Conditions
                </li>
              </ol>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                itemProp="headline"
              >
                Terms <span className="text-yellow-400">&amp; Conditions</span>
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
                  These Terms and Conditions ("Terms") govern your use of the Imagify AI 
                  platform, mobile applications, and related services (collectively, the "Service"). 
                  By accessing or using our Service, you agree to be bound by these Terms. 
                  If you do not agree to these Terms, please do not use our Service.
                </p>
              </section>

              <section aria-labelledby="acceptance">
                <h2 id="acceptance" className="text-2xl font-semibold mb-4 text-white">
                  Acceptance of Terms
                </h2>
                <p>
                  By creating an account, accessing our platform, or using any of our services, 
                  you acknowledge that you have read, understood, and agree to be bound by these 
                  Terms and our Privacy Policy. These Terms constitute a legally binding agreement 
                  between you and Imagify AI.
                </p>
              </section>

              <section aria-labelledby="eligibility">
                <h2 id="eligibility" className="text-2xl font-semibold mb-4 text-white">
                  Eligibility
                </h2>
                <p className="mb-3">
                  To use Imagify AI, you must meet the following requirements:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" role="list">
                  <li>You must be at least 13 years old (or the minimum age required in your jurisdiction)</li>
                  <li>You must comply with all applicable local, state, national, and international laws</li>
                  <li>You must provide accurate and complete registration information</li>
                  <li>You must not be prohibited from using our services under applicable law</li>
                  <li>If under 18, you must have parental or guardian consent</li>
                </ul>
              </section>

              <section aria-labelledby="accounts">
                <h2 id="accounts" className="text-2xl font-semibold mb-4 text-white">
                  User Accounts
                </h2>
                <p className="mb-3">
                  When creating an account with Imagify AI:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" role="list">
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You are responsible for all activities that occur under your account</li>
                  <li>You must notify us immediately of any unauthorized access or security breach</li>
                  <li>You may not transfer or share your account with others</li>
                  <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
                </ul>
              </section>

              <section aria-labelledby="use-of-service">
                <h2 id="use-of-service" className="text-2xl font-semibold mb-4 text-white">
                  Use of Service
                </h2>
                <p className="mb-3">
                  Imagify AI provides AI-generated wallpapers and related creative tools. 
                  The following usage terms apply:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" role="list">
                  <li>Generated wallpapers are for personal, non-commercial use unless otherwise specified</li>
                  <li>Commercial usage requires a valid commercial license or written permission</li>
                  <li>You retain ownership of the text prompts you provide</li>
                  <li>Generated content may be used for portfolio purposes with attribution</li>
                  <li>We grant you a non-exclusive license to use generated content within scope of your plan</li>
                </ul>
              </section>

              <section aria-labelledby="intellectual-property">
                <h2 id="intellectual-property" className="text-2xl font-semibold mb-4 text-white">
                  Intellectual Property Rights
                </h2>
                <p className="mb-3">
                  All intellectual property rights in the Service, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" role="list">
                  <li>Software, algorithms, and AI models</li>
                  <li>Platform design, interface, and user experience</li>
                  <li>Branding, logos, and trademarks</li>
                  <li>Documentation and content</li>
                </ul>
                <p className="mt-3">
                  are owned by Imagify AI or our licensors. You may not copy, modify, distribute, 
                  or reverse engineer any part of our Service without explicit permission.
                </p>
              </section>

              <section aria-labelledby="prohibited">
                <h2 id="prohibited" className="text-2xl font-semibold mb-4 text-white">
                  Prohibited Activities
                </h2>
                <p className="mb-3">
                  You agree not to engage in any of the following activities:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" role="list">
                  <li>Illegal, abusive, harassing, or harmful behavior</li>
                  <li>Attempting to gain unauthorized access to our systems or user accounts</li>
                  <li>Copyright, trademark, or intellectual property infringement</li>
                  <li>Generating content that violates laws or third-party rights</li>
                  <li>Automated scraping, data mining, or excessive API usage</li>
                  <li>Impersonating others or providing false information</li>
                  <li>Distributing malware, viruses, or malicious code</li>
                  <li>Reselling or redistributing our services without authorization</li>
                </ul>
              </section>

              <section aria-labelledby="subscriptions">
                <h2 id="subscriptions" className="text-2xl font-semibold mb-4 text-white">
                  Subscriptions and Payments
                </h2>
                <p className="mb-3">
                  For paid subscription plans:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" role="list">
                  <li>Subscriptions are billed on a recurring basis (monthly or annually)</li>
                  <li>All fees are non-refundable unless required by law</li>
                  <li>You authorize us to charge your payment method automatically</li>
                  <li>Prices are subject to change with 30 days notice</li>
                  <li>You can cancel your subscription anytime from account settings</li>
                  <li>Cancellations take effect at the end of the current billing period</li>
                </ul>
              </section>

              <section aria-labelledby="content-moderation">
                <h2 id="content-moderation" className="text-2xl font-semibold mb-4 text-white">
                  Content Moderation
                </h2>
                <p>
                  We reserve the right to review, monitor, and remove content that violates 
                  these Terms or our Community Guidelines. We may also suspend or terminate 
                  accounts that repeatedly violate our policies.
                </p>
              </section>

              <section aria-labelledby="disclaimer">
                <h2 id="disclaimer" className="text-2xl font-semibold mb-4 text-white">
                  Disclaimer of Warranties
                </h2>
                <p>
                  The Service is provided "as is" and "as available" without warranties of any kind, 
                  either express or implied. We do not guarantee that the Service will be uninterrupted, 
                  error-free, or completely secure. AI-generated content may contain inaccuracies or 
                  artifacts, and we make no warranties regarding quality or accuracy.
                </p>
              </section>

              <section aria-labelledby="limitation">
                <h2 id="limitation" className="text-2xl font-semibold mb-4 text-white">
                  Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, Imagify AI and its affiliates, officers, 
                  employees, and agents shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3" role="list">
                  <li>Loss of data, revenue, or profits</li>
                  <li>Service interruptions or downtime</li>
                  <li>Errors or inaccuracies in AI-generated content</li>
                  <li>Third-party actions or content</li>
                </ul>
              </section>

              <section aria-labelledby="indemnification">
                <h2 id="indemnification" className="text-2xl font-semibold mb-4 text-white">
                  Indemnification
                </h2>
                <p>
                  You agree to indemnify and hold harmless Imagify AI from any claims, damages, 
                  losses, liabilities, and expenses arising from your use of the Service, violation 
                  of these Terms, or infringement of any third-party rights.
                </p>
              </section>

              <section aria-labelledby="termination">
                <h2 id="termination" className="text-2xl font-semibold mb-4 text-white">
                  Termination
                </h2>
                <p>
                  We may suspend or terminate your access to the Service at any time, with or without 
                  notice, for any reason, including violation of these Terms. Upon termination, your 
                  right to use the Service will immediately cease, and we may delete your account and 
                  associated data.
                </p>
              </section>

              <section aria-labelledby="changes">
                <h2 id="changes" className="text-2xl font-semibold mb-4 text-white">
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms at any time. Material changes will be 
                  communicated via email or in-app notification. Your continued use of the Service 
                  after changes constitutes acceptance of the updated Terms. We encourage you to 
                  review these Terms periodically.
                </p>
              </section>

              <section aria-labelledby="governing-law">
                <h2 id="governing-law" className="text-2xl font-semibold mb-4 text-white">
                  Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of 
                  [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes 
                  arising from these Terms shall be resolved in the courts of [Your Jurisdiction].
                </p>
              </section>

              <section aria-labelledby="contact">
                <h2 id="contact" className="text-2xl font-semibold mb-4 text-white">
                  Contact Us
                </h2>
                <p>
                  If you have questions about these Terms and Conditions, please contact us at{" "}
                  <a 
                    href="mailto:legal@imagifyai.com" 
                    className="text-yellow-400 hover:underline"
                  >
                    legal@imagifyai.com
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

export default TermsAndConditions;