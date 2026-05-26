import { motion } from "motion/react";
import { SKILL_ITEMS } from "../data";
import { 
  Terminal, 
  Layout, 
  Layers, 
  Monitor, 
} from "lucide-react";

export default function Skills() {
  const renderSkillIcon = (iconName: string) => {
    const props = { size: 20, className: "text-pure-black transition-colors duration-300" };
    switch (iconName) {
      case "Terminal":
        return <Terminal {...props} className="text-[#ABC724]" />;
      case "Layout":
        return <Layout {...props} className="text-blue-500" />;
      case "Layers":
        return <Layers {...props} className="text-indigo-500" />;
      case "Monitor":
        return <Monitor {...props} className="text-emerald-500" />;
      default:
        return <Terminal {...props} className="text-neon-lime" />;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
    <section id="skills" className="relative py-20 md:py-28 bg-bg-white overflow-hidden border-b border-soft-gray/5">
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full radial-glow-smaller opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {SKILL_ITEMS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="relative p-6 rounded-[22px] bg-card-white border border-soft-gray/10 hover:border-pure-black/20 hover:shadow-3xs transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-[0.02] rounded-[22px] transition-opacity duration-300 pointer-events-none" />
              
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-bg-white border border-soft-gray/5 group-hover:scale-105 transition-transform duration-300">
                    {renderSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-soft-gray/5 text-soft-gray border border-soft-gray/10">
                    {skill.proficiency}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans font-black text-sm text-pure-black uppercase tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-soft-gray leading-relaxed font-light text-justify">
                    {skill.description}
                  </p>
                </div>
              </div>

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
    </motion.section>
  );
}
