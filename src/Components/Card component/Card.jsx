import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import eAuction from "../../Assets/auction.PNG";
import Ved from "../../Assets/Ved.PNG";
import Portfolio from "../../Assets/portfolio.png";
import Worzo from "../../Assets/worzo.PNG";
import AMS from "../../Assets/ams1.png";
import HMS from "../../Assets/hms2.png";
import SVVP from "../../Assets/svvp1.png";
import Shopping_Center from "../../Assets/Shopping_center.png";

/* ================= STAR DATA ================= */
const stars = Array.from({ length: 40 });
const streaks = Array.from({ length: 6 });

const projects = [
  {
    name: "AMS-Attendance Management System",
    image: AMS,
    role: "Frontend Developer",
    description:
      "AMS enables organizations to efficiently track employee or student attendance with real-time syncing, reporting, and automated record management.",
    tech: [
      "React",
      "Redux-Toolkit",
      "Swiper",
      "TanStack Query",
      "React-hook-form",
      "Tailwind CSS",
    ],
    url: "https://ams.vyanwebs.com/login",
  },
  {
    name: "Shopping Center",
    image: Shopping_Center,
    role: "Full Stack Developer",
    description:
      "A modern online e-commerce platform showcasing premium leather products, stylish artificial jewellery, and exclusive perfumes.",
    tech: [
      "React",
      "Redux-Toolkit",
      "Framer-Motion",
      "RTK-Query",
      "React-hook-form",
      "Tailwind CSS",
    ],
    url: "https://shoppingcenter.co.in/",
  },
  {
    name: "Ved Tour & Travels",
    image: Ved,
    role: "Frontend Developer",
    description:
      "A travel booking platform with dynamic tour listings, filters, and admin-managed content.",
    tech: ["React", "Redux Toolkit", "Zod", "RTK-Query", "Nodemailer"],
    url: "https://vedtourandtravels.in/",
  },
  {
    name: "HMS-Hotel Management System",
    image: HMS,
    role: "Frontend Developer",
    description:
      "HMS automates booking, room allocation, invoicing, customer details, and overall hotel operations with an intuitive dashboard..",
    tech: [
      "React",
      "Redux-Toolkit",
      "React-PDF",
      "Swiper",
      "RTK Query",
      "React-hook-form",
      "Tailwind CSS",
    ],
    url: "https://hms-hotel-eternity.onrender.com/",
  },

  {
    name: "Worzo EV Website",
    image: Worzo,
    role: "Frontend Developer",
    description:
      "EV scooter company website featuring product showcases, specifications, and inquiry flows.",
    tech: ["React", "Redux Toolkit"],
    url: "https://worzo.in/",
  },
  {
    name: "Personal Portfolio",
    image: Portfolio,
    role: "Frontend Developer",
    description:
      "My personal portfolio showcasing projects, skills, experience, animations, and resume.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    url: "https://danish-khan-portfolio.netlify.app/",
  },
  {
    name: "Swami Vivekanand Vidhya Peeth",
    image: SVVP,
    role: "Full Stack Developer",
    description:
      "A modern educational website representing school activities & academics.Includes gallery, achievements, notices, academics, and admission enquiry.",
    tech: [
      "React",
      "Redux-Toolkit",
      "RTK Query",
      "React-hook-form",
      "Tailwind CSS",
      "Express JS",
      "Node JS",
    ],
    url: "https://svvpalirajpur.com/",
  },
  {
    name: "E-Auction Platform",
    image: eAuction,
    role: "Full Stack Developer",
    description:
      "A real-time online auction system with secure authentication, bidding logic, and admin control panel.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    url: "https://e-auction-v1t6.onrender.com",
  },
];

function Projects() {
  const INITIAL_COUNT = 3;
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section className="relative py-32 bg-[#0a0a0f] text-white overflow-hidden">
      {/* ================= BASE BG ================= */}
      <div className="absolute inset-0 bg-black" />

      {/* ================= FLOATING STARS ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "-120%"],
              opacity: [0.2, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ================= LIGHT STREAKS ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {streaks.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[120px]
            bg-gradient-to-b from-transparent via-purple-400 to-transparent
            opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-30%",
              rotate: "25deg",
            }}
            animate={{
              y: ["-30%", "130%"],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Selected{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Real-world applications I’ve designed and developed
          </p>
        </motion.div>

        {/* Project List */}
        <div className="space-y-32">
          <AnimatePresence>
            {visibleProjects.map((project, index) => {
              const reverse = index % 2 !== 0;

              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 60 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={reverse ? "lg:order-2" : ""}
                  >
                    <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_25px_70px_rgba(124,58,237,0.35)]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl font-bold">{project.name}</h3>

                    <p className="text-purple-400 font-medium">
                      {project.role}
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-4 py-1 rounded-full text-sm bg-white/5 border border-purple-500/20 text-purple-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-4 px-6 py-3 rounded-full
                      bg-gradient-to-r from-purple-600 to-violet-500
                      font-medium shadow-[0_12px_35px_rgba(124,58,237,0.6)]
                      hover:scale-105 transition"
                    >
                      Live Preview →
                    </a>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View More */}
        {projects.length > INITIAL_COUNT && (
          <div className="mt-28 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll((p) => !p)}
              className="px-10 py-4 rounded-full bg-white/5 border border-purple-500/30
              text-purple-300 font-semibold backdrop-blur hover:bg-purple-500/10 transition"
            >
              {showAll ? "View Less Projects ↑" : "View More Projects ↓"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
