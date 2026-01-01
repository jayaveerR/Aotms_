"use client";
import React from "react";
import { motion } from "framer-motion";

export interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50 max-w-xs w-full" key={i}>
                                    <div className="text-gray-600 italic text-sm leading-relaxed">"{text}"</div>
                                    <div className="flex items-center gap-3 mt-6">
                                        <img
                                            width={40}
                                            height={40}
                                            src={image}
                                            alt={name}
                                            className="h-10 w-10 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-bold text-sm tracking-tight leading-tight text-black">{name}</div>
                                            <div className="text-xs focus:opacity-60 tracking-tight text-[#008bf8] font-medium">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
