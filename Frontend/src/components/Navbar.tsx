import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Phone, Mail,
  User, LogOut, Eye, EyeOff, KeyRound, ArrowLeft,
  GraduationCap, Smartphone, Trophy, Calendar, Laptop, Building2,
  LogIn, UserPlus, BookOpen, HelpCircle, MessageSquare, Check,
  Instagram, Youtube, Linkedin, Book
} from "lucide-react";
import {
  FaReact, FaAws, FaBrain, FaChartBar, FaShieldAlt,
  FaJava, FaPython, FaDatabase, FaCloud, FaCode
} from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import { toast } from "sonner";
import axios from "axios";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";

// --- Configuration & Data ---

const courses = [
  { name: "Artificial Intelligence With ML", href: "/course/ai-ml", icon: FaBrain },
  { name: "Cyber Security", href: "/course/cyber-security", icon: FaShieldAlt },
  { name: "Data Analytics", href: "/course/data-analytics", icon: FaChartBar },
  { name: "Data Science", href: "/course/data-science", icon: FaDatabase },
  { name: "DevOps", href: "/course/devops", icon: FaCloud },
  { name: "Embedded Systems", href: "/course/embedded-systems", icon: FaCode },
  { name: "Java Full Stack", href: "/course/java-full-stack", icon: FaJava },
  { name: "MERN Stack", href: "/course/mern-stack", icon: FaReact },
  { name: "Python Full Stack", href: "/course/python-full-stack", icon: FaPython },
  { name: "Quantum Computing", href: "/course/quantum-computing", icon: FaBrain },
  { name: "UI/UX Design", href: "/course/ui-ux-design", icon: SiMui },
  { name: "QA Automation", href: "/course/qa-automation", icon: FaCode },
];

const navLinks = [
  {
    name: "What We Do",
    href: "/#what-we-do",
    hasDropdown: true,
    dropdownItems: [
      { name: "Placement", href: "/placements", icon: FaChartBar, desc: "Success records" },
      { name: "Internships", href: "/internships", icon: GraduationCap, desc: "Industrial training" },
      { name: "Resources", href: "/resources", icon: FaDatabase, desc: "Learning materials" },
    ]
  },
  {
    name: "Courses",
    href: "/courses",
    hasDropdown: true,
    dropdownItems: courses.map(c => ({ ...c, desc: "Professional Program" })),
    isMegaMenu: true
  },
  {
    name: "Initiatives",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Workshops", href: "/workshop", icon: Laptop, desc: "Hands-on sessions" },
      { name: "Hackathons", href: "/hackathon", icon: FaCode, desc: "Build & Compete" },
      { name: "Events", href: "/events", icon: Calendar, desc: "Weekly activities" },
      { name: "Champions", href: "/winners", icon: Trophy, desc: "Hall of fame" },
    ]
  },
  {
    name: "About Us",
    href: "/about-us",
    hasDropdown: true,
    dropdownItems: [
      { name: "Blog", href: "/blog", icon: FaCloud, desc: "Tech insights" },
      { name: "FAQ", href: "/faq", icon: HelpCircle, desc: "Common questions" },
      { name: "Feedback", href: "/feedback", icon: MessageSquare, desc: "Share your thoughts" },
      { name: "Contact", href: "/contact", icon: Mail, desc: "Get in touch" },
    ]
  },
];

// Password Strength Indicator Component
const PasswordRequirement = ({ met, text }: { met: boolean; text: string }) => (
  <div className={`flex items-center gap-2 text-xs ${met ? 'text-green-600' : 'text-slate-500'}`}>
    {met ? (
      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
        <Check className="w-3 h-3 text-white" strokeWidth={3} />
      </div>
    ) : (
      <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex-shrink-0"></div>
    )}
    <span className="font-medium">{text}</span>
  </div>
);

export const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Auth Store
  const { user, token, setAuth, logout: storeLogout } = useAuthStore();
  const isLoggedIn = !!token;
  const { items: cartItems } = useCartStore();

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');

  // Validation States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    if (countryCode === '+91' && value.length > 10) return;
    setPhone(value);
    if (touched.phone) validateField('phone', value);
  };

  const [qualification, setQualification] = useState('B.Tech');
  const [college, setCollege] = useState('');
  const [passoutYear, setPassoutYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Password Strength Validation
  const passwordStrength = {
    hasMinLength: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasSpecialChar: /[@$!%*?&]/.test(password)
  };

  const isPasswordValid = Object.values(passwordStrength).every(Boolean);
  const isFormValid = authMode === 'register'
    ? name.trim() && email.trim() && phone.length === 10 && isPasswordValid && password === confirmPassword && passoutYear
    : email.trim() && password.trim();

  // Field Validation
  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'phone':
        if (countryCode === '+91' && value.length !== 10) {
          newErrors.phone = 'Phone number must be exactly 10 digits';
        } else {
          delete newErrors.phone;
        }
        break;
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Full name is required';
        } else if (value.trim().length < 3) {
          newErrors.name = 'Name must be at least 3 characters';
        } else {
          delete newErrors.name;
        }
        break;
      case 'confirmPassword':
        if (value !== password) {
          newErrors.confirmPassword = 'Passwords do not match';
        } else {
          delete newErrors.confirmPassword;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleBlur = (field: string, value: string) => {
    setTouched({ ...touched, [field]: true });
    validateField(field, value);
  };

  // Scroll Lock for Mobile Menu
  useEffect(() => {
    if (isMobileMenuOpen || showAuthModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, showAuthModal]);

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Generate year options (2000-2035)
  const yearOptions = Array.from({ length: 36 }, (_, i) => 2000 + i);

  // Auth Handlers
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    if (authMode === 'register') {
      setTouched({ name: true, email: true, phone: true, confirmPassword: true });

      // Validate all fields
      validateField('name', name);
      validateField('email', email);
      validateField('phone', phone);
      validateField('confirmPassword', confirmPassword);

      // Check if there are any errors
      if (Object.keys(errors).length > 0 || !isFormValid) {
        toast.error("Please fix all errors before submitting");
        return;
      }
    }

    setIsLoading(true);
    const API_URL = "http://localhost:5000/api/auth";
    const fullPhone = `${countryCode} ${phone}`;

    try {
      if (authMode === 'login') {
        const res = await axios.post(`${API_URL}/login`, { email, password });
        setAuth(res.data.user, res.data.token);
        toast.success(`Welcome back!`);
        setShowAuthModal(false);
      } else if (authMode === 'register') {
        const payload = {
          name, email, password,
          phone: fullPhone,
          qualification,
          college: qualification !== 'Others' ? college : undefined,
          passoutYear: passoutYear ? parseInt(passoutYear) : undefined
        };
        console.log("🚀 REGISTER PAYLOAD:", payload);
        const res = await axios.post(`${API_URL}/register`, payload);
        setAuth(res.data.user, res.data.token);
        toast.success("Account created!");
        setShowAuthModal(false);
      } else {
        await axios.post(`${API_URL}/forgot-password`, { email });
        toast.success("Reset link sent.");
        setAuthMode('login');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.msg || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    storeLogout();
    toast.info("Signed out");
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}
      >
        {/* Top Bar (Hidden on Scroll) */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-primary text-white text-[10px] md:text-[11px] font-medium border-b border-primary-foreground/10 relative z-50"
            >
              <div className="container mx-auto px-4 h-9 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-6">
                  <a href="tel:+918019952233" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                    <Phone className="w-3 h-3" />
                    <span>8019952233</span>
                  </a>
                  <a href="mailto:Info@aotms.com" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors">
                    <Mail className="w-3 h-3" />
                    <span>Info@aotms.com</span>
                  </a>


                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-white/10">
                    <span className="hidden lg:inline text-white/70">Follow Us:</span>
                    <div className="flex items-center gap-3">
                      <a href="https://instagram.com/academyoftechmasters" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors hover:scale-110" aria-label="Instagram">
                        <Instagram className="w-3.5 h-3.5" />
                      </a>
                      <a href="https://youtube.com/@aotms" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors hover:scale-110" aria-label="YouTube">
                        <Youtube className="w-3.5 h-3.5" />
                      </a>
                      <a href="https://twitter.com/aotms" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors hover:scale-110" aria-label="X (Twitter)">
                        <FaXTwitter className="w-3 h-3" />
                      </a>
                      <a href="https://linkedin.com/company/academyoftechmasters" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors hover:scale-110" aria-label="LinkedIn">
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {!isLoggedIn && (
                    <div className="flex items-center gap-3">
                      <button onClick={() => { setAuthMode('login'); setShowAuthModal(true); }} className="flex items-center gap-1.5 hover:text-accent uppercase tracking-wider font-bold text-[9px] md:text-[10px] transition-colors">
                        <LogIn className="w-3 h-3" />
                        Sign In
                      </button>
                      <span className="text-white/30">|</span>
                      <button onClick={() => { setAuthMode('register'); setShowAuthModal(true); }} className="flex items-center gap-1.5 hover:text-accent uppercase tracking-wider font-bold text-[9px] md:text-[10px] transition-colors">
                        <UserPlus className="w-3 h-3" />
                        Register
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navbar */}
        <nav className="bg-background/95 backdrop-blur-md border-b border-border/40 h-18 md:h-28 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-full">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="AOTMS" className="h-14 md:h-24 w-auto transition-transform hover:scale-105" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${activeDropdown === link.name ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                      }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-popover rounded-xl shadow-xl border border-border/50 p-2 overflow-hidden z-50 ${link.isMegaMenu ? 'w-[600px] -left-20 translate-x-[-20%]' : 'w-64'
                            }`}
                        >
                          {/* Triangle Tip */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1.5 w-3 h-3 bg-popover border-t border-l border-border/50 rotate-45" />

                          <div className={`grid gap-1 relative z-10 ${link.isMegaMenu ? 'grid-cols-2 p-2' : 'grid-cols-1'}`}>
                            {link.dropdownItems?.map((item: any) => {
                              const isActive = location.pathname === item.href;
                              return (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center gap-3 p-2.5 rounded-lg transition-all group/item ${isActive ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-primary/5'}`}
                                >
                                  <div className={`p-2 rounded-md transition-colors ${isActive ? 'bg-[#0066CC] text-white' : 'bg-primary/10 text-primary group-hover/item:bg-[#0066CC] group-hover/item:text-white'}`}>
                                    {item.icon && <item.icon className="w-4 h-4" />}
                                  </div>
                                  <div>
                                    <div className={`text-sm font-bold transition-colors ${isActive ? 'text-[#0066CC]' : 'text-foreground group-hover/item:text-[#0066CC]'}`}>
                                      {item.name}
                                    </div>
                                    <div className="text-[10px] text-muted-foreground font-medium line-clamp-1">
                                      {item.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Cart Icon */}
              <Link to="/cart" className="relative p-2 hover:bg-slate-100 rounded-full transition-colors group">
                <Book className="w-5 h-5 text-slate-700 group-hover:text-primary transition-colors" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              {/* User Profile */}
              {isLoggedIn ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border border-border/60 hover:border-primary/30 transition-all bg-background">
                    {user?.avatar ? (
                      <img src={user.avatar} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  </button>

                  {/* Profile Dropdown */}
                  <div className="absolute right-0 top-[calc(100%+8px)] w-56 bg-white rounded-xl shadow-xl border border-border/50 p-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    <div className="px-3 py-2 border-b border-border/50 mb-1">
                      <p className="font-bold text-sm truncate">{user?.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                    </div>
                    <Link to="/dashboard" className="flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-primary/5 rounded-lg text-foreground">
                      <User className="w-4 h-4" /> Dashboard
                    </Link>
                    <Link to="/my-courses" className="flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-primary/5 rounded-lg text-foreground">
                      <BookOpen className="w-4 h-4" /> My Courses
                    </Link>
                    <button onClick={logout} className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-red-50 text-red-600 rounded-lg">
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Button asChild className="h-10 px-6 font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all">
                    <Link to="/contact">Book Free Demo</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <Link to="/cart" className="relative p-1.5 hover:bg-secondary/50 rounded-md transition-colors">
                <Book className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              {/* Mobile User Icon */}
              {isLoggedIn ? (
                <Link to="/dashboard" className="hidden sm:block p-1.5 hover:bg-secondary/50 rounded-md transition-colors">
                  {user?.avatar ? (
                    <img src={user.avatar} alt="Profile" className="w-6 h-6 rounded-full object-cover border border-border" />
                  ) : (
                    <User className="w-6 h-6 text-foreground" />
                  )}
                </Link>
              ) : (
                <button
                  onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}
                  className="p-1.5 hover:bg-secondary/50 rounded-md transition-colors"
                  aria-label="Login"
                >
                  <User className="w-6 h-6 text-foreground" />
                </button>
              )}

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-1.5 -mr-1.5 active:bg-secondary/50 rounded-md transition-colors"
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
              </button>
            </div>

          </div>
        </nav>
      </motion.header>

      {/* --- Mobile Menu Drawer --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-background z-[1001] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <img src={logo} alt="Logo" className="h-20 w-auto" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-1.5 bg-secondary rounded-full hover:bg-secondary/80">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">

                {/* User Info (Mobile) */}
                {isLoggedIn ? (
                  <div className="mb-6 bg-secondary/30 p-3 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                      {user?.avatar ? <img src={user.avatar} className="w-full h-full rounded-full object-cover" /> : user?.name?.[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate">{user?.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                      <div className="flex gap-2 mt-2">
                        <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-md uppercase tracking-wider">Dashboard</Link>
                        <Link to="/my-courses" onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-md uppercase tracking-wider">My Courses</Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 mb-6">
                    <Button asChild className="w-full h-11 rounded-xl font-bold shadow-md">
                      <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book Free Demo</Link>
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" onClick={() => { setIsMobileMenuOpen(false); setAuthMode('login'); setShowAuthModal(true); }} className="font-bold h-10 rounded-xl">Login</Button>
                      <Button variant="secondary" onClick={() => { setIsMobileMenuOpen(false); setAuthMode('register'); setShowAuthModal(true); }} className="font-bold h-10 rounded-xl">Sign Up</Button>
                    </div>
                  </div>
                )}

                {/* Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-border/40 last:border-0">
                      {link.hasDropdown ? (
                        <div className="py-1">
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                            className="flex items-center justify-between w-full py-2.5 text-sm md:text-base font-semibold text-foreground hover:bg-secondary/20 rounded-lg px-2 -mx-2 transition-colors text-left"
                          >
                            {link.name}
                            <ChevronDown className={`w-4 h-4 transition-transform text-muted-foreground shrink-0 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-secondary/20 rounded-lg mt-1"
                              >
                                <div className="flex flex-col p-2 gap-0.5">
                                  {link.dropdownItems?.map((item: any) => (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center gap-3 p-2.5 rounded-md hover:bg-background transition-colors active:bg-background/80"
                                    >
                                      <div className="text-primary opacity-80 shrink-0">
                                        {item.icon && <item.icon className="w-4 h-4" />}
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-xs md:text-sm font-medium truncate">{item.name}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 text-sm md:text-base font-semibold text-foreground hover:text-primary px-2 -mx-2"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              {isLoggedIn && (
                <div className="p-4 border-t border-border/50">
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 text-xs font-bold h-9" onClick={logout}>
                    <LogOut className="w-4 h-4 mr-2" /> Sign Out
                  </Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Auth Modal - Enhanced UX */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8 z-[2001]"
            >
              {/* Enhanced Close Button */}
              <button
                onClick={() => setShowAuthModal(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-200"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 text-center">
                <h2 className="text-2xl font-black text-slate-900">
                  {authMode === 'login' ? 'Welcome Back' : authMode === 'register' ? 'Join Us' : 'Reset Password'}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {authMode === 'login' ? 'Please sign in to continue' : authMode === 'register' ? 'Start your learning journey' : 'Enter email to recover account'}
                </p>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {authMode === 'register' && (
                  <>
                    {/* Full Name */}
                    <div>
                      <Input
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (touched.name) validateField('name', e.target.value);
                        }}
                        onBlur={() => handleBlur('name', name)}
                        required
                        className={`h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white ${touched.name && errors.name ? 'border-red-300 focus:border-red-400' : ''}`}
                      />
                      {touched.name && errors.name && (
                        <p className="text-xs text-red-500 mt-1 ml-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone Number with Helper Text */}
                    <div>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => {
                            setCountryCode(e.target.value);
                            setPhone('');
                          }}
                          className="h-11 w-28 rounded-xl bg-slate-50 border border-slate-200 px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                        >
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+61">🇦🇺 +61</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+81">🇯🇵 +81</option>
                        </select>
                        <Input
                          type="tel"
                          inputMode="numeric"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={handlePhoneChange}
                          onBlur={() => handleBlur('phone', phone)}
                          required
                          className={`flex-1 h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white ${touched.phone && errors.phone ? 'border-red-300 focus:border-red-400' : ''}`}
                          maxLength={countryCode === '+91' ? 10 : 15}
                        />
                      </div>
                      {countryCode === '+91' && (
                        <p className="text-xs text-slate-500 mt-1 ml-1">Enter 10-digit mobile number</p>
                      )}
                      {touched.phone && errors.phone && (
                        <p className="text-xs text-red-500 mt-1 ml-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Qualification & Passing Year */}
                    <div className="grid grid-cols-2 gap-3">
                      <select
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                      >
                        <option value="B.Tech">B.Tech</option>
                        <option value="Degree">Degree</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="MCA">MCA</option>
                        <option value="Others">Others</option>
                      </select>
                      <select
                        value={passoutYear}
                        onChange={(e) => setPassoutYear(e.target.value)}
                        required
                        className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                      >
                        <option value="">Passing Year</option>
                        {yearOptions.reverse().map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>

                    {/* College Name - Optional */}
                    <div>
                      <Input
                        placeholder="College / University Name (Optional)"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        className="h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white"
                      />
                    </div>
                  </>
                )}

                {/* Email */}
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (touched.email) validateField('email', e.target.value);
                    }}
                    onBlur={() => handleBlur('email', email)}
                    required
                    className={`h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white ${touched.email && errors.email ? 'border-red-300 focus:border-red-400' : ''}`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-xs text-red-500 mt-1 ml-1">{errors.email}</p>
                  )}
                </div>

                {/* Password Section */}
                {authMode !== 'forgot' && (
                  <>
                    <div className={`grid ${authMode === 'register' ? 'md:grid-cols-2' : 'grid-cols-1'} gap-3`}>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {authMode === 'register' && (
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {
                              setConfirmPassword(e.target.value);
                              if (touched.confirmPassword) validateField('confirmPassword', e.target.value);
                            }}
                            onBlur={() => handleBlur('confirmPassword', confirmPassword)}
                            required
                            className={`h-11 rounded-xl bg-slate-50 border-transparent focus:bg-white pr-10 ${touched.confirmPassword && errors.confirmPassword ? 'border-red-300 focus:border-red-400' : ''}`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      )}
                    </div>
                    {touched.confirmPassword && errors.confirmPassword && (
                      <p className="text-xs text-red-500 mt-1 ml-1">{errors.confirmPassword}</p>
                    )}

                    {/* Password Strength Indicators */}
                    {authMode === 'register' && password && (
                      <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100/50">
                        <p className="text-xs font-semibold text-blue-700 mb-2">Password Requirements:</p>
                        <div className="grid grid-cols-2 gap-2">
                          <PasswordRequirement met={passwordStrength.hasMinLength} text="8+ Characters" />
                          <PasswordRequirement met={passwordStrength.hasNumber} text="One Number" />
                          <PasswordRequirement met={passwordStrength.hasUpperCase && passwordStrength.hasLowerCase} text="Aa Case" />
                          <PasswordRequirement met={passwordStrength.hasSpecialChar} text="Special (@$!%*?&)" />
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Forgot Password Link */}
                {authMode === 'login' && (
                  <div className="flex justify-end -mt-2">
                    <button
                      type="button"
                      onClick={() => setAuthMode('forgot')}
                      className="text-xs font-semibold text-primary/80 hover:text-primary transition-colors focus:outline-none focus:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/* Submit Button with Loading State */}
                <Button
                  type="submit"
                  disabled={isLoading || (!isFormValid)}
                  className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{authMode === 'login' ? 'Signing In...' : 'Processing...'}</span>
                    </div>
                  ) : (
                    authMode === 'login' ? 'Sign In' : authMode === 'register' ? 'Create Account' : 'Send Link'
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center pt-4 border-t border-border/50">
                <button
                  onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                  className="text-sm font-bold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1"
                >
                  {authMode === 'login' ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
