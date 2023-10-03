import "./heroStyles.css";
import Blob from "../assets/images/blob.svg";
import Blob2 from "../assets/images/blob2.svg";
import { IoLocationOutline } from "react-icons/io5";
import Blob3 from "../assets/images/blob3.svg";

const HeroSection = ({ darkMode }) => {
  const style = { backgroundColor: "#212121", color: "#fff" };
  const btnStyle = { color: "#fff", border: "1px solid #fff" };

  return (
    <section className="section__hero">
      <div className="container__hero" style={darkMode ? style : {}}>
        <img src={`${Blob2}`} alt="" className="blob2" />
        <img src={`${Blob3}`} alt="" className="blob3" />
        <img src={`${Blob3}`} alt="" className="blob4" />
        <div className="intro">
          <h3>Hi</h3>
          <h1>
            i'm <span>anshul bhardwaj</span>
          </h1>
          <h3>an aspiring Frontend Developer</h3>
          <p>
            awesome react developer in the making, headed out to the road of
            mastery!
          </p>
          <p>Welcome to my portfolio website.</p>

          <div className="located">
            <IoLocationOutline className="icon" />
            <p>New Delhi, India</p>
          </div>

          <div className="btns">
            <button className="hire-me-btn">HIRE ME</button>

            <a href="Anshul_Bhardwaj_Resume.pdf" download={""}>
              <button className="resume-btn" style={darkMode ? btnStyle : {}}>
                DOWNLOAD CV
              </button>
            </a>
          </div>
        </div>

        <div className="picture">
          <img src={Blob} alt="" className="blob" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
