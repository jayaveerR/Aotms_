import { motion } from "framer-motion";
import {
    FaBrain, FaShieldAlt, FaChartBar, FaDatabase, FaCloud,
    FaCode, FaJava, FaPython, FaReact, FaSearch, FaArrowRight,
    FaCheckCircle, FaUserTie, FaBuilding, FaCertificate
} from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { Link } from "react-router-dom";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { GraduationCap, Clock, Users, Briefcase } from "lucide-react";

// Import Course Images
import aiImg from "@/assets/courses/ai.png";
import cyberImg from "@/assets/courses/cyber-security.png";
import dataAnalyticsImg from "@/assets/courses/data-analytics.jpg";
import dataScienceImg from "@/assets/courses/data-science.jpg";
import devopsImg from "@/assets/courses/devops.png";
import embeddedImg from "@/assets/courses/embedded-systems.png";
import javaImg from "@/assets/courses/java-full-stack.png";
import mernImg from "@/assets/courses/MERN.jpg";
import pythonImg from "@/assets/courses/python.jpg";
import quantumImg from "@/assets/courses/quantom-computing.png";
import uiuxImg from "@/assets/courses/uiux.jpg";
import qaImg from "@/assets/courses/qa-automation.png";

// Course Data
const courses = [
    {
        name: "Artificial Intelligence With ML",
        slug: "ai-ml",
        href: "/course/ai-ml",
        icon: FaBrain,
        image: aiImg,
        desc: "Master AI algorithms, deep learning, and neural networks.",
        duration: "6 Months",
        level: "Advanced"
    },
    {
        name: "Cyber Security",
        slug: "cyber-security",
        href: "/course/cyber-security",
        icon: FaShieldAlt,
        image: cyberImg,
        desc: "Learn ethical hacking, network defense, and security protocols.",
        duration: "6 Months",
        level: "Intermediate"
    },
    {
        name: "Data Analytics",
        slug: "data-analytics",
        href: "/course/data-analytics",
        icon: FaChartBar,
        image: dataAnalyticsImg,
        desc: "Transform raw data into actionable business insights.",
        duration: "6 Months",
        level: "Beginner to Advanced"
    },
    {
        name: "Data Science",
        slug: "data-science",
        href: "/course/data-science",
        icon: FaDatabase,
        image: dataScienceImg,
        desc: "Statistical analysis, predictive modeling, and data visualization.",
        duration: "6 Months",
        level: "Advanced"
    },
    {
        name: "DevOps",
        slug: "devops",
        href: "/course/devops",
        icon: FaCloud,
        image: devopsImg,
        desc: "Streamline software development with CI/CD, Docker, and Kubernetes.",
        duration: "6 Months",
        level: "Intermediate"
    },
    {
        name: "Embedded Systems",
        slug: "embedded-systems",
        href: "/course/embedded-systems",
        icon: FaCode,
        image: embeddedImg,
        desc: "Design and program microcontroller-based systems.",
        duration: "6 Months",
        level: "Specialized"
    },
    {
        name: "Java Full Stack",
        slug: "java-full-stack",
        href: "/course/java-full-stack",
        icon: FaJava,
        image: javaImg,
        desc: "Build enterprise-grade applications with Java and modern frontends.",
        duration: "6 Months",
        level: "Beginner Friendly"
    },
    {
        name: "MERN Stack",
        slug: "mern-stack",
        href: "/course/mern-stack",
        icon: FaReact,
        image: mernImg,
        desc: "MongoDB, Express, React, and Node.js for modern web apps.",
        duration: "6 Months",
        level: "Popular"
    },
    {
        name: "Python Full Stack",
        slug: "python-full-stack",
        href: "/course/python-full-stack",
        icon: FaPython,
        image: pythonImg,
        desc: "Versatile development with Python, Django/Flask, and React.",
        duration: "6 Months",
        level: "Beginner Friendly"
    },
    {
        name: "Quantum Computing",
        slug: "quantum-computing",
        href: "/course/quantum-computing",
        icon: FaBrain,
        image: quantumImg,
        desc: "Explore the future of computing with quantum mechanics principles.",
        duration: "6 Months",
        level: "Advanced/Research"
    },
    {
        name: "UI/UX Design",
        slug: "ui-ux-design",
        href: "/course/ui-ux-design",
        icon: SiMui,
        image: uiuxImg,
        desc: "Design user-centric interfaces with Figma and design thinking.",
        duration: "6 Months",
        level: "Creative"
    },
    {
        name: "QA Automation",
        slug: "qa-automation",
        href: "/course/qa-automation",
        icon: FaCode,
        image: qaImg,
        desc: "Ensure software quality with Selenium, Java/Python, and automation frameworks.",
        duration: "6 Months",
        level: "Career Starter"
    },
];

const GlobalCoursesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", domain: "Other" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInquirySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        toast.success("Thank you for your inquiry. Our academic counselor will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", domain: "Other" });
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            {/* --- Professional Hero Section --- */}
            <section className="relative pt-40 pb-16 overflow-hidden bg-primary">
                {/* Subtle Geometric Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
                            Advance Your Career with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Industry-Standard Certification</span>
                        </h1>

                        <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                            Explore our comprehensive curriculum designed by industry experts. Gain practical skills, real-world project experience, and placement assistance.
                        </p>

                        {/* Professional Search Input */}
                        <div className="max-w-xl mx-auto relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <FaSearch className="text-slate-400 group-focus-within:text-primary transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Find your course (e.g., Data Science, Java, DevOps)"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full h-14 pl-12 pr-6 rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-accent/20 border border-transparent focus:border-accent transition-all shadow-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Trust Indicators Strip --- */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100/0 md:divide-slate-100">
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                                <FaBuilding />
                            </div>
                            <span className="text-2xl font-bold text-slate-800">500+</span>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Hiring Partners</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2 group-hover:scale-110 transition-transform">
                                <FaUserTie />
                            </div>
                            <span className="text-2xl font-bold text-slate-800">100%</span>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Placement Asst.</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                                <Briefcase />
                            </div>
                            <span className="text-2xl font-bold text-slate-800">20+</span>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Real Projects</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-2 group-hover:scale-110 transition-transform">
                                <Users />
                            </div>
                            <span className="text-2xl font-bold text-slate-800">10k+</span>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Alumni Network</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Course Catalog Grid --- */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Certificate Programs</h2>
                            <p className="text-slate-500 mt-2">Browse our industry-recognized courses</p>
                        </div>
                        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            Showing {filteredCourses.length} Courses
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredCourses.map((course, index) => (
                            <motion.div
                                key={course.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group bg-white rounded-2xl border border-slate-200 hover:border-primary/40 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Course Image */}
                                <div className="relative h-48 overflow-hidden bg-slate-100">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={course.image}
                                        alt={course.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2 z-20">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm text-green-700 text-[10px] font-bold uppercase tracking-wide shadow-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                            New Batch
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-1" title={course.name}>
                                            {course.name}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4" title={course.desc}>
                                        {course.desc}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-slate-100 mb-4 mt-auto">
                                        <div>
                                            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Duration</span>
                                            <div className="flex items-center gap-1.5 font-medium text-slate-700 text-sm mt-0.5">
                                                <Clock className="w-3.5 h-3.5 text-accent" /> {course.duration}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Level</span>
                                            <div className="flex items-center gap-1.5 font-medium text-slate-700 text-sm mt-0.5">
                                                <GraduationCap className="w-3.5 h-3.5 text-accent" /> {course.level}
                                            </div>
                                        </div>
                                    </div>

                                    <Link to={course.href}>
                                        <Button className="w-full h-11 bg-slate-900 text-white font-semibold rounded-lg hover:bg-primary transition-all shadow-lg shadow-slate-900/10 group-hover:shadow-primary/30">
                                            View Details <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                                <FaSearch className="text-2xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">No courses found</h3>
                            <p className="text-slate-500">Try adjusting your search terms.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* --- Professional Counselor Section --- */}
            <section className="bg-slate-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-90"></div>
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Left Content */}
                        <div className="lg:w-1/2 text-white">
                            <div className="inline-block px-3 py-1 rounded-md bg-accent/20 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                                Free Counseling
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Confused about which career path to choose?
                            </h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed font-light">
                                Our academic counselors are industry experts who can help you identify your strengths and suggest the right course to achieve your career goals.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "1-on-1 Personalized Career Roadmap",
                                    "Market Trend Analysis & Salary Insights",
                                    "Profile Evaluation for Placements",
                                    "Scholarship Eligibility Check"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-accent flex-shrink-0" />
                                        <span className="text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-4 text-sm text-blue-200 border-t border-white/10 pt-6">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-primary flex items-center justify-center text-xs font-bold text-white">
                                            {i}
                                        </div>
                                    ))}
                                </div>
                                <p>Join <span className="text-white font-bold">500+ students</span> counseled this month</p>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-white rounded-2xl shadow-2xl p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Book a Free Session</h3>
                                <p className="text-sm text-slate-500 mb-6">Fill in your details to get a callback from our experts.</p>

                                <form onSubmit={handleInquirySubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Name <span className="text-red-500">*</span></label>
                                            <Input
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                                className="h-10 bg-slate-50 border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Mobile <span className="text-red-500">*</span></label>
                                            <Input
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                                className="h-10 bg-slate-50 border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Email Address <span className="text-red-500">*</span></label>
                                        <Input
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="h-10 bg-slate-50 border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Interested Domain <span className="text-red-500">*</span></label>
                                        <select
                                            className="w-full h-10 rounded-md px-3 bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-slate-700"
                                            value={formData.domain}
                                            onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                                            required
                                        >
                                            <option value="" disabled>Select a domain</option>
                                            {courses.map(course => (
                                                <option key={course.name} value={course.name}>{course.name}</option>
                                            ))}
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="pt-2">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-11 rounded-lg text-sm font-bold bg-accent hover:bg-orange-600 text-white shadow-lg shadow-accent/20 transition-all hover:translate-y-[-1px]"
                                        >
                                            {isSubmitting ? "Submitting..." : "Schedule My Free Call"}
                                        </Button>
                                        <p className="text-[10px] text-center text-slate-400 mt-3">
                                            By submitting, you agree to our <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GlobalCoursesPage;
