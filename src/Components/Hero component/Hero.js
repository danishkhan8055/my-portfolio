import { motion } from "framer-motion";
import profilephoto from "../../Assets/profilephoto2.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../Assets/DanishRESUME.pdf";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c86e7e]/10 via-white to-[#afeb5b]/10 -z-10"></div>
      
      {/* Animated blob */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] mix-blend-multiply filter blur-3xl opacity-20 -z-10"
      ></motion.div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Profile image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
          <img 
            src={profilephoto} 
            alt="Danish Khan" 
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
          />
          {/* Decorative element */}
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 , ease:"easeOut" }}
            className="absolute -bottom-2 -right-2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] -z-10"
          ></motion.div> */}
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="block text-gray-800">I am Danish Khan</span>
            <span className="bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Full Stack Developer from Indore (MP) with six months of training experience, passionate about building modern web applications.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnchorLink 
                href="#contact" 
                offset={50}
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Connect With Me
              </AnchorLink>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={resume} 
                download="Danish_Khan_Resume.pdf"
                className="inline-block px-8 py-3 bg-white text-gray-800 font-medium rounded-full border-2 border-gray-200 hover:border-[#c86e7e] shadow-md hover:shadow-lg transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;