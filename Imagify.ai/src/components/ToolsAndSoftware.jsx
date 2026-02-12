import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const tools = [
  { name: "Figma", icon: assets.figmaLogo.src, description: "UI/UX design and prototyping tool", category: "Design" },
  { name: "Flutter", icon: assets.flutterLogo.src, description: "Cross-platform mobile app development framework", category: "Development" },
  { name: "FastAPI", icon: assets.fastApiLogo.src, description: "Modern Python web framework for building APIs", category: "Backend" },
  { name: "React JS", icon: assets.reactJsLogo.src, description: "JavaScript library for building user interfaces", category: "Frontend" },
  { name: "AWS", icon: assets.awsLogo.src, description: "Amazon Web Services cloud infrastructure", category: "Cloud" },
];

const ToolsAndSoftware = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: tool.name,
        applicationCategory: tool.category,
        description: tool.description,
        url: "https://imagifyai.io",
        image: tool.icon,
      },
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <motion.section
        id="tools-and-software"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-black px-4 sm:px-12 lg:px-28 xl:px-40 pb-30 pt-6"
        aria-labelledby="tools-heading"
      >
        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="tools-heading" className="text-4xl font-bold text-white mb-4">
            The <span className="text-yellow-400">Tools & Software</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Here are the tools & software we used to build Imagify AI
          </p>
        </header>

        {/* Tools Row */}
        <div className="flex justify-center items-start gap-10 flex-wrap md:flex-nowrap">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.96 }}
              className="flex flex-col items-center gap-4 w-40 cursor-pointer
              transition-shadow duration-300"
            >
              <div
                className="
                  w-40 h-40 rounded-2xl
                  bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]
                  border border-yellow-400/10
                  shadow-[0_0_30px_rgba(255,215,0,0.08)]
                  hover:shadow-[0_0_45px_rgba(255,215,0,0.18)]
                  flex items-center justify-center
                  transition-shadow duration-200
                "
              >
                <img
                  src={tool.icon}
                  alt={`${tool.name} logo - ${tool.description}`}
                  className="w-24 h-24 object-contain"
                  width="96"
                  height="96"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg text-white font-semibold">
                {tool.name}
              </h3>

              <p className="text-gray-400 text-sm text-center">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default ToolsAndSoftware;
