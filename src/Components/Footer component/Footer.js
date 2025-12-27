import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/danishkhan8055",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/danish-khan-94758a296/",
      label: "LinkedIn",
    },
    {
      icon: <MdEmail />,
      url: "mailto:danish.k88274@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0f] text-white pt-24 pb-10">
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b14] to-black" />

      {/* Glow blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-600/20 blur-[200px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-40%] right-[-20%] w-[500px] h-[500px] bg-violet-500/20 blur-[240px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ================= TOP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-14"
        >
          {/* Brand */}
          <div className="max-w-lg text-center lg:text-left space-y-4">
            <h3 className="text-2xl font-bold flex items-center justify-center lg:justify-start gap-2">
              <FaCode className="text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Danish Khan
              </span>
              <FaCode className="text-violet-400" />
            </h3>

            <p className="text-gray-400 leading-relaxed">
              MERN Stack Developer passionate about building scalable,
              high-performance web applications with modern UI & real-world
              impact.
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <h4 className="text-lg font-semibold text-gray-300">
              Connect With Me
            </h4>

            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -6, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="
                    relative p-4 rounded-full
                    bg-white/5 border border-purple-500/20
                    text-purple-300
                    hover:text-white
                    transition
                  "
                >
                  {/* glow */}
                  <span className="absolute inset-0 rounded-full bg-purple-500/30 blur-lg opacity-0 hover:opacity-100 transition" />
                  <span className="relative z-10 text-xl">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= DIVIDER ================= */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="origin-left h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-14"
        />

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <span>
            © {new Date().getFullYear()} Danish Khan. All rights reserved.
          </span>

          <span className="flex items-center gap-1">
            Crafted with <FaHeart className="text-purple-400" /> in India
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
