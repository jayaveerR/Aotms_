import React, { useMemo } from 'react';
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { studentPlacementsData } from "@/data/placements";
import { StudentPlacementCard } from "@/components/StudentPlacementCard";
import { motion } from "framer-motion";
import Masonry from "@/components/ui/Masonry";

const Placements = () => {
    // Prepare masonry items
    const masonryItems = useMemo(() =>
        studentPlacementsData.map((student) => ({
            id: student.id.toString(),
            img: student.image,
            url: `/placements/${student.id}`,
            height: 600 + (student.id % 3) * 200
        })), []);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Content Section */}
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


            {/* Bottom Spacing before Footer */}
            <div className="py-20" />

            <Footer />
        </div>
    );
};

export default Placements;
