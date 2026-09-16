import {
  web,
  backend,
  javascript,
  html,
  css,
  brain,
  git,
  figma,
  docker,
  caterpillar,
  dsignz,
  usim,
  python,
  c,
  r,
  tf,
  ai,
  mysql,
  flask,
  aws,
  mchtrack,
  icliniq,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "work", title: "Work" },
  { id: "achievements", title: "Achievements" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Machine Learning & DL",
    icon: brain,
  },
  {
    title: "Generative AI & LLMs",
    icon: ai,
  },
  {
    title: "Cloud & Data Engineering",
    icon: web,
  },
  {
    title: "Analytics & Dashboards",
    icon: backend,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "SQL", icon: mysql },
  { name: "TensorFlow", icon: tf },
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "Flask", icon: flask },
  { name: "Git", icon: git },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "R", icon: r },
  { name: "Figma", icon: figma },
];

const experiences = [
  {
    title: "College Intern",
    company_name: "Caterpillar Inc.",
    icon: caterpillar,
    iconBg: "#151030",
    date: "January 2026 - July 2026",
    points: [
      "Diagnosed a distribution flaw in the initial zip-file release of a PPT automation tool that exposed internal architecture; redesigned deployment as a single-click .exe using PyInstaller, eliminating codebase exposure for non-technical end users.",
      "Engineered a PyQt5-based supplier capacity planning and procurement automation app that extracted 50+ tables, charts, and images from 6 Excel macro workbooks and auto-generated PowerPoint reports using OpenPyXL, python-pptx, and Pillow, cutting a multi-hour manual process to under 10 minutes.",
      "Validated automation output against a client-provided QC checklist, catching data and layout bugs in 5 of 34 slides (~15%) prior to release.",
      "Built a manufacturing scheduler automation solution for Solar Turbines covering BOM processing, operation routing, assembly sequencing, and production time estimation for 100+ components using SQL and Power Apps; caught 7 scheduling defects pre-deployment and reduced manual scheduling effort by 90%.",
    ],
  },
  {
    title: "AI & Cloud Engineer Intern",
    company_name: "Dsignz Media",
    icon: dsignz,
    iconBg: "#151030",
    date: "October 2024 - May 2025",
    points: [
      "Designed an AWS cost analytics platform with ETL pipelines that extracted, transformed, and loaded AWS CUR data into 20+ Power BI & Tableau dashboards using AWS Glue, EC2, S3, CloudWatch, Boto3, Docker, ECR, and ECS, improving cost allocation accuracy by 30%.",
      "Integrated a RAG-based cloud assistant leveraging embeddings, semantic search, and FAISS over 1,000+ AWS documentation pages, reducing information retrieval time by 80% for engineering teams.",
    ],
  },
  {
    title: "IoT Software Intern",
    company_name: "Universiti Sains Islam Malaysia",
    icon: usim,
    iconBg: "#151030",
    date: "July 2024",
    points: [
      "Built an RFID-based livestock management platform supporting animal registration, health monitoring, and feed planning using Python, Flask, SQLite, Arduino, REST APIs, and WebSocket communication.",
      "Gathered requirements directly from farm operators, reducing manual record-keeping time by 95% in a pilot farm.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    school: "Coimbatore Institute of Technology, Coimbatore, Tamil Nadu",
    date: "Graduated 2026",
    detail: "CGPA: 8.93 / 10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Sri Gopal Naidu Higher Secondary School, Coimbatore, Tamil Nadu",
    date: "2022",
    detail: "95.7%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    school: "Sri Gopal Naidu Higher Secondary School, Coimbatore, Tamil Nadu",
    date: "2020",
    detail: "97.2%",
  },
];

const certifications = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
  },
  {
    title: "Business Intelligence and Analytics",
    issuer: "NPTEL - IIT Madras",
    detail: "Score: 83%",
  },
  {
    title: "Data Analysis using Python",
    issuer: "IBM",
  },
];

const achievements = [
  {
    title: "Datharm Foundation Appreciation Award",
    detail:
      "Nigeria, 2026 - Awarded $400 for developing an AI-powered immunization analytics platform enabling predictive healthcare interventions.",
  },
  {
    title: "Best Project Award",
    detail:
      "iCliniq & Orane Healthcare, 2025 - Awarded for developing an agentic healthcare assistant leveraging LLMs, RAG, and PubMed retrieval for evidence-based medical responses.",
  },
  {
    title: "Competitive Programming",
    detail:
      "Solved 250+ problems on LeetCode (@AkshayKarthickMS) and 100+ problems on GeeksforGeeks (@akshaykarr66b) across data structures, algorithms, and SQL.",
  },
];

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/AkshayKarthickMS/" },
  { name: "GitHub", url: "https://github.com/AkshayKarthickMS" },
];

const testimonials = [];

const projects = [
  {
    name: "AI-Powered MCHTrack — Zero-Dose Immunization Analytics",
    description:
      "Led a team of 4 to deliver an AI-driven immunization analytics platform for Datharm Foundation (Nigeria), processing 1,100+ beneficiary records and 80K+ facility visit records. Built and evaluated 3 classification models (Scikit-learn, XGBoost) that improved dropout-prediction accuracy from a 64% baseline to 84.4% (0.89 AUC-ROC), and designed 5 interactive Streamlit/Plotly dashboards surfacing 42% PCV dropout rates and 19% meningitis vaccine coverage gaps.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "xgboost", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: mchtrack,
    source_code_link: "https://github.com/AkshayKarthickMS",
  },
  {
    name: "AI-Driven Medical Inquiry Response System",
    description:
      "Developed an agentic healthcare assistant for iCliniq / Orane Healthcare using Llama 3.2, Mistral, RAG pipelines, and PubMed retrieval, achieving 95% response accuracy approval from reviewing doctors across multi-turn conversations. Built a FAISS vector database over 30+ medical literature documents with embeddings, semantic search, and conversation memory using Flask and SQLite.",
    tags: [
      { name: "llm", color: "blue-text-gradient" },
      { name: "rag", color: "green-text-gradient" },
      { name: "faiss", color: "pink-text-gradient" },
    ],
    image: icliniq,
    source_code_link: "https://github.com/AkshayKarthickMS",
  },
];

export {
  services,
  technologies,
  experiences,
  education,
  certifications,
  achievements,
  codingProfiles,
  testimonials,
  projects,
};
