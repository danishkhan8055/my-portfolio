import { motion } from "framer-motion";
import { FaLocationDot, FaPaperPlane } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ================= BG ELEMENTS ================= */
const particles = Array.from({ length: 30 });
const streaks = Array.from({ length: 6 });

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
        headers: { "Content-Type": "application/json" },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully 🚀");
        event.target.reset();
      } else {
        toast.error("Something went wrong!");
      }
    } catch {
      toast.error("Network error!");
    }
  };

  const contactDetails = [
    { icon: <IoMdMail />, text: "danish.k88274@gmail.com" },
    { icon: <IoMdCall />, text: "8839806126 | 9109729777" },
    { icon: <FaLocationDot />, text: "Indore, Madhya Pradesh" },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#0a0a0f] text-white overflow-hidden"
    >
      {/* ================= BASE BG ================= */}
      <div className="absolute inset-0 bg-black" />

      {/* ================= FLOATING PARTICLES ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "-120%"],
              opacity: [0.3, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ================= DIAGONAL ENERGY STREAKS ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {streaks.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[160px]
            bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-40%",
              rotate: "25deg",
            }}
            animate={{ y: ["-40%", "140%"] }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Let’s build something meaningful together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ================= INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h3 className="text-2xl font-semibold">
              Reach out anytime 👋
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I’m open to job opportunities, collaborations, and freelance work.
              Drop a message and I’ll respond as soon as possible.
            </p>

            <div className="space-y-6">
              {contactDetails.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="
              bg-[#0f0f1a]/80 backdrop-blur-xl
              border border-purple-500/20
              rounded-3xl p-8
              shadow-[0_25px_80px_rgba(124,58,237,0.35)]
            "
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-black/40
                border border-purple-500/20 text-white
                focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-black/40
                border border-purple-500/20 text-white
                focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-black/40
                border border-purple-500/20 text-white
                focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-full flex items-center justify-center gap-2
                  py-3 rounded-full
                  bg-gradient-to-r from-purple-600 to-violet-500
                  shadow-[0_12px_35px_rgba(124,58,237,0.6)]
                "
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </section>
  );
}

export default Contact;
