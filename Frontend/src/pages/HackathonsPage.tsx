import { useState } from "react";
import { Header } from "../components/Navbar";
import { Footer } from "../components/Footer";
// import { hackathons } from "../data/events"; // DATA-REMOVED: Now fetching from backend, not needed

import { UpcomingHackathons } from "@/components/Hackathon/UpcomingHackathons";
import { Calendar, Clock, Trophy, Target } from "lucide-react";

// Define locally to match backend shape
interface EventItem {
    id: string;
    name: string;
    description: string;
    thumbnailUrl: string;
    mode: "Online" | "Offline";
    date: string;
    duration: string;
    registrationLink?: string;
    buttonText?: string;
}

const HackathonsPage = () => {
    const [selectedHackathon, setSelectedHackathon] = useState<EventItem | null>(null);

    const handleRegister = async () => {
        if (!selectedHackathon) return;

        // Log registration/click attempt in Hackathon Document
        try {
            await fetch(`http://localhost:5000/api/events/hackathons/${selectedHackathon.id}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: "Unknown (Button Click)",
                    email: "click_tracking@example.com"
                }),
            });
        } catch (error) {
            console.error("Failed to log registration click:", error);
        }

        if (selectedHackathon.registrationLink) {
            window.open(selectedHackathon.registrationLink, '_blank');
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main className="pt-32 md:pt-40 pb-20 container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
                    {/* Left Column: Vertical Auto-Scroll (Compact) */}
                    <div className="lg:col-span-3 h-full">
                        <UpcomingHackathons
                            onSelect={setSelectedHackathon}
                            selectedId={selectedHackathon?.id}
                        />
                    </div>

                    {/* Right Column: Detail View */}
                    <div className="lg:col-span-9 h-full overflow-y-auto pl-4">
                        {selectedHackathon ? (
                            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 h-full flex flex-col animate-in fade-in zoom-in duration-300">
                                <div className="flex flex-col md:flex-row gap-8 mb-8">
                                    <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-lg shrink-0 relative">
                                        <img
                                            src={selectedHackathon.thumbnailUrl}
                                            alt={selectedHackathon.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-xl shadow-sm">
                                            <Trophy className="w-6 h-6 text-yellow-500 fill-yellow-500 animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                {selectedHackathon.mode}
                                            </span>
                                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                                                Event ID: {selectedHackathon.id}
                                            </span>
                                        </div>
                                        <h1 className="text-3xl font-black text-slate-800 mb-4 leading-tight">
                                            {selectedHackathon.name}
                                        </h1>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {selectedHackathon.description}
                                        </p>

                                        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500 mb-8">
                                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                                                <Calendar className="w-4 h-4 text-orange-500" />
                                                {selectedHackathon.date}
                                            </div>
                                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                                                <Clock className="w-4 h-4 text-orange-500" />
                                                {selectedHackathon.duration}
                                            </div>
                                        </div>

                                        {selectedHackathon.buttonText && (
                                            <button
                                                onClick={handleRegister}
                                                className="bg-black hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-slate-500/20 active:scale-95 duration-200 w-full md:w-auto"
                                            >
                                                {selectedHackathon.buttonText}
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 border border-slate-100 flex-grow">
                                    <h3 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wider flex items-center gap-2">
                                        <Target className="w-5 h-5 text-blue-600" />
                                        Challenge Overview
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Participants will tackle real-world problems using cutting-edge technologies.
                                        Teams will have {selectedHackathon.duration} to prototype, build, and pitch their solutions to a panel of expert judges.
                                        Top performers will receive mentorship and potential internship opportunities.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex items-center justify-center text-slate-400 font-medium">
                                Select a hackathon to view details
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default HackathonsPage;


