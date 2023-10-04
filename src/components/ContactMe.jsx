import "./contactStyles.css";
import { mediaItems } from "../socialMediaItems";
import ContactForm from "./ContactForm";

const ContactMe = ({ darkMode }) => {
  return (
    <section className="section__contact">
      <div
        className="container__contact__main"
        style={darkMode ? { backgroundColor: "#212121" } : {}}
      >
        <div
          className="container__contact"
          style={darkMode ? { backgroundColor: "#212121" } : {}}
        >
          <div className="first-half">
            <h1>
              Get in <span>touch</span>
            </h1>
            <hr />
            <div className="contact-info">
              <div className="social__media">
                <h3>
                  <span>{`<AB/>`}</span> Anshul Bhardwaj
                </h3>
                <p>You can find me on the following social media platforms.</p>
                <div className="list-icons">
                  {mediaItems.map((item, index) => {
                    return (
                      <button key={index} className="footer-icon-btn">
                        {item.icon}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="info__contact">
                <ul className="contact-items">
                  <li className="title">Contact</li>
                  <li>+91 81306 07432</li>
                  <li>anshulbh009@gmail.com</li>
                  <li>Anshul07</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>

          <div className="container__form">
            <ContactForm />
          </div>
        </div>

        <div className="container__copyright">
          <p>
            Copyright @2023 <span>Anshul Bhardwaj</span>. All rights reserved.
          </p>
          <p>User Terms and Conditions. Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
