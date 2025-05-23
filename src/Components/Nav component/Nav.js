import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [select, setSelect] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav
      className={`fixed w-[90%] sm:w-[85%] mx-4 sm:mx-24 my-2 sm:my-4 rounded-full z-50 transition-all duration-500  ${
        scrolled
          ? "backdrop-blur-md bg-white/80 shadow-sm py-2"
          : "backdrop-blur-sm bg-white/30 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span
            className={`text-2xl sm:text-3xl font-semibold cursor-pointer ${
              scrolled ? "text-gray-800" : "text-gray-600"
            }`}
          >
            Code{" "}
            <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] bg-clip-text text-transparent ">
              DanY
            </span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <ul className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <AnchorLink
                  href={`#${item.id}`}
                  offset={50}
                  className={`relative no-underline text-lg font-medium transition-colors duration-300 ${
                    select === item.id
                      ? scrolled
                        ? "text-gray-900"
                        : "text-gray-500"
                      : scrolled
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-gray-500 hover:text-black"
                  }`}
                  onClick={() => setSelect(item.id)}
                >
                  {item.label}
                  {select === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c86e7e] to-[#afeb5b]"
                      layoutId="underline"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </AnchorLink>
              </li>
            ))}
          </ul>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 py-2 text-sm sm:text-base cursor-pointer rounded-full bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <AnchorLink
              href="#contact"
              offset={50}
              className="no-underline text-white font-medium text-sm sm:text-base"
            >
              Connect with me
            </AnchorLink>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <CiMenuBurger className={"text-gray-800"} />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/40 z-40"
                onClick={toggleMenu}
              />

              {/* Side Drawer */}
              <motion.div
                ref={menuRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", ease: "easeInOut" }}
                className="fixed inset-y-0 right-0 w-full bg-gradient-to-r from-[#c86e7e] to-[#afeb5b]  shadow-2xl md:hidden z-50"
              >
                <div className="flex justify-end p-4">
                  <button
                    onClick={toggleMenu}
                    className="text-2xl focus:outline-none text-gray-800"
                    aria-label="Close menu"
                  >
                    <MdCancel />
                  </button>
                </div>
                <ul className="flex flex-col bg-gradient-to-r from-[#c86e7e] to-[#afeb5b]  space-y-6 sm:space-y-8 p-6 sm:p-8">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * navItems.indexOf(item) }}
                    >
                      <AnchorLink
                        href={`#${item.id}`}
                        offset={50}
                        className={`relative no-underline text-lg sm:text-xl font-medium ${
                          select === item.id ? "text-gray-900" : "text-gray-700"
                        }`}
                        onClick={() => {
                          setSelect(item.id);
                          toggleMenu();
                        }}
                      >
                        {item.label}
                        {select === item.id && (
                          <motion.div
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c86e7e] to-[#afeb5b]"
                            layoutId="mobile-underline"
                          />
                        )}
                      </AnchorLink>
                    </motion.li>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="px-4 sm:px-6 py-2 text-base sm:text-lg mx-6 sm:mx-8 mt-6 sm:mt-8 cursor-pointer rounded-full bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] text-center"
                  >
                    <AnchorLink
                      href="#contact"
                      offset={50}
                      className="no-underline text-white font-medium"
                      onClick={toggleMenu}
                    >
                      Connect with me
                    </AnchorLink>
                  </motion.div>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
