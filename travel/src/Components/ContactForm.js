import "./ContactFormStyles.css";
import axios from "axios";
import { useState } from "react";
function ContactForm() {
  const [message, setMessage] = useState({
    Name: undefined,
    Email: undefined,
    Subject: undefined,
    Message: undefined,
  });
  const handleChange = (e) => {
    setMessage((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/contactUs", message);
    } catch (error) {
      console.log(error.message);
    }
    console.log(message);
  };
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={handleClick}>
        <input placeholder="Name" id="Name" onChange={handleChange} required />
        <input
          placeholder="Email"
          id="Email"
          onChange={handleChange}
          type="email"
          required
        />
        <input
          placeholder="Subject"
          id="Subject"
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Message"
          rows="4"
          id="Message"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
