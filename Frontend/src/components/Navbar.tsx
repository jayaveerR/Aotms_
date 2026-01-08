import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Phone, Mail, Clock,
  ShoppingCart, User, LogOut, Eye, EyeOff, KeyRound, ArrowLeft,
  GraduationCap, Smartphone
} from "lucide-react";
import {
  FaReact, FaAws, FaBrain, FaChartBar, FaShieldAlt,
  FaJava, FaPython, FaDatabase, FaCloud, FaCode
} from "react-icons/fa";
import { SiMui, SiCplusplus, SiSpringboot } from "react-icons/si";

import { toast } from "sonner";
import axios from "axios";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { hackathons } from "@/data/events";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";

const courses = [
  { name: "Artificial Intelligence & ML", href: "/course/ai-ml", icon: FaBrain },
  { name: "Cyber Security", href: "/course/cyber-security", icon: FaShieldAlt },
  { name: "Data Analytics", href: "/course/data-analytics", icon: FaChartBar },
  { name: "Data Science", href: "/course/data-science", icon: FaDatabase },
  { name: "DevOps", href: "/course/devops", icon: FaCloud },
  { name: "Multi Cloud Engineering", href: "/course/multi-cloud-engineering", icon: FaAws },
  { name: "Embedded Systems", href: "/course/embedded-systems", icon: FaCode },
  { name: "Java Full Stack", href: "/course/java-full-stack", icon: FaJava },
  { name: "MERN Stack", href: "/course/mern-stack", icon: FaReact },
  { name: "Python Full Stack", href: "/course/python-full-stack", icon: FaPython },
  { name: "Multi Cloud Consultant", href: "/course/multi-cloud-consultant", icon: FaCloud },
  { name: "Quantum Computing", href: "/course/quantom-computing", icon: FaBrain },
  { name: "UI/UX Design", href: "/course/ui-ux-design", icon: SiMui },
  { name: "QA Automation", href: "/course/qa-automation", icon: FaCode },
];

const whatWeDoDropdownItems = [
  { name: "Placement", href: "/placements", icon: FaChartBar, desc: "Our student success records" },
  { name: "Internships", href: "/internships", icon: GraduationCap, desc: "Industrial training programs" },
  { name: "Resources", href: "/resources", icon: FaDatabase, desc: "Learning materials & guides" },
];

const coursesDropdownItems = courses.map(course => ({
  ...course,
  desc: "Professional Program"
}));

const activityDropdownItems = [
  { name: "Workshops", href: "/workshop", icon: Clock, desc: "Practical hands-on sessions" },
  { name: "Hackathons", href: "/hackathon", icon: FaBrain, desc: "Collaborate and build" },
];

const aboutUsDropdownItems = [
  { name: "Blog Section", href: "/blog", icon: FaCloud, desc: "Latest tech trends" },
  { name: "Contact", href: "/contact", icon: Mail, desc: "Get in touch with us" },
];

const navLinks = [
  {
    name: "What We Do",
    href: "/#what-we-do",
    hasDropdown: true,
    dropdownItems: whatWeDoDropdownItems
  },
  {
    name: "Courses",
    href: "/#courses",
    hasDropdown: true,
    dropdownItems: coursesDropdownItems
  },
  {
    name: "Activity",
    href: "#",
    hasDropdown: true,
    dropdownItems: activityDropdownItems
  },
  {
    name: "About Us",
    href: "/about-us",
    hasDropdown: true,
    dropdownItems: aboutUsDropdownItems
  },
  { name: "Weekly", href: "/events" },
  { name: "Workshops", href: "/workshop" },
  { name: "Hackathons", href: "/hackathon" },
  { name: "Hackathon Winners", href: "/winners" },
];

const socialLinks = [
  // Links removed or moved to footer usually, but keeping checking if mostly removed from Navbar
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Auth Store
  const { user, token, setAuth, logout: storeLogout } = useAuthStore();
  const isLoggedIn = !!token;

  // Cart Store
  const cartItems = useCartStore((state) => state.items);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('B.Tech');
  const [isLoading, setIsLoading] = useState(false);

  // Effect to handle body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen || showAuthModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, showAuthModal]);

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const API_URL = "http://localhost:5000/api/auth"; // Move to env in production

    try {
      if (authMode === 'login') {
        const res = await axios.post(`${API_URL}/login`, { email, password });
        setAuth(res.data.user, res.data.token);
        toast.success(`Welcome back, ${res.data.user.name.split(' ')[0]}!`);
        setShowAuthModal(false);
      } else if (authMode === 'register') {
        const res = await axios.post(`${API_URL}/register`, {
          name,
          email,
          password,
          phone,
          qualification
        });
        setAuth(res.data.user, res.data.token);
        toast.success("Account created successfully!");
        setShowAuthModal(false);
      } else {
        await axios.post(`${API_URL}/forgot-password`, { email });
        toast.success("If this email exists, a reset link has been sent.");
        setAuthMode('login');
      }
    } catch (error: unknown) {
      console.error(error);
      let msg = "Something went wrong";
      if (axios.isAxiosError(error)) {
        msg = error.response?.data?.msg || msg;
      }
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    storeLogout();
    toast.info("Signed out successfully");
    setIsProfileOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 "
      >
        {/* Mini Navbar (Top Bar) - Hidden on Scroll */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-blue-600 text-white text-[10px] md:text-sm overflow-hidden border-b border-blue-500 font-semibold"
            >
              <div className="container mx-auto px-4 sm:px-6 flex flex-row items-center justify-between">
                {/* Left Side: Contact Information */}
                <div className="flex flex-wrap items-center gap-3 md:gap-8 py-3">
                  <a href="tel:+918019942233" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>+91 80199 42233</span>
                  </a>
                  <span className="w-px h-3 bg-white/20 hidden md:block" />
                  <a href="mailto:Info@aotms.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>Info@aotms.com</span>
                  </a>
                </div>

                {/* Right Side: Auth Options (White Text, No Background) */}
                <div className="flex items-center h-full self-stretch">
                  {!isLoggedIn && (
                    <div className="flex items-center gap-6 h-full">
                      <button
                        onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}
                        className="text-white text-[10px] md:text-xs font-bold hover:text-white/80 transition-all uppercase tracking-widest min-h-[44px]"
                      >
                        sign in
                      </button>
                      <button
                        onClick={() => { setAuthMode('register'); setShowAuthModal(true); }}
                        className="text-white text-[10px] md:text-xs font-bold hover:text-white/80 transition-all uppercase tracking-widest min-h-[44px]"
                      >
                        register
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navbar */}
        <nav className="bg-background/95 backdrop-blur-md border-b border-border/50 py-3">
          <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="Academy of Tech Masters" className="transition-all duration-300 h-16 md:h-22" />

            </Link>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className="nav-link flex items-center gap-1 font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
                  </Link>
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`absolute top-full mt-4 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50 overflow-hidden ${link.name === 'Courses' ? 'w-[640px] -left-[200px]' : 'w-[280px] -left-10 md:-left-20'}`}
                        >
                          {link.name === 'Courses' && (
                            <div className="px-4 py-2 mb-2 border-b border-slate-50">
                              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">Training Program Courses</h3>
                            </div>
                          )}
                          <div className={`grid gap-2 relative z-10 w-full ${link.name === 'Courses' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                            {link.dropdownItems?.map((item: { name: string; href: string; icon?: React.ComponentType<{ className?: string }>; desc?: string }) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group/item flex items-center px-4 py-3 rounded-xl hover:bg-blue-50/50 transition-all duration-300 border border-transparent hover:border-blue-100"
                              >
                                {item.icon ? (
                                  <div className="mr-4 p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                                    <item.icon className="w-5 h-5" />
                                  </div>
                                ) : (
                                  <div className="mr-3 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all duration-300" />
                                )}
                                <div className="flex flex-col">
                                  <span className="text-sm font-bold text-slate-700 group-hover/item:text-blue-900 transition-colors">
                                    {item.name}
                                  </span>
                                  {item.desc && (
                                    <span className="text-[10px] text-slate-400 group-hover/item:text-blue-500 font-medium">{item.desc}</span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              {/* Mobile Profile Icon */}
              <div className="lg:hidden relative">
                <button
                  onClick={() => isLoggedIn ? setIsProfileOpen(!isProfileOpen) : setShowAuthModal(true)}
                  className="p-2 hover:text-blue-600 transition-colors"
                  aria-label="Profile"
                >
                  {isLoggedIn && user?.avatar ? (
                    <img src={user.avatar} alt="Profile" className="w-6 h-6 rounded-full" />
                  ) : (
                    <User className="w-6 h-6" />
                  )}
                </button>

                {/* Mobile Profile Card Dropdown */}
                <AnimatePresence>
                  {isLoggedIn && isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute right-0 mt-2 w-[280px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 z-[100]"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden">
                          {user?.avatar ? <img src={user.avatar} className="w-full h-full object-cover" /> : <User className="w-6 h-6" />}
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-sm font-black text-slate-900 truncate">{user?.name}</p>
                          <p className="text-xs text-slate-500 font-medium truncate">{user?.email}</p>
                          {user?.phone && <p className="text-xs text-slate-500 font-medium truncate">{user?.phone}</p>}
                          {user?.qualification && <p className="text-xs text-slate-500 font-medium truncate">{user?.qualification}</p>}
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Link
                          to="/dashboard"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsProfileOpen(false);
                          }}
                          className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl font-bold text-xs transition-colors flex items-center justify-center"
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={logout}
                          className="w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2"
                        >
                          <LogOut className="w-4 h-4" /> Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/cart" className="p-2 relative hover:text-primary transition-colors duration-200">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              </Link>

              {/* Desktop Auth & Profile */}
              <div className="hidden lg:flex items-center gap-4">
                {isLoggedIn ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200 group"
                    >
                      <div className="text-right hidden xl:block">
                        <p className="text-sm font-bold text-slate-900 leading-none">{user?.name?.split(' ')[0]}</p>
                        <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Student</p>
                      </div>
                      {user?.avatar ? (
                        <img src={user.avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-slate-100 group-hover:border-blue-200 transition-colors" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                          <User className="w-5 h-5" />
                        </div>
                      )}
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isProfileOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100/60 py-4 z-50 overflow-hidden"
                        >
                          <div className="px-6 pb-4 border-b border-slate-50">
                            <p className="text-lg font-black text-slate-900 truncate">{user?.name}</p>
                            <p className="text-xs font-medium text-slate-500 truncate mb-2">{user?.email}</p>
                            <div className="flex flex-wrap gap-2">
                              {user?.phone && <span className="px-2 py-1 bg-slate-50 rounded-md text-[10px] font-bold text-slate-600">{user.phone}</span>}
                              {user?.qualification && <span className="px-2 py-1 bg-blue-50 rounded-md text-[10px] font-bold text-blue-600">{user.qualification}</span>}
                            </div>
                          </div>

                          <div className="p-2 space-y-1">
                            <Link
                              to="/dashboard"
                              onClick={() => setIsProfileOpen(false)}
                              className="w-full text-left px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-2xl transition-all flex items-center gap-3"
                            >
                              <User className="w-4 h-4" /> My Dashboard
                            </Link>
                            <button
                              onClick={logout}
                              className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-2xl transition-all flex items-center gap-3"
                            >
                              <LogOut className="w-4 h-4" /> Sign Out
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}
                      className="font-bold text-slate-600 hover:text-blue-600 transition-colors bg-slate-50 px-6 py-2 rounded-full border border-slate-200"
                    >
                      Login
                    </button>
                  </>
                )}
              </div>
              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 -mr-2 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Auth Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-[440px] bg-white rounded-[32px] shadow-2xl overflow-hidden p-8 md:p-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowAuthModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 transition-colors text-slate-400"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  {authMode === 'login' && (
                    <motion.div
                      key="login-header"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                    >
                      <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome Back</h2>
                      <p className="text-slate-500 font-medium">Please enter your details to sign in.</p>
                    </motion.div>
                  )}
                  {authMode === 'register' && (
                    <motion.div
                      key="register-header"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                    >
                      <h2 className="text-3xl font-black text-slate-900 mb-2">Join TechVarsity</h2>
                      <p className="text-slate-500 font-medium">Create an account to start your journey.</p>
                    </motion.div>
                  )}
                  {authMode === 'forgot' && (
                    <motion.div
                      key="forgot-header"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                    >
                      <button
                        onClick={() => setAuthMode('login')}
                        className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 hover:gap-3 transition-all"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
                      </button>
                      <h2 className="text-3xl font-black text-slate-900 mb-2">Reset Password</h2>
                      <p className="text-slate-500 font-medium">Enter your email to receive recovery link.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {authMode === 'register' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          required
                          className="pl-11 bg-slate-50 border-none h-12 rounded-xl"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                      <div className="relative">
                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          required
                          type="tel"
                          className="pl-11 bg-slate-50 border-none h-12 rounded-xl"
                          placeholder="+91 99999 99999"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Qualification</label>
                      <div className="relative">
                        <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <select
                          className="w-full pl-11 h-12 rounded-xl bg-slate-50 border-none px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={qualification}
                          onChange={(e) => setQualification(e.target.value)}
                          title="Select Qualification"
                          aria-label="Qualification"
                        >
                          <option value="B.Tech">B.Tech</option>
                          <option value="Degree">Degree</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      required
                      type="email"
                      className="pl-11 bg-slate-50 border-none h-12 rounded-xl"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {authMode !== 'forgot' && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Password</label>
                      {authMode === 'login' && (
                        <button
                          type="button"
                          onClick={() => setAuthMode('forgot')}
                          className="text-xs font-bold text-blue-600 hover:text-blue-700"
                        >
                          Forgot Password?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        required
                        type={showPassword ? "text" : "password"}
                        className="pl-11 pr-11 bg-slate-50 border-none h-12 rounded-xl"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}

                <Button disabled={isLoading} className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] mt-4">
                  {isLoading ? 'Processing...' : authMode === 'login' ? 'Sign In' : authMode === 'register' ? 'Create Account' : 'Send Reset Link'}
                </Button>
              </form>

              <div className="mt-8 text-center border-t border-slate-50 pt-8">
                <p className="text-slate-500 text-sm font-medium">
                  {authMode === 'login' ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                    className="ml-2 text-blue-600 font-bold hover:underline"
                  >
                    {authMode === 'login' ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-background z-[101] shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src={logo} alt="Academy of Tech Masters" className="h-10" />
                  </Link>
                  <button
                    className="p-2 -mr-2 hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </div>

                {/* Drawer Content */}
                <div className="flex-grow p-6 overflow-y-auto">
                  {isLoggedIn && user && (
                    <div className="mb-8 p-4 bg-slate-50 rounded-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden">
                          {user?.avatar ? <img src={user.avatar} className="w-full h-full object-cover" /> : <User className="w-6 h-6" />}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900">{user.name}</p>
                          <p className="text-xs text-slate-500 font-medium">{user.email}</p>
                        </div>
                      </div>
                      <button
                        onClick={logout}
                        className="w-full py-3 bg-white border border-red-100 text-red-500 font-bold text-xs rounded-xl flex items-center justify-center gap-2"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <div key={link.name} className="border-b border-border/50">
                        {!link.hasDropdown ? (
                          <Link
                            to={link.href}
                            className="block text-foreground/80 hover:text-primary py-3 font-medium transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <div>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                              className="flex items-center justify-between w-full text-foreground/80 hover:text-primary py-3 font-medium transition-colors"
                            >
                              <span>{link.name}</span>
                              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === link.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden bg-secondary/30 rounded-lg my-2"
                                >
                                  <div className="py-2">
                                    {link.name === 'Courses' && (
                                      <div className="px-4 py-2 mb-1 border-b border-white/10">
                                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Training Program Courses</p>
                                      </div>
                                    )}
                                    {link.dropdownItems?.map((item) => (
                                      <Link
                                        key={item.name}
                                        to={item.href}
                                        className="block py-2.5 px-4 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    ))}

                    {!isLoggedIn && (
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <button
                          onClick={() => { setShowAuthModal(true); setAuthMode('login'); setIsMobileMenuOpen(false); }}
                          className="py-3 px-4 border border-slate-200 text-slate-600 font-bold text-sm rounded-xl"
                        >
                          Login
                        </button>
                        <button
                          onClick={() => { setShowAuthModal(true); setAuthMode('register'); setIsMobileMenuOpen(false); }}
                          className="py-3 px-4 bg-blue-600 text-white font-bold text-sm rounded-xl"
                        >
                          Register
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-6 border-t border-border">
                  <div className="flex items-center justify-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
