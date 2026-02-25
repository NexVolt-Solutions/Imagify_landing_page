import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation

const ProPackage = () => {
  const navigate = useNavigate(); // ✅ Hook for SPA navigation
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  // Device detection
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  // App Store URLs
  const appStoreURL = "https://apps.apple.com/app/imagify-ai";
  const playStoreURL =
    "https://play.google.com/store/apps/details?id=com.imagify";
  const deepLinkUpgrade = "imagifyai://upgrade";

  // Analytics tracking
  const trackPricingClick = (plan, action) => {
    if (window.gtag) {
      window.gtag("event", "pricing_click", {
        event_category: "conversion",
        event_label: `${plan}_${action}`,
        plan,
        action,
      });
    }
  };

  // Handle Free Plan
  const handleFreePlanClick = () => {
    trackPricingClick("free", "download");

    if (isMobile) {
      if (isIOS) window.location.href = appStoreURL;
      else if (isAndroid) window.location.href = playStoreURL;
    } else {
      setModalType("download");
      setShowModal(true);
    }
  };

  // Handle Pro Plan — now navigates to Waitlist Signup page
  const handleProPlanClick = () => {
    trackPricingClick("pro", "upgrade");

    if (isMobile) {
      window.location.href = deepLinkUpgrade;
      setTimeout(() => {
        if (isIOS) window.location.href = appStoreURL;
        else if (isAndroid) window.location.href = playStoreURL;
      }, 500);
    } else {
      navigate("/waitlist-signup"); // ✅ Navigate to new Waitlist page
    }
  };

  // Handle Business Plan
  const handleBusinessPlanClick = () => {
    trackPricingClick("business", "contact");
    window.location.href =
      "mailto:sales@imagifyai.io?subject=Business Plan Inquiry";
  };

  const plans = [
    {
      title: "Personal Plan",
      desc: "Perfect for individuals who want to explore AI image generation and create unique visuals.",
      price: "$0",
      period: "/month",
      features: [
        "Limited AI image generation",
        "Standard resolution images",
        "Access to basic styles & themes",
        "Basic AI prompt assistance",
        "Preview & one-tap download",
      ],
      buttonText: "Download Free Now",
      buttonAction: handleFreePlanClick,
      highlight: false,
      badge: null,
      ariaLabel:
        "Free Personal Plan – Start creating AI-generated images at no cost",
    },
    {
      title: "Pro + AI Plan",
      desc: "Built for creators who want unlimited image generation, higher quality, and full creative control.",
      price: "$9",
      period: "/month",
      features: [
        "Unlimited AI image generation",
        "High-resolution image outputs",
        "Access to all styles & art themes",
        "Advanced AI prompt assistance",
        "Multiple aspect ratios & formats",
      ],
      highlight: true,
      badge: "Most Popular",
      buttonText: "Try Pro Free for 7 Days",
      buttonAction: handleProPlanClick,
      ariaLabel:
        "Pro + AI Plan – Unlimited AI image generation with premium quality",
    },
    {
      title: "Business / Team Plan",
      desc: "Designed for teams, studios, and professionals who need premium-quality AI images at scale.",
      price: "$25",
      period: "/month",
      features: [
        "Everything in Pro + AI Plan",
        "Ultra-HD & 4K image generation",
        "Exclusive premium styles",
        "Priority AI processing",
        "Prompt history, reuse & consistency",
      ],
      buttonText: "Schedule a Demo",
      buttonAction: handleBusinessPlanClick,
      highlight: false,
      badge: "Enterprise",
      ariaLabel:
        "Business Team Plan – Enterprise AI image generation with 4K quality",
    },
  ];

  return (
    <>
      <motion.section
        id="pricing"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-black px-4 sm:px-12 lg:px-24 xl:px-40 p-24"
        aria-labelledby="pricing-heading"
      >
        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto">
          <motion.h2
            id="pricing-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white"
          >
            Pricing Plans —{" "}
            <span className="text-yellow-400">Free to Pro</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-400 text-lg"
          >
            Choose the right plan to create stunning AI-generated images. Start
            free, upgrade anytime as your creativity grows.
          </motion.p>
        </header>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.12 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          role="list"
          aria-label="Imagify AI pricing plans"
        >
          {plans.map((plan, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]
                shadow-[0_0_30px_rgba(255,215,0,0.08)]
                flex flex-col relative
                ${plan.highlight ? "ring-2 ring-yellow-400/50" : ""}`}
              role="listitem"
              aria-label={plan.ariaLabel}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-white text-xl font-semibold">{plan.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{plan.desc}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-400"
                  >
                    <span className="w-5 h-5 rounded-full bg-yellow-400 text-black flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={plan.buttonAction}
                className="mt-8 py-3 rounded-lg text-white font-semibold hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{
                  background:
                    "linear-gradient(to top, rgba(186,139,2,0.4), rgba(24,24,24,0.6))",
                }}
              >
                {plan.buttonText}
              </button>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ✓ Cancel anytime • 7-day money-back guarantee • No hidden fees
        </motion.div>
      </motion.section>

      {/* Desktop Modal — only for Free plan */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="bg-[#1A1A1A] rounded-2xl p-8 max-w-md w-full border border-[#FFFFFF1A]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Download Imagify AI
            </h3>
            <p className="text-gray-400 mb-6">
              Download the app to start creating AI-generated images instantly.
            </p>
            <div className="flex gap-4">
              <a
                href={appStoreURL}
                className="flex-1 bg-yellow-400 text-black py-3 rounded-lg text-center font-semibold"
              >
                iOS App
              </a>
              <a
                href={playStoreURL}
                className="flex-1 bg-yellow-400 text-black py-3 rounded-lg text-center font-semibold"
              >
                Android App
              </a>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full py-2 text-gray-400 hover:text-white"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProPackage;
