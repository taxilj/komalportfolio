import { motion } from "motion/react";
import { ArrowRight, Download, CheckCircle, ChevronDown, Award } from "lucide-react";

export default function Hero() {
  const handleScrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-bg-white border-b border-soft-gray/5">
      {/* Soft Glow Ambient Background */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full radial-glow opacity-50 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8 z-10">
            
            {/* Availability Recruiter Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card-white border border-soft-gray/20 shadow-3xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-lime"></span>
              </span>
              <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-pure-black">
                Available for Internship Opportunities
              </span>
            </motion.div>

            {/* Structured Headlines */}
            <div className="space-y-4 select-none">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-pure-black uppercase leading-none"
              >
                Hi, I'm Komal Gajjar
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#ABC724] font-semibold leading-none tracking-tight block"
              >
                Python Developer
              </motion.div>
            </div>

            {/* Recruiter-focused clear intro prompt */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl font-sans text-soft-gray leading-relaxed max-w-2xl font-normal"
            >
              Passionate Python developer focused on building scalable web applications, backend systems, and modern user-friendly digital experiences.
            </motion.p>

            {/* Recruiter-friendly Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col xs:flex-row items-center xs:items-center gap-3 pt-2"
            >
              {/* Download Resume Link */}
              <a
                href="/komal-gajjar-resume.pdf"
                download
                className="px-6 py-4 rounded-full bg-pure-black text-white hover:bg-neon-lime hover:text-pure-black hover:scale-105 active:scale-95 shadow-md font-sans text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>

              {/* View Projects Button */}
              <button
                onClick={() => handleScrollToSection("#projects")}
                className="px-6 py-4 rounded-full bg-card-white border border-soft-gray/20 text-pure-black hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-3xs hover:shadow-2xs font-sans text-sm font-bold flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight size={14} />
              </button>

              {/* Contact Button */}
              <button
                onClick={() => handleScrollToSection("#contact")}
                className="px-6 py-4 rounded-full bg-card-white border border-soft-gray/20 text-pure-black hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-3xs hover:shadow-2xs font-sans text-sm font-bold transition-all duration-300 cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Trust markers for recruiter onboarding */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-6 pt-6"
            >
              <div className="flex items-center gap-2 text-xs text-soft-gray font-mono">
                <Award size={14} className="text-pure-black" />
                <span>MCA Student at Ganpat University</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-soft-gray font-mono">
                <CheckCircle size={14} className="text-neon-lime stroke-pure-black animate-pulse" />
                <span>Python & Django developer</span>
              </div>
            </motion.div>

          </div>

          {/* Right Portrait Column - software dev workstation layout */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="absolute top-[10%] w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full bg-neon-lime/20 blur-3xl pointer-events-none z-0" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[240px] xs:w-[280px] sm:w-[325px] h-[300px] xs:h-[360px] sm:h-[400px] rounded-[32px] overflow-hidden shadow-lg border-4 border-white z-10"
            >
              <img
                src="/komal-profile.jpg"
                alt="Komal Gajjar — Python Developer & Django Developer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-115 brightness-90 hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
              />
            </motion.div>
          </div>

        </div>

      </div>

      {/* Scroll indicator banner linking to objective */}
      <div className="w-full flex justify-center mt-12 text-center relative z-10 hidden sm:flex">
        <button
          onClick={() => handleScrollToSection("#about")}
          className="p-2.5 rounded-full bg-card-white border border-soft-gray/15 text-soft-gray hover:text-pure-black hover:border-pure-black hover:scale-110 cursor-pointer transition-all duration-300 animate-bounce"
          aria-label="Scroll down to About Section"
        >
          <ChevronDown size={16} />
        </button>
      </div>
    </section>
  );
}
