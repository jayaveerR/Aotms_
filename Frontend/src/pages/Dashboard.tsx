import { motion } from "framer-motion";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuthStore } from "@/store/authStore";
import {
    BookOpen,
    Trophy,
    Calendar,
    Clock,
    ArrowRight,
    MoreVertical,
    PlayCircle,
    Download
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
    const { user } = useAuthStore();

    // Mock Data
    const stats = [
        { label: "Enrolled Courses", value: "3", icon: BookOpen, color: "blue" },
        { label: "Certificates Earned", value: "1", icon: Trophy, color: "orange" },
        { label: "Upcoming Events", value: "2", icon: Calendar, color: "blue" },
    ];

    const myCourses = [
        {
            id: 1,
            title: "Full Stack Development with React",
            progress: 65,
            totalLessons: 42,
            completedLessons: 27,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
            lastAccessed: "2 days ago"
        },
        {
            id: 2,
            title: "Advanced Cyber Security",
            progress: 30,
            totalLessons: 35,
            completedLessons: 10,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
            lastAccessed: "1 week ago"
        }
    ];

    const upcomingEvents = [
        {
            id: 1,
            title: "AI Hackathon 2024",
            date: "Aug 15, 2024",
            type: "Hackathon",
            status: "Registered"
        },
        {
            id: 2,
            title: "Cloud Computing Workshop",
            date: "Aug 20, 2024",
            type: "Workshop",
            status: "Pending"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Header />

            <main className="pt-24 md:pt-32 pb-20 container mx-auto px-4 sm:px-6">
                {/* Welcome Section */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                        Hello, <span className="text-blue-600">{user?.name?.split(' ')[0] || "Student"}!</span>
                    </h1>
                    <p className="text-slate-500 font-medium">Here's what's happening with your learning journey today.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 rounded-2xl border ${stat.color === 'blue' ? 'bg-blue-50 border-blue-100' : 'bg-orange-50 border-orange-100'} flex items-center gap-5`}
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${stat.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-500'}`}>
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <p className={`text-4xl font-black ${stat.color === 'blue' ? 'text-blue-900' : 'text-orange-900'}`}>{stat.value}</p>
                                <p className={`text-sm font-bold uppercase tracking-wider ${stat.color === 'blue' ? 'text-blue-600' : 'text-orange-600'}`}>{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* My Courses Section */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                                    <PlayCircle className="w-5 h-5 text-blue-600" /> Continue Learning
                                </h2>
                                <button className="text-blue-600 font-bold text-sm hover:underline">View All</button>
                            </div>

                            <div className="space-y-6">
                                {myCourses.map((course, idx) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:translate-y-[-2px] transition-all flex flex-col sm:flex-row gap-6"
                                    >
                                        <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden shrink-0 relative">
                                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                        </div>

                                        <div className="flex-1 py-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-bold text-slate-900 line-clamp-1 text-lg group-hover:text-blue-600 transition-colors">{course.title}</h3>
                                                    <button className="text-slate-300 hover:text-slate-600"><MoreVertical className="w-4 h-4" /></button>
                                                </div>
                                                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-4">
                                                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {course.completedLessons}/{course.totalLessons} Lessons</span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.lastAccessed}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs font-bold">
                                                    <span className="text-slate-500">Progress</span>
                                                    <span className="text-blue-600">{course.progress}%</span>
                                                </div>
                                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-orange-500 rounded-full transition-all duration-1000 ease-out"
                                                        style={{ width: `${course.progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-8">
                        {/* Profile Summary Card */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-blue-900/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 z-0" />
                            <div className="relative z-10 text-center">
                                <div className="w-24 h-24 mx-auto rounded-full p-1 bg-white border-2 border-orange-100 shadow-lg mb-4">
                                    <img src={user?.avatar} alt={user?.name} className="w-full h-full rounded-full object-cover" />
                                </div>
                                <h3 className="text-lg font-black text-slate-900">{user?.name}</h3>
                                <p className="text-sm font-medium text-slate-500 mb-4">{user?.email}</p>

                                <div className="flex justify-center flex-wrap gap-2 mb-6">
                                    {user?.qualification && <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-wider">{user?.qualification}</span>}
                                    <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Student</span>
                                </div>

                                <Button variant="outline" className="w-full font-bold border-slate-200">Edit Profile</Button>
                            </div>
                        </div>

                        {/* Upcoming Events Widget */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-blue-900/5">
                            <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-orange-500" /> Upcoming Events
                            </h3>
                            <div className="space-y-4">
                                {upcomingEvents.map((event) => (
                                    <div key={event.id} className="flex gap-4 items-start p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex flex-col items-center justify-center shrink-0 font-bold leading-none">
                                            <span className="text-sm">{event.date.split(' ')[0]}</span>
                                            <span className="text-lg">{event.date.split(' ')[1].replace(',', '')}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">{event.title}</h4>
                                            <p className="text-xs font-semibold text-slate-500 mb-2">{event.type}</p>
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wide">{event.status}</span>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="link" className="w-full text-slate-500 hover:text-blue-600 text-xs font-bold">View Calendar <ArrowRight className="w-3 h-3 ml-1" /></Button>
                            </div>
                        </div>

                        {/* Resources Widget */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-600/20">
                            <h3 className="font-black text-lg mb-2">Need Help?</h3>
                            <p className="text-blue-100 text-sm font-medium mb-6">Download resources or contact your mentor.</p>
                            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold border-none">
                                <Download className="w-4 h-4 mr-2" /> Download Resources
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;
