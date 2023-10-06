import "./skillStyles.css";
import { skills } from "../skillsList";
import FlatBar from "./FlatBar";
import CircleProgress from "./CircleProgress";
import { profSkills } from "../profSkillItems";
import { PortfolioContext } from "../App";
import { useContext } from "react";

const Skills = () => {
  const { refArray, inview, darkMode } = useContext(PortfolioContext);

  return (
    <section className="section__skills" id="skills" ref={refArray[2]}>
      <div
        className="container__skills"
        style={darkMode ? { backgroundColor: "#212121" } : {}}
      >
        <h3
          style={darkMode ? { color: "#fff", backgroundColor: "#1a1a1a" } : {}}
        >
          Skills
        </h3>

        <p style={darkMode ? { color: "#d5d5d5" } : {}}>
          The skills, tools and technologies I'm good at
        </p>

        <div className="grid__skills">
          {/* creating a grid layout for all the skills using array.map method */}
          {skills.map((skill, index) => {
            return (
              <div className="skill__desc" key={index}>
                <img
                  src={`${skill.icon}`}
                  alt="skill icon"
                  className="skill-icon"
                />
                <p style={darkMode ? { color: "#d5d5d5" } : {}}>{skill.name}</p>
              </div>
            );
          })}
        </div>

        <hr />

        <div className="skill__graphics" ref={refArray[5]}>
          <div className="tech__skills">
            <h2 style={darkMode ? { color: "#d5d5d5" } : {}}>
              Technical Skills
            </h2>

            <div className="flat-bars">
              {/* generate flat bars with map again */}
              {skills.map((skill, index) => {
                return (
                  skill.proficiency > 60 && (
                    <FlatBar
                      icon={skill.icon}
                      width={skill.proficiency}
                      key={index}
                      inview={inview}
                    />
                  )
                );
              })}
            </div>
          </div>
          <div className="prof__skills">
            <h2 style={darkMode ? { color: "#d5d5d5" } : {}}>
              Professional Skills
            </h2>
            <div className="circle-bars">
              {profSkills.map((skill, index) => {
                return (
                  <CircleProgress
                    key={index}
                    name={skill.name}
                    prof={skill.prof}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
