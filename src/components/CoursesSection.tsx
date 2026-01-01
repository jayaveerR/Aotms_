import { motion, useInView, useSpring, useMotionValue, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Clock, BarChart3, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { coursesData } from "@/data/courses";
import { useCart } from "@/hooks/use-cart";

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (v) => {
      setDisplayValue(Math.floor(v));
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
};

export const CoursesSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const { addToCart } = useCart();

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector('div') as HTMLElement;
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      const targetScroll = container.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);

      animate(container.scrollLeft, targetScroll, {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        onUpdate: (value) => {
          container.scrollLeft = value;
        },
      });
    }
  };

  // Continuous smooth scroll effect (like pulling with a rope)
  useEffect(() => {
    if (!isHovered && coursesData.length > 0 && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollSpeed = 0.5; // Pixels per frame - slow and steady like a rope pull

      const continuousScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = container;

        // If we reach the end, smoothly reset to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }

        animationFrameRef.current = requestAnimationFrame(continuousScroll);
      };

      animationFrameRef.current = requestAnimationFrame(continuousScroll);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [isHovered]);

  return (
    <section id="courses" className="py-16 md:py-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-50/50 via-white to-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[40%] rounded-full bg-orange-50/40 blur-[100px]" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-blue-100/20 blur-[150px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[30%] rounded-full bg-slate-50/50 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-blue-900">Professional </span>
            <span className="text-orange-600">Training Programs</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the Right Course for Your Career and Master New Skills
          </p>
        </motion.div>

        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-8 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {coursesData.map((course) => (
              <motion.div
                key={course.id}
                className="min-w-[85vw] sm:min-w-[340px] md:min-w-[400px] first:ml-auto last:mr-auto px-1"
              >
                <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col group/card cursor-pointer">
                  <Link to={`/course/${course.slug}`}>
                    <div className={cn(
                      "relative h-48 md:h-64 overflow-hidden flex items-center justify-center p-0 transition-all duration-500",
                      (course.category === "Data Science & AI" || course.title.includes("Java") || course.title.includes("AI") || course.title.includes("Analytics"))
                        ? "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"
                        : "bg-[#0b1221]"
                    )}>
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 relative z-10"
                      />
                      <div className="absolute top-3 left-3 z-20">
                        <span className={cn(
                          "px-2.5 py-1 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.15em] rounded-lg shadow-lg border border-white/20",
                          (course.category === "Data Science & AI" || course.title.includes("Java") || course.title.includes("AI") || course.title.includes("Analytics"))
                            ? "bg-white/90 text-orange-600"
                            : "bg-white/10 text-white"
                        )}>
                          {course.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-3.5 h-3.5",
                            i < course.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"
                          )}
                        />
                      ))}
                    </div>

                    <Link to={`/course/${course.slug}`}>
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover/card:text-blue-900 transition-colors">
                        {course.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="text-xs font-medium text-slate-400 mb-4 italic">
                      By {course.trainer}
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-50 flex flex-col gap-4">
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-blue-900 tracking-tight">{course.price}</span>
                          <span className="text-xs text-slate-400 line-through decoration-slate-300">{course.originalPrice}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">One-time payment</span>
                      </div>

                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart({
                            id: course.id,
                            title: course.title,
                            price: parseInt(course.price.replace(/[^\d]/g, '')),
                            image: course.image
                          });
                        }}
                        className="w-full relative overflow-hidden bg-gradient-to-r from-[#008bf8] to-[#0070bb] hover:from-[#0070bb] hover:to-[#005a96] text-white rounded-2xl shadow-lg shadow-blue-500/20 group/btn h-12 text-sm font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 border-none"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                        <span className="relative flex items-center justify-center gap-2">
                          Enroll in Course
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center flex opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10 border border-slate-100 hover:bg-slate-50 text-blue-900"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center flex opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10 border border-slate-100 hover:bg-slate-50 text-blue-900"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="mt-16 bg-[#0070bb] py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white mb-2">
                <AnimatedNumber value={2000} />+
              </div>
              <div className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                Successfully Trained
              </div>
            </div>
            <div className="text-center lg:border-l border-white/20">
              <div className="text-2xl md:text-4xl font-bold text-white mb-2">
                <AnimatedNumber value={15485} />+
              </div>
              <div className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                Classes Completed
              </div>
            </div>
            <div className="text-center border-l lg:border-l border-white/20 md:border-l-0 lg:border-l">
              <div className="text-2xl md:text-4xl font-bold text-white mb-2">
                <AnimatedNumber value={300} />+
              </div>
              <div className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                Placements in US (2022 - 2025)
              </div>
            </div>
            <div className="text-center lg:border-l border-white/20">
              <div className="text-2xl md:text-4xl font-bold text-white mb-2">
                <AnimatedNumber value={10} />+
              </div>
              <div className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                Years of Experience in Job Assurance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
