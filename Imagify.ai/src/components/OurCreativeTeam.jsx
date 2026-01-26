import React from 'react';
import { motion } from 'motion/react';
import faiz from '../assets/faiz.png';
import taif from '../assets/taif.png';
import shahzad from '../assets/shahzad.png';
import rimsha from '../assets/rimsha.png';
import amna from '../assets/amna.png';
import arsalan from '../assets/arsalan.png';

const teamMembers = [
  {
    name: 'Muhammad Taif',
    role: 'UI/UX Designer',
    description: 'Designs intuitive interfaces and user-focused experiences.',
    image: taif,
    linkedin: 'https://linkedin.com/in/muhammad-taif',
    expertise: ['Figma', 'User Research', 'Prototyping']
  },
  {
    name: 'Muhammad Faiz',
    role: 'Backend Developer',
    description: 'Manages secure, scalable, and reliable backend systems.',
    image: faiz,
    linkedin: 'https://linkedin.com/in/muhammad-faiz',
    expertise: ['Python', 'FastAPI', 'AWS']
  },
  {
    name: 'Muhammad Shehzad',
    role: 'Flutter Developer',
    description: 'Builds smooth, high-performance mobile app experiences.',
    image: shahzad,
    linkedin: 'https://linkedin.com/in/muhammad-shehzad',
    expertise: ['Flutter', 'Dart', 'Mobile Development']
  },
  {
    name: 'Rimsha Khan',
    role: 'Flutter Developer',
    description: 'Develops efficient features with clean Flutter code.',
    image: rimsha,
    linkedin: 'https://linkedin.com/in/rimsha-khan',
    expertise: ['Flutter', 'UI Implementation', 'State Management']
  },
  {
    name: 'Amna Ahmed',
    role: 'UI/UX Designer',
    description: 'Creates user-friendly layouts, smooth flows, and modern visuals.',
    image: amna,
    linkedin: 'https://linkedin.com/in/amna-ahmed',
    expertise: ['UI Design', 'Visual Design', 'Design Systems']
  },
  {
    name: 'Arsalan Ahmad',
    role: 'Frontend Developer',
    description: 'Creates responsive and interactive user interfaces.',
    image: arsalan,
    linkedin: 'https://linkedin.com/in/arsalan-ahmad',
    expertise: ['React', 'JavaScript', 'Responsive Design']
  },
];

const OurCreativeTeam = () => {
  // Duplicate team members for seamless loop
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <motion.section 
      id="team"
      className="bg-black text-white px-6 md:px-16 pt-6 pb-20 mb-13 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-labelledby="team-heading"
    >
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

      {/* Scrolling Team Row */}
      <div className="relative w-full overflow-hidden" role="region" aria-label="Team members carousel">
        <motion.div
          className="flex gap-8 w-max"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
          role="list"
          aria-label="Imagify AI team members"
        >
          {duplicatedMembers.map((member, index) => (
            <motion.article
              key={`${member.name}-${index}`}
              className="flex-shrink-0 w-[300px] md:w-[350px] rounded-xl p-6 text-center shadow-lg"
              style={{
                background: "linear-gradient(to top, rgba(153, 117, 10, 0.4), rgba(24, 24, 24, 0.6))"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
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
              <h3 className="text-xl font-semibold text-white mb-1" itemProp="name">
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
                <meta itemProp="knowsAbout" content={member.expertise.join(', ')} />
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Schema.org Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Imagify AI",
          "description": "AI-powered wallpaper generation platform",
          "url": "https://imagifyai.com",
          "employee": teamMembers.map(member => ({
            "@type": "Person",
            "name": member.name,
            "jobTitle": member.role,
            "description": member.description,
            "worksFor": {
              "@type": "Organization",
              "name": "Imagify AI"
            },
            "knowsAbout": member.expertise
          }))
        })}
      </script>
    </motion.section>
  );
};

export default OurCreativeTeam;
