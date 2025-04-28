import { motion } from "framer-motion";
import { FaLocationDot, FaPaperPlane } from "react-icons/fa6";

import { IoMdCall, IoMdMail } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1f3f4707-107e-4599-b2aa-5b879d981bd2");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const { name, email, message } = object;

    if (!name || !email || !message) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully! 🎉");
        event.target.reset();
      } else {
        toast.error(res.message || "Something went wrong! Try again.");
      }
    } catch (error) {
      toast.error("Network error! Please try again.");
    }
  };

  const contactDetails = [
    { icon: <IoMdMail className="text-xl" />, text: "danish.k88274@gmail.com" },
    { icon: <IoMdCall className="text-xl" />, text: "8839806126, 9109729777" },
    {
      icon: <FaLocationDot className="text-xl" />,
      text: "Indore, Madhya Pradesh",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0]"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] mix-blend-multiply filter blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#afeb5b] to-[#c86e7e] mix-blend-multiply filter blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Let's Talk
            </h2>
            <p className="text-gray-600 mb-8">
              I'm ready to start my career and would love to hear from you.
              Whether you have a question or just want to say hi, I'll do my
              best to get back to you!
            </p>

            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] rounded-full text-white">
                    {detail.icon}
                  </div>
                  <p className="text-gray-700">{detail.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c86e7e] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c86e7e] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c86e7e] focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
}

export default Contact;
