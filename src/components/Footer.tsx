import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Placements", href: "#placements" },
  { name: "Mentors", href: "#mentors" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

const courses = [
  { name: "Full Stack Development", href: "#courses" },
  { name: "Data Science & ML", href: "#courses" },
  { name: "Cloud & DevOps", href: "#courses" },
  { name: "AI & Machine Learning", href: "#courses" },
  { name: "Mobile Development", href: "#courses" },
  { name: "Python Development", href: "#courses" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-100">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-display font-black mb-6 flex items-center gap-2">
              <span className="text-[#008bf8]">Tech</span><span>Varsity</span>
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-xs">
              Empowering the next generation of tech leaders with industry-standard training and 100% placement assistance.
            </p>

            <div className="space-y-4">
              <a href="tel:+918019942233" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#008bf8] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-[#008bf8]/10">
                  <Phone className="w-4 h-4 text-[#008bf8]" />
                </div>
                <span>+91 8019942233</span>
              </a>

              <a href="mailto:info@aotms.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#ff6b00] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-[#ff6b00]/10">
                  <Mail className="w-4 h-4 text-[#ff6b00]" />
                </div>
                <span>info@aotms.com</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-black" />
                </div>
                <span>M.G. Road, Vijayawada,<br />Andhra Pradesh, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-black">Company</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#008bf8] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-black">Our Programs</h4>
            <ul className="space-y-4">
              {courses.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-sm text-gray-500 hover:text-[#008bf8] transition-colors"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-black">Follow Us</h4>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#008bf8] hover:text-white transition-all shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-xs font-bold text-black uppercase tracking-wider mb-3">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-4 py-2 text-xs rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#008bf8] text-black"
                />
                <button className="px-4 py-2 bg-black text-white rounded-xl hover:bg-[#008bf8] transition-colors text-xs font-bold">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-50 mt-16 pt-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <p>© 2024 TechVarsity. High-end Education.</p>

            <div className="flex gap-8">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
              <a href="#" className="hover:text-black transition-colors">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
