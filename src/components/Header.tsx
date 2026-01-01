import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Clock, Instagram, Linkedin, Youtube, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/hooks/use-cart";

import { Link } from "react-router-dom";
import { coursesData } from "@/data/courses";

const courses = coursesData.map(course => ({
  name: course.title,
  href: `/course/${course.slug}`
}));

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Courses", href: "#courses", hasDropdown: true },
  { name: "Placements", href: "#placements" },
  { name: "Mentors", href: "#mentors" },
  { name: "About", href: "#about" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""
        }`}
    >
      {/* Top Bar - Hidden on scroll */}
      <motion.div
        initial={{ height: "auto", opacity: 1 }}
        animate={{
          height: isScrolled ? 0 : "auto",
          opacity: isScrolled ? 0 : 1,
          paddingTop: isScrolled ? 0 : undefined,
          paddingBottom: isScrolled ? 0 : undefined
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-primary text-primary-foreground text-xs py-2 hidden md:block overflow-hidden"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left - Contact Info */}
          <div className="flex items-center gap-5">
            <a
              href="tel:+918019942233"
              className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 8019942233</span>
            </a>
            <span className="w-px h-3 bg-primary-foreground/30" />
            <a
              href="mailto:Info@aotms.com"
              className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Info@aotms.com</span>
            </a>
            <span className="w-px h-3 bg-primary-foreground/30" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon - Sat: 8:00 - 06:00</span>
            </div>
          </div>

          {/* Right - Login/Register & Social */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <a href="#login" className="hover:text-accent transition-colors duration-200 font-medium">Login</a>
              <span className="text-primary-foreground/50">/</span>
              <a href="#register" className="hover:text-accent transition-colors duration-200 font-medium">Register</a>
            </div>

            <span className="w-px h-3 bg-primary-foreground/30" />

            <div className="flex items-center gap-2">
              <span className="text-primary-foreground/70">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-6 h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary hover:scale-110 transition-all duration-200"
                >
                  <social.icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <nav className={`bg-background/95 backdrop-blur-md transition-all duration-300 border-b border-border/50 ${isScrolled ? "py-2" : "py-3"
        }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src={logo}
              alt="Academy of Tech Masters"
              className={`transition-all duration-300 ${isScrolled ? "h-9" : "h-11"}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="nav-link flex items-center gap-1 font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full -left-20 md:left-0 mt-4 w-[280px] md:w-[500px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50 overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 relative z-10">
                          {courses.map((course, index) => (
                            <Link
                              key={course.name}
                              to={course.href}
                              onClick={() => setIsDropdownOpen(false)}
                              className="group/item flex items-center px-4 py-3 rounded-xl hover:bg-blue-50/50 transition-all duration-300"
                            >
                              <div className="mr-3 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all duration-300" />
                              <span className="text-sm font-medium text-slate-600 group-hover/item:text-blue-900 transition-colors">
                                {course.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        {/* Subtle Background Glow inside dropdown */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-foreground/80 hover:text-primary transition-colors cursor-pointer" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </div>
            <button className="btn-primary">Enroll Now</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
                {/* Mobile Contact Info */}
                <div className="flex flex-col gap-2 pb-4 mb-4 border-b border-border">
                  <a href="tel:+918019942233" className="flex items-center gap-2 text-sm text-foreground/70">
                    <Phone className="w-4 h-4 text-primary" />
                    +91 8019942233
                  </a>
                  <a href="mailto:Info@aotms.com" className="flex items-center gap-2 text-sm text-foreground/70">
                    <Mail className="w-4 h-4 text-primary" />
                    Info@aotms.com
                  </a>
                </div>

                {/* Mobile Nav Links */}
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="block text-foreground/80 hover:text-primary py-3 font-medium border-b border-border/50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Social Links */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-sm text-foreground/60">Follow us:</span>
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                <button className="btn-primary w-full mt-4">Enroll Now</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
