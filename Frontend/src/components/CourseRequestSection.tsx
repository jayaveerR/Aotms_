import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { sanitizeInput, validate } from "@/utils/validation";
import img from "@/assets/Workshop-1.jpg";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export const CourseRequestSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!validate.isName(formData.name)) { toast.error("Invalid Name"); setLoading(false); return; }
        if (!validate.isEmail(formData.email)) { toast.error("Invalid Email"); setLoading(false); return; }
        if (!validate.isPhone(formData.phone)) { toast.error("Invalid Phone"); setLoading(false); return; }

        try {
            await axios.post('http://localhost:5000/api/leads', formData);
            toast.success("Request submitted successfully!");
            setFormData({ name: "", email: "", phone: "", course: "" });
        } catch (error: any) {
            toast.error("Failed to submit request");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="py-12 md:py-20 bg-background relative overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-2xl pointer-events-none" />

                    {/* Left Side - Image */}
                    <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full">
                        <img
                            src={img}
                            alt="Students Learning"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />

                        {/* Slanted Edge Mask for Desktop */}
                        <div className="hidden lg:block absolute top-0 right-0 h-full w-24 bg-primary transform translate-x-12 -skew-x-12 origin-top scale-110" />
                        <div className="hidden lg:block absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-black/10 to-transparent transform translate-x-12 -skew-x-12 origin-top" />
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 w-full">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white font-bold text-sm w-fit mb-6 shadow-sm"
                        >
                            <Zap className="w-4 h-4 fill-accent text-accent" />
                            <span>Course Request</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 font-display tracking-tight"
                        >
                            Find Your Best Course With Us
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/90 text-lg mb-8 font-medium max-w-xl"
                        >
                            Start Your IT Career Today! Enroll Now for a Free Demo and get expert guidance.
                        </motion.p>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-4 w-full"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: sanitizeInput.name(e.target.value) })}
                                    className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/10 backdrop-blur-sm transition-all"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    maxLength={10}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: sanitizeInput.phone(e.target.value) })}
                                    className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/10 backdrop-blur-sm transition-all"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <input
                                    type="text"
                                    placeholder="Course Name"
                                    value={formData.course}
                                    onChange={(e) => setFormData({ ...formData, course: sanitizeInput.text(e.target.value) })}
                                    className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/10 backdrop-blur-sm transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: sanitizeInput.email(e.target.value) })}
                                    className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/10 backdrop-blur-sm transition-all"
                                />
                            </div>
                            <button disabled={loading} className="px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20 whitespace-nowrap w-full sm:w-auto self-start">
                                {loading ? "Submitting..." : "Submit Request"}
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};
