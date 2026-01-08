import { useState, useEffect } from "react";
import { Header } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Trophy, Medal, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Winner {
    rank: number;
    teamName: string;
    collegeName: string;
    members: string[];
    prize: string;
    imageUrl: string;
}

interface HackathonWinnerData {
    eventId: string;
    eventName: string;
    winners: Winner[];
}

const HackathonWinnersPage = () => {
    const [winnerData, setWinnerData] = useState<HackathonWinnerData[]>([]);

    useEffect(() => {
        const fetchWinners = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/winners");
                const data = await response.json();
                setWinnerData(data);
            } catch (error) {
                console.error("Failed to fetch winners:", error);
            }
        };
        fetchWinners();
    }, []);

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1: return <Trophy className="w-8 h-8 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />;
            case 2: return <Medal className="w-8 h-8 text-slate-400 fill-slate-400 drop-shadow-[0_0_8px_rgba(148,163,184,0.5)]" />;
            case 3: return <Award className="w-8 h-8 text-amber-700 fill-amber-700 drop-shadow-[0_0_8px_rgba(180,83,9,0.5)]" />;
            default: return <Trophy className="w-6 h-6 text-slate-600" />;
        }
    };

    const getRankColor = (rank: number) => {
        switch (rank) {
            case 1: return "bg-gradient-to-b from-yellow-50 to-white border-yellow-200 shadow-yellow-100/50";
            case 2: return "bg-gradient-to-b from-slate-50 to-white border-slate-200 shadow-slate-100/50";
            case 3: return "bg-gradient-to-b from-orange-50/50 to-white border-orange-100 shadow-orange-100/50";
            default: return "bg-white border-slate-100";
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main className="pt-40 pb-20 container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 relative"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        Hackathon <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Winners</span>
                            <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-yellow-400 animate-bounce" />
                        </span>
                    </h1>
                    <p className="text-sm font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Celebrating the brilliant minds and innovative solutions from our past hackathons.
                    </p>
                </motion.div>

                {winnerData.map((event) => (
                    <motion.div
                        key={event.eventId}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={container}
                        className="mb-24"
                    >
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                            <h2 className="text-3xl font-black text-slate-800 tracking-tight">{event.eventName}</h2>
                            <span className="px-4 py-1.5 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-200">
                                Winners
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                            {event.winners
                                .sort((a, b) => a.rank - b.rank)
                                .map((winner) => (
                                    <motion.div
                                        key={winner.rank}
                                        variants={item}
                                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                        className={`relative rounded-[2rem] p-1 border-2 transition-all duration-300 hover:shadow-2xl ${getRankColor(winner.rank)}`}
                                    >
                                        <div className="bg-white/50 backdrop-blur-sm rounded-[1.8rem] p-4 h-full">
                                            {/* Rank Badge */}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-white rounded-full blur shadow-md opacity-50"></div>
                                                    <div className="bg-white p-4 rounded-full shadow-xl border border-slate-100 relative z-10 flex items-center justify-center w-20 h-20">
                                                        {getRankIcon(winner.rank)}
                                                    </div>
                                                    {winner.rank === 1 && (
                                                        <div className="absolute -inset-1 bg-yellow-400/30 rounded-full blur-xl animate-pulse -z-10"></div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="mt-8 text-center flex flex-col h-full">
                                                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-inner ring-1 ring-black/5 bg-slate-100 group">
                                                    <img
                                                        src={winner.imageUrl}
                                                        alt={winner.teamName}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>

                                                <div className="flex-grow">
                                                    <h3 className="text-2xl font-black text-slate-800 mb-2">{winner.teamName}</h3>
                                                    <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">{winner.collegeName}</p>

                                                    <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                                                        {winner.members.map((member, i) => (
                                                            <span key={i} className="bg-white px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-600 border border-slate-100 shadow-sm">
                                                                {member}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="pt-4 border-t border-slate-200/50 mt-auto">
                                                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mb-1">Prize Won</p>
                                                    <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">{winner.prize}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                        </div>
                    </motion.div>
                ))}

                {winnerData.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-32 text-slate-400"
                    >
                        <p className="text-xl font-bold">No winners announced yet.</p>
                    </motion.div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default HackathonWinnersPage;
