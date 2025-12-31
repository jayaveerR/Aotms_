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
    <section className="py-12 bg-muted/30 overflow-hidden border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              Our Courses
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mt-2 mb-3">
              Industry-Ready <span className="text-primary">Training Programs</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Explore our comprehensive range of IT courses designed to make you job-ready.
            </p>
          </motion.div>

          {/* Right Marquee */}
          <div className="lg:col-span-8 relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
            
            <div className="flex">
              <div className="flex animate-marquee items-center gap-10">
                {courses.map((course, index) => {
                  const IconComponent = course.icon;
                  return (
                    <div
                      key={`first-${index}`}
                      className="flex items-center gap-2 whitespace-nowrap"
                    >
                      <IconComponent className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
                      <span className="text-sm font-medium text-muted-foreground">
                        {course.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex animate-marquee items-center gap-10 ml-10">
                {courses.map((course, index) => {
                  const IconComponent = course.icon;
                  return (
                    <div
                      key={`second-${index}`}
                      className="flex items-center gap-2 whitespace-nowrap"
                    >
                      <IconComponent className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
                      <span className="text-sm font-medium text-muted-foreground">
                        {course.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
