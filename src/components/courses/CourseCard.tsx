import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Course } from "@/data/courses";
import { useCart } from "@/hooks/use-cart";
import { useState } from 'react';
import { Layout } from "lucide-react";

interface CourseCardProps {
    course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
    const { addToCart } = useCart();
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className={cn(
                "group relative flex flex-col bg-white overflow-hidden transition-all duration-300",
                "w-full max-w-[340px] mx-auto min-h-[460px] md:min-h-[480px]", // Fluid width on mobile, max-width for sanity
                "rounded-[18px] md:rounded-[22px]", // Border Radius
                "hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50", // Hover Interaction
                isClicked && "scale-[0.98]" // Click Interaction
            )}
            onMouseDown={() => setIsClicked(true)}
            onMouseUp={() => setIsClicked(false)}
            onMouseLeave={() => setIsClicked(false)}
        >
            {/* 1️⃣ TOP BANNER (IMAGE ZONE) */}
            <div className="relative h-[160px] md:h-[180px] w-full overflow-hidden shrink-0">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            {/* 2️⃣ COURSE LOGO / ICON */}
            <div className="absolute top-[135px] md:top-[155px] left-6 z-20">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-50">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-50 rounded-full flex items-center justify-center">
                        <Layout className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                </div>
            </div>

            {/* 3️⃣ MAIN CONTENT AREA */}
            <div className="flex-1 p-5 md:p-6 pt-10 md:pt-12 flex flex-col justify-between">
                <div className="mb-4">
                    <Link to={`/course/${course.slug}`}>
                        <h3 className="text-lg md:text-xl font-bold text-black leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                            {course.title}
                        </h3>
                    </Link>
                    <p className="text-slate-500 text-sm line-clamp-1 mb-2 font-medium">
                        Expertly crafted career path in {course.category}
                    </p>
                    <p className="text-blue-600 text-[11px] md:text-xs font-bold uppercase tracking-wider">
                        Instructor: {course.trainer} • {course.level}
                    </p>
                </div>

                {/* 4️⃣ META INFO ROW & CTA */}
                <div className="flex flex-col gap-5 mt-auto">
                    <div className="flex items-center gap-3 text-[11px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1.5">{course.duration}</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                        <span>Online / Live</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-baseline justify-between mb-1">
                            <span className="text-xl md:text-2xl font-black text-black">
                                {course.price}
                            </span>
                            {course.originalPrice && (
                                <span className="text-xs md:text-sm text-slate-400 line-through font-bold">
                                    {course.originalPrice}
                                </span>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                to={`/course/${course.slug}`}
                                className={cn(
                                    "flex items-center justify-center h-12 md:h-13 rounded-xl font-bold text-xs md:text-sm transition-all duration-200",
                                    "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.97]"
                                )}
                            >
                                Explore
                            </Link>
                            <button
                                onClick={() => addToCart({
                                    id: course.id,
                                    title: course.title,
                                    price: parseInt(course.price.replace(/[^\d]/g, '')),
                                    image: course.image
                                })}
                                className={cn(
                                    "flex items-center justify-center h-12 md:h-13 rounded-xl font-bold text-xs md:text-sm transition-all duration-200",
                                    "bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 active:scale-[0.97]"
                                )}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
