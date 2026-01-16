export interface Hackathon {
    id: string;
    name: string;
    date: string;
    mode: string;
    description: string;
    thumbnailUrl: string;
    logoUrl?: string;
    themes?: string[];
    whatYouWillLearn?: string[];
    rewards?: string[];
    importantDates?: { event: string; date: string }[];
    eligibility: string;
    teamSize?: string;
}

export const hackathons: Hackathon[] = [
    {
        id: "1",
        name: "AI Innovation Challenge",
        date: "Mars 15, 2026",
        mode: "Online",
        description: "Build the next generation of AI applications in this 48-hour hackathon.",
        thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
        logoUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=100",
        themes: ["Generative AI", "Healthcare", "FinTech"],
        whatYouWillLearn: ["AI Integration", "Prompt Engineering"],
        rewards: ["$5000 First Prize", "Cloud Credits"],
        importantDates: [
            { event: "Registration Deadline", date: "March 10, 2026" },
            { event: "Event Starts", date: "March 15, 2026" }
        ],
        eligibility: "Open to all students and professionals",
        teamSize: "2-4 Members"
    },
    {
        id: "2",
        name: "Green Tech Summit",
        date: "April 22, 2026",
        mode: "Offline",
        description: "Create sustainable technology solutions for a greener future.",
        thumbnailUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
        themes: ["Sustainability", "Renewable Energy", "Smart Cities"],
        eligibility: "University students",
        teamSize: "3-5 Members"
    }
];
