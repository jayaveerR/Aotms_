import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Factory, Users, Briefcase, Play, Monitor, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import aboutStudent from "@/assets/about-student.jpg";

const highlights = [
  {
    icon: Factory,
    title: "Industry-Focused Training",
    description: "Real-time tools & practical approach"
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Trainers with real industry experience"
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Resume, interviews & placements"
  }
];

const floatingIcons = [
  { icon: Play, delay: 0, position: "top-0 -right-2", color: "bg-accent" },
];

export const AboutSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="py-16 md:py-24 pb-0 bg-background overflow-visible">
      <div className="container mx-auto px-6">
        {/* White background container */}
        <div className="relative bg-background rounded-2xl md:rounded-3xl overflow-visible">

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16">

            {/* Left Column - Circular Image extending outside */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative perspective-1000 order-2 lg:order-1 flex items-center justify-center lg:justify-start lg:-ml-8"
            >
              <motion.div
                style={{ rotateX, rotateY }}
                className="relative preserve-3d"
              >
                {/* Main Circle Container */}
                <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]">

                  {/* Decorative background blur circles */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

                  {/* Outer ring - primary color */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-primary/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Dark circle background */}
                  <div className="absolute inset-3 rounded-full bg-foreground shadow-2xl" />

                  {/* Main image circle */}
                  <motion.div
                    className="absolute inset-6 md:inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img
                      src={aboutStudent}
                      alt="Student learning IT"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Floating Icons with smooth animations - matching hero style */}
                  {floatingIcons.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + item.delay * 0.3 }}
                      className={`absolute ${item.position} w-10 h-10 md:w-12 md:h-12 rounded-xl ${item.color} shadow-lg flex items-center justify-center`}
                    >
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 3 + index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: item.delay
                        }}
                      >
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-background" />
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* New static decorative element */}
                  <div className="absolute top-1/4 -left-4 w-8 h-8 opacity-50">
                    <div className="absolute w-full h-0.5 bg-primary top-1/2 -translate-y-1/2" />
                    <div className="absolute h-full w-0.5 bg-primary left-1/2 -translate-x-1/2" />
                  </div>

                  {/* Decorative shapes - matching hero theme */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 right-16 w-8 h-8"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-primary/30">
                      <path
                        d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-16 -right-6"
                  >
                    <div className="w-4 h-4 bg-accent/50 rounded-full" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-2 right-1/3"
                  >
                    <svg className="w-10 h-5 text-primary/40" viewBox="0 0 48 24">
                      <path
                        d="M0 12 Q12 0 24 12 Q36 24 48 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                  </motion.div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl p-3 border border-border whitespace-nowrap"
                  >
                    <span className="text-xs md:text-sm font-bold text-foreground">10+ Years of <span className="text-accent">Excellence</span></span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 order-1 lg:order-2 text-center lg:text-left"
            >
              {/* Section Label */}
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wide"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                About Us
              </motion.span>

              {/* Main Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight">
                <span className="text-foreground">Building </span>
                <span className="text-primary">Careers</span>
                <span className="text-foreground">, Not Just </span>
                <span className="text-accent">Courses</span>
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                We are a professional IT training institute focused on real-world skills,
                industry-level projects, and career outcomes. Our mission is to make students
                job-ready with confidence.
              </p>

              {/* Highlight Cards */}
              <div className="grid sm:grid-cols-3 gap-3 pt-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group bg-card p-4 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-accent/20 flex items-center justify-center mb-3 transition-colors duration-300 mx-auto lg:mx-0">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <h4 className="text-xs md:text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="pt-2"
              >
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold"
                >
                  Know More About Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
