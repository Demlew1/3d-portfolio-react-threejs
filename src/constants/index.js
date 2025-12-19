import {
  jonasJ,
  jonasH,
  alx,
  gdg,
  javascript,
  typescript,
  html,
  css,
  prof,
  reactjs,
  redux,
  portfolio,
  tailwind,
  ahadu,
  git,
  figma,
  movie,
  demzon,
  demlew,
  next,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "certificates",
    title: "Certificates",
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
    title: "Contact",
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
    title: "Nextjs",
    icon: nextjs,
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
    name: "The Ultimate React Course 2025:React,Next.js,Redux & More",
    description:
      "I have Finished this course that takes about 84 hour. I learned a lot of skills about React and Next.js",
    image: next,
  },

  {
    name: "Jonas javascript course",
    description:
      "I have Finished Jonas's course that takes about 68.5 hour. He was the best javascript teacher and thought me a lot of skills. ",
    image: jonasJ,
  },
  {
    name: "Alx Professional Foundation",
    description:
      "I have Finished Alx Professional Foundation course that takes about 2 month. I learned a lot of skills about professional life and soft skills.",
    image: prof,
  },
  {
    name: "Jonas Html/Css course",
    description: "Also Learned Jonas's HTML and CSS course.",
    image: jonasH,
  },
];

const projects = [
  {
    name: "Ahadu Market",
    description:
      "This is a marketplace where suppliers and buyers come together to trade. It has a built-in tool that pulls product info directly from Amazon and automatically converts the prices from dollars into Birr.",
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
    image: ahadu,
    source_code_link: "https://ahadumarket.store/",
  },
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
    source_code_link: "https://demlew-ecommerce-last.vercel.app/",
  },
  {
    name: "Marketing Company Portfolio",
    description:
      "A responsive marketing company portfolio website built with React and Tailwind CSS, showcasing services, projects.",
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
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://zenati-creative.vercel.app/",
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
    source_code_link: "https://github.com/Demlew1/The-Movie-Database",
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
    source_code_link: "https://github.com/Demlew1/Demzon-Ecommerce",
  },
];

const testimonials = [
  {
    testimonial:
      "He comes up with great UI designs. He’s not just a web developer, he is also a good friend.",
    name: "Yohannes Aweke",
    designation: "CEO",
    company: "Ahadu Market",
  },
  {
    testimonial:
      "A web developer who truly cares about their client's success, just like you do",
    name: "Yonas Debru",
    designation: "FullStack Developer",
    company: "Ashara Labs",
  },
  {
    testimonial:
      "I really like how dedicated he is. His UI designs are great, and he always does what you ask",
    name: "Behigu Gizachew",
    designation: "Software Lead",
    company: "International Clinical Laboratory(ICL)",
  },
];

export { certificates, services, technologies, projects, testimonials };
