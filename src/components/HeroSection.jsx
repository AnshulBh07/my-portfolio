import "./heroStyles.css";
// import Blob from "../assets/images/blob.svg";
// import Blob2 from "../assets/images/blob2.svg";
import { IoLocationOutline } from "react-icons/io5";
import darkImage from "../assets/images/darkModeImage.png";
import { mediaItemsDark, mediaItemsLight } from "../socialMediaItems";
import lightImage from "../assets/images/lightModeImage.png";
// import Blob3 from "../assets/images/blob3.svg";
// import Blob4 from "../assets/images/blob2 - Copy.svg";
// import Blob5 from "../assets/images/blob3 - Copy.svg";
import { PortfolioContext } from "../App";
import { useContext } from "react";

const HeroSection = () => {
  const { darkMode, refArray } = useContext(PortfolioContext);

  const style = {
    backgroundColor: "#212121",
    color: "#fff",
  };
  const btnStyle = { color: "#fff", border: "1px solid #fff" };

  function handleClick() {
    refArray[4].current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="section__hero" id="hero" ref={refArray[0]}>
      <div className="container__hero" style={darkMode ? style : {}}>
        {/* {darkMode ? (
          <img src={`${Blob4}`} alt="" className="blob2" />
        ) : (
          <img src={`${Blob2}`} alt="" className="blob2" />
        )}
        {darkMode ? (
          <img src={`${Blob5}`} alt="" className="blob3" />
        ) : (
          <img src={`${Blob3}`} alt="" className="blob3" />
        )}
        {darkMode ? (
          <img src={`${Blob5}`} alt="" className="blob4" />
        ) : (
          <img src={`${Blob3}`} alt="" className="blob4" />
        )} */}
        <div className="intro">
          <h3>Hi</h3>
          <h1>
            i'm <span>anshul bhardwaj</span>
          </h1>
          <h3 className="bottom-h3">Aspiring Frontend Developer</h3>
          <p>
            an exceptional react developer in the making, headed out to the road
            of mastery!
          </p>
          <p>Welcome to my portfolio website.</p>

          <div className="located">
            <IoLocationOutline className="icon" />
            <p>New Delhi, India</p>
          </div>

          <div className="btns-hero">
            <button
              className="hire-me-btn"
              onClick={handleClick}
              style={darkMode ? { boxShadow: "6px 6px 10px #000" } : {}}
            >
              CONTACT ME
            </button>

            <a href="Anshul_Bhardwaj_Resume.pdf" download={""}>
              <button className="resume-btn" style={darkMode ? btnStyle : {}}>
                DOWNLOAD CV
              </button>
            </a>
          </div>
        </div>

        <div className="picture">
          {darkMode && (
            <img src={`${darkImage}`} alt="dark" className="dark-mode-img" />
          )}
          {!darkMode && <img src={`${lightImage}`} alt="light-mode-img" />}
        </div>
        <div className={`hero-list-icons ${!darkMode ? "light" : ""}`}>
          {darkMode &&
            mediaItemsDark.map((item, index) => {
              return (
                <a href={`${item.link}`} key={index}>
                  <button className="hero-footer-icon-btn ">{item.icon}</button>
                </a>
              );
            })}
          {!darkMode &&
            mediaItemsLight.map((item, index) => {
              return (
                <a href={`${item.link}`} key={index}>
                  <button className="hero-footer-icon-btn ">
                    <img src={`${item.icon}`} alt="" />
                  </button>
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
