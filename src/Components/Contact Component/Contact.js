import "./Contact.css";
import { FaLocationDot} from "react-icons/fa6"
import {IoMdCall  , IoMdMail} from "react-icons/io";
import { useState } from "react";

function Contact() {

  const [result , setResult ] = useState("");
  const onSubmit = async (event) => {
    
    
    event.preventDefault();
    const formData = new FormData(event.target);
    
    

    formData.append("access_key", "1f3f4707-107e-4599-b2aa-5b879d981bd2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message)
    }
  };
  return (
    <>
      <div id="contact" className="contact">
        <div className="conatct-name">
          <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm Ready to Start my Carrier , so feel free to contact me </p>

            <div className="contact-details">
<div className="contact-detail">
  <IoMdMail/> <p>danish.k88274@gmail.com</p>
</div>
<div className="contact-detail">
  <IoMdCall/> <p>8839806126,9109729777</p>
</div>
<div className="contact-detail">
<FaLocationDot/> <p>Indore , Madhya Pradesh</p>
</div>
            </div>

          </div>
          <form  onSubmit={onSubmit} className="contact-right">
           <label>Your Name</label>
           <input
            type="text" 
            placeholder="Enter Your Name"
            name="name"
             />

           <label htmlFor="">Your Email</label>
           <input
            type="email"
             placeholder="Enter your Email" 
             />

           <label htmlFor="">Write Your Message</label>
           <textarea
            name="message"  
            cols="30" 
            rows="8" 
            placeholder="Enter your message" 
            >
            </textarea>

           <button 
           className="contact-submit"
           > Submit Now
           </button>
           <span style={{color:"red"}}>{result}</span>
          </form>
        </div>

      </div>
    </>
  )
}

export default Contact
