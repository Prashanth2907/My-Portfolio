export const personalInfo = {
  name: "Adama Prashanth",
  role: "Software Engineer",
  title: "Entry-Level Software Engineer & Computer Science Graduate",
  tagline: "Building resilient web applications, responsive user interfaces, and scalable AI/ML solutions.",
  location: "Hyderabad / Secunderabad, India",
  email: "prashanthadama@gmail.com",
  phone: "6281053802",
  phoneFormatted: "+91 6281053802",
  linkedin: "https://www.linkedin.com/in/adama-prashanth-965029241/",
  github: "https://github.com/Prashanth2907",
  status: "Actively seeking Entry-Level Software Engineer roles",
  summary: "Computer Science graduate seeking an entry-level Software Engineer role to apply my technical skills, gain industry experience, and contribute to innovative software solutions while continuously learning and growing professionally. Passionate about problem-solving and eager to work in a collaborative environment that encourages creativity and technical excellence.",
  stats: [
    { label: "B.Tech CSE", value: "2021-2025" },
    { label: "Internships", value: "Salesforce & TechnoHack" },
    { label: "Verified Repos", value: "Active Codebases" },
    { label: "Target", value: "Entry-Level SDE" }
  ]
};

export const skillsCategories = [
  {
    category: "Languages",
    description: "Core programming languages utilized in algorithms and application logic",
    skills: [
      { name: "Python", level: 90, highlight: true },
      { name: "Java", level: 85, highlight: true },
      { name: "JavaScript", level: 88, highlight: true },
      { name: "SQL", level: 84, highlight: false },
      { name: "C / C++", level: 80, highlight: false }
    ]
  },
  {
    category: "Frontend Technologies",
    description: "Modern web technologies for interactive, responsive user interfaces",
    skills: [
      { name: "React.js", level: 88, highlight: true },
      { name: "HTML5", level: 95, highlight: false },
      { name: "CSS3", level: 90, highlight: false },
      { name: "Tailwind CSS", level: 86, highlight: true },
      { name: "Responsive Design", level: 92, highlight: false }
    ]
  },
  {
    category: "Backend & Cloud",
    description: "Server-side architectures, REST APIs, and database engineering",
    skills: [
      { name: "Node.js", level: 82, highlight: true },
      { name: "REST APIs", level: 86, highlight: false },
      { name: "MySQL", level: 84, highlight: true },
      { name: "MongoDB", level: 80, highlight: true },
      { name: "AWS Cloud Fundamentals", level: 80, highlight: true }
    ]
  },
  {
    category: "AI, ML & Vector Search",
    description: "Applied machine learning, generative AI, and vector retrieval pipelines",
    skills: [
      { name: "PyTorch", level: 82, highlight: true },
      { name: "TensorFlow & Keras", level: 80, highlight: true },
      { name: "LangChain", level: 85, highlight: true },
      { name: "FAISS & LLaMA", level: 84, highlight: true },
      { name: "Sentence Transformers", level: 82, highlight: false },
      { name: "Scikit-Learn ML", level: 88, highlight: true }
    ]
  },
  {
    category: "Developer Tools & Security",
    description: "Development environments, version control, and diagnostic tooling",
    skills: [
      { name: "Git & GitHub", level: 90, highlight: true },
      { name: "Visual Studio Code", level: 88, highlight: false },
      { name: "IntelliJ IDEA", level: 85, highlight: false },
      { name: "Wireshark", level: 82, highlight: false },
      { name: "Maltego", level: 80, highlight: false },
      { name: "UiPath RPA", level: 78, highlight: false }
    ]
  },
  {
    category: "Technical Proficiencies",
    description: "Fundamental computer science foundations and engineering best practices",
    skills: [
      { name: "Data Structures & Algorithms", level: 88, highlight: true },
      { name: "Object-Oriented Programming (OOP)", level: 90, highlight: true },
      { name: "DBMS & Schema Design", level: 85, highlight: false },
      { name: "Identity & Access Security", level: 82, highlight: false }
    ]
  }
];

export const projects = [
  {
    id: "netflix-clone",
    title: "Netflix Clone – Responsive Movie Discovery Web App",
    category: "Frontend & Web Application",
    timeline: "Apr 2026 – Jun 2026",
    badge: "React.js • OMDb API • LocalStorage",
    summary: "A high-performance Netflix-inspired movie discovery web application featuring real-time movie search, dynamic metadata preview, and persistent favorites.",
    points: [
      "Integrated OMDb API with asynchronous requests to retrieve real-time movie details, high-res posters, IMDb ratings, genres, and storyline plots.",
      "Implemented a comprehensive stateful search and favorite movie management system, using browser LocalStorage to preserve user collections across sessions.",
      "Engineered using functional React components and React Hooks (useState, useEffect, useMemo) with mobile-first CSS architecture.",
      "Version controlled with Git/GitHub and continuously deployed with automated build pipelines on Netlify."
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "OMDb API", "LocalStorage", "CSS3", "Netlify", "Git & GitHub"],
    githubUrl: "https://github.com/Prashanth2907/netflix-clone",
    demoUrl: "https://github.com/Prashanth2907/netflix-clone",
    stats: [
      { label: "Search Latency", value: "< 250ms" },
      { label: "State Sync", value: "LocalStorage" },
      { label: "Repository", value: "Verified Code" }
    ]
  },
  {
    id: "rag-qa-system",
    title: "RAG-Based Question Answering with Chunking & Vector Search",
    category: "Applied AI & NLP Architecture",
    timeline: "Jun 2026 – Aug 2026",
    badge: "LLaMA • FAISS • LangChain • PyTorch",
    summary: "An end-to-end Retrieval-Augmented Generation (RAG) platform that indexes technical problem-solution datasets and synthesizes context-grounded answers with minimized hallucination.",
    points: [
      "Engineered an end-to-end RAG pipeline using LLaMA models, FAISS vector indexes, Sentence Transformers, and LangChain orchestration.",
      "Designed and evaluated 5 distinct chunking methodologies: Fixed, Semantic, Recursive, Documentation, and Agentic chunking to optimize context granularity.",
      "Streamlined query preprocessing, dense vector embedding generation, top-k similarity search, and prompt synthesis for accurate answer generation.",
      "Benchmarked retrieval precision and reduced context window overhead by optimizing token chunk sizes."
    ],
    techStack: ["Python", "LLaMA", "FAISS", "LangChain", "Sentence Transformers", "Vector Search", "PyTorch"],
    githubUrl: "https://github.com/Prashanth2907",
    demoUrl: "https://github.com/Prashanth2907",
    stats: [
      { label: "Chunking Modes", value: "5 Custom Modes" },
      { label: "Vector Search", value: "Sub-Second Top-K" },
      { label: "Architecture", value: "LangChain + FAISS" }
    ]
  },
  {
    id: "loan-approval-prediction",
    title: "Loan Approval Prediction System",
    category: "Machine Learning & Predictive Modeling",
    timeline: "ML & Scikit-Learn Project",
    badge: "Python • Scikit-Learn • Random Forest • KNN",
    summary: "An automated machine learning classification model to assess loan applicant credit risk, predict approval status, and streamline financial loan sanctioning pipelines.",
    points: [
      "Trained and evaluated multiple machine learning classifiers including Random Forest Classifier and K-Nearest Neighbors (KNN) to predict loan approvals.",
      "Performed data cleansing, missing value handling, categorical encoding, and feature correlation heatmaps using Seaborn and Pandas.",
      "Divided data into train/test subsets to validate classification metrics including accuracy, precision, recall, and confusion matrix."
    ],
    techStack: ["Python", "Scikit-Learn", "Random Forest", "K-Nearest Neighbors", "Pandas", "Seaborn", "Jupyter Notebook"],
    githubUrl: "https://github.com/Prashanth2907/Loan-Approval-Prediction",
    demoUrl: "https://github.com/Prashanth2907/Loan-Approval-Prediction",
    stats: [
      { label: "Algorithms", value: "Random Forest & KNN" },
      { label: "Framework", value: "Scikit-Learn" },
      { label: "Repository", value: "Verified Code" }
    ]
  },
  {
    id: "figma-assignment",
    title: "Responsive Modern Dashboard Web App (Figma to Code)",
    category: "Frontend & Full-Stack Application",
    timeline: "React & Tailwind Implementation",
    badge: "React.js • Tailwind CSS • Vite • Lucide Icons",
    summary: "Pixel-perfect implementation of a modern, responsive web application from Figma design files, featuring modular layouts, interactive dashboard views, and custom UI components.",
    points: [
      "Engineered a component-driven dashboard architecture with dedicated layout, navigation, and stateful widgets using React 19 and Vite.",
      "Styled with Tailwind CSS utilizing custom typography, fluid responsive breakpoints, and polished theme palettes.",
      "Structured clean, maintainable directory architecture with reusable common components, custom hooks, and utility modules."
    ],
    techStack: ["React.js", "Tailwind CSS", "Vite", "JavaScript (ES6+)", "Lucide Icons", "PostCSS"],
    githubUrl: "https://github.com/Prashanth2907/figma-assignment",
    demoUrl: "https://github.com/Prashanth2907/figma-assignment",
    stats: [
      { label: "Stack", value: "React 19 + Tailwind" },
      { label: "Architecture", value: "Modular Components" },
      { label: "Repository", value: "Verified Code" }
    ]
  },
  {
    id: "zomato-data-analysis",
    title: "Zomato Restaurant Data Analysis & EDA",
    category: "Data Science & Exploratory Analysis",
    timeline: "Data Science & Analytics",
    badge: "Python • Pandas • Matplotlib • Seaborn",
    summary: "Comprehensive exploratory data analysis examining restaurant dining trends, price elasticity, rating correlations, and delivery performance metrics.",
    points: [
      "Conducted extensive data wrangling and cleaning on restaurant datasets using Pandas and NumPy to remove inconsistencies and null distributions.",
      "Visualized key business insights, rating distributions, pricing ranges, and cuisine popularity utilizing Seaborn and Matplotlib.",
      "Extracted actionable patterns relating customer ratings to approximate costs for two and online ordering availability."
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "Data Analytics"],
    githubUrl: "https://github.com/Prashanth2907/Zomato-Data-Analysis",
    demoUrl: "https://github.com/Prashanth2907/Zomato-Data-Analysis",
    stats: [
      { label: "Dataset Analysis", value: "Full EDA Pipeline" },
      { label: "Visualizations", value: "Seaborn & Matplotlib" },
      { label: "Repository", value: "Verified Code" }
    ]
  },
  {
    id: "instagram-analysis",
    title: "Instagram Engagement & Reach Analytics",
    category: "Data Analytics & Social Metrics",
    timeline: "Data Analytics & Python",
    badge: "Python • Pandas • Social Data Analysis",
    summary: "Quantitative analysis of social media impressions, hashtag effectiveness, conversion rates, and profile visit engagement patterns.",
    points: [
      "Analyzed multidimensional post data tracking impressions from home, hashtags, explore, and direct shares using Pandas.",
      "Calculated engagement rates, correlation between caption word count and reach, and identified peak retention content types.",
      "Designed clear visual charts summarizing audience acquisition channels and interaction behavior."
    ],
    techStack: ["Python", "Pandas", "NumPy", "Data Visualization", "Jupyter Notebook"],
    githubUrl: "https://github.com/Prashanth2907/Instagram-Analysis",
    demoUrl: "https://github.com/Prashanth2907/Instagram-Analysis",
    stats: [
      { label: "Focus", value: "Reach & Impressions" },
      { label: "Toolkit", value: "Pandas & Python" },
      { label: "Repository", value: "Verified Code" }
    ]
  }
];

export const experiences = [
  {
    role: "Intern",
    company: "Salesforce",
    location: "Hyderabad, India",
    period: "Nov 2023 – Jan 2024",
    type: "Internship",
    badge: "CRM & Enterprise Systems",
    description: "Hands-on engineering in enterprise cloud solutions, workflow automation, and Salesforce ecosystem customization.",
    achievements: [
      "Gained hands-on experience in Salesforce CRM architecture, focusing on Sales Cloud and Service Cloud business workflows.",
      "Contributed to enterprise projects by designing and implementing automated lead management, routing rules, and status lifecycle triggers.",
      "Engineered custom business logic and user interface extensions utilizing Apex programming, Visualforce pages, and Salesforce Administrator tools."
    ],
    technologies: ["Salesforce CRM", "Apex", "Visualforce", "Sales Cloud", "Service Cloud", "Process Automation"]
  },
  {
    role: "Intern",
    company: "TechnoHack",
    location: "Hyderabad, India",
    period: "May 2024 – Jul 2024",
    type: "Internship",
    badge: "Cybersecurity & Network Analysis",
    description: "Network security analysis, threat link mapping, and hands-on vulnerability diagnostics.",
    achievements: [
      "Conducted cybersecurity investigations utilizing Maltego for visual entity mapping, footprinting, and threat intelligence link analysis.",
      "Completed network vulnerability scanning missions to detect configuration weaknesses, unpatched endpoints, and open service ports.",
      "Conducted packet-level network traffic analysis using Wireshark to investigate protocol anomalies, latency issues, and security flags."
    ],
    technologies: ["Maltego", "Wireshark", "Network Scanning", "Vulnerability Assessment", "Traffic Analysis"]
  }
];

export const educationList = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Vardhaman College of Engineering (VCEH)",
    location: "Hyderabad, India",
    period: "Nov 2021 – May 2025",
    details: "Specialized in Computer Science and Engineering with foundational coursework in Data Structures, Algorithms, OOP, Database Systems, Computer Networks, and Machine Learning."
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Vaibhav Junior College",
    location: "Hyderabad, India",
    period: "Jun 2019 – May 2021",
    details: "Mathematics, Physics, and Chemistry curriculum developing rigorous analytical and mathematical problem-solving skills."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Sai Teja Vidhya Nikethan High School",
    location: "Hyderabad, India",
    period: "Jun 2018 – Apr 2019",
    details: "Strong academic foundation with distinction in Science and Mathematics."
  }
];

export const certifications = [
  {
    title: "Saviynt Identity Security for AI Age",
    issuer: "Saviynt",
    tag: "Security & Cloud Governance",
    description: "Advanced certification covering modern identity security, AI-era privileged access governance, and cloud compliance architecture."
  },
  {
    title: "AWS APAC - Solutions Architecture Job Simulation",
    issuer: "Amazon Web Services (AWS) / Forage",
    tag: "Cloud Architecture",
    description: "Hands-on cloud architecture simulation designing scalable, resilient AWS solutions including VPC, IAM security, EC2, and S3 storage tiering."
  },
  {
    title: "Python Developer Certification",
    issuer: "Alftdo Tech",
    tag: "Programming & Backend",
    description: "Demonstrated proficiency in core Python programming, data structures, OOP concepts, algorithms, and application development."
  },
  {
    title: "RPA Developer Foundation Certification",
    issuer: "UiPath",
    tag: "Automation & Robotics",
    description: "Demonstrated knowledge and hands-on capability in robotic process automation workflows using UiPath tools and automation frameworks."
  },
  {
    title: "JobReady Employability Skills Training",
    issuer: "Wadhwani Foundation",
    tag: "Professional Excellence",
    description: "Specialized professional readiness, workplace communication, problem-solving, critical thinking, and team dynamics training."
  },
  {
    title: "Node.js Certification",
    issuer: "Indian Society for Technical Education (ISTE)",
    tag: "Backend & Web APIs",
    description: "Certification demonstrating server-side JavaScript proficiency, asynchronous event loops, REST API design, and Node.js backend integration."
  },
  {
    title: "Data Visualization using Python and Tableau",
    issuer: "Technical Training & Certification",
    tag: "Data Analytics",
    description: "Proficiency in visual storytelling, interactive business dashboards with Tableau, and exploratory data analysis using Matplotlib and Seaborn."
  }
];
