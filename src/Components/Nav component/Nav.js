import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [select, setSelect] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = (useRef < HTMLDivElement) | (null > null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`w-[92%] sm:w-[85%] rounded-full px-6 py-3 flex items-center justify-between
        backdrop-blur-xl border transition-all duration-500
        ${
          scrolled
            ? "bg-[#0a0a0f]/80 border-purple-500/20 shadow-[0_10px_30px_rgba(124,58,237,0.15)]"
            : "bg-[#0a0a0f]/50 border-purple-500/10"
        }`}
      >
        {/* ===== LOGO ===== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-semibold text-white">
            Code{" "}
            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent">
              DanY
            </span>
          </span>
        </motion.div>

        {/* ===== DESKTOP MENU ===== */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <AnchorLink
                  href={`#${item.id}`}
                  offset={80}
                  onClick={() => setSelect(item.id)}
                  className={`relative text-base font-medium transition-colors ${
                    select === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-purple-300"
                  }`}
                >
                  {item.label}
                  {select === item.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-purple-500 to-violet-400"
                    />
                  )}
                </AnchorLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-2 shadow-[0_8px_20px_rgba(124,58,237,0.4)]"
          >
            <AnchorLink
              href="#contact"
              offset={80}
              className="text-white font-medium"
            >
              Connect
            </AnchorLink>
          </motion.div>
        </div>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-3xl text-purple-300"
          aria-label="Open Menu"
        >
          <CiMenuBurger />
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ease: "easeInOut", duration: 0.45 }}
              className="fixed inset-y-0 right-0 w-full z-50
        bg-[#0a0a0f] overflow-hidden"
            >
              {/* ===== TOP GLOW HEADER ===== */}
              <div className="relative px-6 py-6 flex justify-between items-center">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r
            from-purple-600/30 via-violet-500/20 to-transparent blur-2xl"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                <span className="relative z-10 text-xl font-semibold text-white">
                  Menu
                </span>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative z-10 text-3xl text-purple-300"
                >
                  <MdCancel />
                </button>
              </div>

              {/* ===== MENU ITEMS ===== */}
              <ul className="relative z-10 flex flex-col gap-4 px-6 mt-6">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: 40, opacity: 0, filter: "blur(6px)" }}
                    animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ x: 40, opacity: 0, filter: "blur(6px)" }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <AnchorLink
                      href={`#${item.id}`}
                      offset={80}
                      onClick={() => {
                        setSelect(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="relative block px-6 py-4 text-lg font-medium rounded-2xl overflow-hidden"
                    >
                      {/* Active highlight */}
                      {select === item.id && (
                        <motion.span
                          layoutId="mobile-active"
                          className="absolute inset-0 bg-gradient-to-r
                    from-purple-600/30 to-violet-500/20"
                        />
                      )}

                      <span
                        className={`relative z-10 ${
                          select === item.id ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {item.label}
                      </span>
                    </AnchorLink>
                  </motion.li>
                ))}
              </ul>

             
                {/* ===== MOBILE CTA (FIXED & RESPONSIVE) ===== */}
<motion.div
  className="
    fixed md:hidden
    inset-x-0 bottom-4
    mx-auto
    w-[90%]
    z-[60]
    pb-safe
  "
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: [0, -6, 0], opacity: 1 }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <motion.div
    whileTap={{ scale: 0.96 }}
    className="
      w-full rounded-full
      bg-gradient-to-r from-purple-600 to-violet-500
      px-6 py-4 text-center
      shadow-[0_12px_35px_rgba(124,58,237,0.55)]
    "
  >
    <AnchorLink
      href="#contact"
      offset={80}
      className="block text-white font-semibold text-base"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Connect With Me
    </AnchorLink>
  </motion.div>
</motion.div>


              </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
