import IconJS from "./assets/images/icons/js.png";
import IconNode from "./assets/images/icons/node.png";
import IconExpress from "./assets/images/icons/express.png";
import IconCPlus from "./assets/images/icons/c++.png";
import IconCSharp from "./assets/images/icons/c-sharp.png";
import IconHTML from "./assets/images/icons/html-5.png";
import IconCSS from "./assets/images/icons/css-3.png";
import IconReact from "./assets/images/icons/react.png";
import IconJava from "./assets/images/icons/java.png";
import IconPostgreSQL from "./assets/images/icons/postgreSQL.png";

//ordering in decreasing order of priority
//proficiency is in %
export const skills = [
  { name: "React", icon: IconReact, proficiency: 85 },
  { name: "JavaScript", icon: IconJS, proficiency: 88 },
  { name: "HTML", icon: IconHTML, proficiency: 95 },
  { name: "CSS", icon: IconCSS, proficiency: 90 },
  { name: "C++", icon: IconCPlus, proficiency: 96 },
  { name: "Node.js", icon: IconNode, proficiency: 65 },
  { name: "Express.js", icon: IconExpress, proficiency: 0 },
  { name: "PostgreSQL", icon: IconPostgreSQL, proficiency: 0 },
  { name: "C#", icon: IconCSharp, proficiency: 0 },
  { name: "Java", icon: IconJava, proficiency: 0 },
];
