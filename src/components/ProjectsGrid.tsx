import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { X, CheckCircle, ArrowRight, Layers, FileText, ChevronRight, Github } from "lucide-react";

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-bg-white overflow-hidden border-b border-soft-gray/5">
      {/* Background Soft Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full radial-glow-smaller opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7C8072] bg-[#E7EBDC] px-3 py-1 rounded-full">
              Project Showcases
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-pure-black uppercase mt-3">
              Selected Applications
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-soft-gray mt-2 md:mt-0 select-none">
            03 // MULTI-MODULE ARCHITECTURES
          </p>
        </div>

        {/* Structured Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col h-full bg-card-white rounded-[24px] border border-soft-gray/10 shadow-3xs overflow-hidden hover:border-pure-black/20 hover:shadow-xs transition-all duration-300"
            >
              
              {/* Product Visual Layout preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-white border-b border-soft-gray/5">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 rounded-full bg-pure-black/75 backdrop-blur-xs text-[10px] font-mono font-bold text-white uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Structured Specifications Area - Highly Scannable for Recruiters */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6 text-left">
                
                {/* Header Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-soft-gray">
                    <span>{project.category}</span>
                    <span className="text-[#ABC724]">Core Deliverable</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-sans font-black text-pure-black uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Role and Tools Specification Panel */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-bg-white border border-soft-gray/10 text-xs text-left">
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-[#7B7B7B] mb-1 font-bold">Project Role</span>
                    <p className="font-sans font-bold text-pure-black">{project.role}</p>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-[#7B7B7B] mb-1 font-bold">Tech Stack</span>
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {project.tools.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 bg-soft-gray/5 text-[9px] font-mono text-soft-gray rounded border border-soft-gray/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Metric Highlight Banner */}
                <div className="flex items-center gap-3 p-3.5 bg-neon-lime/10 border border-neon-lime/20 rounded-xl">
                  <span className="p-1 px-2 text-[10px] font-mono font-black rounded-lg bg-pure-black text-neon-lime">
                    OUTCOME
                  </span>
                  <p className="text-xs md:text-sm font-sans font-bold text-pure-black leading-tight">
                    {project.result}
                  </p>
                </div>

                {/* Interactive Action Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3.5 rounded-xl border border-pure-black text-pure-black bg-transparent hover:bg-pure-black hover:text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer active:scale-[0.98]"
                >
                  <FileText size={14} />
                  <span>View Project Details</span>
                  <ChevronRight size={14} />
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Details Dialog Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-pure-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 shadow-xl"
            >
              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl bg-bg-white border border-soft-gray/20 rounded-[28px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col cursor-default text-left"
              >
                
                {/* Sticky Header inside modal */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-soft-gray/10 bg-bg-white sticky top-0 z-10">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-soft-gray">
                      Functional Review // {selectedProject.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-sans font-black text-pure-black uppercase leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full bg-[#E7EBDC] hover:bg-pure-black hover:text-white text-pure-black transition-colors"
                    aria-label="Close Case Study"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Scrollable Body Content */}
                <div className="overflow-y-auto p-5 sm:p-6 md:p-8 space-y-6 sm:space-y-8 max-h-[calc(90vh-80px)]">
                  
                  {/* Aspect Ratio Header Photo in Modal */}
                  <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden relative shadow-inner">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover grayscale brightness-90 animate-fade"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pure-black/40 to-transparent" />
                  </div>

                  {/* Highlights Summary Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-b border-soft-gray/10 pb-6 text-left">
                    <div className="p-3 bg-card-white border border-soft-gray/10 rounded-xl">
                      <span className="block text-[9px] text-soft-gray font-mono uppercase font-bold text-left">Role</span>
                      <p className="text-xs md:text-sm font-sans font-bold text-pure-black text-left mt-0.5">{selectedProject.role}</p>
                    </div>
                    <div className="p-3 bg-card-white border border-soft-gray/10 rounded-xl">
                      <span className="block text-[9px] text-soft-gray font-mono uppercase font-bold text-left">Languages & Libraries</span>
                      <p className="text-xs md:text-sm font-sans font-bold text-pure-black text-left mt-0.5">{selectedProject.tools.join(", ")}</p>
                    </div>
                    <div className="p-3 bg-neon-lime/10 border border-neon-lime/20 rounded-xl col-span-2 sm:col-span-1">
                      <span className="block text-[9px] text-pure-black font-mono uppercase font-black text-left">Key Result</span>
                      <p className="text-xs md:text-sm font-sans font-extrabold text-pure-black text-left mt-0.5">{selectedProject.result}</p>
                    </div>
                  </div>

                  {/* Challenge details */}
                  <div className="space-y-2 text-left">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-pure-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Project Background & Challenge
                    </h4>
                    <p className="text-xs md:text-sm text-soft-gray leading-relaxed pl-3 border-l-2 border-soft-gray/20 text-left">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  {/* Solution details */}
                  <div className="space-y-2 text-left">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-pure-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      System Architecture & Solution
                    </h4>
                    <p className="text-xs md:text-sm text-soft-gray leading-relaxed pl-3 border-l-2 border-[#ABC724] text-left">
                      {selectedProject.solution}
                    </p>
                  </div>

                  {/* Core Features list */}
                  <div className="space-y-3 pt-2 text-left">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-pure-black flex items-center gap-2">
                      <Layers size={14} className="text-[#ABC724]" />
                      Key Features & Implementation Checkpoints
                    </h4>
                    <ul className="space-y-2.5 pl-1.5">
                      {selectedProject.impactDetails.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs md:text-sm text-soft-gray leading-tight">
                          <CheckCircle size={15} className="text-neon-lime stroke-pure-black mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Footer actions inside modal */}
                <div className="px-6 py-4 bg-soft-gray/5 border-t border-soft-gray/10 flex justify-end gap-3 sticky bottom-0">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-wider text-pure-black hover:bg-soft-gray/10 rounded-xl transition-all mr-auto cursor-pointer"
                  >
                    Close Dialog
                  </button>
                  <a
                    href={selectedProject.link || selectedProject.github || "https://github.com/komalgajjar"}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-wider bg-pure-black text-white hover:bg-neon-lime hover:text-pure-black rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Github size={13} />
                    <span>View Repository</span>
                    <ArrowRight size={11} />
                  </a>
                </div>

              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
