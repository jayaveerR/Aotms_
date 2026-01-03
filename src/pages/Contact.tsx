import React from 'react';
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin } from 'lucide-react';


const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header /><br /><br />


      <main className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-6">Our Offices</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Corporate HQ</h3>
                      <p className="text-slate-500 leading-relaxed">
                        40-1-140/2, 2nd Floor, MG Road, VJA - 10<br />
                        Opp. Lucky shopping mall, DV manor
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Training Annex</h3>
                      <p className="text-slate-500 leading-relaxed">
                        Pothuri Towers, 2nd Floor, MG Road<br />
                        Near DV manor, VJA - 10
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Direct Contact</h2>
                  <div className="space-y-3">
                    <a href="tel:+918019942233" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="font-semibold">+91 80199 42233</span>
                    </a>
                    <a href="mailto:info@aotms.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="font-semibold">info@aotms.com</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Follow Us</h2>
                  <div className="flex gap-3">
                    {[Youtube, Instagram, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-2xl shadow-slate-200/50">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
              <p className="text-slate-500 mb-8">We usually respond within 24 hours.</p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                    <Input className="bg-slate-50 border-none h-12 px-4 rounded-xl focus-visible:ring-blue-600" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                    <Input className="bg-slate-50 border-none h-12 px-4 rounded-xl focus-visible:ring-blue-600" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                  <Input className="bg-slate-50 border-none h-12 px-4 rounded-xl focus-visible:ring-blue-600" placeholder="+91 XXXXXXXXXX" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                  <Textarea className="bg-slate-50 border-none px-4 py-3 rounded-xl focus-visible:ring-blue-600 min-h-[120px]" placeholder="How can we help you?" />
                </div>
                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;