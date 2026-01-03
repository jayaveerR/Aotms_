import { motion } from "framer-motion";

const reasons = [
  {
    title: "Our Mission",
    description: "Empowering students with real-world IT skills and expert mentorship to bridge the gap between academics and industry.",
    image: "/Why Choose us-1.jpg",
  },
  {
    title: "Our Vision",
    description: "To become the most trusted IT training institute by transforming passionate learners into job-ready tech leaders.",
    image: "/Why Choose us-2.jpg",
  },
  {
    title: "Why Choose Us",
    description: "Cutting-edge courses, flexible learning, and 100% placement-focused support—all in one place.",
    image: "/Why Choose us-3.jpg",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none opacity-60" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase mb-4"
          >
            Why TechVarsity
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            The TechVarsity <span className="text-blue-600">Difference</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We're more than just a training center. We're a <span className="text-slate-900 font-bold">career launchpad</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-10">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="w-[240px] h-[240px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl shadow-blue-500/10 relative z-10"
                >
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </motion.div>
                {/* Decorative Ring */}
                <div className="absolute -inset-4 border border-blue-100 rounded-full scale-90 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-[280px]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
