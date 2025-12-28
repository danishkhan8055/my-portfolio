import { motion } from "framer-motion";
import profilephoto from "../../Assets/profilephoto.jpg";

/* ===== Floating particles ===== */
const particles = Array.from({ length: 16 });

function About() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "JavaScript",
    "MongoDB",
    "TypeScript",
    "Git",
    "Tailwind CSS",
    "HTML",
    "Redis",
  ];

  const achievements = [
    { value: "1+", label: "Year Industry Experience" },
    { value: "8+", label: "Real-world Projects" },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#0a0a0f] text-white overflow-x-clip"
    >
      {/* ===== BASE BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b14] to-black z-0" />

      {/* ===== FLOATING BACKGROUND PARTICLES (LIKE HERO) ===== */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-purple-400/30"
            style={{
              width: 6 + Math.random() * 8,
              height: 6 + Math.random() * 8,
            }}
            initial={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 18 + Math.random() * 12,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ===== AMBIENT BLOBS ===== */}
      <motion.div
        className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-purple-600/20 blur-[200px] z-[1]"
        animate={{ y: [0, 80, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-30%] right-[-20%] w-[520px] h-[520px] bg-violet-500/20 blur-[240px] z-[1]"
        animate={{ y: [0, -120, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-6">
        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Passionate full-stack developer focused on building modern,
            scalable, and impactful web applications.
          </p>
        </motion.div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 to-violet-500 blur-xl opacity-30 group-hover:opacity-50 transition" />

              <div className="relative w-72 h-80 sm:w-80 sm:h-[420px] rounded-3xl bg-[#0f0f1a] border border-purple-500/20 flex items-center justify-center overflow-hidden">
                <img
                  src={profilephoto}
                  alt="Danish Khan"
                  className="max-h-full max-w-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold">
              MERN Stack Developer based in India 🇮🇳
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I’m a passionate full-stack developer with hands-on experience in
              React, Node.js, and modern web technologies.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I enjoy working on real-world products and improving performance,
              UX, and scalability.
            </p>

            {/* SKILLS */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-purple-500/20 text-purple-300 backdrop-blur hover:bg-purple-500/10 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== STATS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-28 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto"
        >
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-3xl p-8 text-center bg-[#0f0f1a]/80 backdrop-blur-xl border border-purple-500/20 shadow-[0_20px_60px_rgba(124,58,237,0.15)]"
            >
              <h3 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                {item.value}
              </h3>
              <p className="mt-3 text-sm uppercase tracking-widest text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
