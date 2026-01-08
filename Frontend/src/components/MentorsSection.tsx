import { ArrowRight } from "lucide-react";
import { TestimonialCarousel } from "./profile-card-testimonial-carousel";

export const MentorsSection = () => {
  return (
    <section className="py-8 md:py-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Learn from Our <span className="text-orange-500">Professional</span> <span className="text-blue-600">Industry Experts</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto font-semibold leading-relaxed">
            Our instructors are not just teachers; they are <span className="font-bold text-slate-900">seasoned professionals</span> from leading tech companies.
          </p>
        </div>

        <TestimonialCarousel />

        <div className="mt-12 md:mt-16 text-center">
          <button className="btn-secondary group flex items-center gap-2 mx-auto">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Explore Our Courses
          </button>
        </div>
      </div>
    </section>
  );
};