import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight, Briefcase } from "lucide-react";
import { useState } from "react";

const placementFeatures = [
  {
    id: "01.",
    title: "Resume Building & Review",
    content: "Our experts work with you to craft a professional, ATS-friendly resume that highlights your technical skills, projects, and achievements. We provide multiple rounds of feedback until your profile stands out to top recruiters."
  },
  {
    id: "02.",
    title: "Mock Interviews",
    content: "Receive comprehensive interview preparation through simulated technical and HR rounds. Our mentors provide detailed feedback on your problem-solving approach, communication style, and technical depth."
  },
  {
    id: "03.",
    title: "Company Tie-ups",
    content: "Benefit from our exclusive network of 50+ hiring partners ranging from innovative startups to global MNCs. We facilitate direct placement drives and priority screening for our high-performing students."
  },
  {
    id: "04.",
    title: "Profile Building",
    content: "Go beyond the resume by optimizing your LinkedIn presence and GitHub portfolio. We help you build a professional brand that attracts opportunities organically from industry leaders."
  },
  {
    id: "05.",
    title: "Salary Negotiation",
    content: "Learn the art of evaluating and negotiating job offers. We provide market data and strategies to ensure you receive a compensation package that reflects your true worth and expertise."
  },
  {
    id: "06.",
    title: "Lifetime Support",
    content: "Your relationship with us doesn't end with a job offer. Our alumni benefit from lifelong career guidance, networking opportunities, and support for future career transitions or upskilling."
  }
];

const stats = [
  { number: "300+", label: "Students Placed" },
  { number: "50+", label: "Hiring Partners" },
  { number: "8.5 LPA", label: "Average Package" },
  { number: "18 LPA", label: "Highest Package" },
];

export const PlacementsSection = () => {
  const [openId, setOpenId] = useState<string | null>("01.");

  return (
    <section id="placements" className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Full Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group">
              <img
                src="/Placement.png"
                alt="Career Support & Placements"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Badges */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div className="bg-[#ff6b00] text-white px-5 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl">
                  Official Placement Portal
                </div>
                <div className="bg-[#008bf8] text-white p-3 rounded-2xl shadow-xl">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Stats Grid - Moved below image for cleaner look */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100 hover:border-[#008bf8]/30 transition-colors"
                >
                  <p className="text-xl md:text-2xl font-bold text-black mb-1">{stat.number}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: UI/UX Animation Numbers List */}
          <div className="space-y-2">
            <div>

              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-black leading-tight mb-12">
                Placement <span className="text-[#008bf8]">Support</span> & <span className="text-[#ff6b00]">Mock Interviews</span>
              </h2>
            </div>

            <div className="space-y-2">
              {placementFeatures.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 last:border-0"
                >
                  <div
                    className="w-full py-6 flex items-start gap-5 group transition-all"
                  >
                    <span className="text-xs font-bold text-[#008bf8] mt-1 shrink-0 font-display">
                      {item.id}
                    </span>

                    <div className="flex-grow">
                      <button
                        onClick={() => setOpenId(openId === item.id ? null : item.id)}
                        className="w-full flex items-center justify-between gap-4 text-left"
                      >
                        <h3 className={`text-lg md:text-xl font-bold transition-all duration-300 ${openId === item.id ? 'text-[#008bf8]' : 'text-black group-hover:text-gray-600'}`}>
                          {item.title}
                        </h3>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${openId === item.id ? 'bg-[#ff6b00] text-white' : 'bg-gray-50 text-gray-400'}`}>
                          {openId === item.id ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                        </div>
                      </button>

                      {openId === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            {item.content}
                          </p>
                          <div className="pt-4">
                            <button className="inline-flex items-center gap-2 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest hover:gap-3 transition-all">
                              Learn more <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
