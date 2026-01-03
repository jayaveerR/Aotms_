import workshop1 from "@/assets/Workshop-1.jpg";
import workshop2 from "@/assets/Workshop-2.jpg";
import hackathon1 from "@/assets/Hackathon-1.jpg";
import hackathon2 from "@/assets/Hackathon-2.jpg";
import hackathon3 from "@/assets/Hackathon-3.jpg";

export interface EventItem {
    id: string;
    name: string;
    tagline: string;
    mode: "Online" | "Offline";
    date: string;
    duration: string;
    bannerUrl: string;
    thumbnailUrl: string;
    description: string;
    eligibility: string;
    teamSize?: string;
    level?: string;
    whatYouWillLearn: string[];
    type: "hackathon" | "workshop";
}

export const eventsData: EventItem[] = [
    {
        id: "w1",
        name: "UI/UX Master",
        tagline: "ADVANCED DESIGN CONDUCT",
        mode: "Offline",
        date: "April 10, 2026",
        duration: "6 Hours",
        bannerUrl: workshop1,
        thumbnailUrl: workshop1,
        description: "Experience an intensive UI/UX design marathon. This workshop conduct focuses on building industry-standard prototypes from scratch using FIGMA and user research principles.",
        eligibility: "Aspiring Designers & Product Architects",
        level: "Intermediate",
        whatYouWillLearn: [
            "User-Centric Design Frameworks",
            "High-Fidelity Prototyping in Figma",
            "Interactive Design Patterns",
            "Conducting User Feedback Sessions"
        ],
        type: "workshop"
    },
    {
        id: "w2",
        name: "MERN Hack-Workshop",
        tagline: "FULL-STACK DEVELOPMENT CONDUCT",
        mode: "Online",
        date: "May 15-18, 2026",
        duration: "24 Hours (4 Days)",
        bannerUrl: workshop2,
        thumbnailUrl: workshop2,
        description: "A hybrid hackathon-workshop conduct. Build a full-stack MERN application while receiving live architectural guidance from senior engineers.",
        eligibility: "Engineering Students & MERN Beginners",
        level: "Advanced",
        whatYouWillLearn: [
            "Scalable Node.js API Architecture",
            "React State Management & Hooks",
            "MongoDB Schema Design Patterns",
            "Deployment in MERN Ecosystem"
        ],
        type: "workshop"
    },
    {
        id: "h1",
        name: "Global UI/UX Design Hackathon",
        tagline: "48-HOUR DESIGN MARATHON CONDUCT",
        mode: "Online",
        date: "July 20-22, 2026",
        duration: "48 Hours",
        bannerUrl: hackathon1,
        thumbnailUrl: hackathon1,
        description: "A premier global design event. Compete with designers across the world to build innovative solutions for real-world sustainability problems.",
        eligibility: "Student & Professional Designers",
        level: "All Levels",
        whatYouWillLearn: [
            "Rapid Problem Solving",
            "Collaborative Design Workflows",
            "Presentation & Pitching Skills",
            "Advanced Figma Prototyping"
        ],
        type: "hackathon"
    },
    {
        id: "h2",
        name: "Full-Stack Innovation Hack",
        tagline: "72-HOUR DEVELOPMENT CONDUCT",
        mode: "Offline",
        date: "August 12-15, 2026",
        duration: "72 Hours",
        bannerUrl: hackathon2,
        thumbnailUrl: hackathon2,
        description: "A high-stakes coding marathon focused on building scalable MERN applications. Work with mentors from top tech companies to architect your vision.",
        eligibility: "Engineering Students & Professional Developers",
        level: "Intermediate",
        whatYouWillLearn: [
            "Production-Grade API Design",
            "Real-time Data Processing",
            "System Architecture Optimization",
            "Team Collaboration & Version Control"
        ],
        type: "hackathon"
    },
    {
        id: "h3",
        name: "AI-Powered Product Sprint",
        tagline: "24-HOUR RAPID PROTOTYPING CONDUCT",
        mode: "Online",
        date: "September 05, 2026",
        duration: "24 Hours",
        bannerUrl: hackathon3,
        thumbnailUrl: hackathon3,
        description: "Integrate modern AI tools into your design and development workflow. Build intelligent interfaces and automated backends in a race against time.",
        eligibility: "Tech Enthusiasts & Product Designers",
        level: "Advanced",
        whatYouWillLearn: [
            "AI API Integration (OpenAI/Anthropic)",
            "Prompt Engineering for UI",
            "Dynamic Content Generation",
            "Fast-track Deployment Workflows"
        ],
        type: "hackathon"
    }
];

export const hackathons = eventsData.filter(e => e.type === "hackathon");
export const workshops = eventsData.filter(e => e.type === "workshop");
