import { ArrowRight, PlayCircle, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { CountUpNumber } from "./CountUpNumber";
import heroStudent from "@/assets/hero-student.png";

const trustStats = [
  { icon: Users, value: 2000, suffix: "+", label: "Students Trained" },
  { icon: Award, value: 50, suffix: "+", label: "Workshops" },
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
            <div>
              <span
                className="hero-badge inline-flex text-xs"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Trusted IT Training Institute</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="font-display font-bold leading-tight"
            >
              <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl text-foreground">
                Become <span className="text-primary">Job-Ready</span> in <span className="text-accent">90 Days</span>
              </span>
              <span className="block text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mt-1">
                with Expert-Led IT Training <span className="text-primary">Vijayawada</span>
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-[11px] sm:text-sm text-muted-foreground max-w-sm leading-relaxed"
            >
              AI, Cloud, DevOps & Full Stack Courses with Real-World Projects
              and Skill Certification from Industry Experts.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link to="/courses" className="btn-primary group flex items-center justify-center gap-2 text-sm px-5 py-2.5">
                Start Your Journey
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary group flex items-center justify-center gap-2 text-sm px-5 py-2.5">
                <PlayCircle className="w-4 h-4 text-accent" />
                Free Demo Class
              </button>
            </div>

            {/* Tagline */}
            <p
              className="text-xs text-muted-foreground italic"
            >
              Start Your Education Journey, <span className="text-accent font-medium">For a Better Future</span>
            </p>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-4 border-t border-border"
            >
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="trust-stat"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <stat.icon className="w-4 h-4 text-accent" />
                    <span className="trust-stat-number text-base md:text-lg">
                      <CountUpNumber end={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <span className="trust-stat-label text-[10px] sm:text-xs">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Student Image */}
          <div
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />

            {/* Decorative Shapes */}
            <div
              className="absolute top-10 right-10 w-16 h-16"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary/20">
                <path
                  d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div
              className="absolute top-20 left-0 lg:left-10"
            >
              <div className="w-4 h-4 bg-accent/30 rounded-full" />
            </div>

            <div
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
            </div>

            {/* Main Image Container */}
            <div
              className="relative z-10"
            >
              <img
                src={heroStudent}
                alt="Student learning on laptop"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl"
              />

              {/* Floating Stats Card - Repositioned to Right and Resized */}
              <div
                className="absolute -right-4 lg:-right-10 bottom-16 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-3 border border-slate-100/50 scale-90 md:scale-100"
              >
                <div className="flex items-center gap-3">
                  {/* Avatar Group */}
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                      2K+
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-black text-slate-900 leading-tight">
                      <CountUpNumber end={2000} suffix="+" />
                    </p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Students Enrolled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
    </section>
  );
};


