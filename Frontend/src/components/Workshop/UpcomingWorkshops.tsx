import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

// Define interface locally or import from types if preserving `events.ts` for types
interface EventItem {
    id: string;
    name: string;
    mode: "Online" | "Offline";
    date: string;
    thumbnailUrl: string;
}

interface UpcomingWorkshopsProps {
    onSelect?: (workshop: any) => void;
    selectedId?: string;
}

export const UpcomingWorkshops = ({ onSelect, selectedId }: UpcomingWorkshopsProps) => {
    const [fetchedWorkshops, setFetchedWorkshops] = useState<EventItem[]>([]);

    useEffect(() => {
        const fetchWorkshops = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/events?type=workshop');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setFetchedWorkshops(data);
                // Select first one by default if needed, or let parent handle logic
                if (data.length > 0 && !selectedId && onSelect) {
                    onSelect(data[0]);
                }
            } catch (error) {
                console.error("Error fetching workshops:", error);
            }
        };
        fetchWorkshops();
    }, []);

    // Use fetched data directly without duplication for standard scrolling
    const displayWorkshops = fetchedWorkshops;

    return (
        <div className="h-[600px] bg-white relative overflow-hidden font-sans border-r border-slate-100 pr-2">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 px-4 pt-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full shrink-0" />
                <h2 className="text-sm font-bold text-blue-900 tracking-[0.1em] uppercase">
                    Browse Workshops
                </h2>
            </div>

            <div className="relative h-[calc(100%-60px)] overflow-y-auto pr-2 pb-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                <div className="flex flex-col gap-4">
                    {displayWorkshops.map((workshop, idx) => (
                        <div key={`${workshop.id}-${idx}`} className="w-full">
                            <div
                                onClick={() => onSelect?.(workshop)}
                                className={cn(
                                    "cursor-pointer transition-all duration-200",
                                    "bg-white border text-left rounded-2xl overflow-hidden shadow-sm flex flex-col h-auto", // h-auto for natural height
                                    selectedId === workshop.id || (!selectedId && idx === 0 && false) ? "border-orange-500 shadow-md ring-1 ring-orange-200" : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                                )}
                            >
                                {/* Banner Image Area */}
                                <div className="relative h-32 shrink-0 overflow-hidden bg-slate-100">
                                    <img
                                        src={workshop.thumbnailUrl}
                                        alt={workshop.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <span className="bg-blue-900/90 backdrop-blur text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {workshop.mode}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-4 flex flex-col gap-2 bg-white">
                                    <h3 className="text-base font-bold text-slate-800 leading-snug line-clamp-2">
                                        {workshop.name}
                                    </h3>

                                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                                        <Calendar className="w-3 h-3" />
                                        {workshop.date}
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
