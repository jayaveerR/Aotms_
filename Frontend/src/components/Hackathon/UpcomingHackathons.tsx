import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventItem {
    id: string;
    name: string;
    mode: "Online" | "Offline";
    date: string;
    thumbnailUrl: string;
}

interface UpcomingHackathonsProps {
    onSelect?: (hackathon: any) => void;
    selectedId?: string;
}

export const UpcomingHackathons = ({ onSelect, selectedId }: UpcomingHackathonsProps) => {
    const [fetchedHackathons, setFetchedHackathons] = useState<EventItem[]>([]);

    useEffect(() => {
        const fetchHackathons = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/events?type=hackathon');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setFetchedHackathons(data);
                if (data.length > 0 && !selectedId && onSelect) {
                    onSelect(data[0]);
                }
            } catch (error) {
                console.error("Error fetching hackathons:", error);
            }
        };
        fetchHackathons();
    }, []);

    // Use fetched data directly without duplication for standard scrolling
    const displayHackathons = fetchedHackathons;

    return (
        <div className="h-[600px] bg-white relative overflow-hidden font-sans border-r border-slate-100 pr-2">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 px-4 pt-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full shrink-0" />
                <h2 className="text-sm font-bold text-blue-900 tracking-[0.1em] uppercase">
                    Browse Hackathons
                </h2>
            </div>

            <div className="relative h-[calc(100%-80px)] overflow-y-auto pr-2 pb-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                <div className="flex flex-col gap-4">
                    {displayHackathons.map((hackathon, idx) => (
                        <div key={`${hackathon.id}-${idx}`} className="w-full">
                            <div
                                onClick={() => onSelect?.(hackathon)}
                                // Remove scale/hover effects
                                className={cn(
                                    "cursor-pointer transition-all duration-200",
                                    "bg-white border text-left rounded-2xl overflow-hidden shadow-sm flex flex-col h-auto",
                                    selectedId === hackathon.id ? "border-orange-500 shadow-md ring-1 ring-orange-200" : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                                )}
                            >
                                {/* Banner Image Area - Compact (h-24) */}
                                <div className="relative h-32 shrink-0 overflow-hidden bg-slate-100">
                                    <img
                                        src={hackathon.thumbnailUrl}
                                        alt={hackathon.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <span className="bg-orange-500/90 backdrop-blur text-white px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider">
                                            {hackathon.mode}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area - Compact (p-3) */}
                                <div className="p-4 flex flex-col gap-2 bg-white">
                                    <h3 className="text-sm font-bold text-slate-800 leading-snug line-clamp-2">
                                        {hackathon.name}
                                    </h3>

                                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[9px] uppercase tracking-wider mt-auto">
                                        <Calendar className="w-2.5 h-2.5" />
                                        {hackathon.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
