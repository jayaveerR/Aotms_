export interface StudentPlacement {
    id: number;
    name: string;
    jobTitle: string;
    companies: string[];
    image: string;
}

export interface DetailedPlacement {
    id: number;
    consultantName: string;
    jobTitle: string;
    client: string;
    startDate: string;
    duration: string;
    location: string;
    salary: string;
}

export const studentPlacementsData: StudentPlacement[] = [
    {
        id: 1,
        name: "Sangeetha Detne",
        jobTitle: "Big Data Developer",
        companies: ["Cigniti"],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    },
    {
        id: 2,
        name: "Rahul Verma",
        jobTitle: "Cloud Architect",
        companies: ["AWS"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    },
    {
        id: 3,
        name: "Priya Sharma",
        jobTitle: "Full Stack Developer",
        companies: ["Microsoft"],
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    },
    {
        id: 4,
        name: "Arjun Reddy",
        jobTitle: "DevOps Engineer",
        companies: ["TCS"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
];

export const detailedPlacementsData: DetailedPlacement[] = [
    {
        id: 1,
        consultantName: "Sangeetha D.",
        jobTitle: "Big Data Developer",
        client: "Walmart Global Tech",
        startDate: "2024-01-15",
        duration: "Full Time",
        location: "Bangalore",
        salary: "24 LPA",
    },
    {
        id: 2,
        consultantName: "Rahul V.",
        jobTitle: "Cloud Solutions Architect",
        client: "Amazon Web Services",
        startDate: "2024-02-01",
        duration: "Full Time",
        location: "Hyderabad",
        salary: "32 LPA",
    },
    {
        id: 3,
        consultantName: "Priya S.",
        jobTitle: "Sr. React Developer",
        client: "Microsoft R&D",
        startDate: "2024-03-10",
        duration: "Full Time",
        location: "Hyderabad",
        salary: "28 LPA",
    },
    {
        id: 4,
        consultantName: "Arjun R.",
        jobTitle: "DevOps Engineer",
        client: "Tata Consultancy Services",
        startDate: "2024-01-20",
        duration: "Full Time",
        location: "Pune",
        salary: "14 LPA",
    },
    {
        id: 5,
        consultantName: "Karthik N.",
        jobTitle: "Data Scientist",
        client: "Flipkart",
        startDate: "2024-04-05",
        duration: "Full Time",
        location: "Bangalore",
        salary: "22 LPA",
    },
    {
        id: 6,
        consultantName: "Ananya M.",
        jobTitle: "UI/UX Designer",
        client: "Swiggy",
        startDate: "2024-03-15",
        duration: "Full Time",
        location: "Bangalore",
        salary: "16 LPA",
    },
    {
        id: 7,
        consultantName: "Vikram S.",
        jobTitle: "Java Backend Lead",
        client: "Oracle",
        startDate: "2024-02-28",
        duration: "Full Time",
        location: "Hyderabad",
        salary: "26 LPA",
    },
    {
        id: 8,
        consultantName: "Neha G.",
        jobTitle: "QA Automation Lead",
        client: "Salesforce",
        startDate: "2024-04-12",
        duration: "Full Time",
        location: "Remote",
        salary: "20 LPA",
    },
];
