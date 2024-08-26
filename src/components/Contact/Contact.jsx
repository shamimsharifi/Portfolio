// import React from "react";
// import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail_icon from "../../assets/mail_icon.svg";
// import location_icon from "../../assets/location_icon.svg";
// import call_icon from "../../assets/call_icon.svg";

// const Contact = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "4b88eee5-2cf6-4499-9962-7f70bceddcc8");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       alert(res.message);
//     }
//   };
//   return (
//     <div className="contact">
//       <div className="contact-title">
//         <h1>Get in touch</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="contact-section">
//         <div className="contact-left">
//           <h1>Let's talk</h1>
//           <p>hi conact me</p>
//           <div className="contact-details">
//             <div className="contact-detail">
//               <img src={mail_icon} alt="" />
//               <p>shamim.sharifi123@gmail.com</p>
//             </div>
//             <div className="contact-detail">
//               <img src={call_icon} alt="" />
//               <p>(629) 248-4106</p>
//             </div>
//             <div className="contact-detail">
//               <img src={location_icon} alt="" />
//               <p>Denver, CO USA</p>
//             </div>
//           </div>
//         </div>
//         <form onSubmit={onSubmit} className="contact-right">
//           <label htmlFor="">Your Namw</label>
//           <input type="text" placeholder="Enter your name" name="name" />
//           <label htmlFor="Your Email"></label>
//           <input type="email" placeholder="Enter your email" name="email" />
//           <label htmlFor="">Write your message here</label>
//           <textarea
//             name="message"
//             rows="8"
//             placeholder="Enter your message"
//           ></textarea>
//           <button type="submit" className="contact-submit">
//             Submit now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  // State for managing form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    // Creating a new FormData object and appending form fields
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", "4b88eee5-2cf6-4499-9962-7f70bceddcc8");

    // Converting FormData to JSON
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    // API call to submit the form
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    // Handle the response
    if (response.success) {
      alert(response.message);
      // Resetting the form fields
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Decorative theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Contact me directly:</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email Icon" />
              <p>shamim.sharifi123@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>(629) 248-4106</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Denver, CO USA</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
