import React from "react";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    formData.append("subject", "New Contact Message – Imagify AI");
    formData.append("from_name", "Imagify AI Website");
    formData.append("replyto", event.target.email.value);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-0 pb-16 text-gray-700 dark:text-white"
      aria-labelledby="contact-heading"
    >
      <motion.header
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Contact <span style={{ color: "#BA8B02" }}>Us</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          Have questions or feedback? We're here to help you anytime.
        </p>
      </motion.header>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        aria-label="Contact form"
        noValidate
      >
        <div className="text-white">
          <label
            htmlFor="contact-name"
            className="mb-2 text-sm font-medium block"
          >
            Your name
          </label>
          <div
            className="flex rounded-lg border"
            style={{ borderColor: "#BA8B02" }}
          >
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
              aria-required="true"
              autoComplete="name"
            />
          </div>
        </div>

        <div className="text-white">
          <label
            htmlFor="contact-email"
            className="mb-2 text-sm font-medium block"
          >
            Email address
          </label>
          <div
            className="flex rounded-lg border"
            style={{ borderColor: "#BA8B02" }}
          >
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
              aria-required="true"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="sm:col-span-2 text-white">
          <label
            htmlFor="contact-message"
            className="mb-2 text-sm font-medium block"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={8}
            placeholder="Leave us a message..."
            className="w-full p-3 text-sm outline-none rounded-lg border bg-transparent"
            style={{ borderColor: "#BA8B02" }}
            required
            aria-required="true"
          />
        </div>

        <div className="sm:col-span-2 flex justify-end mt-2">
          <button
            type="submit"
            className="w-max flex items-center gap-2 text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all focus:outline-none"
            style={{
              background: "linear-gradient(90deg, #BA8B02, #181818)",
            }}
            aria-label="Submit contact form"
          >
            Submit
            <img
              src={assets.arrowIcon.src}
              className="w-4"
              alt=""
              aria-hidden="true"
              width="16"
              height="16"
              loading="lazy"
            />
          </button>
        </div>
      </motion.form>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Imagify AI",
          description:
            "Get in touch with the Imagify AI team for questions, feedback, or support",
          url: "https://imagifyai.io/#contact-us",
          mainEntity: {
            "@type": "Organization",
            name: "Imagify AI",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              availableLanguage: ["English"],
              areaServed: "Worldwide",
            },
          },
        })}
      </script>
    </motion.section>
  );
};

export default ContactUs;
