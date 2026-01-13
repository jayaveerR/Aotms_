import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
}

import fundamentalsImg from "@/assets/fundamentals.jpg";
import handsOnImg from "@/assets/hands-on.png";
import realTimeProjectsImg from "@/assets/real-time-projects.png";
import careerPlacementImg from "@/assets/career-placement.jpg";

const steps: Step[] = [
  {
    number: "01",
    title: "Strong Fundamentals",
    description: "Industry-aligned concepts explained clearly from basics",
    image: fundamentalsImg
  },
  {
    number: "02",
    title: "Hands-On Practice",
    description: "Daily labs, tasks, and mentor-guided practice",
    image: handsOnImg
  },
  {
    number: "03",
    title: "Real-Time Projects",
    description: "Build resume-ready projects based on real scenarios",
    image: realTimeProjectsImg
  },
  {
    number: "04",
    title: "Career & Placement",
    description: "Mock interviews, resume help, and job assistance",
    image: careerPlacementImg
  }
];

export const LearningProcess = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern - Modern Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="py-2 px-5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest border border-blue-200 shadow-sm">
              Our Proven Methodology
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight leading-[1.1] mb-6">
            Your Journey to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#003366]">IT Excellence</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            We don't just teach; we transform. Follow our structured 4-step roadmap designed to build your skills and launch your career.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Abstract Connecting Path (Desktop) */}
          <div className="hidden lg:block absolute top-[20%] left-0 right-0 h-32 opacity-20 pointer-events-none -z-10">
            <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path d="M0,50 C300,50 300,50 600,50 C900,50 900,50 1200,50" stroke="url(#line-gradient)" strokeWidth="4" fill="none" strokeDasharray="12 12" />
              <defs>
                <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0066CC" stopOpacity="0" />
                  <stop offset="50%" stopColor="#0066CC" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <div key={step.number} className="group relative">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2rem] p-2 h-full shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="bg-slate-50/50 rounded-[1.7rem] p-3 md:p-6 lg:p-8 h-full flex flex-col items-center border-2 border-blue-200 relative overflow-hidden group-hover:bg-white transition-colors duration-500">

                    {/* Gradient Border Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    {/* Number Badge - Standardized Floating */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 z-20">
                      <span className="text-lg font-black text-slate-300 group-hover:text-white font-display transition-colors duration-300">{step.number}</span>
                    </div>

                    {/* Illustration Container */}
                    <div className="mb-6 relative w-full aspect-square max-w-[200px] md:max-w-[360px] flex items-center justify-center">
                      <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-90" />
                      <img
                        src={step.image}
                        alt={step.title}
                        className="relative z-10 w-full h-full object-cover drop-shadow-md transform group-hover:scale-105 transition-transform duration-500 rounded-[2rem]"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center relative z-10">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-blue-700 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <button className="relative inline-flex items-center justify-center h-16 px-12 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#0066CC] to-[#003366] rounded-full hover:shadow-[0_10px_40px_-10px_rgba(0,102,204,0.5)] hover:scale-105 active:scale-95 group overflow-hidden">
            <span className="relative z-10 flex items-center">
              Begin Your Success Story
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
