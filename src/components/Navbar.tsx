import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Phone, Mail, Clock,
  Instagram, Linkedin, Youtube, ShoppingCart,
  User, LogOut, Eye, EyeOff, KeyRound, ArrowLeft
} from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { hackathons } from "@/data/events";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const courses = [
  { name: "Quantum Computing", href: "/course/quantom-computing" },
  { name: "DevOps (AWS/Azure)", href: "/course/devops-aws-azure" },
  { name: "Embedded Systems", href: "/course/embedded-systems" },
  { name: "Data Science", href: "/course/data-science" },
  { name: "Cloud Computing", href: "/course/cloud-computing" },
  { name: "Data Analytics", href: "/course/data-analytics" },
  { name: "Cyber Security", href: "/course/cyber-security" },
  { name: "QA Automation", href: "/course/qa-automation" },
  { name: "AI", href: "/course/ai" },
  { name: "JavaFull Stack", href: "/course/java-full-stack" },
  { name: "Python Full Stack", href: "/course/python-full-stack" },
  { name: "Machine Learning", href: "/course/machine-learning" },
];

const navLinks = [
  {
    name: "What We Do", href: "/what-we-do", hasDropdown: true, dropdownItems: [
      { name: "Placements", href: "/placements" },
      { name: "Interns", href: "/what-we-do#interns" },
      { name: "Resources", href: "/what-we-do#resources" }
    ]
  },
  { name: "Workshop", href: "/workshop" },
  { name: "Hackathon", href: "/hackathon", hashDropdown: true, dropdownItems: hackathons },
  { name: "Courses", href: "/courses", hasDropdown: true, dropdownItems: courses },
  {
    name: "About Us", href: "/about-us", hasDropdown: true, dropdownItems: [
      { name: "Blog", href: "/blog" }
    ]
  },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com/@aotms?si=mj3-j_JH4lHC3zeF", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/academyoftechmasters?igsh=enZ5YjYwOXg1cW80&utm_source=qr", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Auth States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === 'login' || authMode === 'register') {
      // Simulate Login/Register
      setIsLoggedIn(true);
      setUser({
        name: name || "Developer Guest",
        email: email || "dev@aotm.com"
      });
      setShowAuthModal(false);
    } else {
      // Simulate Reset
      alert("Reset link sent to your email!");
      setAuthMode('login');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setIsProfileOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 "
      >
        {/* Top Bar */}
        <div className="bg-primary text-primary-foreground text-xs py-2 hidden md:block overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="tel:+918019942233" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Phone className="w-3.5 h-3.5" /><span>+91 80199 42233 / 52233</span></a>
              <span className="w-px h-3 bg-primary-foreground/30" />
              <a href="mailto:Info@aotms.com" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Mail className="w-3.5 h-3.5" /><span>Info@aotms.com</span></a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>Mon - Sat: 8:00 - 18:00</span></div>
              <span className="w-px h-3 bg-primary-foreground/30" />
              <div className="flex items-center gap-1.5 min-w-[120px] justify-end">
                {isLoggedIn && user ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center gap-2 hover:text-accent transition-colors font-medium group"
                    >
                      <User className="w-3.5 h-3.5" />
                      <span>{user.name.split(' ')[0]}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isProfileOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50"
                        >
                          <div className="px-4 py-2 border-b border-slate-50 mb-1">
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Signed in as</p>
                            <p className="text-xs font-bold text-slate-900 truncate">{user.email}</p>
                          </div>
                          <button className="w-full text-left px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
                            Dashboard
                          </button>
                          <button
                            onClick={logout}
                            className="w-full text-left px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2"
                          >
                            <LogOut className="w-3.5 h-3.5" />
                            Sign Out
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}
                      className="hover:text-accent transition-colors font-medium"
                    >
                      Login
                    </button>
                    <span className="text-primary-foreground/50">/</span>
                    <button
                      onClick={() => { setAuthMode('register'); setShowAuthModal(true); }}
                      className="hover:text-accent transition-colors font-medium"
                    >
                      Register
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-background/95 backdrop-blur-md border-b border-border/50 py-3">
          <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <img src={logo} alt="TechVarsity" className="transition-all duration-300 h-11" />
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
                          className={`absolute top-full mt-4 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50 overflow-hidden ${link.name === "Courses" ? "w-[600px] -left-1/2" : "w-[200px]"}`}
                        >
                          <div className={`grid gap-1 relative z-10 ${link.name === "Courses" ? "grid-cols-2" : "grid-cols-1"}`}>
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group/item flex items-center px-4 py-3 rounded-xl hover:bg-blue-50/50 transition-all duration-300"
                              >
                                <div className="mr-3 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all duration-300" />
                                <span className="text-sm font-medium text-slate-600 group-hover/item:text-blue-900 transition-colors">
                                  {item.name}
                                </span>
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
              <Link to="/cart" className="p-2 relative hover:text-primary transition-colors duration-200">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
              </Link>
              <button className="btn-primary hidden sm:flex">Enroll Now</button>
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
              className="relative w-full max-w-[440px] bg-white rounded-[32px] shadow-2xl overflow-hidden p-8 md:p-10"
            >
              <button
                onClick={() => setShowAuthModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 transition-colors text-slate-400"
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

                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] mt-4">
                  {authMode === 'login' ? 'Sign In' : authMode === 'register' ? 'Create Account' : 'Send Reset Link'}
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
                    <img src={logo} alt="TechVarsity" className="h-8" />
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
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <User className="w-6 h-6" />
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
                  <button className="btn-primary w-full mb-4">Enroll Now</button>
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
 