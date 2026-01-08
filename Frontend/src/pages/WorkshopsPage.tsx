import { useState, useEffect } from "react";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// import { workshops } from "@/data/events"; // DATA-REMOVED: Now fetching from backend, not needed
import { RegistrationModal } from "@/components/ui/RegistrationModal";
import { UpcomingWorkshops } from "@/components/Workshop/UpcomingWorkshops";
import { Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react";

// Define locally to match backend shape
interface EventItem {
    id: string;
    name: string;
    description: string;
    thumbnailUrl: string;
    mode: "Online" | "Offline";
    date: string;
    duration: string;
    whatYouWillLearn: string[];
}

const WorkshopsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWorkshop, setSelectedWorkshop] = useState<EventItem | null>(null);

    const handleRegister = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main className="pt-32 md:pt-40 pb-20 container mx-auto px-6 max-w-7xl">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
                    {/* Left Column: Vertical Auto-Scroll (Compact) */}
                    <div className="lg:col-span-3 h-full">
                        <UpcomingWorkshops
                            onSelect={setSelectedWorkshop}
                            selectedId={selectedWorkshop?.id}
                        />
                    </div>

                    {/* Right Column: Detail View */}
                    <div className="lg:col-span-9 h-full overflow-y-auto pl-4">
                        {selectedWorkshop ? (
                            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 h-full flex flex-col animate-in fade-in zoom-in duration-300">
                                <div className="flex flex-col md:flex-row gap-8 mb-8">
                                    <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-lg shrink-0">
                                        <img
                                            src={selectedWorkshop.thumbnailUrl}
                                            alt={selectedWorkshop.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                {selectedWorkshop.mode}
                                            </span>
                                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                                                Workshop ID: {selectedWorkshop.id}
                                            </span>
                                        </div>
                                        <h1 className="text-3xl font-black text-slate-800 mb-4 leading-tight">
                                            {selectedWorkshop.name}
                                        </h1>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {selectedWorkshop.description}
                                        </p>

                                        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500 mb-8">
                                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                                                <Calendar className="w-4 h-4 text-orange-500" />
                                                {selectedWorkshop.date}
                                            </div>
                                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                                                <Clock className="w-4 h-4 text-orange-500" />
                                                {selectedWorkshop.duration}
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleRegister}
                                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95 duration-200"
                                        >
                                            Register for Workshop
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 border border-slate-100 flex-grow">
                                    <h3 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wider flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        What You'll Learn
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {selectedWorkshop.whatYouWillLearn?.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                                <span className="text-slate-600 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex items-center justify-center text-slate-400 font-medium">
                                Select a workshop to view details
                            </div>
                        )}
                    </div>
                </div>

            </main>
            <Footer />
            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                itemName={selectedWorkshop?.name || ""}
            />
        </div>
    );
};
export default WorkshopsPage;
