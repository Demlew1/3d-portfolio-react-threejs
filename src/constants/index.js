import {
  jonasJ,
  jonasH,
  alx,
  gdg,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  movie,
  demzon,
  demlew,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "certificates",
    title: "certificates",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "contact",
  },
];

const services = [
  {
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "Typescript",
    icon: typescript,
  },
  {
    title: "Reactjs",
    icon: reactjs,
  },
  {
    title: "tailwindcss",
    icon: tailwind,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Zustand",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const certificates = [
  {
    name: "ALX front-end certificate",
    description:
      "After 4 month Journey I successfully finished the capstone project and the milestones",
    image: alx,
  },
  {
    name: "GDG AASTU",
    description:
      "I successfully finished front-end development after 6 month dedication and worked on capstone project",
    image: gdg,
  },

  {
    name: "Jonas javascript course",
    description:
      "I have Finished Jonas's course that takes about 68.5 hour. He was the best javascript teacher and thought me a lot of skills. ",
    image: jonasJ,
  },
  {
    name: "Jonas Html/Css course",
    description: "Also Learned Jonas's HTML and CSS course.",
    image: jonasH,
  },
];

const projects = [
  {
    name: "Demlew Ecommerce",
    description:
      "Web-based platform that allows authenticated users to search, filter,post and like products, providing a convenient and efficient solution for E-commerce needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: demlew,
    source_code_link: "https://github.com/Demlew1/Demlew-Ecommerce",
  },
  {
    name: "Movie-Database",
    description:
      "Web application that enables an authenticated users to search for movies, add to watchlist, and rate watchlisted movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Demlew1/Demzon-Ecommerce",
  },
  {
    name: "Demzon",
    description:
      "A comprehensive e-commerce platform that allows users to add products to cart, and add products to favourite page and offers search and filter functionality.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: demzon,
    source_code_link: "https://github.com/Demlew1/The-Movie-Database",
  },
];

export { certificates, services, technologies, projects };
