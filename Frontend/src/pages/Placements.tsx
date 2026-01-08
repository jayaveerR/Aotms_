import React, { useMemo } from 'react';
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import studentPlaceImage from '@/assets/hero-student.png';
import { motion } from "framer-motion";

const studentsData = [
    {
        name: "Sangeetha Detne",
        role: "Big Data Developer",
        company: "Cigniti / Walmart"
    },
    {
        name: "Sravani Pilli",
        role: "Java Full Stack Developer",
        company: "TCS / USAA"
    },
    {
        name: "Bharathy Govindaswamy",
        role: "Hadoop Developer",
        company: "Cognizant / TIAA"
    },
    {
        name: "Nimitha Srireddy",
        role: "Java Developer",
        company: "Tekmark / AT&T"
    },
    {
        name: "Jayaprakash Navaneedha Krishnan",
        role: "Java Full Stack Developer",
        company: "Wipro / HP"
    },
    {
        name: "Hima Bindu Ande",
        role: "Java Full Stack Developer",
        company: "Cognizant / Amex"
    }
];

const Placements = () => {
    // Infinite Auto Scroll Carousel
    // Triple the data to ensure seamless looping on larger screens
    const infiniteStudents = [...studentsData, ...studentsData, ...studentsData];

    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [AutoScroll({ speed: 2, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-12 text-center">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
                            Success Stories
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                            Where Ambition Meets <span className="text-blue-600">Opportunity</span>
                        </h1>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
                            Explore our massive placement records and see how we've helped hundreds of students land their dream roles at global tech giants.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Placements Showcase Section */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Our Students Got Placed
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        See how we've helped students transform their careers and land roles at top tech companies.
                    </p>
                </div>

                {/* Infinite Carousel */}
                <div className="w-full relative">
                    {/* Gradient Masks for smooth fade effect at edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:w-48" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:w-48" />

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {infiniteStudents.map((student, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_220px] min-w-0 mx-4 select-none"
                                >
                                    <div className="flex flex-col items-center text-center p-4 transition-transform duration-300 hover:-translate-y-2">
                                        {/* Circular Image */}
                                        <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-sm">
                                            <img
                                                src={studentPlaceImage}
                                                alt={student.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-lg font-semibold text-slate-900 mb-1 leading-tight">
                                            {student.name}
                                        </h3>
                                        <p className="text-blue-600 font-medium text-sm mb-1">
                                            {student.role}
                                        </p>
                                        <p className="text-slate-400 text-xs font-medium uppercase tracking-wide">
                                            {student.company}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Bottom Spacing before Footer */}
            <div className="py-20" />

            <Footer />
        </div>
    );
};

export default Placements;
