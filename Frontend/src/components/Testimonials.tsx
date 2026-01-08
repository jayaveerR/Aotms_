import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { motion } from "framer-motion";

const testimonials: (Testimonial & { rating: number })[] = [
    { text: "The placement support at AOTMS is unparalleled. I was mentored by industry giants and landed a job at a top MNC within weeks of finishing the Full Stack course.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", name: "Briana Patton", role: "Full Stack Developer", rating: 5 },
    { text: "The hands-on projects and mock interviews gave me the confidence to face tough technical rounds. Their curriculum is perfectly aligned with what the industry needs.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", name: "Bilal Ahmed", role: "Cloud Engineer", rating: 5 },
    { text: "Transitioning to Data Science felt daunting, but the mentors here made it seamless. The lifetime career support ensures I always have a roadmap for my growth.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", name: "Saman Malik", role: "Data Scientist", rating: 4 },
    { text: "They don't just teach code; they teach problem-solving and industry standards. The mock interviews were as real as the actual ones I faced at startups.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", name: "Omar Raza", role: "QA Automation Engineer", rating: 5 },
    { text: "The resume building sessions were a game-changer. My profile started getting picked up by top tech firms almost immediately after the overhaul.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", name: "Zainab Hussain", role: "UI/UX Designer", rating: 5 },
    { text: "If you're looking for a place that cares about your career as much as you do, AOTMS is it. The teachers are approachable and extremely knowledgeable.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop", name: "Aliza Khan", role: "Software Engineer", rating: 5 },
    { text: "Real-world projects are at the heart of their training. I built a full-scale enterprise app that became the star highlight of my portfolio.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", name: "Farhan Siddiqui", role: "Software Architect", rating: 5 },
    { text: "The diversity of courses and the quality of instructors is amazing. I particularly loved the classroom management sessions for my teaching certification.", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop", name: "Sana Sheikh", role: "Technical Trainer", rating: 4 },
    { text: "Excellent experience! The team understands the local job market in Vijayawada perfectly and bridges the gap to international standards.", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop", name: "Hassan Ali", role: "DevOps Professional", rating: 5 },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


export const Testimonials = () => {
    return (
        <section className="bg-background py-8 md:py-12 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-8 text-center"
                >
                    <div className="mb-4">
                        <span className="text-xs font-bold tracking-widest uppercase text-primary border border-primary/20 py-1.5 px-4 rounded-full bg-primary/5">
                            Alumni Reviews
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                        Student <span className="text-primary">Success</span> <span className="text-orange-500">Stories</span>
                    </h2>
                    <p className="section-subheading mt-4">
                        Join thousands of professionals who transformed their careers with our world-class training.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 md:gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[800px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block mt-20" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
};
