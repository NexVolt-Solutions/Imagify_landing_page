import React from "react";
import { Toaster } from "react-hot-toast";
import SEOHead from "../components/SEOHead";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AppFeatures from "../components/AppFeatures";
import ToolsAndSoftware from "../components/ToolsAndSoftware";
import ProPackage from "../components/ProPackage";
import HowItWorks from "../components/HowItWorks";
import OurCreativeTeam from "../components/OurCreativeTeam";
import WhyImagify_AI from "../components/WhyImagify_AI";
import FAQSection from "../components/FAQSection";
import ContactUs from "../components/ContactUs";
import WaitlistSection from "../components/WaitList";
import Footer from "../components/Footer";

const Home = () => {
  

  return (
    <>
      <SEOHead 
        title="Imagify AI - AI Wallpaper Generator | Create Stunning Wallpapers Instantly"
        description="Transform ideas into beautiful wallpapers with AI. Generate unique, high-quality wallpapers for mobile & desktop. Free download on iOS & Android."
        canonical="https://imagifyai.io/"
      />


      <main className="min-h-screen bg-black text-white relative pt-20 overflow-x-hidden">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#1a1a1a",
              color: "#fff",
              border: "1px solid #BA8B02",
            },
          }}
        />

        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <HeroSection />
        {/* App Features */}
        <AppFeatures />
        {/* Tools and Software */}
        <ToolsAndSoftware />
        {/* Pro Package */}
        <ProPackage />
        {/* How It Works */}
        <HowItWorks />
        {/* Our Creative Team */}
        <OurCreativeTeam />
        {/* Why Imagify AI */}
        <WhyImagify_AI />
        {/* FAQ Section */}
        <FAQSection />
        {/* Contact Us */}
        <ContactUs />
        {/* Wait List */}
        <WaitlistSection/>
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
