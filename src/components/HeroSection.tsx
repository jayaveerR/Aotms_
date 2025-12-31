import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Users, Award, Clock } from "lucide-react";
import { CountUpNumber } from "./CountUpNumber";
import heroStudent from "@/assets/hero-student.png";

const trustStats = [
  { icon: Users, value: 2000, suffix: "+", label: "Students Trained" },
  { icon: Award, value: 300, suffix: "+", label: "Placements" },
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
];

export const HeroSection = () => {
  return (
    <section className="relative pt-32 md:pt-36 pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-4">
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="hero-badge inline-flex text-xs"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-soft" />
                <span>Trusted IT Training Institute</span>
              </motion.span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-bold leading-tight"
            >
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground">
                Become <span className="text-primary">Job-Ready</span> in <span className="text-accent">90 Days</span>
              </span>
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mt-1">
                with Expert-Led IT Training <span className="text-primary">Vijayawada</span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs md:text-sm text-muted-foreground max-w-sm leading-relaxed"
            >
              AI, Cloud, DevOps & Full Stack Courses with Real-World Projects 
              and Placement Support from Industry Experts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button className="btn-primary group flex items-center justify-center gap-2 text-sm px-5 py-2.5">
                Start Learning Now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group flex items-center justify-center gap-2 text-sm px-5 py-2.5">
                <PlayCircle className="w-4 h-4 text-accent" />
                Free Demo Class
              </button>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xs text-muted-foreground italic"
            >
              Start Your Education Journey, <span className="text-accent font-medium">For a Better Future</span>
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4 md:gap-8 pt-4 border-t border-border"
            >
              {trustStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="trust-stat"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <stat.icon className="w-4 h-4 text-accent" />
                    <span className="trust-stat-number text-base md:text-lg">
                      <CountUpNumber end={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <span className="trust-stat-label text-xs">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual - Student Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            
            {/* Decorative Shapes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-16 h-16"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary/20">
                <path
                  d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-0 lg:left-10"
            >
              <div className="w-4 h-4 bg-accent/30 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-0"
            >
              <svg className="w-12 h-6 text-primary/30" viewBox="0 0 48 24">
                <path
                  d="M0 12 Q12 0 24 12 Q36 24 48 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </motion.div>

            {/* Main Image Container */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src={heroStudent}
                alt="Student learning on laptop"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl"
              />

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -left-4 lg:-left-8 bottom-20 bg-card rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  {/* Avatar Group */}
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-card flex items-center justify-center text-xs font-bold text-primary-foreground"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-accent border-2 border-card flex items-center justify-center text-xs font-bold text-foreground">
                      2K+
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">
                      <CountUpNumber end={2000} suffix="+" />
                    </p>
                    <p className="text-xs text-muted-foreground">Total Enrolled Students</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
    </section>
  );
};
