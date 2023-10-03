import "./skillStyles.css";
import { skills } from "../skillsList";
import FlatBar from "./FlatBar";
import CircleProgress from "./CircleProgress";
import { profSkills } from "../profSkillItems";

const Skills = ({ graphRef, inview, darkMode }) => {
  return (
    <section className="section__skills">
      <div
        className="container__skills"
        style={darkMode ? { backgroundColor: "#212121" } : {}}
      >
        <h3 style={darkMode ? { border: "1px solid #fff", color: "#fff" } : {}}>
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

        <div className="skill__graphics" ref={graphRef}>
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
                    inview={inview}
                    darkMode={darkMode}
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
