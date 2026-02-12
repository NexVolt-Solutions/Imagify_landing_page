import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const WaitlistSignup = () => {
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
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-black px-4"
    >
      <form
        onSubmit={onSubmit}
        className="bg-[#1A1A1A] p-8 rounded-2xl w-full max-w-4xl text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Join the Waitlist
        </h2>

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
          <div>
            <label className="block mb-1 text-sm font-medium">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Your country"
              required
              className="w-full p-3 rounded-lg bg-black border border-yellow-500 outline-none text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Your phone (optional)"
              className="w-full p-3 rounded-lg bg-black border border-yellow-500 outline-none text-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-3 bg-yellow-500  rounded-full text-black font-semibold hover:scale-105 transition-transform"
        >
          Join Waitlist
        </button>
      </form>
    </motion.section>
  );
};

export default WaitlistSignup;
