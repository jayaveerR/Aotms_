import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Strong Fundamentals",
    description: "Industry-aligned concepts explained clearly from basics"
  },
  {
    number: "02",
    title: "Hands-On Practice",
    description: "Daily labs, tasks, and mentor-guided practice"
  },
  {
    number: "03",
    title: "Real-Time Projects",
    description: "Build resume-ready projects based on real scenarios"
  },
  {
    number: "04",
    title: "Career & Placement Support",
    description: "Mock interviews, resume help, and job assistance"
  }
];

export const LearningProcess = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
              <span className="w-8 h-px bg-accent" />
              Our Learning Model
              <span className="w-8 h-px bg-accent" />
            </span>
          </div>
          
          <h2 className="section-heading">
            How Training <span className="text-primary">Works</span> <span className="text-accent">Here</span>
          </h2>
          
          <p className="section-subheading mt-4">
            A structured, practical approach to make you job-ready
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="group relative">
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                className="relative bg-card border border-border/70 rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/0 group-hover:to-accent/5 transition-all duration-500" />
                
                <div className="relative mb-6">
                  <div
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-dashed border-primary/30 group-hover:border-accent transition-colors duration-300"
                  >
                    <span className="text-5xl font-display font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="relative text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="relative text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-muted-foreground mb-4">
            Join today and follow this <span className="text-accent font-semibold">structured path</span> to your IT career
          </p>
          
           <div className="mt-12 md:mt-16 text-center">
          <button  className="btn-secondary group inline-flex items-center bg-orange-500 text-white">
             Start Your Journey <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
          
        </div>
      </div>
    </section>
  );
};
