import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuthStore } from "@/store/authStore";
import {
    BookOpen,
    Trophy,
    Calendar,
    Clock,
    ArrowRight,
    PlayCircle,
    Download,
    TrendingUp,
    Award,
    Target,
    Zap,
    Star,
    ChevronRight,
    Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
    const { user } = useAuthStore();

    const [stats, setStats] = useState([
        { label: "Enrolled Courses", value: "0", icon: BookOpen, color: "blue", trend: "Start your journey" },
        { label: "Helper Value", value: "0", icon: Trophy, color: "orange", trend: "0 pending" }, // Temp placeholder to match structure
        { label: "Upcoming Events", value: "0", icon: Calendar, color: "blue", trend: "Check schedule" },
        { label: "Skill Level", value: "Beginner", icon: TrendingUp, color: "green", trend: "Keep learning" },
    ]);
    const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
    const [myCourses, setMyCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch Real Data
    useEffect(() => {
        const fetchDashboardData = async () => {
            if (!user?.email) return;
            try {
                const res = await fetch(`http://localhost:5000/api/registrations/${user.email}`);
                const registrations = await res.json();

                const eventsReg = registrations.filter((r: any) => r.eventType === 'hackathon' || r.eventType === 'workshop');
                const coursesReg = registrations.filter((r: any) => r.eventType === 'course');

                // Update Stats
                setStats([
                    { label: "Enrolled Courses", value: coursesReg.length.toString(), icon: BookOpen, color: "blue", trend: `${coursesReg.length} active` },
                    { label: "Certificates Earned", value: "0", icon: Trophy, color: "orange", trend: "0 pending" }, // No cert backend yet
                    { label: "Upcoming Events", value: eventsReg.length.toString(), icon: Calendar, color: "purple", trend: "Registered" },
                    { label: "Skill Level", value: coursesReg.length > 0 ? "Intermediate" : "Beginner", icon: TrendingUp, color: "green", trend: "Keep learning" },
                ]);

                // Update Events
                const formattedEvents = eventsReg.map((reg: any, idx: number) => ({
                    id: reg._id,
                    title: reg.eventName,
                    date: new Date(reg.registeredAt).toLocaleDateString(), // Using reg date as proxy or need to fetch event details
                    type: reg.eventType === 'hackathon' ? 'Hackathon' : 'Workshop',
                    status: 'Registered',
                    color: idx % 2 === 0 ? 'blue' : 'orange'
                }));
                setUpcomingEvents(formattedEvents);

                // Update Courses (or empty)
                // Since we don't have full course details in registration, we might Mock basic progress if a course is registered, 
                // OR simply show empty state if none.
                // For now, let's just map them.
                const formattedCourses = coursesReg.map((reg: any, idx: number) => ({
                    id: reg._id,
                    title: reg.eventName,
                    progress: 0, // Default to 0
                    totalLessons: 10,
                    completedLessons: 0,
                    image: `https://source.unsplash.com/random/800x600?tech,coding&sig=${idx}`,
                    lastAccessed: "Just now",
                    instructor: "AOTMS Trainer",
                    nextLesson: "Module 1"
                }));
                setMyCourses(formattedCourses);

            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [user]);

    const achievements = [
        { title: "Fast Learner", icon: Zap, color: "yellow" },
        { title: "Perfect Attendance", icon: Star, color: "blue" },
        { title: "Top Performer", icon: Trophy, color: "orange" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <Header />

            {/* Hero Section with Gradient */}
            <div className="relative pt-32 md:pt-44 pb-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    {/* Welcome Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                Student Dashboard
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
                            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">{user?.name?.split(' ')[0] || "Student"}!</span>
                        </h1>
                        <p className="text-lg text-slate-600 font-medium">Continue your learning journey and achieve your goals.</p>
                    </motion.div>

                    {/* Stats Grid - Enhanced */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${stat.color === 'blue' ? 'bg-gradient-to-br from-blue-500/5 to-blue-600/5' :
                                    stat.color === 'orange' ? 'bg-gradient-to-br from-orange-500/5 to-orange-600/5' :
                                        stat.color === 'purple' ? 'bg-gradient-to-br from-purple-500/5 to-purple-600/5' :
                                            'bg-gradient-to-br from-green-500/5 to-green-600/5'
                                    }`} />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                            stat.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                                                stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                                                    'bg-green-100 text-green-600'
                                            } group-hover:scale-110 transition-transform duration-300`}>
                                            <stat.icon className="w-6 h-6" />
                                        </div>
                                        <Activity className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
                                    <p className="text-sm font-bold text-slate-600 mb-2">{stat.label}</p>
                                    <p className="text-xs font-semibold text-slate-400">{stat.trend}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 sm:px-6 pb-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* My Courses Section - Enhanced */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <PlayCircle className="w-5 h-5 text-blue-600" />
                                    </div>
                                    Continue Learning
                                </h2>
                                <button className="text-blue-600 font-bold text-sm hover:text-blue-700 flex items-center gap-1 group">
                                    View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                {myCourses.map((course, idx) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="group bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="flex flex-col sm:flex-row">
                                            {/* Course Image */}
                                            <div className="relative w-full sm:w-64 h-48 sm:h-auto shrink-0 overflow-hidden">
                                                <img
                                                    src={course.image}
                                                    alt={course.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                                {/* Progress Badge */}
                                                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-black text-blue-600">
                                                    {course.progress}% Complete
                                                </div>
                                            </div>

                                            {/* Course Info */}
                                            <div className="flex-1 p-6">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                            {course.title}
                                                        </h3>
                                                        <p className="text-sm text-slate-500 font-semibold">by {course.instructor}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 mb-4 text-xs font-bold text-slate-500">
                                                    <span className="flex items-center gap-1.5">
                                                        <BookOpen className="w-4 h-4" />
                                                        {course.completedLessons}/{course.totalLessons} Lessons
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock className="w-4 h-4" />
                                                        {course.lastAccessed}
                                                    </span>
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="mb-4">
                                                    <div className="flex justify-between text-xs font-bold mb-2">
                                                        <span className="text-slate-600">Progress</span>
                                                        <span className="text-blue-600">{course.progress}%</span>
                                                    </div>
                                                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${course.progress}%` }}
                                                            transition={{ duration: 1, delay: 0.5 }}
                                                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full relative overflow-hidden"
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                                                        </motion.div>
                                                    </div>
                                                </div>

                                                {/* Next Lesson */}
                                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Next Lesson</p>
                                                        <p className="text-sm font-bold text-slate-700">{course.nextLesson}</p>
                                                    </div>
                                                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30">
                                                        Continue <ArrowRight className="w-4 h-4 ml-1" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Achievements Section */}
                        <section className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-lg">
                            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-orange-600" />
                                </div>
                                Your Achievements
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                {achievements.map((achievement, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + (idx * 0.1) }}
                                        className="text-center p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
                                    >
                                        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${achievement.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                                            achievement.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                                'bg-orange-100 text-orange-600'
                                            }`}>
                                            <achievement.icon className="w-8 h-8" />
                                        </div>
                                        <p className="text-xs font-bold text-slate-700">{achievement.title}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column - Enhanced */}
                    <div className="space-y-6">
                        {/* Profile Summary Card - Enhanced */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-2xl shadow-blue-900/30 overflow-hidden"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10 text-center">
                                <div className="w-24 h-24 mx-auto rounded-full p-1 bg-white/20 backdrop-blur-sm shadow-xl mb-4 ring-4 ring-white/30">
                                    <img src={user?.avatar || "https://ui-avatars.com/api/?name=" + user?.name} alt={user?.name} className="w-full h-full rounded-full object-cover" />
                                </div>
                                <h3 className="text-xl font-black mb-1">{user?.name}</h3>
                                <p className="text-sm text-blue-100 mb-4">{user?.email}</p>

                                <div className="flex justify-center flex-wrap gap-2 mb-6">
                                    {user?.qualification && (
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase tracking-wider">
                                            {user?.qualification}
                                        </span>
                                    )}
                                    <span className="px-3 py-1 bg-orange-500/90 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                                        Student
                                    </span>
                                </div>

                                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-xl shadow-lg">
                                    Edit Profile
                                </Button>
                            </div>
                        </motion.div>

                        {/* Upcoming Events Widget - Enhanced */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-lg"
                        >
                            <h3 className="font-black text-slate-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-orange-600" />
                                </div>
                                Upcoming Events
                            </h3>
                            <div className="space-y-4">
                                {upcomingEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className="group flex gap-4 items-start p-4 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer border border-transparent hover:border-slate-200"
                                    >
                                        <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0 font-bold ${event.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                                            }`}>
                                            <span className="text-xs">{event.date.split(' ')[0]}</span>
                                            <span className="text-xl">{event.date.split(' ')[1].replace(',', '')}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                                                {event.title}
                                            </h4>
                                            <p className="text-xs font-semibold text-slate-500 mb-2">{event.type}</p>
                                            <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-bold bg-green-100 text-green-700 uppercase tracking-wide">
                                                {event.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="link" className="w-full text-slate-600 hover:text-blue-600 font-bold group">
                                    View All Events
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Quick Actions Widget */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white shadow-xl shadow-orange-600/30"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Target className="w-5 h-5" />
                                </div>
                                <h3 className="font-black text-lg">Quick Actions</h3>
                            </div>
                            <p className="text-orange-100 text-sm mb-6">Access your learning resources instantly</p>
                            <div className="space-y-3">
                                <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-xl shadow-lg justify-start">
                                    <Download className="w-4 h-4 mr-2" /> Download Resources
                                </Button>
                                <Button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold rounded-xl border border-white/30">
                                    <BookOpen className="w-4 h-4 mr-2" /> View Syllabus
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;
