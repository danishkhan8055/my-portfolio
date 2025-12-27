
import { motion } from "framer-motion";
import resume from "../../Assets/DanishRESUME.pdf";

/* ================= TEXT ANIMATION ================= */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const letter = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

/* ================= PARTICLES ================= */
const particles = Array.from({ length: 18 });

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white pt-32 sm:pt-36 lg:pt-40"
    >
      {/* ===== BASE BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b14] to-black z-0" />

      {/* =====================================================
          🌌 AURORA GRADIENT WAVES (NEW)
      ===================================================== */}
      <motion.div
        className="absolute inset-0 z-10 opacity-40"
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 50%",
            "0% 100%",
            "0% 0%",
          ],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(124,58,237,0.35), transparent 40%)," +
            "radial-gradient(circle at 80% 70%, rgba(167,139,250,0.35), transparent 40%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* =====================================================
          🌀 ORBITING GLOW (NEW)
      ===================================================== */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full
        bg-purple-600/20 blur-[200px] -translate-x-1/2 -translate-y-1/2 z-10"
        animate={{ rotate: 360 }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =====================================================
          ✨ FLOATING PARTICLES (IMPROVED)
      ===================================================== */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-purple-300/40"
            initial={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              opacity: 0.3,
            }}
            animate={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* =====================================================
    🟣 EXTRA GLOW CIRCLES (DIFFERENT SIZES)
===================================================== */}
{/* =====================================================
    🔮 BREATHING ENERGY RINGS (NEW & CLEAN)
===================================================== */}

{/* Ring 1 – outer slow pulse */}
<motion.div
  className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full
  border border-purple-500/20
  -translate-x-1/2 -translate-y-1/2 z-10"
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.15, 0.35, 0.15],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Ring 2 – inner glow */}
<motion.div
  className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full
  border border-violet-400/30
  -translate-x-1/2 -translate-y-1/2 z-10"
  animate={{
    scale: [1, 1.12, 1],
    opacity: [0.2, 0.45, 0.2],
  }}
  transition={{
    duration: 14,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Ring 3 – soft filled aura */}
<motion.div
  className="absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full
  bg-purple-600/10 blur-[120px]
  -translate-x-1/2 -translate-y-1/2 z-10"
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.25, 0.5, 0.25],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Slow rotating energy arc */}
{/* =======================
   ⚡ STRONG ENERGY RINGS
======================= */}

{/* OUTER BIG FAST RING */}
<motion.div
  className="absolute top-1/2 left-1/2
  w-[900px] h-[900px]
  -translate-x-1/2 -translate-y-1/2
  rounded-full z-10"
  style={{
    background:
      "conic-gradient(from 0deg, #a855f7, #7c3aed, #c084fc, #7c3aed, #a855f7)",
    WebkitMask:
      "radial-gradient(transparent 70%, black 72%)",
    mask:
      "radial-gradient(transparent 70%, black 72%)",
    boxShadow: "0 0 120px rgba(168,85,247,0.6)",
  }}
  animate={{ rotate: 360 }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "linear",
  }}
/>

{/* MIDDLE RING – OPPOSITE DIRECTION */}
<motion.div
  className="absolute top-1/2 left-1/2
  w-[650px] h-[650px]
  -translate-x-1/2 -translate-y-1/2
  rounded-full z-10"
  style={{
    background:
      "conic-gradient(from 180deg, #c084fc, #7c3aed, #a855f7, #7c3aed)",
    WebkitMask:
      "radial-gradient(transparent 68%, black 71%)",
    mask:
      "radial-gradient(transparent 68%, black 71%)",
    boxShadow: "0 0 90px rgba(124,58,237,0.6)",
  }}
  animate={{ rotate: -360 }}
  transition={{
    duration: 14,
    repeat: Infinity,
    ease: "linear",
  }}
/>

{/* INNER FAST GLOW RING */}
<motion.div
  className="absolute top-1/2 left-1/2
  w-[420px] h-[420px]
  -translate-x-1/2 -translate-y-1/2
  rounded-full z-10"
  style={{
    background:
      "conic-gradient(from 90deg, #f0abfc, #a855f7, #7c3aed)",
    WebkitMask:
      "radial-gradient(transparent 65%, black 69%)",
    mask:
      "radial-gradient(transparent 65%, black 69%)",
    boxShadow: "0 0 70px rgba(216,180,254,0.8)",
  }}
  animate={{ rotate: 360 }}
  transition={{
    duration: 9,
    repeat: Infinity,
    ease: "linear",
  }}
/>

{/* CORE PULSE */}
<motion.div
  className="absolute top-1/2 left-1/2
  w-[220px] h-[220px]
  -translate-x-1/2 -translate-y-1/2
  rounded-full z-10
  bg-purple-500/40 blur-[80px]"
  animate={{
    scale: [1, 1.4, 1],
    opacity: [0.5, 0.9, 0.5],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>




      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-30 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* IMAGE */}
        {/* <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 shrink-0"
        >
          <img
            src={profilephoto}
            alt="Danish Khan"
            className="w-full h-full rounded-full object-cover
            border-4 border-purple-500/20
            shadow-[0_20px_60px_rgba(124,58,237,0.35)]"
          />
        </motion.div> */}

        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {"I am Danish Khan".split("").map((c, i) => (
              <motion.span key={i} variants={letter}>
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent">
            {"MERN Stack Developer".split("").map((c, i) => (
              <motion.span key={i} variants={letter}>
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-xl mx-auto lg:mx-0">
            Full Stack Developer from Indore, India building scalable,
            high-performance web applications with real-world impact.
          </p>

          {/* BUTTONS */}
         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

  {/* ================= CONNECT BUTTON ================= */}
  <motion.a
    href="#contact"
    whileHover="hover"
    whileTap="tap"
    initial="rest"
    animate="rest"
    className="
      relative overflow-hidden
      px-8 py-3 rounded-full
      bg-gradient-to-r from-purple-600 to-violet-500
      text-white font-medium
      shadow-[0_10px_30px_rgba(124,58,237,0.5)]
    "
    variants={{
      rest: { scale: 1 },
      hover: { scale: 1.08 },
      tap: { scale: 0.95 },
    }}
  >
    {/* Glow pulse */}
    <motion.span
      className="absolute inset-0 rounded-full bg-white/20 blur-xl"
      variants={{
        rest: { opacity: 0 },
        hover: { opacity: 0.35 },
      }}
      transition={{ duration: 0.4 }}
    />

    {/* Shimmer sweep */}
    <motion.span
      className="absolute top-0 left-[-150%] w-[150%] h-full
      bg-gradient-to-r from-transparent via-white/30 to-transparent"
      variants={{
        hover: { left: "150%" },
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />

    {/* Text */}
    <span className="relative z-10">Connect With Me</span>
  </motion.a>

  {/* ================= DOWNLOAD BUTTON ================= */}
  <motion.a
    href={resume}
    download
    whileHover="hover"
    whileTap="tap"
    initial="rest"
    animate="rest"
    className="
      relative overflow-hidden
      px-8 py-3 rounded-full
      border border-purple-400/40
      bg-white/10 backdrop-blur
      text-white font-medium
    "
    variants={{
      rest: { scale: 1 },
      hover: { scale: 1.08 },
      tap: { scale: 0.95 },
    }}
  >
    {/* Border glow */}
    <motion.span
      className="absolute inset-0 rounded-full border border-purple-400/60"
      variants={{
        rest: { opacity: 0 },
        hover: { opacity: 1 },
      }}
      transition={{ duration: 0.3 }}
    />

    {/* Soft inner glow */}
    <motion.span
      className="absolute inset-0 rounded-full bg-purple-500/10 blur-lg"
      variants={{
        rest: { opacity: 0 },
        hover: { opacity: 0.5 },
      }}
      transition={{ duration: 0.3 }}
    />

    {/* Text */}
    <span className="relative z-10">Download Resume</span>
  </motion.a>
</div>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

