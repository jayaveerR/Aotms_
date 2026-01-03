import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { workshops } from "../../data/events";

export const UpcomingWorkshops = () => {
    // Only show the first 3 workshops
    const displayWorkshops = workshops.slice(0, 3);

    return (
        <section id="workshops" className="py-24 bg-[#FFFFFF] relative overflow-hidden font-sans border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[#0A3D91] font-bold text-sm tracking-[0.2em] uppercase block mb-4">
                            Skills & Certifications
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-tight">
                            Upcoming <span className="text-[#0A3D91]">Workshops</span> Conducted by Experts
                        </h2>
                    </div>
                    <Link
                        to="/workshops"
                        className="group flex items-center gap-2 text-[#0A3D91] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
                    >
                        View All Workshops <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {displayWorkshops.map((workshop) => (
                        <div
                            key={workshop.id}
                            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            {/* Banner Thumbnail */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={workshop.thumbnailUrl}
                                    alt={workshop.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#0A3D91] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                                        {workshop.mode}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-4 text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-[#0A3D91]" />
                                        {workshop.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-[#0A3D91]" />
                                        {workshop.duration}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#0A3D91] transition-colors line-clamp-1">
                                    {workshop.name}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                    {workshop.description}
                                </p>

                                <Link
                                    to="/workshops"
                                    className="block w-full text-center bg-[#FF8A00] hover:bg-[#E67C00] text-white font-bold py-3.5 rounded-xl transition-colors duration-300 text-sm"
                                >
                                    Register for Workshop
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Outcomes Summary */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: "Practical Labs", value: "50+" },
                        { label: "Student Participants", value: "1200+" },
                        { label: "Expert Instructors", value: "15+" },
                        { label: "Certifications Issued", value: "2000+" }
                    ].map((outcome, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                            <div className="text-2xl font-black text-[#111111] mb-1">{outcome.value}</div>
                            <div className="text-[10px] font-bold text-[#0A3D91] uppercase tracking-[0.1em]">{outcome.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
