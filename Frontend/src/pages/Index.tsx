import { Header } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CompanyLogos } from "@/components/CompanyLogos";
import { AboutSection } from "@/components/AboutSection";
import { LearningProcess } from "@/components/LearningProcess";
import { ProfessionalPrograms } from "@/components/courses/ProfessionalPrograms";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MentorsSection } from "@/components/MentorsSection";
import { PlacementsSection } from "@/components/PlacementsSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <CompanyLogos />
      <AboutSection />

      <LearningProcess />
      <ProfessionalPrograms />
      <WhyChooseUs />
      <MentorsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
