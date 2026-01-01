import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Linkedin,
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  ArrowRight,
  User
} from "lucide-react";

interface Mentor {
  id: number;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  company: string;
  image: string;
  bio: string;
  skills: string[];
  highlights: string[];
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Raviteja",
    role: "Lead Cyber Security Analyst",
    specialty: "Cyber Security",
    experience: "8+ Years",
    company: "Ex-Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face",
    bio: "Passionate about building secure systems and mentoring the next generation of security professionals. Specialist in network security and threat hunting.",
    skills: ["Network Security", "Ethical Hacking", "Cloud Security", "SIEM"],
    highlights: ["Secured 50+ enterprise networks", "Certified Ethical Hacker (CEH)", "Lead Security at FinTech Corp"]
  },
  {
    id: 2,
    name: "Divya Rani",
    role: "Senior QA Automation Engineer",
    specialty: "QA Automation",
    experience: "6+ Years",
    company: "Ex-Amazon",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop&crop=face",
    bio: "Focused on delivering high-quality software through advanced automation frameworks. Expert in Selenium, Playwright, and CI/CD integration.",
    skills: ["Selenium", "Playwright", "Java", "Jenkins"],
    highlights: ["Reduced testing time by 60%", "Built global scale QA framework", "Automation Lead for E-commerce"]
  },
  {
    id: 3,
    name: "Chaitanya",
    role: "ServiceNow Architect",
    specialty: "ServiceNow",
    experience: "10+ Years",
    company: "Ex-Google",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face",
    bio: "Deep expertise in IT Service Management and enterprise workflow automation using ServiceNow. Help businesses transform their service delivery.",
    skills: ["ITSM", "ServicePortal", "ITOM", "Scripting"],
    highlights: ["Architected 20+ ServiceNow instances", "Master Certified Developer", "Workflow Optimization expert"]
  },
  {
    id: 4,
    name: "Lakshmi Priya",
    role: "Solutions Architect",
    specialty: "Cloud Computing",
    experience: "7+ Years",
    company: "Ex-IBM",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop&crop=face",
    bio: "Cloud native specialist with focus on AWS and Azure migrations. Helping students master the complexities of distributed systems.",
    skills: ["AWS", "Azure", "Kubernetes", "Docker"],
    highlights: ["Managed 100+ cloud servers", "AWS Solutions Architect Professional", "Published Cloud Security whitepaper"]
  },
  {
    id: 5,
    name: "Kiran Kumar",
    role: "Principal Data Scientist",
    specialty: "Data Analytics",
    experience: "9+ Years",
    company: "Ex-Netflix",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&crop=face",
    bio: "Transforming big data into actionable insights. Expert in predictive modeling, statistical analysis, and machine learning pipelines.",
    skills: ["Python", "SQL", "Tableau", "Pytorch"],
    highlights: ["Built recommendation engines", "PhD in Applied Mathematics", "Data Lead for Streaming Platforms"]
  }
];

export const MentorsSection = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  // Focus trap and body scroll lock
  useEffect(() => {
    if (selectedMentor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMentor]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMentor(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">
      {/* Refined Background Animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"
        />

        {/* Subtly moving particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "100%" }}
            animate={{
              opacity: [0, 0.4, 0],
              y: ["100%", "0%"],
              x: `${Math.random() * 100}%`
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
            className="absolute w-1 h-1 bg-[#008bf8]/20 rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.5em] uppercase text-[#008bf8] block mb-6 px-4"
          >
            -------our expertise----------
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-black tracking-tight leading-tight"
          >
            Our <span className="text-[#008bf8]">Instructors</span>
          </motion.h2>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              layoutId={`card-${mentor.id}`}
              onClick={() => setSelectedMentor(mentor)}
              className="group cursor-pointer bg-white rounded-3xl p-4 transition-all duration-300 hover:shadow-xl border border-gray-100 h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-gray-50">
                <motion.img
                  layoutId={`image-${mentor.id}`}
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Basic Info */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-black mb-1 group-hover:text-[#008bf8] transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-sm font-bold text-[#008bf8] uppercase tracking-wider mb-2">
                  {mentor.specialty}
                </p>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block group-hover:text-gray-600 transition-colors">
                  Click to view profile
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <button className="group relative px-10 py-5 bg-[#008bf8] text-white rounded-2xl font-bold text-base tracking-wide shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Explore Our World's Best Courses <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Expanded View / Side Panel */}
        <AnimatePresence>
          {selectedMentor && (
            <>
              {/* Blurred Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMentor(null)}
                className="fixed inset-0 bg-white/40 backdrop-blur-md z-[100]"
              />

              {/* Modal/Panel */}
              <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4 md:p-10">
                <motion.div
                  layoutId={`card-${selectedMentor.id}`}
                  className="bg-white w-full max-w-5xl h-full md:h-auto max-h-[90vh] rounded-[32px] md:rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex flex-col md:flex-row overflow-hidden pointer-events-auto relative"
                >
                  {/* Close Button Mobile Header */}
                  <div className="md:hidden flex items-center justify-between p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
                    <button
                      onClick={() => setSelectedMentor(null)}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500"
                    >
                      <X className="w-4 h-4" /> Back to mentors
                    </button>
                  </div>

                  {/* Left Side: Large Image */}
                  <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-gray-50">
                    <motion.img
                      layoutId={`image-${selectedMentor.id}`}
                      src={selectedMentor.image}
                      alt={selectedMentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Side: Information Panel */}
                  <div className="w-full md:w-7/12 flex flex-col overflow-y-auto custom-scrollbar bg-white">
                    {/* Desktop Header */}
                    <div className="hidden md:flex items-center justify-between p-8 pb-0">
                      <button
                        onClick={() => setSelectedMentor(null)}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
                      >
                        <X className="w-4 h-4" /> Back to mentors
                      </button>
                    </div>

                    <div className="p-8 md:p-12 space-y-8 flex-grow">
                      {/* Name & Role */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-2">
                          {selectedMentor.name}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="text-sm md:text-base font-bold text-[#008bf8] uppercase tracking-wider">
                            {selectedMentor.role}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                          <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                            <Briefcase className="w-4 h-4 text-gray-300" />
                            {selectedMentor.experience}
                          </div>
                        </div>
                      </motion.div>

                      {/* Bio */}
                      <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-500 leading-relaxed text-sm md:text-base"
                      >
                        {selectedMentor.bio}
                      </motion.p>

                      {/* Skills Tags */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                      >
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Expertise分野</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMentor.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Key Highlights */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-4"
                      >
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Key Highlights</h4>
                        <div className="space-y-3">
                          {selectedMentor.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-[#008bf8] mt-1 shrink-0" />
                              <span className="text-sm text-gray-600 leading-snug">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* CTA Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="pt-6 flex flex-col sm:flex-row items-center gap-4"
                      >
                        <button className="w-full sm:w-auto px-8 py-4 bg-[#ff6b00] text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                          Book a Session <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-100 text-black rounded-2xl font-bold text-sm tracking-wide hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
                          <Linkedin className="w-4 h-4 text-[#0a66c2]" /> Contact Profile
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #e2e8f0;
        }
      `}</style>
    </section>
  );
};
