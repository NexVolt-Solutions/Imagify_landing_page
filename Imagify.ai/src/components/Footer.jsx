import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#080808] text-white px-6 md:px-16 py-16 mt-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-flex items-center mb-6">
            <Link to="/" aria-label="Imagify AI - Return to homepage">
              <img
                src={assets.logo.src}
                alt="Imagify AI - AI-powered wallpaper generator logo"
                className="w-30 sm:w-45 cursor-pointer"
                width="180"
                height="auto"
              />
            </Link>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Simplifying wallpaper creation with AI — helping you design stunning, personalized wallpapers with ease and confidence.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#features" className="hover:text-primary">Features</a></li>
            <li><a href="#tools-and-software" className="hover:text-primary">Tools & Software</a></li>
            <li><a href="#how-it-works" className="hover:text-primary">How It Works</a></li>
            <li><a href="#team" className="hover:text-primary">Our Creative Team</a></li>
            <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
            <li><a href="#why-imagify-ai" className="hover:text-primary">Why Imagify AI</a></li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/privacy-policy" className="hover:text-primary">
                Data & Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
            <li><a href="#why-imagify-ai" className="hover:text-primary">Why Imagify AI</a></li>
            <li><a href="#faqs" className="hover:text-primary">FAQs</a></li>
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#faqs" className="hover:text-primary">FAQs</a></li>
            <li><a href="#contact-us" className="hover:text-primary">Contact Us</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-6">
            <a
              href="https://www.upwork.com/freelancers/~01061199983d131bbc?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#121212] hover:bg-primary transition"
            >
              <SiUpwork className="text-green-500 text-lg" />
            </a>

            <a
              href="https://www.fiverr.com/rimsha_khan48"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fiverr"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#121212] hover:bg-primary transition"
            >
              <TbBrandFiverr className="text-green-500 text-lg" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61585389225158"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#121212] hover:bg-primary transition"
            >
              <FaFacebookF className="text-blue-500 text-lg" />
            </a>

            <a
              href="https://www.instagram.com/nexvoltsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#121212] hover:bg-primary transition"
            >
              <FaInstagram className="text-pink-500 text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/company/nexvoltsolutions/posts/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#121212] hover:bg-primary transition"
            >
              <FaLinkedinIn className="text-blue-400 text-lg" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Imagify AI. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
