import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface WinnerTeam {
    rank: number;
    teamName: string;
    collegeName: string;
    members: string[];
    prize: string;
    imageUrl?: string;
}

export interface HackathonWinnerData {
    eventId: string;
    eventName: string;
    winners: WinnerTeam[];
}

const fetchWinners = async (): Promise<HackathonWinnerData[]> => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/winners`);
    return data;
};

export const useWinners = () => {
    return useQuery({
        queryKey: ['winners'],
        queryFn: fetchWinners,
        staleTime: 10 * 60 * 1000,
    });
};
