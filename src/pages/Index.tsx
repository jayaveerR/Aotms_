import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Logos3 } from "@/components/ui/logos3";
import { AboutSection } from "@/components/AboutSection";
import { LearningProcess } from "@/components/LearningProcess";
import { CoursesSection } from "@/components/CoursesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MentorsSection } from "@/components/MentorsSection";
import { PlacementsSection } from "@/components/PlacementsSection";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <Logos3 />
      <AboutSection />

      <LearningProcess />
      <CoursesSection />
      <WhyChooseUs />
      <MentorsSection />
      <PlacementsSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
