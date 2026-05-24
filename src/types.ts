export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  link?: string;
  github?: string;
  stats?: { label: string; value: string }[];
  accentColor?: string;
  isFeatured?: boolean;
  
  // Professional recruiter fields
  role: string;
  tools: string[];
  result: string;
  challenge: string;
  solution: string;
  impactDetails: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface TimelineItem {
  id: string;
  type: "experience" | "education" | "internship" | "freelance" | "certification";
  title: string;   // e.g. "Senior UI/UX Designer" or "B.Sc. in Human-Computer Interaction"
  organization: string; // e.g. "Google" or "Design Academy"
  duration: string;     // e.g. "2023 - Present"
  description: string;
  skillsAcquired?: string[];
}

export interface SkillItem {
  name: string;
  category: "programming" | "web" | "database" | "tools";
  proficiency: "Expert" | "Advanced" | "Intermediate";
  description: string;
  iconName: string;
}
