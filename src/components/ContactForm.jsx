import "./formStyles.css";

const ContactForm = () => {
  return (
    <form action="submit" method="post" className="form">
      <div className="user">
        <p>Your Name</p>
        <input
          type="text"
          name="name"
          value=""
          placeholder="Enter name"
          className="inputs"
        />
      </div>
      <div className="user">
        <p>Your Email</p>
        <input
          type="text"
          name="email"
          value=""
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
          className="inputs"
          placeholder="Please comment here"
        ></textarea>
      </div>

      <button>Send Message</button>
    </form>
  );
};

export default ContactForm;
