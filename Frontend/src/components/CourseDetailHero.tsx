import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface CourseDetailHeroProps {
    course: {
        title: string;
        category: string;
        image?: string;
        duration: string;
    };
    handleEnroll: () => void;
}

export const CourseDetailHero: React.FC<CourseDetailHeroProps> = ({ course, handleEnroll }) => {
    return (
        <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 bg-[#0066CC] overflow-hidden">
            {/* Background Base with Rich Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#002855] to-[#00509d]" />

            {/* Optional: Course Specific Background Image Overlay */}
            {course.image && (
                <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay bg-no-repeat bg-cover bg-center transition-opacity duration-700"
                    style={{ backgroundImage: `url(${course.image})` }}
                />
            )}

            {/* Dynamic Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.1]"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            {/* Vibrant Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Right Orange Blast */}
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#FF6B35] opacity-40 rounded-full blur-[120px] mix-blend-screen animate-pulse" />

                {/* Bottom Left Blue Depth */}
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#60a5fa] opacity-20 rounded-full blur-[100px] mix-blend-overlay" />

                {/* Floating Shapes for Visual Interest */}
                <div className="absolute top-20 left-[10%] w-32 h-32 bg-white/5 rounded-full blur-2xl border border-white/10" />
                <div className="absolute bottom-40 right-[20%] w-64 h-64 bg-blue-400/10 rounded-full blur-3xl border border-white/5" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE: Content */}
                    <div className="text-white space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                            Enrolling Now
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-lg">
                            <span className="text-white">Become A</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#FF6B35] drop-shadow-2xl">{course.title} PRO</span>
                        </h1>

                        <p className="text-white text-lg md:text-xl font-normal leading-relaxed max-w-lg drop-shadow-md">
                            Dominate the digital world with our comprehensive <span className="text-[#FF8C5A] font-bold">{course.category}</span> training program. Get placed in <span className="text-[#FF8C5A] font-bold">top MNCs</span>.
                        </p>

                        <div className="flex flex-wrap items-center gap-8 pt-8">
                            {/* Duration Badge - Professional Look */}
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm shadow-lg hover:bg-white/10 transition-colors">
                                <div className="p-2.5 bg-[#FF6B35]/20 rounded-xl">
                                    <Clock className="w-6 h-6 text-[#FF6B35]" />
                                </div>
                                <div>
                                    <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-0.5">Course Duration</div>
                                    <div className="text-white text-xl font-bold">{course.duration}</div>
                                </div>
                            </div>

                            {/* Enrolled Stats - Text Only (Letters) */}
                            <div className="flex flex-col pl-4 border-l border-white/10">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-white">2k+</span>
                                    <span className="text-blue-200 font-medium text-lg">Students</span>
                                </div>
                                <div className="text-sm text-white/60 font-medium">Currently Enrolled</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Form */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="mb-8">
                            <h3 className="text-4xl font-bold text-white mb-4">Book a Free Demo</h3>
                            <p className="text-blue-100/90 text-xl font-medium">Fill the form below to get instant access to course curriculum.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleEnroll(); }}>
                            <div className="space-y-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full h-16 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-blue-200/50 px-6 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all font-medium text-xl"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full h-16 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-blue-200/50 px-6 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all font-medium text-xl"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full h-16 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-blue-200/50 px-6 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all font-medium text-xl"
                                />
                            </div>

                            <Button className="w-full h-16 bg-[#FF6B35] hover:bg-orange-600 text-white rounded-xl font-bold text-2xl shadow-lg shadow-orange-500/20 transition-all mt-6">
                                Get Started Now
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};
