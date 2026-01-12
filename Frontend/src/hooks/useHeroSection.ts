import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface HeroImage {
    _id: string;
    imageUrl: string;
    title?: string;
    subtitle?: string;
    order?: number;
}

const fetchHeroImages = async (): Promise<HeroImage[]> => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/hero`);
    return data;
};

export const useHeroSection = () => {
    return useQuery({
        queryKey: ['hero-images'],
        queryFn: fetchHeroImages,
        staleTime: 10 * 60 * 1000, // 10 minutes
    });
};
