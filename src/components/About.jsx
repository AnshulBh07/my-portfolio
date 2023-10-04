import "./aboutStyles.css";
import Pic2 from "../assets/images/photo2.png";

const About = ({ darkMode }) => {
  return (
    <section className="section__about">
      <div
        className="container__about"
        style={darkMode ? { backgroundColor: "#2d2d2d" } : {}}
      >
        <h3 style={darkMode ? { border: "1px solid #fff", color: "#fff" } : {}}>
          About
        </h3>
        <div className="container__info">
          <div className="photo">
            <div
              className="container__image"
              style={
                darkMode
                  ? {
                      boxShadow: "-20px 20px #212121",
                      border: "4px solid #2d2d2d",
                    }
                  : {}
              }
            >
              <img src={Pic2} alt="my 2" />
            </div>
          </div>
          <div className="info">
            <h2 style={darkMode ? { color: "#fff" } : {}}>
              Curious about me? Here you have it:
            </h2>
            <p style={darkMode ? { color: "#d5d5d5" } : {}}>
              I'm a passionate frontend developer who specializes in React.js.
              I'm very enthusiatic about bringing the technical and visual
              aspects of digital product to life. I began my journey as a web
              developer in 2022, since then, I've continued to grow and evolve
              as a developer, taking on challenges and learning new technologies
              along the way.
            </p>
            <p style={darkMode ? { color: "#d5d5d5" } : {}}>
              I'm very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development
            </p>
            <p style={darkMode ? { color: "#d5d5d5" } : {}}>
              I've recently completed my bachelors in technology in the field of
              Information Technology from Bharati Vidyapeeth's College of
              Engineering, New Delhi. I'm a hardworking and passionate job
              seeker with strong organizational skills. Ready to help team
              achieve company goals. Motivated to learn, grow and excel in the
              field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
