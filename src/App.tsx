import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/course/:slug" element={<CourseDetail />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />     {/* New */}
          <Route path="/about-us" element={<AboutUs />} />       {/* New */}
          <Route path="/contact" element={<Contact />} />         {/* New */}
          <Route path="/blog" element={<Blog />} />               {/* New */}
          <Route path="/placements" element={<Placements />} />   {/* New */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/hackathon" element={<Hackathon />} />     {/* New */}
          <Route path="/workshop" element={<Workshop />} />     {/* New */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
