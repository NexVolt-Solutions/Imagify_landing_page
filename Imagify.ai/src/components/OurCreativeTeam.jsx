import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";       // ← added useMotionValue
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

// ─── Mobile Detection Hook ────────────────────────────────────────────────────
// Uses matchMedia so it also reacts to orientation changes.
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
};

// ─── Normalize helper ─────────────────────────────────────────────────────────
// Maps any pixel position back into [-halfWidth, 0).
// The duplicated track repeats every halfWidth pixels so every position in
// this range is visually identical to any position outside it.
// This makes the loop restart point invisible after a drag.
const normalizeX = (x, halfWidth) =>
  (((x % halfWidth) + halfWidth) % halfWidth) - halfWidth;


const OurCreativeTeam = () => {
  const duplicatedMembers = [...teamMembers, ...teamMembers];
  const carouselRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(350);
  const [carouselWidth, setCarouselWidth] = useState(0);

  // ── KEY CHANGE 1 ────────────────────────────────────────────────────────────
  // Replace useState(x) with useMotionValue so both the rAF loop AND Framer
  // Motion's drag gesture read/write the exact same live value.
  // Previously: const [x, setX] = useState(0);
  const x = useMotionValue(0);

  // Tracks whether the user is actively dragging (mobile only).
  // Using a ref — not state — so the rAF loop reads the latest value without
  // needing to be in the dependency array.
  const isDragging = useRef(false);

  // ── Mobile detection ────────────────────────────────────────────────────────
  const isMobile = useIsMobile();

  // ── Setup card width and total width (unchanged) ────────────────────────────
  useEffect(() => {
    if (carouselRef.current) {
      const article = carouselRef.current.querySelector("article");
      if (article) {
        setCardWidth(article.offsetWidth + 32); // gap-8 = 32px
      }
      setCarouselWidth(
        (carouselRef.current.children.length > 0
          ? carouselRef.current.children.length
          : 1) * cardWidth
      );
    }
    const handleResize = () => {
      if (carouselRef.current) {
        const article = carouselRef.current.querySelector("article");
        if (article) {
          setCardWidth(article.offsetWidth + 32);
        }
        setCarouselWidth(
          (carouselRef.current.children.length > 0
            ? carouselRef.current.children.length
            : 1) * cardWidth
        );
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardWidth]);

  // ── Animation Loop ──────────────────────────────────────────────────────────
  // KEY CHANGE 2: read/write via x.get() / x.set() instead of setX state.
  // Also check isDragging.current so drag and hover-pause are independent.
  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();
    const speed = 60; // px per second
    const halfWidth = (duplicatedMembers.length / 2) * cardWidth;

    function animate(now) {
      // Paused by hover  OR  by active finger drag → freeze position
      if (!paused && !isDragging.current) {
        const dt = (now - lastTime) / 1000;
        lastTime = now;

        let nextX = x.get() - speed * dt;

        // Seamless loop reset (unchanged logic, now uses x.get / x.set)
        if (Math.abs(nextX) >= halfWidth) {
          nextX = 0;
        }

        x.set(nextX);
      } else {
        // Keep lastTime current so we don't get a big jump when resuming
        lastTime = now;
      }

      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
    // eslint-disable-next-line
  }, [paused, cardWidth, duplicatedMembers.length]);

  // ── Hover handlers (unchanged) ──────────────────────────────────────────────
  const handleHoverStart = useCallback(() => setPaused(true), []);
  const handleHoverEnd = useCallback(() => setPaused(false), []);

  // ── KEY CHANGE 3 — Drag handlers (mobile only) ──────────────────────────────
  //
  // onDragStart → set isDragging flag; rAF loop stops updating position.
  //               Framer Motion's drag gesture now owns x directly.
  //
  // onDragEnd   → read current live position, clamp it into [-halfWidth, 0)
  //               with normalizeX, snap x there (visually seamless because
  //               the track repeats every halfWidth pixels), then clear the
  //               flag so the rAF loop resumes from that exact point.
  const halfWidth = (duplicatedMembers.length / 2) * cardWidth;

  const handleDragStart = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleDragEnd = useCallback(() => {
    const norm = normalizeX(x.get(), halfWidth);
    x.set(norm);           // Invisible snap — visually identical position
    isDragging.current = false; // rAF loop resumes from norm
  }, [x, halfWidth]);

  // ── Conditional drag props (applied only on mobile) ─────────────────────────
  //
  // drag="x"           — horizontal axis only
  // dragMomentum=false — position freezes on release; no flick inertia
  //                      (prevents the x value from drifting after the user
  //                      lifts their finger, which would cause a visible jump)
  // dragElastic=0      — no rubber-band stretch at the edges
  const mobileDragProps = isMobile
    ? {
        drag: "x",
        dragMomentum: false,
        dragElastic: 0,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
      }
    : {};

  // ── SEO structured data (unchanged) ────────────────────────────────────────
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

      {/* Header (unchanged) */}
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
        {/* Fade overlays (unchanged) */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)",
          }}
        />

        {/*
          ── ONLY THIS motion.div WAS MODIFIED ──────────────────────────────────
          Changes made:
            • style={{ x }}      — x is now a MotionValue (was plain number state)
            • {...mobileDragProps} — injects drag="x", dragMomentum, dragElastic,
                                    onDragStart, onDragEnd on mobile only
          Everything else (className, ref, role, aria-label) is unchanged.
        */}
        <motion.div
          className="flex gap-8 w-max relative z-0"
          style={{ x }}
          ref={carouselRef}
          role="list"
          aria-label="Imagify AI team members"
          {...mobileDragProps}
        >
          {duplicatedMembers.map((member, index) => (
            <motion.article
              key={index}
              className="w-[300px] md:w-[350px] rounded-xl p-6 text-center shadow-lg relative group cursor-pointer"
              style={{
                background:
                  "linear-gradient(to top, rgba(153, 117, 10, 0.4), rgba(24, 24, 24, 0.6))",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
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

              <p className="text-sm text-gray-300 mb-2" itemProp="jobTitle">
                {member.role}
              </p>

              <p className="text-sm text-gray-400" itemProp="description">
                {member.description}
              </p>

              <meta itemProp="worksFor" content="Imagify AI" />
              {member.expertise && (
                <meta
                  itemProp="knowsAbout"
                  content={member.expertise.join(", ")}
                />
              )}

              {/* LinkedIn Button (unchanged) */}
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
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurCreativeTeam;