import {
  mobile,
  ecrime,
  logo_w,
  microverse,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  next,
  meta,
  starbucks,
  tesla,
  shopify,
  quantumStocks,
  space,
  portfolio,
  threejs,
  rails,
  sass,
  express,
  ruby,
  jest,
  reactest,
  bookstore,
  skilledity,
  kalki,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Resume",
  },
];

export const navdescription = [
  { title: "this is about us" },
  { title: "this is conatct us" },
  { title: "this is us" },
  { title: "this is me us" },
];

const services = [
  {
    title: "Frontend with React & Redux",
    icon: web,
  },
  {
    title: "Backend with Node.js",
    icon: mobile,
  },
  {
    title: "Database with MongoDB & SQL",
    icon: backend,
  },
  {
    title: "Strong collaborator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
];

const experiences = [
  {
    title: "Student Intern- Web Developer",
    company_name: " KalkiFI Solutions Pvt. Ltd.",
    icon: kalki,
    iconBg: "#000000",
    date: "August 2024– September 2024",
    points: [
      "Improved user engagement by approx. 30% through intuitive web interface design using React and Tailwind CSS.",
      "Pioneered a JavaScript-based, cross-browser compatibility solution, resolving rendering inconsistencies across 5 different browsers and boosting user engagement by improving accessibility for all users.",
      "Modernized 2+ company websites, ensuring 100% responsiveness and compatibility across devices",
    ],
  },
  {
    title: "Student Intern- Web Developer",
    company_name: "Skilledity Solution Pvt. Ltd.",
    icon: skilledity,
    iconBg: "#ffffff",
    date: "January 2025– May 2025",
    points: [
      "Resolved 15+ critical issues in collaboration with design and QA teams, meeting tight 2-week sprints",
      "Revamped system response times by 35% through code optimization and database query tuning",
      "Customized Moodle LMS for about 500 students, integrating 5+ new plugins and tailored course structures to institutional needs",
    ],
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Quantum Stocks is a web application where you can visualize detailed information about any stock traded in the six biggest markets.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "text-violet-700",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quantumStocks,
    source_code_link: "https://github.com/jmonto55/Sotck-Viewer",
    live_demo_link: "https://sotck-viewer.vercel.app/",
  },
  {
    name: "Alpha Reservations",
    description:
      "Full-stack solution using React for the frontend and Ruby on Rails for the backend. Its primary purpose is to facilitate house reservations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rails",
        color: "text-violet-700",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link:
      "https://github.com/jmonto55/book-an-appointment-frontend",
    live_demo_link:
      "https://book-an-appointment-frontend-git-dev-jmonto55.vercel.app/",
  },
  {
    name: "SmartBudget",
    description:
      "SmartBudget is a full-stack CRUD application to manage your personal budget, fully tested with unit specs and integration specs.",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Ruby on Rails",
        color: "pink-text-gradient",
      },
    ],
    image: space,
    source_code_link: "https://github.com/jmonto55/budget-app",
    live_demo_link: "https://rails-kb31.onrender.com",
  },
  {
    name: "This Portfolio",
    description:
      "A complete built from scratch React project with emphasis in UX and usage of advance libraries and packages like Framer Motion and Three Js.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/jmonto55/Portfolio-V2",
    live_demo_link: "https://portfolio-ci7x.onrender.com/",
  },
];

export { services, technologies, experiences, projects };
