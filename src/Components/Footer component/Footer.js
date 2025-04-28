import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/DanuU8055",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/danish-khan-94758a296/",
      label: "LinkedIn",
    },
    {
      icon: <MdEmail className="text-xl" />,
      url: "mailto:danish.k88274@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8"
        >
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
              <FaCode className="text-[#c86e7e]" />
              <p className="text-gray-600"> Danish Khan</p>
              <FaCode className="text-[#afeb5b]" />
            </h3>
            <p className="text-gray-700">
              Full Stack Developer from India with Three months and continue
              experience, passionate about building modern web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-xl font-semibold text-gray-600 mb-4">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm"
        >
          <div className="flex items-center text-gray-600 gap-1">
            © {new Date().getFullYear()} Danish Khan. All rights reserved.
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            Made with <FaHeart className="text-[#c86e7e] mx-1" /> in India
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
