import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import Index from "./pages/Index";

import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";

import WhatWeDo from "./pages/WhatWeDo";         // New
import AboutUs from "./pages/AboutUs";           // New
import Contact from "./pages/Contact";           // New
import Blog from "./pages/Blog";                 // New
import Placements from "./pages/Placements";     // New
import Hackathon from "./pages/HackathonsPage";       // New
import Workshop from "./pages/WorkshopsPage";       // New
import Cart from "./pages/Cart";                     // New
import Dashboard from "./pages/Dashboard";           // New

import ResetPassword from "./pages/ResetPassword"; // New
import Winners from "./pages/HackathonWinnersPage";    // New
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-orange-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Chatbot />
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/course/:slug" element={<CourseDetail />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />     {/* New */}
          <Route path="/about-us" element={<AboutUs />} />       {/* New */}
          <Route path="/contact" element={<Contact />} />         {/* New */}
          <Route path="/blog" element={<Blog />} />               {/* New */}
          <Route path="/placements" element={<Placements />} />   {/* New */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/hackathon" element={<Hackathon />} />     {/* New */}
          <Route path="/workshop" element={<Workshop />} />     {/* New */}
          <Route path="/dashboard" element={<Dashboard />} />    {/* New */}
          <Route path="/winners" element={<Winners />} />      {/* New */}
          <Route path="/reset-password" element={<ResetPassword />} />  {/* New path for query param */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
