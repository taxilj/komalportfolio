import { Project, TimelineItem, SkillItem } from "./types";

export const BRAND_NAME = "Komal Gajjar";
export const BRAND_ROLE = "Python Developer | Django Developer | MCA Student";
export const BRAND_TITLE = "Building scalable, clean, and user-friendly web applications using Python and modern technologies.";

export const BIO_SUMMARY = "I am an MCA student and aspiring Python developer passionate about backend development, web applications, and problem solving. I enjoy creating scalable and practical solutions using Python, Django, databases, and modern web technologies.";

export const CAREER_OBJECTIVE = "Seeking internship and entry-level opportunities as a Python Developer to apply technical knowledge, gain industry experience, and contribute to real-world software development projects.";

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
  // Programming Languages
  {
    name: "Python",
    category: "programming",
    proficiency: "Expert",
    description: "Backend development, scripting, algorithm modeling, API design, and data handling with modern Python libraries and frameworks.",
    iconName: "Terminal"
  },
  {
    name: "Java",
    category: "programming",
    proficiency: "Expert",
    description: "Object-oriented program structure, collection frameworks, API design, multithreading, and secure database connectivity.",
    iconName: "Terminal"
  },
  {
    name: "C/C++",
    category: "programming",
    proficiency: "Advanced",
    description: "Solid conceptual foundation in structures, algorithms, pointer allocations, and memory resource optimization.",
    iconName: "Terminal"
  },
  {
    name: "C#",
    category: "programming",
    proficiency: "Intermediate",
    description: "Desktop software architecture, basic enterprise program modules, object bindings, and asynchronous control workflows.",
    iconName: "Terminal"
  },

  // Backend & Frameworks
  {
    name: "Django",
    category: "tools",
    proficiency: "Advanced",
    description: "MVT framework setups, admin dashboards, ORM mapping, authentication systems, and robust API development with Python.",
    iconName: "Sparkles"
  },
  {
    name: "ASP.NET",
    category: "tools",
    proficiency: "Intermediate",
    description: "Web services configuration, model-controller handling, database connections, and secure enterprise application forms.",
    iconName: "Globe"
  },
  {
    name: "PHP",
    category: "tools",
    proficiency: "Advanced",
    description: "Dynamic scripting, server request routing, database integrations inside SQL tables, and secure sessions configuration.",
    iconName: "Globe"
  },

  // Frontend
  {
    name: "HTML",
    category: "web",
    proficiency: "Expert",
    description: "Advanced semantic structures, SEO metadata, web accessibility compliance, and robust DOM nodes arrangement.",
    iconName: "Layout"
  },
  {
    name: "CSS",
    category: "web",
    proficiency: "Expert",
    description: "Responsive layouts on all viewport grids, animations, flexbox layouts, and pixel-perfect style alignments.",
    iconName: "Layout"
  },
  {
    name: "Bootstrap",
    category: "web",
    proficiency: "Expert",
    description: "Grid frameworks layouts, components customization, dynamic visual interfaces alignment, and quick prototype responsiveness.",
    iconName: "Monitor"
  },
  {
    name: "JavaScript",
    category: "web",
    proficiency: "Advanced",
    description: "Interactive frontend logic, DOM manipulation, event handling, and dynamic client-side scripting for modern web applications.",
    iconName: "Layout"
  },

  // Databases
  {
    name: "MySQL",
    category: "database",
    proficiency: "Expert",
    description: "Writing complex relational transactions, structural joins, query indexing, and schema optimization patterns.",
    iconName: "Layers"
  },
  {
    name: "SQLite",
    category: "database",
    proficiency: "Advanced",
    description: "Lightweight embedded SQL database modeling for standalone web tools, local applications, and rapid prototyping.",
    iconName: "Layers"
  },

  // Tools
  {
    name: "GitHub",
    category: "tools",
    proficiency: "Advanced",
    description: "Distributed version control, branch management, merge conflict resolution, and collaborative project documentation.",
    iconName: "Globe"
  },
  {
    name: "VS Code",
    category: "tools",
    proficiency: "Expert",
    description: "Customized development environment with integrated extensions, linting, debugging, and code formatting tools.",
    iconName: "Sliders"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "techvoyage",
    title: "TechVoyage Travel Management System",
    category: "Full-Stack Django Application",
    tags: ["Django", "Python", "SQLite", "Bootstrap", "JS"],
    description: "Developed a full-stack travel and tour management system using Django and Python with booking, reviews, and admin dashboard.",
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
    tools: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap"],
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
    tags: ["PHP", "MySQL", "HTML/CSS", "Responsive"],
    description: "Created a responsive bookstore platform with user authentication, shopping cart, and order management system.",
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
    tools: ["PHP", "MySQL", "HTML", "CSS"],
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
