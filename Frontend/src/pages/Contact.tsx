import React, { useState } from 'react';
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon in React-Leaflet
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const API_URL = "http://localhost:5000/api/contact";
      await axios.post(API_URL, formData);
      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.msg || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Get In Touch */}
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl font-black text-slate-900 mb-6">Get in Touch</h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                  Have questions about our courses or need career guidance?
                  Reach out to us directly or fill out the form.
                  We're here to help you build your future in tech.
                </p>

                <div className="space-y-8">
                  {/* Phone */}
                  {/* Phone */}
                  <a href="https://wa.me/918019942233?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses." target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Phone / WhatsApp</h3>
                      <p className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">+91 80199 42233 / 52233</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:info@aotms.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</h3>
                      <p className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">info@aotms.com</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 group cursor-default">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Address</h3>
                      <p className="text-base text-slate-900 font-medium leading-relaxed">
                        Pothuri Towers, 2nd Floor, MG Road,<br />
                        Near DV manor, Vijayawada - 520010
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-8 border-t border-slate-100">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      {[
                        { icon: Youtube, href: "https://youtube.com/@aotms" },
                        { icon: Instagram, href: "https://instagram.com/academyoftechmasters" },
                        { icon: Linkedin, href: "https://linkedin.com" }
                      ].map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
                        >
                          <item.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-0" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">Send a Message</h2>
              <p className="text-slate-500 mb-8 relative z-10">We usually respond within 24 hours.</p>

              <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                    <Input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-50 border-none h-12 px-4 rounded-xl focus-visible:ring-blue-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                    <Input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-50 border-none h-12 px-4 rounded-xl focus-visible:ring-blue-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                  <Input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-50 border-none h-12 px-4 rounded-xl focus-visible:ring-blue-600"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                  <Textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-50 border-none px-4 py-3 rounded-xl focus-visible:ring-blue-600 min-h-[120px]"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          {/* Full Width Map Section */}
          <div className="w-full h-[450px] rounded-[32px] overflow-hidden shadow-xl border border-slate-200 relative z-0">
            <MapContainer center={[16.5062, 80.6480]} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[16.5062, 80.6480]}
                eventHandlers={{
                  click: () => {
                    window.open("https://www.google.com/maps/search/?api=1&query=Pothuri+Towers,+MG+Road,+Vijayawada", "_blank");
                  }
                }}
              >
                <Popup>
                  <div className="p-1 text-center cursor-pointer">
                    <strong className="text-blue-600 text-sm">Academy of Tech Masters</strong><br />
                    <span className="text-xs text-slate-600">Pothuri Towers, MG Road</span><br />
                    <span className="text-[10px] text-blue-500 font-medium">(Click to view on Google Maps)</span>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;