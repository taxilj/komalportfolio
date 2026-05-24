import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    
    const element = document.querySelector(id);
    if (element) {
      // Calculate offset for sticky header
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
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-white/80 backdrop-blur-md py-4 border-b border-soft-gray/10 shadow-3xs"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand/Logo Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#home");
            }}
            className="font-sans text-2xl font-extrabold tracking-tight text-pure-black hover:opacity-85 transition-opacity flex items-center gap-2"
          >
            <span>Komal Gajjar</span>
            <span className="text-neon-lime font-sans text-xs bg-pure-black px-1.5 py-1 rounded font-black uppercase tracking-widest hidden sm:inline-block">
              DEV
            </span>
          </a>

          {/* Inline Navigation - Recruiter Friendly */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-pure-black/70">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(item.href);
                }}
                className="hover:text-pure-black relative group py-1.5 transition-colors duration-200"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-lime transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Call to Actions on right */}
          <div className="flex items-center gap-4">
            
            {/* Quick Resume trigger badge (recruiter love!) */}
            <a
              href="/komal-gajjar-resume.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-neon-lime hover:bg-pure-black hover:text-white border border-transparent shadow-2xs hover:shadow-sm cursor-pointer transition-all duration-300"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>

            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-full bg-pure-black text-white hover:bg-neon-lime hover:text-pure-black transition-colors ring-1 ring-white/10"
              aria-label="Toggle Navigation Options"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            
          </div>
        </div>
      </header>

      {/* Responsive drawer menu for layout safety on mobile devices */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-pure-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 200 }}
              className="fixed top-0 right-0 w-[280px] h-full bg-pure-black text-white z-50 p-6 flex flex-col justify-between md:hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <span className="font-serif text-lg tracking-wide text-soft-gray font-semibold">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-neon-lime hover:text-pure-black transition-colors"
                    aria-label="Close Mobile Nav"
                  >
                    <X size={14} />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo(item.href);
                      }}
                      className="text-lg font-sans font-semibold py-1.5 border-b border-white/5 hover:text-neon-lime transition-colors block text-left"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <a
href="/komal-gajjar-resume.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-neon-lime text-pure-black font-semibold text-xs rounded-full uppercase tracking-wider flex items-center justify-center gap-2 block text-center"
                >
                  <Download size={14} />
                  Download CV
                </a>
                <p className="text-[10px] text-soft-gray font-mono text-center">Available from June 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
