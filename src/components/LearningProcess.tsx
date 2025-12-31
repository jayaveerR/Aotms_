import { motion } from "framer-motion";

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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4"
          >
            <span className="w-8 h-px bg-accent" />
            Our Learning Model
            <span className="w-8 h-px bg-accent" />
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
          >
            <span className="text-foreground">How Training </span>
            <span className="text-primary">Works </span>
            <span className="text-accent">Here</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground max-w-md mx-auto"
          >
            A structured, practical approach to make you job-ready
          </motion.p>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.15 + index * 0.12,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              {/* Connector Line with animated dot (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-full w-full z-10">
                  <div className="relative h-0.5 bg-border">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                      className="h-full bg-gradient-to-r from-primary to-accent origin-left"
                    />
                    {/* Animated dot */}
                    <motion.div
                      initial={{ left: "0%", opacity: 0 }}
                      whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent"
                    />
                  </div>
                  {/* Arrow */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-accent -mr-1" />
                </div>
              )}

              {/* Step Card */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-card border border-border rounded-2xl p-6 md:p-8 text-center hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                
                {/* Step Number with circle */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary/30 group-hover:border-accent transition-colors duration-300"
                  >
                    <span className="text-4xl md:text-5xl font-display font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {step.number}
                    </span>
                  </motion.div>
                  
                  {/* Decorative ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-dashed border-border" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="relative text-base md:text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative text-xs md:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-primary to-accent origin-center"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-14 md:mt-20"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Join today and follow this 
            <span className="text-accent font-semibold"> structured path </span> 
            to your IT career
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-foreground font-semibold rounded-full hover:bg-accent/90 transition-colors duration-300"
          >
            Start Your Journey
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
