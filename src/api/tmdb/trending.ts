// 일간 or 주간 트렌딩 목록 제공
// https://api.themoviedb.org/3/trending/{media_type}/{time_window}?api_key={api_key}

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrending = async (timeWindow: 'day' | 'week' = 'week') => {
    const url = `${BASE_URL}/trending/all/${timeWindow}?language=ko-KR`;
    const randomIndex = Math.floor(Math.random() * 4);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`,
        },
    };

    const { data } = await axios.get(url, options);
    const trendingData = data.results[randomIndex];

    return trendingData;
};

export function useGetTrending(timeWindow: 'day' | 'week' = 'week') {
    const { data } = useQuery({
        queryKey: ['trending'],
        queryFn: () => fetchTrending(timeWindow),
        staleTime: 50 * 60 * 1000, // 50분
        select: (res) => {
            return {
                id: res.id,
                title: res.title || res.name,
                backdrop_path: res.backdrop_path,
                overview: res.overview,
            };
        },
    });

    return { data };
}
