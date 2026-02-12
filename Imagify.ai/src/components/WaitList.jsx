import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SEOHead from "../components/SEOHead";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Countries with codes and flags
const countries = [
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
];

const WaitlistSignup = () => {
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
    setPhone(country.code + " ");
  };

  const handlePhoneChange = (event) => {
    let value = event.target.value;

    if (!selectedCountry) return;

    if (!value.startsWith(selectedCountry.code)) {
      value = selectedCountry.code + " ";
    }

    // Remove invalid characters
    let formatted = value.replace(/[^\d+]/g, "");

    setPhone(formatted);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Waitlist Signup – Imagify AI");
    formData.append("from_name", "Imagify AI Website");
    formData.append("replyto", event.target.email.value);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! You've joined the waitlist!");
        event.target.reset();
        setPhone("");
        setSelectedCountry(null);
        setSearchTerm("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Filter countries based on search
  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Join Waitlist | Imagify AI – Early Access"
        description="Sign up for the Imagify AI waitlist and be the first to access our AI-powered wallpaper generation platform."
        canonical="https://imagifyai.io/waitlist-signup"
      />

      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <main>
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-6 mt-15 md:px-12 py-16"
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-400">
                <li>
                  <a href="/" className="hover:text-yellow-400 transition">
                    Home
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  Join Waitlist
                </li>
              </ol>
            </nav>

            {/* Header */}
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Join the <span className="text-yellow-400">Waitlist</span>
              </h1>
              <p className="text-gray-300">
                Sign up now and be the first to get early access to Imagify AI.
              </p>
            </header>

            {/* Waitlist Form */}
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-[#1A1A1A] p-8 rounded-2xl w-full text-white"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full p-3 rounded-lg bg-black border border-yellow-500 outline-none text-white"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full p-3 rounded-lg bg-black border border-yellow-500 outline-none text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Country Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block mb-1 text-sm font-medium">Country</label>
                  <div
                    className="w-full p-3 bg-black border border-yellow-500 rounded-lg flex justify-between items-center cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span>
                      {selectedCountry
                        ? `${selectedCountry.flag} ${selectedCountry.name}`
                        : "Select your country"}
                    </span>
                    <span className="text-gray-400">▼</span>
                  </div>

                  {dropdownOpen && (
                    <div className="absolute z-50 mt-1 w-full bg-black border border-yellow-500 rounded-lg max-h-60 overflow-auto">
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 bg-black text-white border-b border-yellow-500 outline-none"
                      />
                      <ul>
                        {filteredCountries.map((c) => (
                          <li
                            key={c.name}
                            onClick={() => handleCountrySelect(c)}
                            className="p-2 hover:bg-yellow-500 hover:text-black cursor-pointer flex items-center gap-2"
                          >
                            {c.flag} {c.name}
                          </li>
                        ))}
                        {filteredCountries.length === 0 && (
                          <li className="p-2 text-gray-400">No countries found</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block mb-1 text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+92 300 1234567"
                    value={phone}
                    onChange={handlePhoneChange}
                    pattern="^\+?[0-9]{7,15}$"
                    title="Enter a valid phone number with country code"
                    className="w-full p-3 rounded-lg bg-black border border-yellow-500 outline-none text-white"
                  />
                  <p className="text-gray-400 text-xs mt-1">
                    Your number should include country code (e.g., +92 300 1234567)
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-yellow-500 rounded-full text-black font-semibold hover:scale-105 transition-transform"
              >
                Join Waitlist
              </button>
            </motion.form>
          </motion.article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WaitlistSignup;
