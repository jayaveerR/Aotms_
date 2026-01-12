import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface DifferenceItem {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const fetchAcademyDifference = async (): Promise<DifferenceItem[]> => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/academy-difference`);
  return data;
};

export const useAcademyDifference = () => {
  return useQuery({
    queryKey: ['academy-difference'],
    queryFn: fetchAcademyDifference,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};
