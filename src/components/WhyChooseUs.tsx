import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Hero-Style Animations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground">
            -------why choose us----------
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative items-start">
          {/* Divider Lines (Vertical !) */}
          <div className="hidden md:block absolute left-[32%] top-0 bottom-0 w-[1px] border-l-[1px] border-dashed border-muted-foreground/30 h-[90%] my-auto" />
          <div className="hidden md:block absolute left-[66%] top-0 bottom-0 w-[1px] border-l-[1px] border-dashed border-muted-foreground/30 h-[90%] my-auto" />

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-[304px] h-[304px] rounded-full overflow-hidden border-8 border-white shadow-2xl mb-10 relative group"
            >
              <img
                src="/Why Choose us-1.jpg"
                alt="Our Mission"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
            </motion.div>

            <div className="text-center max-w-sm">
              <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed px-4">
                Empowering students with real-world IT skills and expert mentorship to bridge the gap between academics and industry.
              </p>
            </div>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-[304px] h-[304px] rounded-full overflow-hidden border-8 border-white shadow-2xl mb-10 relative group bg-muted"
            >
              <img
                src="/Why Choose us-2.jpg"
                alt="Our Mission"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors" />
            </motion.div>

            <div className="text-center max-w-sm">
              <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-6">
                Our Vision
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed px-4">
                To become the most trusted IT training institute by transforming passionate learners into job-ready tech leaders.
              </p>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-[304px] h-[304px] rounded-full overflow-hidden border-8 border-white shadow-2xl mb-10 relative group"
            >
              <img
                src="/Why Choose us-3.jpg"
                alt="Why Choose Us"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors" />
            </motion.div>

            <div className="text-center max-w-sm">
              <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-6">
                Why Choose Us
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed px-4">
                Cutting-edge courses, flexible learning, and 100% placement-focused support—all in one place.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
