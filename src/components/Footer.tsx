import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { coursesData } from "@/data/courses";
import logo from "@/assets/logo.png"; // Importing the logo image

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Resources", href: "/what-we-do#resources" }, // Link to section on What We Do page
  // Removed "Careers" and "Instructor" as they don't have dedicated pages yet
  { name: "Contact Us", href: "/contact" },
];

const footerCourses = [
  "quantom-computing",
  "devops-aws-azure",
  "embedded-systems",
  "data-science",
  "cloud-computing",
  "data-analytics",
  "python-full-stack"
];

const courses = footerCourses.map(slug => {
  const course = coursesData.find(c => c.slug === slug);
  return {
    name: course?.title || slug,
    href: `/course/${slug}`
  };
});

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com/@aotms?si=mj3-j_JH4lHC3zeF", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/academyoftechmasters?igsh=enZ5YjYwOXg1cW80&utm_source=qr", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground pt-12 sm:pt-16 md:pt-24 pb-48 sm:pb-12 overflow-hidden border-t border-primary-foreground/10">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
          {/* Brand & Contact Section */}
          <div>
            <Link to="/" className="inline-block group mb-6">
              <img src={logo} alt="AOTMS Logo" className="h-10 sm:h-12 w-auto filter invert" />
            </Link>

            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Transforming careers through industry-leading tech education. Master the future with Academy of Tech Masters.
            </p>

            <div className="space-y-5">
              <div className="flex flex-col gap-2">
                <a href="tel:+918019942233" className="group flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20 group-hover:bg-primary-foreground/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold">+91 80199 42233</span>
                </a>
                <div className="pl-11 space-y-1">
                  <a href="tel:+918019952233" className="block text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">+91 80199 52233</a>
                  <a href="tel:+918019962233" className="block text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">+91 80199 62233</a>
                </div>
              </div>

              <a href="mailto:Info@aotms.com" className="group flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20 group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">Info@aotms.com</span>
              </a>

              <div className="flex items-start gap-3 text-primary-foreground group cursor-default">
                <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm leading-6 font-medium text-primary-foreground/80">
                  Pothuri Towers, 2nd Floor,<br />
                  MG Road, Near DV manor,<br />
                  Vijayawada - 520010
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-6 text-primary-foreground/70">Company info</h4>
            <ul className="grid grid-cols-1 gap-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary-foreground mr-0 group-hover:mr-3 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-6 text-primary-foreground/70">Popular Courses</h4>
            <ul className="grid grid-cols-1 gap-5">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.href}
                    className="group flex items-center text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary-foreground mr-0 group-hover:mr-3 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    <span className="text-sm font-medium">{course.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-6 text-primary-foreground/70">Follow Our Journey</h4>
            <div className="flex gap-4 mb-12">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-200"
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </motion.a>
              ))}
            </div>

            <div className="relative group p-1 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 transition-all duration-500">
              <div className="bg-primary-foreground/5 backdrop-blur-xl p-6 rounded-xl">
                <p className="text-xs font-bold text-primary-foreground/60 uppercase tracking-widest mb-3">Newsletter</p>
                <h5 className="text-lg font-bold text-primary-foreground mb-4">Stay ahead of the curve.</h5>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 text-sm rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50 transition-all text-primary-foreground placeholder:text-primary-foreground/50 mb-3"
                  />
                  <button className="btn-primary w-full">
                    Join Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div>
          <div className="border-t border-primary-foreground/10 mt-12 sm:mt-16 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
              <p className="text-xs font-medium text-primary-foreground/70">
                © {new Date().getFullYear()} AOTMS. Built with ❤️ for Future Tech Leaders.
              </p>
              <div className="flex gap-4">
                <Link to="/privacy-policy" className="text-xs font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-xs font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
