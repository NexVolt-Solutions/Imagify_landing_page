import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SEOHead from "../components/SEOHead";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Expanded list of countries
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
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Ukraine", code: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Poland", code: "+48", flag: "🇵🇱" },
  { name: "Greece", code: "+30", flag: "🇬🇷" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Morocco", code: "+212", flag: "🇲🇦" },
  { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
  { name: "Denmark", code: "+45", flag: "🇩🇰" },
  { name: "Finland", code: "+358", flag: "🇫🇮" },
  { name: "Romania", code: "+40", flag: "🇷🇴" },
  { name: "Chile", code: "+56", flag: "🇨🇱" },
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "Peru", code: "+51", flag: "🇵🇪" },
];

const getCountryPhoneRule = (code) => {
  // Maps country codes to their min/max (total including country code) digit requirements.
  // Defaults to E.164 format: min 8, max 15 numbers in total (excluding '+')
  const rules = {
    "+92": { min: 10, max: 11 },   // Pakistan: +92 XXX XXXXXXX  (10-12 digits after +)
    "+1": { min: 11, max: 11 },    // US/Canada: +1 XXX XXX XXXX (11 digits after +)
    "+44": { min: 11, max: 12 },   // UK: e.g., +44 7XXX XXXXXX (11-12)
    "+880": { min: 12, max: 13 },  // BD: +880 XXX XXXXXXX/XXXXXXX
    // Extend rules as needed for tricky cases
  };
  // Remove "+" and spaces from code to get digit start
  return (
    rules[code] || { min: 8, max: 15 }
  );
};

const WaitlistSignup = () => {
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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
    setPhoneError("");
  };

  const handlePhoneChange = (event) => {
    let value = event.target.value;
    if (!selectedCountry) return;
    if (!value.startsWith(selectedCountry.code)) {
      value = selectedCountry.code + " ";
    }
    let formatted = value.replace(/[^\d+]/g, "");
    // Validation: Enforce input does not exceed country-specific max length
    const phoneRule = getCountryPhoneRule(selectedCountry.code);
    // Remove all non-digit characters, except "+"
    const digitsOnly = formatted.replace(/\D/g, "");
    // Digits including country code without "+"
    let codeDigits = selectedCountry.code.replace("+", "");
    let localDigits = digitsOnly.startsWith(codeDigits)
      ? digitsOnly.slice(codeDigits.length)
      : digitsOnly;
    const totalDigits = codeDigits.length + localDigits.length;
    // Enforce max
    if (totalDigits > phoneRule.max) {
      setPhoneError(
        `Too many numbers, the max allowed for ${selectedCountry.name} is ${phoneRule.max} digits (with country code).`
      );
      // Limit the phone to allowed max digits
      localDigits = localDigits.slice(0, phoneRule.max - codeDigits.length);
      formatted = selectedCountry.code + localDigits;
    } else {
      setPhoneError("");
    }
    setPhone(formatted);
  };

  const validatePhone = () => {
    if (!selectedCountry) {
      setPhoneError("Select your country first.");
      return false;
    }
    const phoneRule = getCountryPhoneRule(selectedCountry.code);
    // Remove all non-digits, except "+" for code
    const digitsOnly = phone.replace(/[^\d]/g, "");
    const codeDigits = selectedCountry.code.replace("+", "");
    const localDigits = digitsOnly.startsWith(codeDigits)
      ? digitsOnly.slice(codeDigits.length)
      : digitsOnly;

    const totalDigits = codeDigits.length + localDigits.length;
    if (totalDigits < phoneRule.min) {
      setPhoneError(
        `Phone number is too short for country code ${selectedCountry.code}. Minimum ${phoneRule.min} digits required including country code.`
      );
      return false;
    }
    if (totalDigits > phoneRule.max) {
      setPhoneError(
        `Phone number is too long for country code ${selectedCountry.code}. Maximum ${phoneRule.max} digits allowed including country code.`
      );
      return false;
    }
    setPhoneError("");
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validatePhone()) return;

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
        setPhoneError("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Filter countries based on search term
  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Input style: no active/focus border highlight
  const baseInputClass =
    "w-full p-3 rounded-lg bg-black border border-[#FFD700] text-white outline-none focus:ring-0 transition-colors duration-200 box-border";
  const baseDropdownClass =
    "w-full p-3 bg-black rounded-lg flex justify-between items-center cursor-pointer border border-[#FFD700] outline-none focus:ring-0 transition-colors duration-200";
  const dropdownInputClass =
    "w-full p-2 bg-black text-white border-b border-[#FFD700] outline-none focus:ring-0 transition-colors duration-200";

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
              autoComplete="off"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    autoComplete="off"
                    className={baseInputClass}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    autoComplete="off"
                    className={baseInputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Country Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block mb-1 text-sm font-medium">Country</label>
                  <div
                    className={baseDropdownClass}
                    tabIndex={0}
                    onClick={() => setDropdownOpen((prev) => !prev)}
                  >
                    <span>
                      {selectedCountry
                        ? `${selectedCountry.flag} ${selectedCountry.name}`
                        : "Select your country"}
                    </span>
                    <span className="text-gray-400">▼</span>
                  </div>
                  {dropdownOpen && (
                    <div className="absolute z-50 mt-1 w-full bg-black border border-[#FFD700] rounded-lg max-h-60 overflow-auto">
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={dropdownInputClass}
                        autoComplete="off"
                      />
                      <ul>
                        {filteredCountries.map((c) => (
                          <li
                            key={c.name}
                            onClick={() => handleCountrySelect(c)}
                            className="p-2 hover:bg-yellow-400 hover:text-black cursor-pointer flex items-center gap-2"
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
                    placeholder={
                      selectedCountry
                        ? `${selectedCountry.code} ...`
                        : "+CountryCode Number"
                    }
                    value={phone}
                    onChange={handlePhoneChange}
                    autoComplete="off"
                    className={baseInputClass}
                  />
                  {/* <p className="text-gray-400 text-xs mt-1">
                    Your number should include country code (e.g., +92 300 1234567)
                  </p> */}
                  {phoneError && (
                    <p className="text-red-400 text-xs mt-1">{phoneError}</p>
                  )}
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
