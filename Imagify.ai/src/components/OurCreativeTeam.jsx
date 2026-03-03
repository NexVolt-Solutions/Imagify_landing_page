import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
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
    linkedin:
      "https://www.linkedin.com/in/muhammad-taif2116?utm_source=share_via&utm_content=profile&utm_medium=member_android",
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
    linkedin:
      "https://www.linkedin.com/in/muhammad-shehzad-5963192b6/",
    expertise: ["Flutter", "Dart", "Mobile Development"],
  },
  {
    name: "Rimsha Khan",
    role: "Flutter Developer",
    description: "Develops efficient features with clean Flutter code.",
    image: rimsha,
    linkedin:
      "https://www.linkedin.com/in/rimshakhan-flutterdeveloper/",
    expertise: ["Flutter", "UI Implementation", "State Management"],
  },
  {
    name: "Amna Ahmed",
    role: "UI/UX Designer",
    description:
      "Creates user-friendly layouts, smooth flows, and modern visuals.",
    image: amna,
    linkedin: "https://www.linkedin.com/in/amna-ahmedd/",
    expertise: ["UI Design", "Visual Design", "Design Systems"],
  },
  {
    name: "Arsalan Ahmad",
    role: "Frontend Developer",
    description: "Creates responsive and interactive user interfaces.",
    image: arsalan,
    linkedin:
      "https://www.linkedin.com/in/arsalan-ahmad-46a372351",
    expertise: ["React", "JavaScript", "Responsive Design"],
  },
];

const OurCreativeTeam = () => {
  const duplicatedMembers = [...teamMembers, ...teamMembers];
  const carouselRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(350);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [x, setX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Setup widths
  useEffect(() => {
    if (carouselRef.current) {
      const article = carouselRef.current.querySelector("article");
      if (article) {
        const width = article.offsetWidth + 32;
        setCardWidth(width);
        setCarouselWidth(
          duplicatedMembers.length * width
        );
      }
    }
  }, [duplicatedMembers.length]);

  // Auto animation
  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();
    let speed = 60;

    function animate(now) {
      if (!paused) {
        const dt = (now - lastTime) / 1000;
        lastTime = now;

        setX((prev) => {
          let nextX = prev - speed * dt;

          if (
            Math.abs(nextX) >=
            (duplicatedMembers.length / 2) * cardWidth
          ) {
            nextX = 0;
          }

          return nextX;
        });
      } else {
        lastTime = now;
      }

      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [paused, cardWidth, duplicatedMembers.length]);

  const handleHoverStart = useCallback(() => setPaused(true), []);
  const handleHoverEnd = useCallback(() => setPaused(false), []);

  const handleDragStart = () => setPaused(true);
  const handleDragEnd = () => setPaused(false);

  return (
    <motion.section
      id="team"
      className="bg-black text-white px-6 md:px-16 pt-6 pb-20"
    >
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-yellow-400">Creative Team</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          Meet the talented designers and developers behind Imagify AI
        </p>
      </header>

      <div className="relative w-full overflow-x-hidden py-10">
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)",
          }}
        />

        <motion.div
          className="flex gap-8 w-max relative z-0"
          style={{ x }}
          ref={carouselRef}
          drag={isMobile ? "x" : false}
          dragConstraints={{ left: -carouselWidth / 2, right: 0 }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {duplicatedMembers.map((member, index) => (
            <motion.article
              key={index}
              className="w-[300px] md:w-[350px] rounded-xl p-6 text-center shadow-lg relative group cursor-pointer"
              style={{
                background:
                  "linear-gradient(to top, rgba(153, 117, 10, 0.4), rgba(24, 24, 24, 0.6))",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />

              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>

              <p className="text-sm text-gray-300 mb-2">
                {member.role}
              </p>

              <p className="text-sm text-gray-400">
                {member.description}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full
                flex items-center justify-center text-black
                opacity-0 group-hover:opacity-100 transition-all duration-300
                hover:scale-110 active:scale-95"
              >
                <FaLinkedinIn />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurCreativeTeam;