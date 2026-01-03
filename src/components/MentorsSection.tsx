import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  X,
  Linkedin,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface Mentor {
  id: number;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  skills: string[];
  highlights: string[];
}

const mentors: Mentor[] = [
  { id: 1, name: "Raviteja", role: "Lead Cyber Security Analyst", specialty: "Cyber Security", experience: "8+ Years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face", bio: "Passionate about building secure systems and mentoring the next generation of security professionals. Specialist in network security and threat hunting.", skills: ["Network Security", "Ethical Hacking", "Cloud Security", "SIEM"], highlights: ["Secured 50+ enterprise networks", "Certified Ethical Hacker (CEH)", "Lead Security at FinTech Corp"] },
  { id: 2, name: "Divya Rani", role: "Senior QA Automation Engineer", specialty: "QA Automation", experience: "6+ Years", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop&crop=face", bio: "Focused on delivering high-quality software through advanced automation frameworks. Expert in Selenium, Playwright, and CI/CD integration.", skills: ["Selenium", "Playwright", "Java", "Jenkins"], highlights: ["Reduced testing time by 60%", "Built global scale QA framework", "Automation Lead for E-commerce"] },
  { id: 3, name: "Chaitanya", role: "ServiceNow Architect", specialty: "ServiceNow", experience: "10+ Years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face", bio: "Deep expertise in IT Service Management and enterprise workflow automation using ServiceNow. Help businesses transform their service delivery.", skills: ["ITSM", "ServicePortal", "ITOM", "Scripting"], highlights: ["Architected 20+ ServiceNow instances", "Master Certified Developer", "Workflow Optimization expert"] },
  { id: 4, name: "Lakshmi Priya", role: "Solutions Architect", specialty: "Cloud Computing", experience: "7+ Years", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop&crop=face", bio: "Cloud native specialist with focus on AWS and Azure migrations. Helping students master the complexities of distributed systems.", skills: ["AWS", "Azure", "Kubernetes", "Docker"], highlights: ["Managed 100+ cloud servers", "AWS Solutions Architect Professional", "Published Cloud Security whitepaper"] },
  { id: 5, name: "Kiran Kumar", role: "Principal Data Scientist", specialty: "Data Analytics", experience: "9+ Years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&crop=face", bio: "Transforming big data into actionable insights. Expert in predictive modeling, statistical analysis, and machine learning pipelines.", skills: ["Python", "SQL", "Tableau", "Pytorch"], highlights: ["Built recommendation engines", "PhD in Applied Mathematics", "Data Lead for Streaming Platforms"] }
];

export const MentorsSection = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  useEffect(() => {
    const handleBodyScroll = (shouldLock: boolean) => {
      document.body.style.overflow = shouldLock ? "hidden" : "unset";
    };

    if (selectedMentor) {
      handleBodyScroll(true);
    } else {
      handleBodyScroll(false);
    }

    return () => handleBodyScroll(false);
  }, [selectedMentor]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMentor(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6"
          >
            Master Instructors
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Learn from <span className="text-blue-600">Industry Experts</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Our instructors are not just teachers; they are <span className="text-slate-900 font-bold">seasoned professionals</span> from leading tech companies worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center">
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              layoutId={`card-${mentor.id}`}
              onClick={() => setSelectedMentor(mentor)}
              className="group cursor-pointer relative overflow-hidden rounded-[18px] transition-all duration-300 active:scale-[0.98] hover:-translate-y-1 hover:shadow-lg
                w-full max-w-[280px] h-[340px] sm:max-w-[220px] sm:h-[300px] md:max-w-[240px] md:h-[340px]"
            >
              {/* Person Photo (FULL CARD) */}
              <motion.img
                layoutId={`image-${mentor.id}`}
                src={mentor.image}
                alt={mentor.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] rounded-[18px]"
              />

              {/* BLUR OVERLAY INFO SECTION */}
              <div className="absolute inset-x-0 bottom-0 h-[35%] p-4 flex flex-col justify-end z-10
                backdrop-blur-md bg-white/40 bg-gradient-to-t from-white/90 to-transparent rounded-b-[18px]
                transition-all duration-300 group-hover:bg-white/60">
                <h3 className="text-slate-900 font-bold text-lg mb-0.5 leading-tight">
                  {mentor.name}
                </h3>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                  {mentor.specialty}
                </p>
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold">
                  <Briefcase className="w-3 h-3" />
                  {mentor.experience}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMentor && (
            <div className="fixed inset-0 z-[40] flex flex-col items-center justify-center md:justify-center p-4 md:p-6 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMentor(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />

              <div className="md:hidden h-20 w-full shrink-0" /> {/* Navbar Space on Mobile */}

              <motion.div
                layoutId={`card-${selectedMentor.id}`}
                className="relative bg-white w-full max-w-4xl max-h-[calc(92vh-80px)] md:max-h-[92vh] rounded-[32px] shadow-2xl flex flex-col overflow-hidden pointer-events-auto border border-slate-100"
              >
                {/* Mobile Header Bar - Fixes the "navbar --- image information" requirement */}
                <div className="md:hidden flex items-center justify-between px-6 py-4 border-b border-slate-50 shrink-0 bg-white z-20">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Expert Profile</span>
                  <button
                    onClick={() => setSelectedMentor(null)}
                    className="p-2 -mr-2 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Close Profile"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden custom-scrollbar">
                  {/* Image Section */}
                  <div className="w-full md:w-[40%] h-72 sm:h-80 md:h-auto relative shrink-0">
                    <motion.img
                      layoutId={`image-${selectedMentor.id}`}
                      src={selectedMentor.image}
                      alt={selectedMentor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden" />
                  </div>

                  {/* Information Section */}
                  <div className="w-full md:w-[60%] flex flex-col md:overflow-y-auto overflow-x-hidden custom-scrollbar">
                    <div className="p-6 sm:p-10 flex-grow">
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest block mb-2">{selectedMentor.specialty}</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-tight">
                          {selectedMentor.name}
                        </h2>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                          <p className="text-sm font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">{selectedMentor.role}</p>
                          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider"><Briefcase className="w-4 h-4 text-blue-600" />{selectedMentor.experience} Experience</div>
                        </div>
                      </motion.div>

                      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-500 leading-relaxed text-sm mb-8 font-medium italic">
                        "{selectedMentor.bio}"
                      </motion.p>

                      <div className="space-y-8">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                          <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Core Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedMentor.skills.map((skill) => (
                              <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-xs font-bold border border-blue-100">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                          <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Career Highlights</h4>
                          <div className="space-y-3">
                            {selectedMentor.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                <span className="text-sm text-slate-600 font-medium">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="p-6 sm:p-10 border-t border-slate-50 bg-slate-50/50 flex flex-col sm:flex-row items-center gap-4">
                      <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-2xl shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                        Book a Session <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <Linkedin className="w-4 h-4" /> View Profile
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop Global Close Button */}
                <button
                  onClick={() => setSelectedMentor(null)}
                  className="hidden md:flex absolute top-6 right-6 w-10 h-10 bg-white/90 hover:bg-white rounded-full items-center justify-center shadow-xl border border-slate-100 z-50 text-slate-900 transition-all hover:rotate-90"
                  aria-label="Close Profile"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: hsl(var(--border)); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: hsl(var(--muted-foreground)); }
      `}</style>
    </section>
  );
};
