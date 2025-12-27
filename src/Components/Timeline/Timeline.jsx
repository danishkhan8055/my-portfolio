import { motion } from "framer-motion";

/* ================= DATA ================= */
const timelineData = [
  {
    time: "2021 – 2023",
    title: "Bachelor’s Degree",
    org: "Eklavya University",
    side: "left",
  },
  {
    time: "2023 – Nov 2024",
    title: "Full Stack Trainee",
    org: "Universal Informatics",
    side: "right",
  },
  {
    time: "May 2024 – Oct 2024",
    title: "MERN Stack Developer",
    org: "Ypsilon IT Solutions",
    side: "left",
  },
  {
    time: "Feb 2025 – Present",
    title: "Software Developer",
    org: "Vyanwebs Pvt Ltd",
    side: "right",
  },
];

/* ================= STAR LINES ================= */
const stars = Array.from({ length: 20 });

function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-28 bg-[#0a0a0f] text-white overflow-hidden"
    >
      {/* ================= BASE BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b14] to-black" />

      {/* ================= FALLING STAR LINES ================= */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {stars.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-[1px] h-24 bg-gradient-to-b from-purple-400 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 40}%`,
              opacity: 0.6,
            }}
            animate={{
              y: ["0vh", "120vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ================= AMBIENT GLOWS ================= */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full
        bg-purple-600/20 blur-[220px] z-[1]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-30%] right-[-20%] w-[600px] h-[600px]
        rounded-full bg-violet-500/20 blur-[240px] z-[1]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ================= CENTER LINE ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full
        bg-gradient-to-b from-purple-500/0 via-purple-500/70 to-purple-500/0 z-[2]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-[5] container mx-auto px-6">
        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Education & professional growth timeline
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="relative flex flex-col gap-24">
          {timelineData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex w-full ${
                item.side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4
                rounded-full bg-purple-500 shadow-[0_0_20px_rgba(124,58,237,0.9)] z-10" />

              {/* Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 16 }}
                className={`
                  w-full md:w-[46%]
                  rounded-3xl p-6
                  bg-[#0f0f1a]/85 backdrop-blur-xl
                  border border-purple-500/25
                  shadow-[0_20px_60px_rgba(124,58,237,0.18)]
                  ${
                    item.side === "left"
                      ? "md:text-right md:pr-10"
                      : "md:text-left md:pl-10"
                  }
                `}
              >
                <span className="text-xs uppercase tracking-widest text-purple-400">
                  {item.time}
                </span>

                <h3 className="text-xl font-semibold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-1">
                  {item.org}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
