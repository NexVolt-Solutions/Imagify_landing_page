import React from "react";
import { motion } from "motion/react";

const plans = [
  {
    title: "Personal Plan",
    desc: "Perfect for individual users who want to create unique wallpapers.",
    price: "$0",
    period: "/month",
    features: [
      "Limited AI wallpaper generation",
      "Standard resolution wallpapers",
      "Access to basic styles",
      "Basic AI prompt suggestions",
      "Preview & one-tap wallpaper setup",
    ],
    buttonText: "Get Started Free",
    ariaLabel: "Free Personal Plan - Start creating AI wallpapers at no cost"
  },
  {
    title: "Pro + AI Plan",
    desc: "For active creators who want premium quality and more control.",
    price: "$9",
    period: "/month",
    features: [
      "Unlimited AI wallpaper generation",
      "High-resolution wallpapers",
      "Access to all popular styles",
      "Smart AI prompt assistance",
      "Multiple aspect ratios",
    ],
    highlight: true,
    buttonText: "Upgrade to Pro",
    ariaLabel: "Pro + AI Plan at $9 per month - Unlimited premium wallpapers"
  },
  {
    title: "Business / Team Plan",
    desc: "Built for teams, studios, and professional content creators.",
    price: "$25",
    period: "/month",
    features: [
      "Everything in Pro + AI Plan",
      "Ultra-HD & 4K wallpapers",
      "Exclusive premium styles",
      "Priority AI processing",
      "Prompt history & reuse",
    ],
    buttonText: "Contact Sales",
    ariaLabel: "Business Team Plan at $25 per month - Enterprise features with 4K quality"
  },
];

const ProPackage = () => {
  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black px-4 sm:px-12 pt-0 lg:px-24 xl:px-40 py-24"
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
          Pro <span className="text-yellow-400">Package</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 text-lg"
        >
          Take your screen to the next level with Imagify AI Pro — because your
          wallpapers deserve to be smarter, sharper, and truly unique.
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
            className={`
              rounded-2xl p-6
              bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]
              shadow-[0_0_30px_rgba(255,215,0,0.08)]
              flex flex-col
              ${plan.highlight ? 'ring-2 ring-yellow-400/50' : ''}
            `}
            role="listitem"
            aria-label={plan.ariaLabel}
          >
            <header>
              <h3 className="text-white text-xl font-semibold">
                {plan.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {plan.desc}
              </p>
            </header>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-3xl font-bold text-white" aria-label={`Price: ${plan.price} per month`}>
                {plan.price}
              </span>
              <span className="text-gray-400 text-sm" aria-hidden="true">
                {plan.period}
              </span>
            </div>

            <ul className="mt-6 space-y-3" role="list" aria-label="Plan features">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-400"
                >
                  <span 
                    className="w-5 h-5 rounded-full bg-yellow-400 text-black flex items-center justify-center text-xs font-bold flex-shrink-0"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className="mt-8 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={{
                background: "linear-gradient(to top, rgba(186, 139, 2, 0.4), rgba(24, 24, 24, 0.6))"
              }}
              aria-label={`${plan.buttonText} - ${plan.title}`}
            >
              {plan.buttonText}
            </button>
          </motion.article>
        ))}
      </motion.div>

      {/* Schema.org Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Imagify AI",
          "description": "AI-powered wallpaper generation app with multiple pricing tiers",
          "offers": plans.map(plan => ({
            "@type": "Offer",
            "name": plan.title,
            "description": plan.desc,
            "price": plan.price.replace('$', ''),
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": plan.price.replace('$', ''),
              "priceCurrency": "USD",
              "billingDuration": "P1M"
            }
          }))
        })}
      </script>
    </motion.section>
  );
};

export default ProPackage;