import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Phone, Mail, MapPin, Rocket } from "lucide-react";

export const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const benefits = [
    "Free Demo Class",
    "Course Brochure",
    "Career Counseling",
    "Flexible Payment Options",
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative background orbs for the form */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />

              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4">
                  <span className="text-black">Ready to </span>
                  <span className="text-[#008bf8]">Transform </span>
                  <span className="text-black">Your Career?</span>
                </h2>
                <p className="text-gray-500 text-sm md:text-base max-w-sm mx-auto">
                  Fill the form below and our career experts will reach out to guide your tech journey.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5">
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 bg-gray-50/50 border-gray-100 focus:border-[#008bf8] rounded-xl px-6"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 bg-gray-50/50 border-gray-100 focus:border-[#008bf8] rounded-xl px-6"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-14 bg-gray-50/50 border-gray-100 focus:border-[#008bf8] rounded-xl px-6"
                    required
                  />
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full h-14 px-6 bg-gray-50/50 border-2 border-gray-100 rounded-xl focus:border-[#008bf8] focus:outline-none transition-all text-sm text-gray-600 appearance-none"
                    required
                  >
                    <option value="">Select Your Interested Course</option>
                    <option value="full-stack">Full Stack Development</option>
                    <option value="cyber-security">Cyber Security</option>
                    <option value="service-now">ServiceNow Architecture</option>
                    <option value="qa-automation">QA Automation</option>
                    <option value="data-science">Data Science & ML</option>
                    <option value="cloud-computing">Cloud Computing</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full h-14 bg-[#ff6b00] text-white rounded-xl shadow-lg shadow-orange-500/20 text-base font-bold tracking-wide transition-all hover:bg-orange-600"
                >
                  Get Free Counseling
                </motion.button>
              </form>

              <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-gray-50 pt-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#008bf8]" />
                  <span className="text-xs font-bold text-black">+91 8019942233</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#ff6b00]" />
                  <span className="text-xs font-bold text-black">info@aotms.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
