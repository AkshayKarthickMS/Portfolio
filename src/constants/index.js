import {
  mobile,
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
  brain,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  hand,
  retail,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  c,
  r,
  tf,
  mysql,
  flask,
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
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Deep Learning Engineer",
    icon: brain,
  },
  {
    title: "Data Analyst",
    icon: backend,
  }
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
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "Tensorflow",
    icon: tf,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Flask",
    icon: flask,
  },
];

const experiences = [
  {
    title: "ML Engineer",
    company_name: "Prodigy InfoTech",
    icon: shopify,
    iconBg: "#383E56",
    date: "February 2024",
    points: [
      "Developing machine learning models for house and gold price prediction using regression techniques in Python.",
      "Working on hand recognition projects using computer vision and deep learning algorithms to improve accuracy and efficiency.",
      "Implementing image recognition and classification systems, utilizing frameworks like TensorFlow and Keras to build robust models.",
      "Collaborating with the team to fine-tune models, optimizing their performance and ensuring scalability for future use cases.",
    ],
  },
  {
    title: "Web-IoT Developer",
    company_name: "Universiti Sains Islam Malaysia",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024",
    points: [
      "Designing and developing a fully functional website for a Goat Management System, integrating IoT devices for real-time data monitoring.",
      "Utilizing HTML, CSS, JavaScript, and Flask to create an interactive, user-friendly frontend and dynamic backend.",
      "Implementing SQLite for efficient database management, ensuring smooth storage and retrieval of system data.",
      "Working closely with the IoT team to ensure seamless integration of sensors and devices for accurate real-time data updates.",
    ],
  },
  {
    title: "AI Engineer",
    company_name: "Dsignz Media",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2024 - November 2024",
    points: [
      "Developing a facial recognition application for a smart attendance system using Python, Dart, and Flask, significantly reducing manual attendance efforts.",
      "Designing and implementing a Content Management System (CMS) using HTML, CSS, and JavaScript to enable smooth management of website content.",
      "Integrating advanced algorithms for facial recognition, improving system security and user experience.",
      "Collaborating with cross-functional teams to test and optimize the AI system for real-time accuracy and performance.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Dsignz Media",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "November 2024 - Present",
    points: [
      "Working extensively with AWS."
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Fake Review Detection",
    description:
      "Developed a browser extension for scraping reviews from e-commerce websites and KNN to detect fake reviews with 84% accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "webscraping",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AkshayKarthickMS/Fake-Review-Detection",
  },
  {
    name: "College Event Management System",
    description:
      "A website that showcases club and departmental events including registration functionality, which enhanced event awareness and participation by 30%",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AkshayKarthickMS/BookMyBash",
  },
  {
    name: "Smart Automated Store - IoT",
    description:
      "Engineered a smart automated store with automated cart and queue-less billing, resulting in 40% reduction in checkout time and increase in customer satisfaction by 25%",
    tags: [
      {
        name: "embedded-c",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "webtechnology",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AkshayKarthickMS/Smart-Store-IoT",
  },
  {
    name: "Smart Retail Pricing",
    description:
      "Built a Neural Network model which suggests new product price based on demand and optimize stock level which enhances business by 70%",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: retail,
    source_code_link: "https://github.com/AkshayKarthickMS/Smart-Retail-Pricing",
  },
  {
    name: "Computer Vision",
    description:
      "Developed Hand Recognition system and Image Analyser & Classifier",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: hand,
    source_code_link: "https://github.com/AkshayKarthickMS/Hand-Gesture-Recognition",
  },
];

export { services, technologies, experiences, testimonials, projects };
