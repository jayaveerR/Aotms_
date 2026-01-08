import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { coursesData } from "@/data/courses";
import { CourseCard } from "./CourseCard";
import { Badge } from "@/components/ui/badge";
import { useCallback } from "react";

export const ProfessionalPrograms = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", skipSnaps: false }
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section id="courses" className="py-8 md:py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header Section - Centered Hero Style */}
                <div className="flex flex-col items-center text-center mb-10">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles className="w-3.5 h-3.5 mr-2 fill-current" />
                        World Class Education
                    </Badge>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 max-w-4xl">
                        Professional <span className="text-blue-600">Training Programs</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Accelerate your career with our industry-leading certification programs.
                        Designed by experts, delivered by professionals.
                    </p>

                    <div className="flex items-center gap-4 mt-12">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </div>
                </div>

                {/* Animated Horizontal Carousel (3 Cards) */}
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex py-10">
                        {coursesData.map((course) => (
                            <div
                                key={course.id}
                                className="embla__slide flex-[0_0_100%] md:flex-[0_0_calc(33.333%-22px)] px-4 md:px-0"
                            >
                                <CourseCard course={course} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
