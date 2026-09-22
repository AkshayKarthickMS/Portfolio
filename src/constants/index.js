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
  java,
  xgboost,
  powerbi,
  tableau,
  scikitlearn,
  langchain,
  qdrant,
  huggingface,
  streamlit,
  plotly,
  opencv,
  mongodb,
  sqlite,
  fastapi,
  caterpillar,
  dsignz,
  usim,
  icliniqIcon,
  datharm,
  cit,
  sgn,
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
  carrent,
  tripguide,
  retail,
  hand,
  aiWorkspace,
  aqi,
  encryption,
  geofencing,
  gold,
  brainTumor,
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
  { title: "Machine Learning & DL", icon: brain },
  { title: "Generative AI & LLMs", icon: ai },
  { title: "Cloud & Data Engineering", icon: web },
  { title: "Analytics & Dashboards", icon: backend },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "SQL", icon: mysql },
  { name: "TensorFlow", icon: tf },
  { name: "Scikit-learn", icon: scikitlearn },
  { name: "XGBoost", icon: xgboost },
  { name: "LangChain", icon: langchain },
  { name: "Qdrant", icon: qdrant },
  { name: "Hugging Face", icon: huggingface },
  { name: "OpenCV", icon: opencv },
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "Flask", icon: flask },
  { name: "FastAPI", icon: fastapi },
  { name: "Power BI", icon: powerbi },
  { name: "Tableau", icon: tableau },
  { name: "Streamlit", icon: streamlit },
  { name: "Plotly", icon: plotly },
  { name: "MongoDB", icon: mongodb },
  { name: "SQLite", icon: sqlite },
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
    location: "Chennai, Tamil Nadu",
    icon: caterpillar,
    iconBg: "#151030",
    date: "January 2026 - July 2026",
    certificateFile: "/certificates/caterpillar-internship-certificate.pdf",
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
    location: "Coimbatore, Tamil Nadu",
    icon: dsignz,
    iconBg: "#151030",
    date: "October 2024 - May 2025",
    certificateFile: "/certificates/dsignz-media-internship-certificate.pdf",
    points: [
      "Designed an AWS cost analytics platform with ETL pipelines that extracted, transformed, and loaded AWS CUR data into 20+ Power BI & Tableau dashboards using AWS Glue, EC2, S3, CloudWatch, Boto3, Docker, ECR, and ECS, improving cost allocation accuracy by 30%.",
      "Integrated a RAG-based cloud assistant leveraging embeddings, semantic search, and FAISS over 1,000+ AWS documentation pages, reducing information retrieval time by 80% for engineering teams.",
    ],
  },
  {
    title: "IoT Software Intern",
    company_name: "Universiti Sains Islam Malaysia",
    location: "Nilai, Malaysia",
    icon: usim,
    iconBg: "#151030",
    date: "July 2024",
    certificateFile: "/certificates/usim-internship-certificate.pdf",
    points: [
      "Built an RFID-based livestock management platform supporting animal registration, health monitoring, and feed planning using Python, Flask, SQLite, Arduino, REST APIs, and WebSocket communication.",
      "Gathered requirements directly from farm operators, reducing manual record-keeping time by 95% in a pilot farm.",
    ],
  },
];

// Academic project collaborations done as part of CIT's curriculum — recognized with
// certificates of appreciation/recognition, not formal employment internships.
const collaborations = [
  {
    title: "AI-Driven Medical Inquiry Response System",
    company_name: "Orane Healthcare (iCliniq)",
    location: "Remote",
    icon: icliniqIcon,
    iconBg: "#0d0a1f",
    date: "August 2024 - April 2025",
    certificateFile: "/certificates/orane-icliniq-project-certificate.pdf",
    points: [
      "Completed an academic-curriculum project in collaboration with Orane Healthcare's iCliniq platform, developing an agentic healthcare assistant leveraging Llama 3.2, Mistral, RAG pipelines, and PubMed retrieval, validated through manual QA testing with practicing doctors across multi-turn conversations, achieving 95% response accuracy approval from reviewing doctors.",
      "Built a FAISS vector database using embeddings, semantic search, chunking, and cosine similarity to index 30+ medical literature documents, and implemented conversation memory and session management using Flask and SQLite for coherent, personalized multi-turn assistance.",
    ],
  },
  {
    title: "AI-Powered MCHTrack — Zero-Dose Immunization Analytics",
    company_name: "Datharm Foundation for Social Impact",
    location: "Remote (Nigeria)",
    icon: datharm,
    iconBg: "#0d0a1f",
    date: "June 2025 - March 2026",
    certificateFile: "/certificates/datharm-foundation-recognition-certificate.pdf",
    points: [
      "Recognized by Datharm Foundation and Coimbatore Institute of Technology for contribution to AI-driven analysis of maternal and child health data through the MCHTrack platform, as part of academic curriculum.",
      "Led a team of 4 to deliver an immunization analytics platform processing 1,100+ beneficiary records and 80K+ facility visit records, improving dropout-prediction accuracy from a 64% baseline to 84.4%.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    school: "Coimbatore Institute of Technology, Coimbatore, Tamil Nadu",
    date: "Graduated 2026",
    detail: "CGPA: 8.93 / 10",
    icon: cit,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Sri Gopal Naidu Higher Secondary School, Coimbatore, Tamil Nadu",
    date: "2022",
    detail: "95.7%",
    icon: sgn,
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    school: "Sri Gopal Naidu Higher Secondary School, Coimbatore, Tamil Nadu",
    date: "2020",
    detail: "97.2%",
    icon: sgn,
  },
];

const certifications = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    file: "/certificates/ibm-machine-learning-with-python.pdf",
  },
  {
    title: "Business Intelligence and Analytics",
    issuer: "NPTEL - IIT Madras",
    detail: "Score: 83% · Top 5%",
    file: "/certificates/nptel-business-intelligence-analytics.pdf",
  },
  {
    title: "Data Analysis using Python",
    issuer: "IBM",
    file: "/certificates/ibm-data-analysis-using-python.pdf",
  },
  {
    title: "Blockchain and its Applications",
    issuer: "NPTEL - IIT Kharagpur",
    detail: "Score: 66%",
    file: "/certificates/nptel-blockchain-and-its-applications.pdf",
  },
];

const achievements = [
  {
    title: "Datharm Foundation Appreciation Award",
    detail:
      "Nigeria, 2026 - Awarded for developing an AI-powered immunization analytics platform enabling predictive healthcare interventions.",
    stat: "$400",
    statLabel: "Award",
    icon: "🏆",
  },
  {
    title: "Best Project Award",
    detail:
      "iCliniq & Orane Healthcare, 2025 - Awarded for developing an agentic healthcare assistant leveraging LLMs, RAG, and PubMed retrieval for evidence-based medical responses.",
    stat: "#1",
    statLabel: "Best Project",
    icon: "🥇",
  },
  {
    title: "Competitive Programming",
    detail:
      "Solved 250+ problems on LeetCode (@AkshayKarthickMS) and 100+ problems on GeeksforGeeks (@akshaykarr66b) across data structures, algorithms, and SQL.",
    stat: "350+",
    statLabel: "Problems Solved",
    icon: "💻",
  },
];

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/AkshayKarthickMS/" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/akshaykarr66b/" },
  { name: "GitHub", url: "https://github.com/AkshayKarthickMS" },
];

// Draft quotes generated from resume context for Akshay to review/edit before publishing.
// Ordered reverse-chronologically by the underlying engagement's timeframe.
const testimonials = [
  {
    testimonial:
      "Akshay consistently stood out for combining strong theoretical grounding in AI with the discipline to ship working systems. His final-year work on predictive healthcare analytics reflected genuine research maturity.",
    name: "Dr. Valliappan Raman",
    designation: "HOD",
    company: "Coimbatore Institute of Technology",
  },
  {
    testimonial:
      "Akshay caught scheduling defects in production data that would have cost us real time downstream. He has the instinct to validate his own work against live data before calling it done.",
    name: "Swamy Sankar Sarika",
    designation: "Team Lead",
    company: "Caterpillar Inc.",
  },
  {
    testimonial:
      "I mentored Akshay through his automation work at Caterpillar, and what stood out was how fast he closed the gap between 'it runs' and 'it's production-ready' — the PyInstaller packaging fix was entirely his own initiative.",
    name: "Sachinddar",
    designation: "Mentor",
    company: "Caterpillar Inc.",
  },
  {
    testimonial:
      "Akshay was a dependable teammate on the supplier capacity reporting tool — thorough with QA, quick to flag edge cases, and easy to coordinate with under deadline pressure.",
    name: "Ajita Fairen",
    designation: "Project Coworker",
    company: "Caterpillar Inc.",
  },
  {
    testimonial:
      "The immunization analytics platform Akshay's team built for us processed over 80,000 facility visit records and directly shaped how our field volunteers prioritized outreach. His ability to translate messy health data into decisions our team could act on was invaluable.",
    name: "Dr. Amina Ahmad Ngogo",
    designation: "CEO",
    company: "Datharm Foundation",
  },
  {
    testimonial:
      "Working alongside Akshay on the dropout-prediction models was a masterclass in iteration — he took our baseline from 64% to 84% accuracy without losing sight of what the numbers meant for real patients.",
    name: "Rahimat",
    designation: "Data Scientist",
    company: "Datharm Foundation",
  },
  {
    testimonial:
      "Akshay took our AWS spend from a black box to a set of dashboards leadership actually trusted. His ETL pipelines and cost-analytics work improved our allocation accuracy by 30% — a real, measurable win.",
    name: "Dinesh Chidambaram",
    designation: "Co-Founder",
    company: "Dsignz Media",
  },
  {
    testimonial:
      "What impressed me most was how Akshay approached the cloud assistant project: he didn't just wire up an LLM, he built proper retrieval infrastructure over our documentation that cut our team's lookup time by 80%.",
    name: "Veera Sundari Mani",
    designation: "Co-Founder",
    company: "Dsignz Media",
  },
  {
    testimonial:
      "Akshay built the RAG pipeline behind our medical assistant with real rigor — chunking, embeddings, and retrieval were all tuned against actual doctor feedback, not just benchmark accuracy. That attention to clinical validation is rare to see in a student collaborator.",
    name: "Dr. Niharicka Gopalakrishnan",
    designation: "Business Analyst",
    company: "iCliniq",
  },
  {
    testimonial:
      "Akshay picked up our medical retrieval stack fast and wasn't afraid to push back on approaches that wouldn't hold up with real doctors reviewing the output. The FAISS indexing work he did over our literature set was genuinely solid.",
    name: "Shriram Arvinth",
    designation: "AI Developer",
    company: "iCliniq",
  },
  {
    testimonial:
      "Akshay's RFID livestock platform was built from real conversations with our farm operators, not assumptions. That grounding is why it cut record-keeping time by 95% in our pilot.",
    name: "Dr. Sundresan Perumal",
    designation: "Internship Supervisor",
    company: "Universiti Sains Islam Malaysia",
  },
];

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
    source_code_link: "https://github.com/AkshayKarthickMS/Vaccine-Model",
    source_code_links: [
      { label: "Prediction Model", url: "https://github.com/AkshayKarthickMS/Vaccine-Model" },
      { label: "Dashboard", url: "https://github.com/AkshayKarthickMS/Phase-1" },
      { label: "Geospatial Viz", url: "https://github.com/AkshayKarthickMS/Map_Viz" },
    ],
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
  {
    name: "Fake Review Detection",
    description:
      "Developed a browser extension for scraping reviews from e-commerce websites and a KNN classifier to detect fake reviews with 84% accuracy.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "webscraping", color: "green-text-gradient" },
      { name: "machinelearning", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/AkshayKarthickMS/Fake-Review-Detection",
  },
  {
    name: "Brain Tumor Detection",
    description:
      "Built a Flask web application using OpenCV for MRI image preprocessing and a CNN classifier to detect brain tumors, with a demo interface for real-time predictions.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "deeplearning", color: "pink-text-gradient" },
    ],
    image: brainTumor,
    source_code_link: "https://github.com/AkshayKarthickMS/Brain-Tumor-Detection",
  },
  {
    name: "Smart Automated Store - IoT",
    description:
      "Engineered a smart automated store with an automated cart and queue-less billing, resulting in a 40% reduction in checkout time and a 25% increase in customer satisfaction.",
    tags: [
      { name: "embedded-c", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "webtechnology", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AkshayKarthickMS/Smart-Store-IoT",
  },
  {
    name: "Smart Retail Pricing",
    description:
      "Built a neural network model that suggests new product pricing based on demand and optimizes stock levels, enhancing business performance by 70%.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machinelearning", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: retail,
    source_code_link: "https://github.com/AkshayKarthickMS/Smart-Retail-Pricing",
  },
  {
    name: "Computer Vision - Hand Gesture Recognition",
    description:
      "Developed a hand recognition system and an image analyser & classifier using computer vision techniques.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machinelearning", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: hand,
    source_code_link: "https://github.com/AkshayKarthickMS/Hand-Gesture-Recognition",
    live_demo_link: "https://handgesturerecog.netlify.app/",
  },
  {
    name: "AegisOS - Multi-Agent AI Workforce Platform",
    description:
      "A local-first autonomous AI workforce platform: a LangGraph multi-agent runtime (Orchestrator, Research, Data/text-to-SQL, Analyst, QA, Compliance, Report agents) over a FastAPI backend with Postgres persistence and Redis-backed streaming. Backend architecture and agent runtime are built; frontend integration is still in progress.",
    tags: [
      { name: "langgraph", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "ai-agents", color: "pink-text-gradient" },
    ],
    image: aiWorkspace,
    source_code_link: "https://github.com/AkshayKarthickMS/AI-Workspace",
    live_demo_link: "https://ai-workspace-web.vercel.app",
  },
  {
    name: "Air Quality Index (AQI) Predictor",
    description:
      "A Streamlit application that predicts and visualizes real-time Air Quality Index using Python.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "datascience", color: "pink-text-gradient" },
    ],
    image: aqi,
    source_code_link: "https://github.com/AkshayKarthickMS/Air-Quality-Index-AQI-",
    live_demo_link: "https://air-qualiti-index.streamlit.app/",
  },
  {
    name: "Hybrid Cryptography Suite",
    description:
      "An interactive web app demonstrating hybrid RSA + AES encryption with real-time encryption/decryption, digital signatures, and performance benchmarking.",
    tags: [
      { name: "cryptography", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: encryption,
    source_code_link: "https://github.com/AkshayKarthickMS/AES_RSA",
    live_demo_link: "https://dataencryption.netlify.app/",
  },
  {
    name: "BabyBliss - Geofencing Ecommerce Platform",
    description:
      "A location-aware ecommerce platform for baby products that delivers region-specific promotions using the Haversine algorithm and the browser Geolocation API within a 50km geofence.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "geolocation", color: "pink-text-gradient" },
    ],
    image: geofencing,
    source_code_link: "https://github.com/AkshayKarthickMS/Geofencing",
    live_demo_link: "https://geofencing-offer.netlify.app/",
  },
  {
    name: "Gold Price Prediction",
    description:
      "An LSTM-based time-series forecaster for daily gold closing prices, trained on 2013-2023 historical data and evaluated on a held-out 2022 test period.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "lstm", color: "green-text-gradient" },
      { name: "timeseries", color: "pink-text-gradient" },
    ],
    image: gold,
    source_code_link: "https://github.com/AkshayKarthickMS/Gold-Price-Prediction",
    live_demo_link: "https://gold-price-prediction-akshaykarthick.lovable.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  collaborations,
  education,
  certifications,
  achievements,
  codingProfiles,
  testimonials,
  projects,
};
