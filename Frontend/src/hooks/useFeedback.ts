import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface FeedbackData {
    _id: string;
    name: string;
    role: string;
    message: string;
    rating: number;
}

const fetchFeedback = async (): Promise<FeedbackData[]> => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/feedback`);
    return data;
};

export const useFeedback = () => {
    return useQuery({
        queryKey: ['feedback'],
        queryFn: fetchFeedback,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};
