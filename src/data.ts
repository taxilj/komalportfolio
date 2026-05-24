import { Project, TimelineItem, SkillItem } from "./types";

export const BRAND_NAME = "Komal Gajjar";
export const BRAND_ROLE = "Python Developer | Django Developer | Backend Developer";
export const BRAND_TITLE = "Building scalable backend systems, modern web applications, and clean user-focused digital experiences using Python and modern technologies.";

export const BIO_SUMMARY = "I am a Python Developer focused on building scalable web applications, backend systems, and responsive user experiences. I enjoy solving real-world problems through clean code, efficient architectures, and modern development practices.";

export const CAREER_OBJECTIVE = "Seeking internship and entry-level opportunities in Python and backend development to contribute technical skills, problem-solving abilities, and modern web development knowledge in real-world software projects.";

export const CONTACT_INFO = {
  phone: "+91 7265 057137",
  email: "komalgajjarj86@gmail.com",
  location: "57, Silicon Velly, Kansa N.V. Visnagar",
  linkedin: "https://linkedin.com/in/komalgajjar",
  github: "https://github.com/komalgajjar"
};

export const LANGUAGES = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Hindi", level: "Full professional proficiency" },
  { name: "Gujarati", level: "Native or bilingual proficiency" }
];

export const SKILL_ITEMS: SkillItem[] = [
  {
    name: "HTML",
    category: "web",
    proficiency: "Expert",
    description: "Semantic markup, SEO-friendly structure, accessibility compliance, and clean DOM architecture.",
    iconName: "Layout"
  },
  {
    name: "CSS",
    category: "web",
    proficiency: "Expert",
    description: "Responsive layouts, flexbox, grid systems, animations, and pixel-perfect styling across all devices.",
    iconName: "Layout"
  },
  {
    name: "JavaScript",
    category: "web",
    proficiency: "Advanced",
    description: "DOM manipulation, event handling, async programming, and dynamic client-side interactivity.",
    iconName: "Layout"
  },
  {
    name: "React.js",
    category: "web",
    proficiency: "Advanced",
    description: "Component-based UI development, hooks, state management, and building modern single-page applications.",
    iconName: "Monitor"
  },
  {
    name: "Node.js",
    category: "tools",
    proficiency: "Advanced",
    description: "Server-side JavaScript runtime for building scalable network applications, REST APIs, and real-time services.",
    iconName: "Terminal"
  },
  {
    name: "MongoDB",
    category: "database",
    proficiency: "Advanced",
    description: "NoSQL document database for flexible schemas, high-performance queries, and scalable data storage solutions.",
    iconName: "Layers"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "techvoyage",
    title: "TechVoyage Travel Management System",
    category: "Full-Stack Django Application",
    tags: ["Django", "Python", "JavaScript", "Responsive", "SQLite"],
    description: "Full-stack travel management platform built with Django MVT pattern featuring booking engine, review system, admin dashboard, and automated invoice generation.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/komalgajjar/techvoyage",
    stats: [
      { label: "Framework", value: "Django" },
      { label: "Auth System", value: "Secure" },
      { label: "Payments", value: "Tracked" }
    ],
    accentColor: "#C8FF45",
    isFeatured: true,

    role: "Full Stack Django Developer",
    tools: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
    result: "Delivered a full-featured travel platform with authentication, booking, wishlist, reviews, invoicing, and admin dashboard.",
    challenge: "The prior system lacked structured user flows, unified admin interfaces, and secure payment tracking capabilities.",
    solution: "Designed cohesive models using Django MVT pattern. Built custom views for invoice rendering, user authentication, and responsive dashboards.",
    impactDetails: [
      "Implemented secure user authentication and role-based access control.",
      "Built tour booking engine with wishlist management and review system.",
      "Engineered automated invoice generation and live payment tracking dashboard.",
      "Designed responsive admin panel for managing tours, bookings, and users."
    ]
  },
  {
    id: "bookstore",
    title: "Online Bookstore Web Application",
    category: "E-Commerce Web App",
    tags: ["MySQL", "HTML/CSS", "JavaScript", "Responsive"],
    description: "PHP-MySQL e-commerce application with secure user authentication, dynamic shopping cart, session management, and order tracking system.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/komalgajjar/bookstore",
    stats: [
      { label: "Database", value: "MySQL" },
      { label: "Cart", value: "Dynamic" },
      { label: "Auth", value: "Secure" }
    ],
    accentColor: "#D9FF72",
    isFeatured: false,

    role: "Backend & Web Developer",
    tools: ["MySQL", "HTML", "CSS", "JavaScript"],
    result: "Built a fully functional online bookstore with user login, dynamic cart, order history, and secure database integration.",
    challenge: "Persistent shopping cart caching and relational database security are often unstable in custom PHP architectures.",
    solution: "Developed dynamic PHP relational queries with prepared statements, maintaining instant cart updates and secure session handling.",
    impactDetails: [
      "Implemented secure user login and registration system.",
      "Built dynamic shopping cart with real-time quantity updates.",
      "Created order history and tracking module for users.",
      "Designed responsive frontend with clean UI and intuitive navigation."
    ]
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "mca",
    type: "education",
    title: "Master of Computer Applications (MCA)",
    organization: "Ganpat University",
    duration: "2024 – 2026",
    description: "Advanced curriculum covering software engineering, Python programming, Django web development, database systems, cloud computing, and project management methodologies.",
    skillsAcquired: ["Python", "Django", "Database Systems", "Software Engineering"]
  },
  {
    id: "bca",
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Ganpat University",
    duration: "2021 – 2024",
    description: "Foundational computer science education covering object-oriented programming, web technologies, database management, operating systems, and computer networks.",
    skillsAcquired: ["C/C++", "Web Development", "MySQL", "Data Structures"]
  }
];
