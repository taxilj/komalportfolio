import { useState } from "react";
import { motion } from "motion/react";
import { SKILL_ITEMS } from "../data";
import { 
  Terminal, 
  Layout, 
  Globe, 
  Layers, 
  Sparkles, 
  Monitor, 
  Sliders, 
  Grid 
} from "lucide-react";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<"all" | "programming" | "web" | "database" | "tools">("all");

  const categories = [
    { id: "all", label: "All Tech" },
    { id: "programming", label: "Programming" },
    { id: "web", label: "Web Dev" },
    { id: "database", label: "Databases" },
    { id: "tools", label: "Backend & Tools" },
  ];

  const filteredSkills = SKILL_ITEMS.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  // Return specific lucide-react icon component with unified color branding
  const renderSkillIcon = (iconName: string) => {
    const props = { size: 20, className: "text-pure-black transition-colors duration-300" };
    switch (iconName) {
      case "Terminal":
        return <Terminal {...props} className="text-[#ABC724]" />;
      case "Layout":
        return <Layout {...props} className="text-blue-500" />;
      case "Globe":
        return <Globe {...props} className="text-[#ABC724]" />;
      case "Layers":
        return <Layers {...props} className="text-indigo-500" />;
      case "Sparkles":
        return <Sparkles {...props} className="text-amber-500" />;
      case "Monitor":
        return <Monitor {...props} className="text-emerald-500" />;
      case "Sliders":
        return <Sliders {...props} className="text-neutral-500" />;
      default:
        return <Grid {...props} className="text-neon-lime" />;
    }
  };

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-bg-white overflow-hidden border-b border-soft-gray/5">
      {/* Background Soft Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full radial-glow-smaller opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7C8072] bg-[#E7EBDC] px-3 py-1 rounded-full">
              Competencies
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-pure-black uppercase mt-3">
              Technical Skillset
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-soft-gray mt-2 md:mt-0 select-none">
            02 // TOOLKIT & METHODOLOGY
          </p>
        </div>

        {/* Categories Tab Selector - recruiter oriented */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-soft-gray/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as any)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-pure-black text-white hover:bg-pure-black font-extrabold"
                  : "bg-card-white text-soft-gray border border-soft-gray/10 hover:border-soft-gray/30 hover:text-pure-black font-semibold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Minimal Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="relative p-6 rounded-[22px] bg-card-white border border-soft-gray/10 hover:border-pure-black/20 hover:shadow-3xs transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Card Decoration subtle glow */}
              <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-[0.02] rounded-[22px] transition-opacity duration-300 pointer-events-none" />
              
              <div className="space-y-4 text-left">
                {/* Icon & Proficiency Indicator */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-bg-white border border-soft-gray/5 group-hover:scale-105 transition-transform duration-300">
                    {renderSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-soft-gray/5 text-soft-gray border border-soft-gray/10">
                    {skill.proficiency}
                  </span>
                </div>

                {/* Name & Description */}
                <div className="space-y-1">
                  <h3 className="font-sans font-black text-sm text-pure-black uppercase tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-soft-gray leading-relaxed font-light text-justify">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Dynamic visual meter detailing experience progression */}
              <div className="w-full h-1 bg-soft-gray/10 rounded-full mt-5 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${
                    skill.proficiency === "Expert" 
                      ? "w-full bg-neon-lime" 
                      : skill.proficiency === "Advanced"
                        ? "w-4/5 bg-[#ABC724]"
                        : "w-3/5 bg-soft-gray/50"
                  }`} 
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
