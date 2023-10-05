import "./formStyles.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("1a4dpyq", "n2q8qz5", form.current, "myHDO-khUZ5dXu60W")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <div className="user">
        <p>Your Name</p>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={() => setName(name)}
          placeholder="Enter name"
          className="inputs"
        />
      </div>
      <div className="user">
        <p>Your Email</p>
        <input
          type="text"
          value={email}
          onChange={() => setEmail(email)}
          name="user_email"
          placeholder="Enter email"
          className="inputs"
        />
      </div>
      <div className="user comment">
        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={message}
          onChange={() => setMessage(message)}
          className="inputs"
          placeholder="Please comment here"
        ></textarea>
      </div>

      <input type="submit" value="Send" className="send-btn" />
    </form>
  );
};

export default ContactForm;
