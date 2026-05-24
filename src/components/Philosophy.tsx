import { motion } from "motion/react";
import { Terminal, Target, Code, Database, Smartphone, Globe } from "lucide-react";
import { BIO_SUMMARY, CAREER_OBJECTIVE, LANGUAGES } from "../data";

export default function Philosophy() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-bg-white overflow-hidden border-b border-soft-gray/5">
      {/* Background radial soft light blur */}
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] rounded-full radial-glow-smaller opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7C8072] bg-[#E7EBDC] px-3 py-1 rounded-full">
              About Me
            </span>
                <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-pure-black uppercase mt-3">
                  Professional Profile
                </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-soft-gray mt-2 md:mt-0 select-none">
             01 // PYTHON DEVELOPER PROFILE
          </p>
        </div>

        {/* About & Objective layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Professional bio & Career objective */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-left"
            >
              <h3 className="text-xl font-serif italic text-pure-black font-semibold">
                About Me
              </h3>
              <p className="text-xs md:text-sm font-sans text-soft-gray leading-relaxed text-left">
                {BIO_SUMMARY}
              </p>
            </motion.div>

            {/* Career Objective card (highly visible for recruiters) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-[24px] bg-card-white border-2 border-[#E7EBDC] shadow-3xs hover:border-[#ABC724]/40 transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <Target size={18} className="text-[#ABC724]" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-pure-black">
                  Core Career Objective
                </h4>
              </div>
              <p className="text-xs md:text-sm font-sans text-pure-black font-semibold leading-relaxed">
                {CAREER_OBJECTIVE}
              </p>
            </motion.div>

            {/* Languages Section Card (clean list of spoken/written languages) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-[24px] bg-card-white border border-soft-gray/10 shadow-3xs text-left"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-soft-gray/10">
                <Globe size={16} className="text-pure-black" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-pure-black">
                  Languages Spoken
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <span className="block text-xs font-bold text-pure-black">{lang.name}</span>
                    <span className="block text-[10px] font-mono text-soft-gray uppercase">{lang.level.split(' ')[0]} Fluency</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Software engineering tenets */}
          <div className="lg:col-span-6 space-y-4 md:space-y-6 text-left">
            <h3 className="text-xl font-serif italic text-pure-black font-semibold mb-2 lg:mb-4 lg:pl-1">
              Python Development Focus
            </h3>

            {/* Pillar 1: Python & Django */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 p-5 rounded-[20px] bg-card-white border border-soft-gray/10 hover:border-[#ABC724]/35 hover:shadow-2xs transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-[#E7EBDC] text-pure-black self-start">
                <Code size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-pure-black uppercase tracking-tight">
                  1. Python & Django Development
                </h4>
                <p className="text-xs md:text-sm font-sans text-soft-gray leading-relaxed">
                  Building scalable web applications with Python and Django using MVT architecture, ORM, authentication systems, and RESTful API design patterns.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2: Backend Systems & APIs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex gap-4 p-5 rounded-[20px] bg-card-white border border-soft-gray/10 hover:border-[#ABC724]/35 hover:shadow-2xs transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-neon-lime/20 text-pure-black self-start">
                <Database size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-pure-black uppercase tracking-tight">
                  2. Backend Systems & Database Design
                </h4>
                <p className="text-xs md:text-sm font-sans text-soft-gray leading-relaxed">
                  Designing relational database schemas with MySQL and SQLite. Building secure backend systems with query optimization, indexing, and normalized table structures.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3: Modern Web Interfaces */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 p-5 rounded-[20px] bg-card-white border border-soft-gray/10 hover:border-[#ABC724]/35 hover:shadow-2xs transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-pure-black text-neon-lime self-start">
                <Smartphone size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-pure-black uppercase tracking-tight">
                  3. Modern Responsive Frontends
                </h4>
                <p className="text-xs md:text-sm font-sans text-soft-gray leading-relaxed">
                  Building responsive UIs with React.js, Tailwind CSS, and JavaScript. Ensuring intuitive navigation and fluid layouts across all device sizes.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
