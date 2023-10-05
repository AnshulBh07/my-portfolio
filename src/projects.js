import WeatherApp from "./assets/images/weather-app.png";
import Game2048 from "./assets/images/2048.png";
import Dashboard from "./assets/images/dashboard.png";
import QuizApp from "./assets/images/quiz-app.png";

export const projectsList = [
  {
    name: "Weather App",
    thumbnail: WeatherApp,
    description:
      "Created a fully responsive weather app in React.js. Fetches the current weather data for a given city using axios from Openweathermap API. Displays weather for given city with dynamic animated icons and background.",
    tech: [
      "ReactJS",
      "JavaScript",
      "Axios",
      "HTML",
      "Vanilla CSS",
      "RestfulAPI",
    ],
    gitlink:
      "https://github.com/AnshulBh07/Fully-responsive-weather-app-in-React",
    demolink: "https://borks-responsive-weather-app.netlify.app/",
  },
  {
    name: "Quiz App",
    thumbnail: QuizApp,
    description:
      "Created a quiz application in React where one can test their React.js mastery. Fetches questions from a PostgreSQL database using axios. The user can perform CRUD operations. Hurry up! Solve all the questions before the timer runs out!",
    tech: [
      "ReactJS",
      "JavaScript",
      "PostgreSQL",
      "Axios",
      "RestfulAPI",
      "Node.js",
      "Express.js",
    ],
    gitlink: "https://github.com/AnshulBh07/React-quiz-app-frontend",
    demolink: "https://borks-react-quiz.netlify.app/",
  },
  {
    name: "Dashboard",
    thumbnail: Dashboard,
    description:
      "An online dashboard that displays any relevant data. Uses axios to fetch the relevenat data and ChartJs to display it. Supports google sign-in with OAuth 2.0. Let's user add new profiles. Fully responsive in nature.",
    tech: ["React.js", "API", "OAuth 2.0", "Axios", "HTML", "CSS"],
    gitlink: "https://github.com/AnshulBh07/React-Dashboard",
    demolink: "https://react-dashboard-assignmentopeninapp.netlify.app/",
  },
  {
    name: "2048 Game",
    thumbnail: Game2048,
    description:
      "Implemented a famous mathematical board game called 2048.A tile sliding block puzzle where the user's objective is to combine grids to create a tile with the number 2048. However user can continue the game and create up to 8192",
    tech: ["JavaScript", "HTML", "CSS"],
    gitlink: "https://github.com/AnshulBh07/2048-Game-in-Javascript",
    demolink: "",
  },
];
