import ProjectCard from "./ProjectCard";
import "./projectStyles.css";
import { projectsList } from "../projects";

const Projects = ({ darkMode }) => {
  return (
    <section className="section__project" id="projects">
      <div
        className="container__project"
        style={darkMode ? { backgroundColor: "#2d2d2d", color: "#d5d5d5" } : {}}
      >
        <h3 style={darkMode ? { border: "1px solid #fff", color: "#fff" } : {}}>
          Projects
        </h3>
        <p style={darkMode ? { color: "#d5d5d5" } : {}}>
          Some of my noteworthy projects are :{" "}
        </p>
        <div className="container__main">
          {/* create project cards from array here */}
          {projectsList.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
