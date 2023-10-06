import ProjectCard from "./ProjectCard";
import "./projectStyles.css";
import { projectsList } from "../projects";
import TransitionEffect from "./TransitionEffect";
import { PortfolioContext } from "../App";
import { useContext } from "react";

const Projects = () => {
  const { darkMode, refArray } = useContext(PortfolioContext);

  return (
    <section className="section__project" id="projects" ref={refArray[3]}>
      <TransitionEffect />
      <div
        className="container__project"
        style={darkMode ? { backgroundColor: "#2d2d2d", color: "#d5d5d5" } : {}}
      >
        <h3
          style={
            darkMode ? { color: "#d5d5d5", backgroundColor: "#212121" } : {}
          }
        >
          Projects
        </h3>
        <p style={darkMode ? { color: "#d5d5d5" } : {}}>
          Some of my noteworthy projects are :{" "}
        </p>
        <div className="container__main">
          {/* create project cards from array here */}
          {projectsList.map((project, index) => {
            return <ProjectCard key={index} project={project} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
