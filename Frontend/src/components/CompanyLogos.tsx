"use client";

import React from "react";

import AutoScroll from "embla-carousel-auto-scroll";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import {
    SiReact, SiPython, SiAmazonwebservices, SiDocker, SiKubernetes,
    SiSelenium, SiNodedotjs, SiJavascript, SiTypescript, SiMongodb,
    SiPostgresql, SiDjango, SiSpringboot, SiGithub, SiFigma,
    SiTerraform, SiJenkins, SiLinux, SiOpenai, SiGooglecloud,
    SiNextdotjs, SiTailwindcss, SiSupabase, SiVercel
} from "react-icons/si";

interface Logo {
    id: string;
    description: string;
    icon?: React.ElementType;
    color?: string;
}

const defaultLogos: Logo[] = [
    { id: "tech-1", description: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { id: "tech-2", description: "React", icon: SiReact, color: "#61DAFB" },
    { id: "tech-4", description: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { id: "tech-3", description: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { id: "tech-5", description: "Vercel", icon: SiVercel, color: "#000000" },
    { id: "tech-6", description: "Python", icon: SiPython, color: "#3776AB" },
    { id: "tech-7", description: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { id: "tech-9", description: "Docker", icon: SiDocker, color: "#2496ED" },
    { id: "tech-10", description: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { id: "tech-11", description: "GitHub", icon: SiGithub, color: "#181717" },
    { id: "tech-12", description: "Figma", icon: SiFigma, color: "#F24E1E" },
    { id: "tech-13", description: "OpenAI", icon: SiOpenai, color: "#412991" },
    { id: "tech-14", description: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { id: "tech-15", description: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { id: "tech-16", description: "Jenkins", icon: SiJenkins, color: "#4285F4" },
    { id: "tech-17", description: "Linux", icon: SiLinux, color: "#4285F4" },
    { id: "tech-18", description: "Terraform", icon: SiTerraform, color: "#4285F4" },
    { id: "tech-19", description: "Django", icon: SiDjango, color: "#050f1eff" },
    { id: "tech-20", description: "Spring Boot", icon: SiSpringboot, color: "#1fc25eff" },
];

interface CompanyLogosProps {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

// Memoized logo item component to prevent unnecessary re-renders
const LogoItem = React.memo(({ logo, index }: { logo: Logo; index: number }) => {
    const Icon = logo.icon;
    return (
        <CarouselItem
            key={`${logo.id}-${index}`}
            className="pl-4 flex basis-auto min-w-[150px] justify-center"
        >
            <div className="flex items-center gap-3 px-4 py-2 group select-none">
                {Icon && (
                    <Icon
                        className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400 group-hover:scale-110 transition-transform duration-300 will-change-transform"
                        style={{ color: logo.color }}
                    />
                )}
                <span className="text-sm sm:text-base font-bold text-slate-600 whitespace-nowrap">{logo.description}</span>
            </div>
        </CarouselItem>
    );
});

LogoItem.displayName = 'LogoItem';

const CompanyLogos = React.memo(({
    logos = defaultLogos,
    className = "",
}: CompanyLogosProps) => {
    const plugins = React.useMemo(() => [
        AutoScroll({
            playOnInit: true,
            speed: 0.8, // Slightly slower for smoother animation
            stopOnInteraction: false,
            stopOnMouseEnter: true
        })
    ], []);

    // Memoize the duplicated logos array
    const duplicatedLogos = React.useMemo(() => [...logos, ...logos], [logos]);

    if (!logos || logos.length === 0) return null;

    return (
        <section className={`py-4 bg-slate-50 border-b border-slate-100 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-center">
                <Carousel
                    opts={{ loop: true, align: "start", skipSnaps: false, dragFree: true }}
                    plugins={plugins}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {duplicatedLogos.map((logo, index) => (
                            <LogoItem key={`${logo.id}-${index}`} logo={logo} index={index} />
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
});

CompanyLogos.displayName = 'CompanyLogos';

export { CompanyLogos };
