import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

// ─── Testimonials data (unchanged) ───────────────────────────────────────────
const testimonials = [
  {
    name: "Miranda Cosgrove",
    country: "Canada",
    text: "The AI styles are amazing and the image quality is fantastic. I love how fast my designs are generated.",
    rating: 5,
    date: "2024-12-15",
  },
  {
    name: "Maddison Clarke",
    country: "Australia",
    text: "This app makes creative design so easy. Simple prompts and perfect AI-generated results.",
    rating: 5,
    date: "2024-12-10",
  },
  {
    name: "Daniel Harris",
    country: "United Kingdom",
    text: "AI understands prompts really well. Every generated image feels unique and premium.",
    rating: 5,
    date: "2024-12-08",
  },
  {
    name: "Sophia Martinez",
    country: "Spain",
    text: "Fast generation and amazing detail. I now create new images every day.",
    rating: 5,
    date: "2024-12-05",
  },
  {
    name: "Jason Lee",
    country: "Singapore",
    text: "Clean interface, fantastic styles, and smooth AI performance. Love it!",
    rating: 5,
    date: "2024-12-01",
  },
  {
    name: "Mike Tyson",
    country: "America",
    text: "Beautiful AI-generated images and very easy to use. The quality is top-notch.",
    rating: 5,
    date: "2024-12-18",
  },
];

// ─── Mobile Detection Hook ────────────────────────────────────────────────────
// Uses matchMedia for accuracy and listens to resize so it
// stays in sync if the viewport changes (e.g., orientation flip).
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
// Maps any x pixel value into the range [-halfWidth, 0).
// This ensures the infinite loop restart is always visually seamless,
// no matter how far the user has dragged.
//
// How it works:
//   The duplicated track repeats every `halfWidth` pixels.
//   Any position X is visually identical to X ± halfWidth.
//   We clamp to [-halfWidth, 0) so animation always starts in the
//   "first copy" of the track.
//
// Example (halfWidth = 1000):
//   x =   0  → -1000  (maps to -1000, equivalent start position)
//   x =  -200 → -200  (already in range)
//   x = -1200 → -200  (strip away one full loop)
//   x =   200 → -800  (user dragged right past origin → wrap)
const normalizeX = (x, halfWidth) =>
  (((x % halfWidth) + halfWidth) % halfWidth) - halfWidth;

// ─── Component ────────────────────────────────────────────────────────────────
const WhyImagify_AI = () => {
  const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

  const row1Duplicated = [...row1, ...row1];
  const row2Duplicated = [...row2, ...row2];

  // ── SEO structured data (unchanged) ────────────────────────────────────────
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: testimonials.map((t, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        author: t.name,
        reviewBody: t.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating,
          bestRating: 5,
        },
        datePublished: t.date,
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "Imagify AI",
          applicationCategory: "DesignApplication",
        },
      },
    })),
  };

  // ── Speed (unchanged) ───────────────────────────────────────────────────────
  const carouselSpeed = 17;

  // ── Mobile detection ────────────────────────────────────────────────────────
  const isMobile = useIsMobile();

  // ── Row 1 — scrolls LEFT  (x: 0 → -halfWidth) ─────────────────────────────
  const row1Ref = useRef(null);
  const controls1 = useAnimation();
  const x1 = useMotionValue(0);      // Live pixel position of row 1
  const hw1 = useRef(0);             // Half-width of row 1 track (cached after mount)

  // Starts (or restarts) row 1 animation from a given pixel origin.
  // Always animates exactly `halfWidth` pixels to the left per loop →
  // constant speed regardless of where we resume from.
  const startAnim1 = useCallback(
    (fromX) => {
      controls1.start({
        x: [fromX, fromX - hw1.current],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: carouselSpeed,
          ease: "linear",
        },
      });
    },
    [controls1, carouselSpeed]
  );

  // Measure track width once after mount and kick off animation.
  useEffect(() => {
    if (!row1Ref.current) return;
    hw1.current = row1Ref.current.scrollWidth / 2;
    startAnim1(0);
  }, [startAnim1]);

  // ── Row 2 — scrolls RIGHT  (x: -halfWidth → 0) ────────────────────────────
  const row2Ref = useRef(null);
  const controls2 = useAnimation();
  const x2 = useMotionValue(0);      // Starts at 0; animation sets it to -hw immediately
  const hw2 = useRef(0);

  const startAnim2 = useCallback(
    (fromX) => {
      controls2.start({
        x: [fromX, fromX + hw2.current],  // ← positive direction (rightward)
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: carouselSpeed,
          ease: "linear",
        },
      });
    },
    [controls2, carouselSpeed]
  );

  useEffect(() => {
    if (!row2Ref.current) return;
    hw2.current = row2Ref.current.scrollWidth / 2;
    // Row 2 begins at the halfway mark (−halfWidth) so it scrolls right to 0
    startAnim2(-hw2.current);
  }, [startAnim2]);

  // ── Drag handlers (mobile only) ────────────────────────────────────────────
  //
  // onDragStart → stop the animation; framer motion's drag gesture takes over x
  // onDragEnd   → read current pixel position, normalize into [-hw, 0),
  //               snap the motion value there (no visual jump), resume animation
  //
  // normalizeX ensures the restart point is always within one loop length so
  // the infinite repeat never drifts to extreme pixel values.

  const handleDragStart1 = () => controls1.stop();
  const handleDragEnd1 = () => {
    const norm = normalizeX(x1.get(), hw1.current);
    x1.set(norm);           // Instant, invisible position snap within one loop
    startAnim1(norm);       // Resume from that exact position → no jump
  };

  const handleDragStart2 = () => controls2.stop();
  const handleDragEnd2 = () => {
    const norm = normalizeX(x2.get(), hw2.current);
    x2.set(norm);
    startAnim2(norm);
  };

  // ── Shared drag props (applied only on mobile) ─────────────────────────────
  //
  // drag="x"          — horizontal drag axis
  // dragMomentum=false — no throw/flick inertia after release (cleaner resume)
  // dragElastic=0     — no rubber-band elastic effect at edges
  //
  // Without dragConstraints the user can drag as far as they want;
  // normalizeX handles any resulting position on release.
  const mobileDragProps = isMobile
    ? {
        drag: "x",
        dragMomentum: false,
        dragElastic: 0,
      }
    : {};

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Structured Data for SEO (unchanged) */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <motion.section
        id="why-imagify-ai"
        className="bg-black text-white px-6 md:px-16 pb-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        aria-labelledby="why-imagify-heading"
      >
        {/* Header (unchanged) */}
        <header className="text-center mb-12">
          <motion.h2
            id="why-imagify-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why <span className="text-yellow-400">Imagify AI</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Because your creativity deserves more than ordinary designs.
          </motion.p>
        </header>

        {/* ── Row 1 ─────────────────────────────────────────────────────────── */}
        <div className="relative w-full overflow-hidden mb-8">
          {/* Fade edges (unchanged) */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)",
            }}
          />

          {/*
            CHANGES vs original:
            • ref={row1Ref}          — measure track width after mount
            • style={{ x: x1 }}     — bind live motion value (animation + drag share it)
            • animate={controls1}   — useAnimation controls replace the static animate prop
            • ...mobileDragProps    — drag="x", dragMomentum, dragElastic (mobile only)
            • onDragStart / onDragEnd — pause & resume logic

            Everything else (className, role, aria-label, cards) is unchanged.
          */}
          <motion.div
            ref={row1Ref}
            className="flex gap-6 w-max"
            style={{ x: x1 }}
            animate={controls1}
            {...mobileDragProps}
            onDragStart={isMobile ? handleDragStart1 : undefined}
            onDragEnd={isMobile ? handleDragEnd1 : undefined}
            role="list"
            aria-label="Customer testimonials row 1"
          >
            {row1Duplicated.map((t, index) => (
              <motion.article
                key={`row1-${t.name}-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[400px] rounded-xl p-6 shadow-lg"
                style={{
                  background:
                    "linear-gradient(to top, rgba(153, 117, 10, 0.4), rgba(24, 24, 24, 0.6))",
                }}
                role="listitem"
                aria-label={`Testimonial by ${t.name} from ${t.country}`}
              >
                <div className="flex items-center mb-2 gap-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-300 mb-4">{t.text}</p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-400">{t.country}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* ── Row 2 ─────────────────────────────────────────────────────────── */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges (unchanged) */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)",
            }}
          />

          <motion.div
            ref={row2Ref}
            className="flex gap-6 w-max"
            style={{ x: x2 }}
            animate={controls2}
            {...mobileDragProps}
            onDragStart={isMobile ? handleDragStart2 : undefined}
            onDragEnd={isMobile ? handleDragEnd2 : undefined}
            role="list"
            aria-label="Customer testimonials row 2"
          >
            {row2Duplicated.map((t, index) => (
              <motion.article
                key={`row2-${t.name}-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[400px] rounded-xl p-6 shadow-lg"
                style={{
                  background:
                    "linear-gradient(to top, rgba(186, 139, 2, 0.4), rgba(24, 24, 24, 0.6))",
                }}
                role="listitem"
                aria-label={`Testimonial by ${t.name} from ${t.country}`}
              >
                <div className="flex items-center mb-2 gap-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-300 mb-4">{t.text}</p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-400">{t.country}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default WhyImagify_AI;