import { useEffect, useRef } from "react";
import "./projectCardStyles.css";

const ProjectCard = ({ project, index, darkMode }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (index % 2 === 0) {
            cardRef.current.style.animation =
              "slidefromRight 0.7s ease-in-out forwards";
          } else {
            cardRef.current.style.animation =
              "slidefromLeft 0.7s ease-in-out forwards";
          }
          cardRef.current.style.opacity = 0;
        } else {
          cardRef.current.style.animation = "";
          cardRef.current.style.opacity = 0;
        }
      });
    });

    observer.observe(cardRef.current);
  });
  return (
    <div
      className={`container__project-card ${index % 2 !== 0 ? "odd-card" : ""}`}
      style={darkMode ? { boxShadow: "2px 4px 10px #212121" } : {}}
      ref={cardRef}
    >
      <div className="thumbnail">
        <img src={`${project.thumbnail}`} alt="" />
      </div>
      <div className="project__info" style={darkMode ? { color: "#fff" } : {}}>
        <h2>{project.name}</h2>
        <p style={darkMode ? { color: "#d5d5d5" } : {}}>
          {project.description}
        </p>
        <div className="tech-stack">
          {/* generate tech cards here as disabled buttons */}
          {project.tech.map((item, index) => {
            return (
              <button
                key={index}
                disabled={true}
                style={
                  darkMode
                    ? { backgroundColor: "#212121", color: "#d5d5d5" }
                    : {}
                }
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="project__btns">
          <button
            className="git"
            style={
              darkMode ? { border: "2px solid #d5d5d5", color: "#d5d5d5" } : {}
            }
          >
            View on Github
          </button>
          <button className="demo">Demo</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
