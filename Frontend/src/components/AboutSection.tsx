import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Factory, Users, Briefcase } from "lucide-react";

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

export const AboutSection = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [10, -10]), { stiffness: 100, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section id="about" className="py-8 md:py-12 bg-background overflow-hidden border-t border-border/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Right Column - Content */}
          <div className="space-y-6 order-2 lg:order-2 text-center lg:text-left">
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary text-primary text-xs font-bold rounded-full uppercase tracking-widest shadow-sm">
                About Our training model
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-foreground leading-[1.1]">
              World-class education,<br className="hidden md:block" /> and the <span className="text-primary">TechVarsity</span> difference.
            </h2>

            <p className="text-xs md:text-sm text-muted-foreground mx-auto lg:mx-0 leading-relaxed font-semibold">
              Learn from industry experts, explore our success stories, and step into the future.
              We are a professional IT training institute focused on real-world skills,
              industry-level projects, and career outcomes.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  className="group bg-card p-4 rounded-xl border border-border/50 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary group-hover:bg-accent/20 flex items-center justify-center mb-3 transition-colors duration-300 mx-auto lg:mx-0">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <button className="btn-secondary">
                Know More About Us
              </button>
            </div>
          </div>

          {/* Left Column - Image */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative order-1 lg:order-1 flex items-center justify-center h-[320px] md:h-[400px] lg:h-auto"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] preserve-3d"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
              <div className="absolute inset-4 rounded-full bg-foreground shadow-2xl" />
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-inner">
                <img
                  src="/IMG_0899-removebg-preview.png"
                  alt="Student learning IT"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                <div className="float-card px-4 py-2">
                  <span className="text-sm md:text-base font-bold text-foreground">10+ Years of <span className="text-accent">Excellence</span></span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
