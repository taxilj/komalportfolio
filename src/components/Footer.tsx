import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  RefreshCw, 
  Linkedin, 
  Github, 
  Download, 
  ExternalLink,
  Phone,
  MapPin
} from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _replyto: formData.email })
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("idle");
      alert("Failed to send message. Please try again or email me directly.");
    }
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 bg-bg-white overflow-hidden border-t border-soft-gray/5">
      {/* Background Soft Glow Aura */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full radial-glow opacity-25 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header - Final CTA Integration */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div className="max-w-2xl text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7C8072] bg-[#E7EBDC] px-3 py-1 rounded-full">
              Let's Connect
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-pure-black uppercase mt-3">
              Let's Build Smart Solutions Together
            </h2>
            <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-normal mt-2">
              I'm actively looking for internship opportunities in Python development and backend engineering.
            </p>
          </div>
          <p className="text-xs md:text-sm font-mono text-soft-gray mt-2 md:mt-0 select-none">
            05 // PROFESSIONAL CONNECTION
          </p>
        </div>

        {/* Structured Grid: Left Cards vs Right Card Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          {/* Left Column: Direct Recruiter Channels (Trustworthy) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4 text-left">
              <h3 className="text-xl font-serif italic text-pure-black font-semibold">
                Direct Recruiter Link
              </h3>
              <p className="text-xs md:text-sm text-soft-gray leading-relaxed max-w-md font-light">
                Feel free to trigger a direct email transmission, view code commits on GitHub, connect on LinkedIn, or trigger direct cellular calling.
              </p>
            </div>

            {/* Direct Channels Cards list */}
            <div className="space-y-3 text-left">
              
              {/* Direct Mail Channel */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center justify-between p-4 rounded-xl bg-card-white border border-soft-gray/10 hover:border-[#ABC724]/65 hover:shadow-2xs transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neon-lime/15 text-pure-black group-hover:scale-105 transition-transform">
                    <Mail size={16} />
                  </div>
                  <div className="text-left">
                    <span className="block text-[8px] font-mono uppercase tracking-wider text-soft-gray font-bold">Email Address</span>
                    <span className="text-xs md:text-sm font-sans font-bold text-pure-black">{CONTACT_INFO.email}</span>
                  </div>
                </div>
                <ExternalLink size={13} className="text-soft-gray group-hover:text-pure-black transition-colors" />
              </a>

              {/* Mobile Calling Channel */}
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-between p-4 rounded-xl bg-card-white border border-soft-gray/10 hover:border-[#ABC724]/65 hover:shadow-2xs transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#E7EBDC] text-pure-black group-hover:scale-105 transition-transform">
                    <Phone size={16} />
                  </div>
                  <div className="text-left">
                    <span className="block text-[8px] font-mono uppercase tracking-wider text-soft-gray font-bold">Direct Phone</span>
                    <span className="text-xs md:text-sm font-sans font-bold text-pure-black">{CONTACT_INFO.phone}</span>
                  </div>
                </div>
                <ExternalLink size={13} className="text-soft-gray group-hover:text-pure-black transition-colors" />
              </a>

              {/* Geographic Visnagar Location */}
              <div
                className="flex items-center justify-between p-4 rounded-xl bg-card-white border border-soft-gray/10 hover:shadow-2xs transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-soft-gray/10 text-pure-black">
                    <MapPin size={16} />
                  </div>
                  <div className="text-left">
                    <span className="block text-[8px] font-mono uppercase tracking-wider text-soft-gray font-bold">Office Location</span>
                    <span className="text-xs md:text-sm font-sans font-bold text-pure-black">{CONTACT_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* LinkedIn Network Profile */}
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-card-white border border-soft-gray/10 hover:border-blue-500/30 hover:shadow-2xs transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
                    <Linkedin size={16} />
                  </div>
                  <div className="text-left">
                    <span className="block text-[8px] font-mono uppercase tracking-wider text-soft-gray font-bold">LinkedIn Network</span>
                    <span className="text-xs md:text-sm font-sans font-bold text-pure-black">Komal Gajjar Profile</span>
                  </div>
                </div>
                <ExternalLink size={13} className="text-soft-gray group-hover:text-pure-black transition-colors" />
              </a>

              {/* GitHub Profile */}
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-card-white border border-soft-gray/10 hover:border-black/30 hover:shadow-2xs transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-900 text-white group-hover:scale-105 transition-transform">
                    <Github size={16} />
                  </div>
                  <div className="text-left">
                    <span className="block text-[8px] font-mono uppercase tracking-wider text-soft-gray font-bold">GitHub Code Archive</span>
                    <span className="text-xs md:text-sm font-sans font-bold text-pure-black">github.com/komalgajjar</span>
                  </div>
                </div>
                <ExternalLink size={13} className="text-soft-gray group-hover:text-pure-black transition-colors" />
              </a>

              {/* CV Resume action */}
              <a
                href="/komal-gajjar-resume.pdf"
                download
                className="w-full flex items-center justify-between p-4 rounded-xl bg-card-white border border-dashed border-soft-gray/25 hover:border-pure-black hover:shadow-2xs transition-all duration-300 group cursor-pointer text-left font-sans"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neon-lime text-pure-black group-hover:scale-105 transition-transform">
                    <Download size={16} />
                  </div>
                  <div className="text-left">
                    <span className="block text-[8px] font-mono uppercase tracking-wider text-[#ABC724] font-black">CURRICULUM VITAE</span>
                    <span className="text-xs md:text-sm font-sans font-bold text-pure-black">Download Verified PDF Resume</span>
                  </div>
                </div>
                <Download size={13} className="text-soft-gray group-hover:text-pure-black transition-colors" />
              </a>

            </div>

          </div>

          {/* Right Column: Encrypted Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-card-white border border-soft-gray/10 p-6 md:p-8 rounded-[24px] shadow-3xs relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    key="footer-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-soft-gray/10 text-xs font-mono font-medium text-pure-black">
                      <div className="flex items-center gap-2">
                        <Mail size={12} className="text-[#ABC724]" />
                        <span className="font-bold">SEND ME A MESSAGE</span>
                      </div>
                      <span className="text-[10px] text-soft-gray">I'LL RESPOND WITHIN 24H</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label htmlFor="footer-name" className="text-[10px] font-mono uppercase font-bold tracking-wider text-soft-gray">
                          Your Name
                        </label>
                        <input
                          id="footer-name"
                          type="text"
                          required
                          placeholder="e.g. Recruiter Lead"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={status === "submitting"}
                          className="w-full bg-bg-white border border-soft-gray/15 rounded-xl px-4 py-3 text-xs md:text-sm text-pure-black font-sans focus:outline-none focus:border-pure-black focus:ring-1 focus:ring-pure-black transition-all disabled:opacity-50"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label htmlFor="footer-email" className="text-[10px] font-mono uppercase font-bold tracking-wider text-soft-gray">
                          E-Mail Address
                        </label>
                        <input
                          id="footer-email"
                          type="email"
                          required
                          placeholder="e.g. jobs@yourcompany.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={status === "submitting"}
                          className="w-full bg-bg-white border border-soft-gray/15 rounded-xl px-4 py-3 text-xs md:text-sm text-pure-black font-sans focus:outline-none focus:border-pure-black focus:ring-1 focus:ring-pure-black transition-all disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="footer-message" className="text-[10px] font-mono uppercase font-bold tracking-wider text-soft-gray">
                        Brief Project or Role Details
                      </label>
                      <textarea
                        id="footer-message"
                        required
                        rows={4}
                        placeholder="Tell me about your development query, role requirements, or internship vacancies..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={status === "submitting"}
                        className="w-full bg-bg-white border border-soft-gray/15 rounded-xl px-4 py-3 text-xs md:text-sm text-pure-black font-sans focus:outline-none focus:border-pure-black focus:ring-1 focus:ring-pure-black transition-all resize-none disabled:opacity-50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 px-6 rounded-xl bg-pure-black hover:bg-neon-lime hover:text-pure-black text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50 active:scale-[0.98]"
                    >
                      {status === "submitting" ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>Dispatching briefs...</span>
                        </>
                      ) : (
                        <>
                          <span>Get In Touch</span>
                          <Send size={13} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="footer-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-neon-lime/25 border border-neon-lime text-pure-black col-span-12">
                        <CheckCircle2 size={32} className="stroke-[2.5]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-sans font-black text-pure-black uppercase">Transmission Dispatched!</h3>
                    <p className="text-xs md:text-sm text-soft-gray max-w-sm mx-auto leading-relaxed font-light">
                      Thank you for reaching out. Your transmission has been received. I will reply to your inbox within 12-24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-4 px-4 py-2 rounded-full border border-soft-gray/20 hover:border-pure-black text-[10px] font-mono uppercase tracking-wider text-soft-gray hover:text-pure-black transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Small branding visual label */}
        <div className="w-full select-none overflow-hidden h-24 relative pointer-events-none mb-4 flex justify-center items-center">
          <span className="font-sans font-black text-[12vw] text-pure-black/5 uppercase leading-none mt-12 whitespace-nowrap block tracking-tight">
            Komal Gajjar
          </span>
        </div>

        {/* Responsive Footer credits board */}
        <div className="w-full border-t border-soft-gray/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold uppercase tracking-wider text-soft-gray">
            <a href="#home" className="hover:text-pure-black transition-colors">Home</a>
            <a href="#about" className="hover:text-pure-black transition-colors">About</a>
            <a href="#skills" className="hover:text-pure-black transition-colors">Skills</a>
            <a href="#projects" className="hover:text-pure-black transition-colors">Projects</a>
            <a href="#experience" className="hover:text-pure-black transition-colors">Education</a>
          </div>

          <p className="font-mono text-[10px] text-soft-gray leading-none">
            © 2026 Komal Gajjar. Made with React, Tailwind & Framer Motion.
          </p>

        </div>

      </div>
    </footer>
  );
}
