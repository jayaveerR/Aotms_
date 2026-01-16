import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface EventItem {
    id: string;
    name: string;
    description: string;
    thumbnailUrl: string;
    mode: "Online" | "Offline";
    date: string;
    duration: string;
    registrationLink?: string;
    buttonText?: string;
    actionButtonText?: string;
    whatYouWillLearn?: string[];
    type?: string;
    _id?: string;
}

const fetchEvents = async (type?: string): Promise<EventItem[]> => {
    const url = type
        ? `${import.meta.env.VITE_API_URL}/api/events?type=${type}`
        : `${import.meta.env.VITE_API_URL}/api/events`;
    const { data } = await axios.get(url);
    return data;
};

export const useEvents = (type?: string) => {
    return useQuery({
        queryKey: ['events', type || 'all'],
        queryFn: () => fetchEvents(type),
        staleTime: 5 * 60 * 1000,
    });
};
