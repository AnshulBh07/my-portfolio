import { BsInstagram, BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import Linkedin from "./assets/images/icons/linkedin.png";
import WhatsApp from "./assets/images/icons/whatsapp.png";
import Leetcode from "./assets/images/icons/leetcode.png";
import Instagram from "./assets/images/icons/instagram.png";
import Github from "./assets/images/icons/github.png";

export const mediaItemsDark = [
  {
    icon: <BsLinkedin className="icon" />,
    link: "https://www.linkedin.com/in/anshul-bhardwaj-5aa515110/",
  },
  {
    icon: <BsGithub className="icon" />,
    link: "https://github.com/AnshulBh07",
  },
  { icon: <BsWhatsapp className="icon" />, link: "" },
  {
    icon: <SiLeetcode className="icon" />,
    link: "https://leetcode.com/Anshul_Bhardwaj/",
  },
  { icon: <BsInstagram className="icon" />, link: "" },
];

export const mediaItemsLight = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/anshul-bhardwaj-5aa515110/",
  },
  {
    icon: Github,
    link: "https://github.com/AnshulBh07",
  },
  { icon: WhatsApp, link: "" },
  {
    icon: Leetcode,
    link: "https://leetcode.com/Anshul_Bhardwaj/",
  },
  { icon: Instagram, link: "" },
];
