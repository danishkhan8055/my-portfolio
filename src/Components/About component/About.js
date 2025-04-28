import { motion } from "framer-motion";
import profilephoto from "../../Assets/profilephoto.jpg";

function About() {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "React JS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Node JS", level: 75 },
    { name: "Express JS", level: 70 }
  ];

  const achievements = [
    { value: "1+", label: "Years of Practice Experience" },
    { value: "2+", label: "Projects Completed" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <img
                src={profilephoto}
                alt="Danish Khan"
                className="w-full h-full object-contain rounded-lg shadow-2xl border-4 border-white"
              />
              <div className="absolute -inset-4 border-2 border-[#afeb5b] rounded-lg -z-10"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  I am a Fresher Full Stack Developer with proficiency in React JS and six months of training experience.
                </p>
                <p className="text-lg text-gray-700">
                  Leveraged the expertise of senior developers to enhance technical skills and understanding of complex concepts, promoting continuous learning and professional growth.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">My Skills</h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-2.5 rounded-full bg-gradient-to-r from-[#c86e7e] to-[#afeb5b]"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] bg-clip-text text-transparent">
                {achievement.value}
              </h3>
              <p className="text-gray-600 mt-2">{achievement.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;