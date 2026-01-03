import React from 'react';
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhyChooseUs } from "@/components/WhyChooseUs"; // Reusing this component

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10 section-heading">About Us</h1>
        <p className="text-xl text-center text-muted-foreground mb-12 section-subheading">
          Learn about our mission, vision, and why we are the right choice for your career.
        </p>

        {/* Reusing the WhyChooseUs component */}
        <WhyChooseUs />

        {/* Additional "About Us" content can go here if needed, e.g., team, history etc. */}
        <section className="py-12 sm:py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-6 section-heading">Our Story</h2>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            Founded with a vision to bridge the gap between academic knowledge and industry demands, TechVarsity has grown into a leading IT training institute. We are committed to fostering talent, enabling innovation, and creating a community of skilled professionals ready to tackle the challenges of tomorrow's tech landscape.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;