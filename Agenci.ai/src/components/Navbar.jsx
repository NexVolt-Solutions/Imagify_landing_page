import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import assets from "../assets/assets";
import { motion, AnimatePresence } from "motion/react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NAVBAR_HEIGHT = 80; // h-20

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  // Disable body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [sidebarOpen]);

  const navLinks = [
    { name: "Home", hash: "#home", ariaLabel: "Navigate to home section" },
    { name: "Features", hash: "#features", ariaLabel: "View AI image generation features" },
    { name: "How It Works", hash: "#how-it-works", ariaLabel: "Learn how Imagify AI works" },
    { name: "Pricing", hash: "#pricing", ariaLabel: "View pricing plans" },
    { name: "Why Imagify AI", hash: "#why-imagify-ai", ariaLabel: "Discover why choose Imagify AI" },
    { name: "FAQs", hash: "#faqs", ariaLabel: "Read frequently asked questions" },
  ];

  const handleNavClick = (hash) => {
    setSidebarOpen(false);

    // If not on home page, navigate first
    if (location.pathname !== "/") {
      window.location.href = `/${hash}`;
      return;
    }

    // Home → scroll to top ONLY (no jump)
    if (hash === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Other sections → smooth scroll with navbar offset
    const element = document.querySelector(hash);
    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_HEIGHT;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-sm bg-black/70
        px-4 sm:px-12 lg:px-24 xl:px-40
      "
      role="banner"
    >
      <nav 
        className="flex items-center justify-between h-20"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link 
          to="/" 
          className="relative inline-flex items-center"
          aria-label="Imagify AI - Home"
        >
          <img 
            src={assets.logo.src} 
            alt="Imagify AI Logo - AI Image Generation Platform" 
            className="w-35 md:w-55"
            width="140"
            height="40"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-6 text-white text-sm" role="list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.hash);
                }}
                className="hover:text-yellow-400 transition"
                aria-label={link.ariaLabel}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="sm:hidden text-white"
            aria-label="Open navigation menu"
            aria-expanded={sidebarOpen}
            aria-controls="mobile-menu"
          >
            <CiMenuFries size={28} aria-hidden="true" />
          </button>

          {/* Contact Button */}
          <a
            href="#contact-us"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact-us");
            }}
            className="hidden sm:flex px-6 py-2 rounded-xl text-white font-semibold hover:scale-105 transition"
            style={{
              background: "linear-gradient(90deg, #BA8B02, #181818)",
            }}
            aria-label="Contact Imagify AI support team"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 sm:hidden"
              onClick={() => setSidebarOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-hidden="true"
            />

            <motion.aside
              id="mobile-menu"
              className="fixed top-0 right-0 w-64 h-full bg-black z-50 sm:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav className="p-6 flex flex-col bg-black gap-6">
                {/* Close Button */}
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="self-end text-white"
                  aria-label="Close navigation menu"
                >
                  <IoMdClose size={26} aria-hidden="true" />
                </button>

                {/* Mobile Links */}
                <ul role="list" className="flex flex-col gap-2">
                  {navLinks
                    .filter(
                      (link) =>
                        link.name !== "Why Imagify AI" &&
                        link.name !== "FAQs"
                    )
                    .map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.hash}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.hash);
                          }}
                          className="text-white text-lg pl-6 hover:text-yellow-400 py-2 block"
                          aria-label={link.ariaLabel}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                </ul>

                {/* Mobile Contact */}
                <a
                  href="#contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact-us");
                  }}
                  className="mt-4 flex items-center justify-center text-white px-6 py-3 rounded-[12px] hover:scale-105 transition-all"
                  style={{
                    background: "linear-gradient(90deg, #BA8B02, #181818)",
                    fontWeight: 600,
                  }}
                  aria-label="Contact Imagify AI support team"
                >
                  Contact Us
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;