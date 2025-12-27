import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorGlow = () => {
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  const x = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX , mouseY]);

  return (
    <>
      {/* 🌫 MAIN PURPLE GLOW */}
      <motion.div
        style={{ left: x, top: y }}
        className="
          pointer-events-none fixed z-[9999]
          w-[420px] h-[420px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-purple-500/35
          blur-[160px]
        "
      />

      {/* ⚪ INNER WHITE CORE (CONTRAST) */}
      <motion.div
        style={{ left: x, top: y }}
        className="
          pointer-events-none fixed z-[10000]
          w-[90px] h-[90px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-white/25
          blur-[25px]
        "
      />

      {/* 🔮 NEON RING */}
      <motion.div
        style={{ left: x, top: y }}
        className="
          pointer-events-none fixed z-[10001]
          w-[60px] h-[60px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-purple-300/50
          shadow-[0_0_40px_rgba(216,180,254,0.8)]
        "
      />
    </>
  );
};

export default CursorGlow;
