import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaLinkedinIn } from "react-icons/fa";
import faiz from "../assets/faiz.png";
import taif from "../assets/taif.png";
import shahzad from "../assets/shahzad.png";
import rimsha from "../assets/rimsha.png";
import amna from "../assets/amna.png";
import arsalan from "../assets/arsalan.png";

const teamMembers = [
  {
    name: "Muhammad Taif",
    role: "UI/UX Designer",
    description: "Designs intuitive interfaces and user-focused experiences.",
    image: taif,
    linkedin: "https://www.linkedin.com/in/muhammad-taif2116?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    expertise: ["Figma", "User Research", "Prototyping"],
  },
  {
    name: "Muhammad Faiz",
    role: "Backend Developer",
    description: "Manages secure, scalable, and reliable backend systems.",
    image: faiz,
    linkedin: "https://www.linkedin.com/in/muhammad-faiz-backend/",
    expertise: ["Python", "FastAPI", "AWS"],
  },
  {
    name: "Muhammad Shehzad",
    role: "Flutter Developer",
    description: "Builds smooth, high-performance mobile app experiences.",
    image: shahzad,
    linkedin: "https://www.linkedin.com/in/muhammad-shehzad-5963192b6/",
    expertise: ["Flutter", "Dart", "Mobile Development"],
  },
  {
    name: "Rimsha Khan",
    role: "Flutter Developer",
    description: "Develops efficient features with clean Flutter code.",
    image: rimsha,
    linkedin: "https://www.linkedin.com/in/rimshakhan-flutterdeveloper/",
    expertise: ["Flutter", "UI Implementation", "State Management"],
  },
  {
    name: "Amna Ahmed",
    role: "UI/UX Designer",
    description: "Creates user-friendly layouts, smooth flows, and modern visuals.",
    image: amna,
    linkedin: "https://www.linkedin.com/in/amna-ahmedd/",
    expertise: ["UI Design", "Visual Design", "Design Systems"],
  },
  {
    name: "Arsalan Ahmad",
    role: "Frontend Developer",
    description: "Creates responsive and interactive user interfaces.",
    image: arsalan,
    linkedin: "https://www.linkedin.com/in/arsalan-ahmad-46a372351",
    expertise: ["React", "JavaScript", "Responsive Design"],
  },
];

const OurCreativeTeam = () => {
  const duplicatedMembers = [...teamMembers, ...teamMembers];
  const controls = useAnimation();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Imagify AI",
    description: "AI-powered wallpaper generation platform",
    url: "https://imagifyai.io",
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.description,
      worksFor: { "@type": "Organization", name: "Imagify AI" },
      knowsAbout: member.expertise,
    })),
  };

  return (
    <motion.section
      id="team"
      className="bg-black text-white px-6 md:px-16 pt-6 pb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-labelledby="team-heading"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      {/* Header */}
      <header className="text-center mb-12">
        <motion.h2
          id="team-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-yellow-400">Creative Team</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Meet the talented designers and developers behind Imagify AI
        </motion.p>
      </header>

      {/* Carousel */}
      <div
        className="relative w-full overflow-x-hidden py-10"
        role="region"
        aria-label="Team members carousel"
      >
        {/* Fade overlays */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)",
          }}
        />

        <motion.div
          className="flex gap-8 w-max relative z-0"
          animate={controls}
          initial={{ x: "0%" }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          role="list"
          aria-label="Imagify AI team members"
        >
          {duplicatedMembers.map((member, index) => (
            <div key={index} className="flex-shrink-0">
              <motion.article
                onHoverStart={() => controls.stop()}
                onHoverEnd={() =>
                  controls.start({ x: ["0%", "-50%"] })
                }
                className="w-[300px] md:w-[350px] rounded-xl p-6 text-center shadow-lg relative group cursor-pointer"
                style={{
                  background:
                    "linear-gradient(to top, rgba(153, 117, 10, 0.4), rgba(24, 24, 24, 0.6))",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                role="listitem"
                itemScope
                itemType="https://schema.org/Person"
              >
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Imagify AI`}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                  width="96"
                  height="96"
                  loading="lazy"
                  itemProp="image"
                />

                <h3
                  className="text-xl font-semibold text-white mb-1"
                  itemProp="name"
                >
                  {member.name}
                </h3>

                <p
                  className="text-sm text-gray-300 mb-2"
                  itemProp="jobTitle"
                >
                  {member.role}
                </p>

                <p
                  className="text-sm text-gray-400"
                  itemProp="description"
                >
                  {member.description}
                </p>

                <meta itemProp="worksFor" content="Imagify AI" />
                {member.expertise && (
                  <meta
                    itemProp="knowsAbout"
                    content={member.expertise.join(", ")}
                  />
                )}

                {/* LinkedIn Button */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${member.name} on LinkedIn`}
                  role="button"
                  className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full
                  flex items-center justify-center text-black
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                  hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <FaLinkedinIn />
                </a>
              </motion.article>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurCreativeTeam;
