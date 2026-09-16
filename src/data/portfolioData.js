export const personalInfo = {
  name: "Adama Prashanth",
  role: "Software Engineer",
  title: "Entry-Level Software Engineer & Computer Science Graduate",
  tagline: "Building resilient web applications, responsive user interfaces, and scalable AI-driven solutions.",
  location: "Hyderabad, India",
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
    { label: "Core Stack", value: "React • Node • Python" },
    { label: "Target", value: "Entry-Level SDE" }
  ]
};

export const skillsCategories = [
  {
    category: "Languages",
    description: "Core programming languages utilized in algorithms and application logic",
    skills: [
      { name: "Python", level: 90, highlight: true },
      { name: "Java", level: 82, highlight: true },
      { name: "JavaScript", level: 88, highlight: true },
      { name: "SQL", level: 84, highlight: false }
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
    category: "Backend & Systems",
    description: "Server-side architectures, REST APIs, and database engineering",
    skills: [
      { name: "Node.js", level: 80, highlight: true },
      { name: "REST APIs", level: 85, highlight: false },
      { name: "MySQL", level: 84, highlight: true },
      { name: "MongoDB", level: 80, highlight: true },
      { name: "DBMS", level: 86, highlight: false }
    ]
  },
  {
    category: "AI, ML & Vector Search",
    description: "Applied machine learning, generative AI, and vector retrieval pipelines",
    skills: [
      { name: "PyTorch", level: 78, highlight: true },
      { name: "TensorFlow", level: 76, highlight: false },
      { name: "Keras", level: 75, highlight: false },
      { name: "LangChain", level: 85, highlight: true },
      { name: "FAISS & LLaMA", level: 84, highlight: true },
      { name: "Sentence Transformers", level: 82, highlight: false }
    ]
  },
  {
    category: "Developer Tools & Security",
    description: "Development environments, version control, and diagnostic tooling",
    skills: [
      { name: "Git & GitHub", level: 90, highlight: true },
      { name: "Visual Studio", level: 85, highlight: false },
      { name: "IntelliJ IDEA", level: 85, highlight: false },
      { name: "Eclipse IDE", level: 80, highlight: false },
      { name: "Spring Initializr", level: 75, highlight: false },
      { name: "Wireshark", level: 80, highlight: false },
      { name: "Maltego", level: 78, highlight: false }
    ]
  },
  {
    category: "Technical Proficiencies",
    description: "Fundamental computer science foundations and engineering best practices",
    skills: [
      { name: "Data Structures & Algorithms", level: 88, highlight: true },
      { name: "Object-Oriented Programming (OOP)", level: 90, highlight: true },
      { name: "System Debugging & Analysis", level: 85, highlight: false },
      { name: "Automation Workflows", level: 82, highlight: false }
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
    githubUrl: "https://github.com/Prashanth2907",
    demoUrl: "https://github.com/Prashanth2907",
    stats: [
      { label: "Search Latency", value: "< 250ms" },
      { label: "State Sync", value: "LocalStorage" },
      { label: "Deployment", value: "Netlify Production" }
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
      { label: "Chunking Strategies", value: "5 Custom Modes" },
      { label: "Vector Search", value: "Sub-Second Top-K" },
      { label: "Architecture", value: "LangChain + FAISS" }
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
    institution: "Vardhaman College of Engineering",
    location: "Hyderabad, India",
    period: "Nov 2021 – May 2025",
    grade: "CGPA: 7.34",
    details: "Specialized in Computer Science and Engineering with foundational coursework in Data Structures, OOP, Database Systems, Computer Networks, and Machine Learning."
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Vaibhav Junior College",
    location: "Hyderabad, India",
    period: "Jun 2019 – May 2021",
    grade: "CGPA: 7.5",
    details: "Mathematics, Physics, and Chemistry curriculum developing rigorous analytical and mathematical problem-solving skills."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Sai Teja Vidhya Nikethan High School",
    location: "Hyderabad, India",
    period: "Jun 2018 – Apr 2019",
    grade: "CGPA: 8.8",
    details: "Strong academic foundation with distinction in Science and Mathematics."
  }
];

export const certifications = [
  {
    title: "Python Developer Certification",
    issuer: "Alftdo Tech",
    tag: "Programming & Backend",
    description: "Demonstrated proficiency in core Python programming, data manipulation, OOP concepts, algorithms, and application development."
  },
  {
    title: "JobReady Employability Skills Training",
    issuer: "Wadhwani Foundation",
    tag: "Professional Excellence",
    description: "Specialized professional readiness, workplace communication, problem-solving, critical thinking, and team dynamics training."
  },
  {
    title: "RPA Developer Foundation Certification",
    issuer: "UiPath",
    tag: "Automation & Robotics",
    description: "Demonstrated knowledge and hands-on capability in robotic process automation workflows using UiPath tools and automation frameworks."
  }
];
