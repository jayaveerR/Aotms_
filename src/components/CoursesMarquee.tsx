import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Palette,
  Terminal,
  Globe,
  BarChart3,
  Smartphone
} from "lucide-react";

const courses = [
  { name: "Full Stack", icon: Code },
  { name: "Python", icon: Terminal },
  { name: "Data Science", icon: BarChart3 },
  { name: "Java", icon: Cpu },
  { name: "Cloud Computing", icon: Cloud },
  { name: "DevOps", icon: Database },
  { name: "Machine Learning", icon: Cpu },
  { name: "Cyber Security", icon: Shield },
  { name: "UI/UX Design", icon: Palette },
  { name: "Web Development", icon: Globe },
  { name: "Mobile Apps", icon: Smartphone },
];

export const CoursesMarquee = () => {
  return (
    <section className="py-10 bg-muted/20 overflow-hidden">
      {/* Marquee container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/20 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/20 to-transparent z-10" />
        
        <div className="flex">
          <motion.div
            className="flex items-center gap-16"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Triple the items for seamless infinite loop */}
            {[...courses, ...courses, ...courses, ...courses].map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 whitespace-nowrap opacity-40 hover:opacity-70 transition-opacity duration-300"
                >
                  <IconComponent className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-lg font-semibold text-muted-foreground tracking-wide uppercase">
                    {course.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
