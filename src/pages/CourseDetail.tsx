import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Clock,
    BarChart3,
    Users,
    BookOpen,
    ArrowRight,
    Star,
    ChevronLeft,
    CheckCircle2,
    ChevronDown,
    Layout,
    Award,
    Globe,
    Monitor
} from "lucide-react";

import { coursesData, Course } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { LogoCarousel, Logo } from "@/components/ui/logo-carousel";
import { CourseCard } from "@/components/courses/CourseCard";
import {
    SiPython, SiReact, SiNodedotjs, SiAmazonwebservices, SiDocker,
    SiGithub, SiVite, SiPandas, SiNumpy, SiScikitlearn, SiJupyter,
    SiSqlite, SiTableau, SiGooglecloud, SiTerraform,
    SiLinux, SiArduino, SiRaspberrypi,
    SiKalilinux, SiWireshark, SiMetasploit, SiSelenium, SiSpringboot,
    SiHibernate, SiMysql, SiJavascript, SiHtml5, SiCss3, SiDjango,
    SiKubernetes, SiAnsible, SiJenkins, SiPostgresql, SiTensorflow,
    SiPytorch, SiKeras, SiOpencv, SiC, SiIntel
} from "react-icons/si";

const ToolIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    "Python": SiPython, "React": SiReact, "Node.js": SiNodedotjs, "AWS": SiAmazonwebservices, "Docker": SiDocker,
    "GitHub": SiGithub, "Vite": SiVite, "Pandas": SiPandas, "NumPy": SiNumpy, "Scikit": SiScikitlearn,
    "Jupyter": SiJupyter, "SQL": SiSqlite, "Tableau": SiTableau, "Azure": SiAmazonwebservices, "GCP": SiGooglecloud,
    "Terraform": SiTerraform, "Linux": SiLinux, "Excel": SiJavascript, "PowerBI": SiTableau, "Arduino": SiArduino,
    "ARM": SiIntel, "Kali Linux": SiKalilinux, "Wireshark": SiWireshark, "Metasploit": SiMetasploit,
    "Selenium": SiSelenium, "Java": SiSpringboot, "Spring Boot": SiSpringboot, "Hibernate": SiHibernate,
    "MySQL": SiMysql, "JavaScript": SiJavascript, "HTML5": SiHtml5, "CSS3": SiCss3, "Django": SiDjango,
    "Kubernetes": SiKubernetes, "Ansible": SiAnsible, "Jenkins": SiJenkins, "PostgreSQL": SiPostgresql,
    "TensorFlow": SiTensorflow, "PyTorch": SiPytorch, "Keras": SiKeras, "OpenCV": SiOpencv, "C": SiC,
    "C++": SiC, "Raspberry Pi": SiRaspberrypi, "STM32": SiIntel, "ESP32": SiIntel, "RTOS": SiLinux,
    "I2C": SiIntel, "SPI": SiIntel, "Qiskit": SiIntel, "IBM Quantum": SiIntel, "Cirq": SiGooglecloud,
    "PennyLane": SiPython, "Quantum Algorithms": SiIntel, "Linear Algebra": SiPython, "Complexity": SiPython
};

const getCourseSpecificLogos = (title: string): Logo[] => {
    const tools = getCourseSpecificTools(title);
    return tools.map((tool, index) => ({
        name: tool,
        id: index,
        img: ToolIcons[tool] || SiJavascript // Fallback icon
    }));
};


const getCourseSpecificTools = (title: string) => {
    const tools: Record<string, string[]> = {
        "Data Science": ["Python", "Pandas", "NumPy", "Scikit", "Jupyter", "SQL", "Tableau", "TensorFlow"],
        "Cloud Computing": ["AWS", "Azure", "GCP", "Docker", "Terraform", "Linux", "Ansible"],
        "Data Analytics": ["Excel", "SQL", "Tableau", "PowerBI", "Python", "Pandas"],
        "DevOps (AWS/Azure)": ["Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform", "GitHub", "Linux"],
        "Cyber Security": ["Kali Linux", "Wireshark", "Metasploit", "Linux", "Python"],
        "Python Full Stack": ["Python", "Django", "React", "PostgreSQL", "HTML5", "CSS3", "JavaScript"],
        "Java Full Stack": ["Java", "Spring Boot", "React", "MySQL", "Hibernate", "JavaScript", "HTML5"],
        "QA Automation": ["Selenium", "Java", "Jenkins", "GitHub", "Maven"],
        "Embedded Systems": ["C", "C++", "ARM", "Arduino", "Raspberry Pi", "STM32", "ESP32", "RTOS", "Linux", "I2C", "SPI"],
        "Quantum Computing": ["Qiskit", "IBM Quantum", "Python", "Cirq", "PennyLane", "Quantum Algorithms", "Jupyter", "Linear Algebra"],
        "AI": ["Python", "TensorFlow", "PyTorch", "Keras", "OpenCV", "Jupyter"],
        "Machine Learning": ["Python", "Pandas", "NumPy", "Scikit", "TensorFlow", "PyTorch"]
    };
    return tools[title] || ["Python", "React", "JavaScript"];
};

const getCourseOutcomes = (category: string) => {
    const outcomes: Record<string, string[]> = {
        "Data Science": [
            "Predictive Modeling: Build robust ML models from scratch.",
            "Visual Storytelling: Master Tableau and Seaborn for insights.",
            "Big Data Handling: Process millions of records with ease.",
            "Deployment: Deploy models to production environments."
        ],
        "DevOps": [
            "CI/CD Mastery: Build fully automated pipelines.",
            "Infrastructure as Code: Manage servers with Terraform.",
            "Containerization: Scale apps using Docker & Kubernetes.",
            "Security: Implement DevSecOps best practices."
        ],
        "AI/Machine Learning": [
            "Neural Networks: Design deep learning architectures.",
            "Computer Vision: Build systems that process visual data.",
            "Real-world AI: Implement NLP models for chatbots.",
            "Scalable ML: Train models on cloud infrastructure."
        ]
    };
    const defaultOutcomes = [
        "Practical Mastery: Gain hands-on experience through 20+ live projects.",
        "Industry Standards: Learn best practices used by tech leaders.",
        "Problem Solving: Develop a mindset to tackle complex challenges.",
        "Job Readiness: Clear interviews with our expert training."
    ];
    return outcomes[category] || defaultOutcomes;
};



export default function CourseDetail() {
    const { slug } = useParams();
    const [course, setCourse] = useState<Course | null>(null);
    const [activeModule, setActiveModule] = useState<number | null>(0);

    useEffect(() => {
        const foundCourse = coursesData.find(c => c.slug === slug);
        if (foundCourse) {
            setCourse(foundCourse);
        }
        window.scrollTo(0, 0);
    }, [slug]);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Course not found</h2>
                    <Link to="/">
                        <Button>Return to Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 bg-[#0a192f] overflow-hidden">
                {/* Immersive Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(30,58,138,0.4)_0%,_rgba(10,25,47,1)_70%)]" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-orange-600/10 rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-blue-300/60 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-8 md:mb-12">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronLeft className="w-3 h-3 rotate-180" />
                        <Link to="/#courses" className="hover:text-white transition-colors">Courses</Link>
                        <ArrowRight className="w-3 h-3 text-blue-300/40 mx-1" />
                        <span className="text-blue-400">{course.title}</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <Badge className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border-blue-500/30 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                    <Layout className="w-3 h-3 mr-1.5" />
                                    {course.category}
                                </Badge>
                                {course.rating === 5 && (
                                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                        <Star className="w-3 h-3 mr-1.5 fill-current" />
                                        Bestseller
                                    </Badge>
                                )}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                                Master <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">{course.title}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
                                {course.description}
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-orange-400">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Duration</span>
                                    </div>
                                    <div className="text-white font-bold text-sm md:text-base">{course.duration}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-orange-400">
                                        <BarChart3 className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Level</span>
                                    </div>
                                    <div className="text-white font-bold text-sm md:text-base">{course.level}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-yellow-400">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Rating</span>
                                    </div>
                                    <div className="text-white font-bold text-sm md:text-base">{course.rating}.0 / 5.0</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-orange-400">
                                        <Globe className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Language</span>
                                    </div>
                                    <div className="text-white font-bold text-sm md:text-base">English / Telugu</div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-5">
                                <Button className="h-14 px-10 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl text-lg font-bold shadow-2xl shadow-orange-500/30 border-none transition-all hover:scale-105 active:scale-95 group/btn">
                                    Enroll Now
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                                </Button>
                                <Button variant="outline" className="h-14 px-8 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 rounded-2xl text-lg font-bold backdrop-blur-sm">
                                    Download Brochure
                                </Button>
                            </div>
                        </div>

                        <div
                            className="relative lg:justify-self-end"
                        >
                            <div className="relative z-10 w-full max-w-[500px] aspect-square rounded-[2rem] overflow-hidden bg-[#0a192f] border-4 border-white/10 shadow-3xl shadow-blue-500/20 flex items-center justify-center p-8">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 to-transparent" />
                            </div>

                            {/* Trust Badge */}
                            <div
                                className="absolute -bottom-6 -right-6 md:-right-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl z-20 border border-white/50 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                                        <Award className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900">Certified Training</h4>
                                        <p className="text-xs text-slate-500 font-medium">Industry Recognized Academy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="mb-12">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-blue-600" />
                                    </div>
                                    Detailed Curriculum
                                </h2>
                                <p className="text-slate-600 mb-10 max-w-2xl text-lg leading-relaxed">
                                    Master the skills through our comprehensive, industry-aligned roadmap. Each module is crafted by experts to ensure practical mastery.
                                </p>

                                <div className="space-y-4">
                                    {course.curriculum.map((module, mIdx) => (
                                        <div
                                            key={mIdx}
                                            className={cn(
                                                "border rounded-2xl transition-all duration-300 overflow-hidden",
                                                activeModule === mIdx ? "border-blue-200 shadow-md bg-blue-50/10" : "border-slate-100"
                                            )}
                                        >
                                            <button
                                                onClick={() => setActiveModule(activeModule === mIdx ? null : mIdx)}
                                                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span className="w-8 h-8 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                                                        {mIdx + 1}
                                                    </span>
                                                    <h3 className="text-lg font-bold text-slate-900">{module.title}</h3>
                                                </div>
                                                <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", activeModule === mIdx && "rotate-180")} />
                                            </button>

                                            <div className={cn(
                                                "grid transition-all duration-300 ease-in-out",
                                                activeModule === mIdx ? "grid-rows-[1fr] opacity-100 px-6 pb-6" : "grid-rows-[0fr] opacity-0"
                                            )}>
                                                <div className="overflow-hidden">
                                                    <ul className="space-y-3 pt-2">
                                                        {module.lessons.map((lesson, lIdx) => (
                                                            <li key={lIdx} className="flex items-start gap-3 text-slate-600">
                                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                                <span className="text-sm md:text-base">{lesson}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-20">
                                <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 md:p-12">
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">What You'll Learn</h2>
                                        <p className="text-slate-500">Core outcomes and key takeaways of this program</p>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        {getCourseOutcomes(course.category).map((outcome, i) => {
                                            const [title, desc] = outcome.split(": ");
                                            return (
                                                <div key={i} className="flex gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                                                        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-20">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Tools & Technologies</h2>
                                    <p className="text-slate-500">Master the essential software used in the industry</p>
                                </div>
                                <div className="flex flex-col items-center gap-10">
                                    <LogoCarousel
                                        columnCount={Math.min(getCourseSpecificTools(course.title).length, 3)}
                                        logos={getCourseSpecificLogos(course.title)}
                                    />

                                </div>
                            </div>
                            <div className="mb-20">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-blue-600" />
                                    </div>
                                    Meet Your Instructor
                                </h2>
                                <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-center md:items-start">
                                    <div className="w-32 h-32 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border-4 border-slate-50">
                                        <div className="w-full h-full flex items-center justify-center bg-blue-900 text-white text-3xl font-bold">
                                            {course.trainer.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <h3 className="text-2xl font-bold text-slate-900">{course.trainer}</h3>
                                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Lead Instructor</Badge>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            With over 10+ years of industry experience, {course.trainer} has mentored thousands of students to successful careers in tech. Expert in {course.category} and real-world project delivery.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            {["10+ Years Exp", "Corporate Trainer", "Tech Lead"].map((tag, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-400">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <Globe className="w-5 h-5 text-blue-600" />
                                    </div>
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Who can enroll in this course?", a: "Anyone from a technical or non-technical background looking to start or transition into a career in tech. We cover everything from the absolute basics." },
                                        { q: "Is job assistance provided?", a: "Yes! We offer 100% placement support, including resume building, mock interviews, and access to our network of 200+ hiring partners." },
                                        { q: "Can I access the recordings later?", a: "Absolutely. All our live sessions are recorded and you get lifetime access to our LMS where you can review them anytime." }
                                    ].map((faq, i) => (
                                        <div key={i} className="border border-slate-100 rounded-2xl p-6 hover:border-blue-100 transition-colors">
                                            <h4 className="text-base font-bold text-slate-900 mb-3">{faq.q}</h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Sticky */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-blue-900/5 overflow-hidden group">
                                <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 p-8 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full -ml-12 -mb-12 blur-2xl" />

                                    <div className="relative text-center">
                                        <div className="flex flex-col items-center gap-2 mb-4">
                                            <div className="flex items-baseline justify-center gap-2">
                                                <span className="text-3xl font-extrabold tracking-tight whitespace-nowrap">{course.price}</span>
                                                <span className="text-sm text-blue-300/60 line-through font-medium whitespace-nowrap">{course.originalPrice}</span>
                                            </div>
                                            <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-100 text-[9px] font-bold uppercase tracking-[0.2em]">
                                                Limited Time Offer
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="space-y-6 mb-8">
                                        {[
                                            { icon: Clock, label: "Duration", value: course.duration, color: "blue" },
                                            { icon: Users, label: "Batch Type", value: "Weekday / Weekend", color: "indigo" },
                                            { icon: Monitor, label: "Mode", value: "Live Interactive", color: "blue", highlight: true },
                                            { icon: Award, label: "Certificate", value: "Globally Recognized", color: "indigo" },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start justify-between group/item gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={cn(
                                                        "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                                                        item.color === "blue" ? "bg-blue-50 group-hover/item:bg-blue-100" : "bg-indigo-50 group-hover/item:bg-indigo-100"
                                                    )}>
                                                        <item.icon className={cn(
                                                            "w-4.5 h-4.5",
                                                            item.color === "blue" ? "text-blue-600" : "text-indigo-600"
                                                        )} />
                                                    </div>
                                                    <span className="text-slate-500 font-bold text-[11px] uppercase tracking-wider">{item.label}</span>
                                                </div>
                                                <div className="text-right pt-1.5">
                                                    <span className={cn(
                                                        "font-bold text-sm tracking-tight block leading-tight",
                                                        item.highlight ? "text-blue-600" : "text-slate-900"
                                                    )}>
                                                        {item.value}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <Button className="w-full h-15 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-950 hover:to-indigo-950 text-white rounded-[1.25rem] font-bold text-lg shadow-xl shadow-blue-900/20 active:scale-95 transition-all duration-300">
                                            Book Your Seat Now
                                        </Button>

                                        <div className="flex items-center justify-center gap-2 group/guarantee py-2">
                                            <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center group-hover/guarantee:bg-green-100 transition-colors">
                                                <CheckCircle2 className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover/guarantee:text-green-600 transition-colors">Money Back Guarantee</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50/50 p-8 border-t border-slate-100/80">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-1 h-4 bg-blue-600 rounded-full" />
                                        <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.15em]">Course Includes:</h4>
                                    </div>
                                    <ul className="grid grid-cols-1 gap-4">
                                        {[
                                            "80% Practical Learning",
                                            "Industry Case Studies",
                                            "Git Hub Projects Support",
                                            "Job Alerts & Interview prep"
                                        ].map((inc, k) => (
                                            <li key={k} className="flex items-center gap-3 text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                                {inc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* Related Courses */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore Related Courses</h2>
                            <p className="text-slate-500">Other programs you might be interested in</p>
                        </div>
                        <Link to="/#courses">
                            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-2">
                                View All Courses
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coursesData
                            .filter(c => c.id !== course.id)
                            .slice(0, 3)
                            .map(relatedCourse => (
                                <CourseCard key={relatedCourse.id} course={relatedCourse} />
                            ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
