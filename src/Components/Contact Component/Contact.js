import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    formData.append("access_key", "1f3f4707-107e-4599-b2aa-5b879d981bd2");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const { name, email, message } = object;

    // ✅ Correct form validation
    if (!name || !email || !message) {
      toast.error("Please Fill All Details");
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
        toast.error("Something went wrong! Try again.");
      }
    } catch (error) {
      toast.error("Network error! Please try again.");
    }
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div id="contact" className="contact">
        <div className="conatct-name">
          <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm Ready to Start my Career, so feel free to contact me</p>

            <div className="contact-details">
              <div className="contact-detail">
                <IoMdMail /> <p>danish.k88274@gmail.com</p>
              </div>
              <div className="contact-detail">
                <IoMdCall /> <p>8839806126, 9109729777</p>
              </div>
              <div className="contact-detail">
                <FaLocationDot /> <p>Indore, Madhya Pradesh</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" />

            <label>Your Email</label>
            <input type="email" name="email" placeholder="Enter your Email" />

            <label>Write Your Message</label>
            <textarea name="message" cols="30" rows="8" placeholder="Enter your message"></textarea>

            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
