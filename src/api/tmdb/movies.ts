import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_API_KEY}`,
    },
    params: {
        language: 'ko-KR',
        page: 1,
    },
};

// 공통 fetch 함수
const fetchMovies = async (endpoint: string) => {
    try {
        const url = `${BASE_URL}/${endpoint}`;
        const { data } = await axios.get(url, options);

        if (!data.results) {
            throw new Error(`${endpoint} 데이터 없습니다.`);
        }

        const shuffledResults = data.results.sort(() => Math.random() - 0.5);

        return shuffledResults;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                // 서버 오류
                console.log('서버 응답 오류:', {
                    message: error.message,
                    status: error.response.status,
                    data: error.response.data,
                });
            } else if (error.request) {
                // 네트워크 오류
                console.error('네트워크 오류: 서버가 응답하지 않습니다.', error.request);
            } else {
                // 그 외 다른 오류
                console.error('예상치 못한 오류 발생:', error.message);
            }
        } else {
            // Axios 에러가 아닌 경우
            console.error('일반 오류 발생:');
        }

        throw error;
    }
};

// 공통 훅 생성 함수
const useMoviesQuery = (key: string, endpoint: string, title: string) => {
    const { data } = useQuery({
        queryKey: [key],
        queryFn: () => fetchMovies(endpoint),
        staleTime: 50 * 60 * 1000, // 50분
        select: (res) => {
            return {
                title: title,
                data: res,
            };
        },
    });

    return { data };
};

// popularMovies
export const usePopularMovies = () => useMoviesQuery('popular1', 'popular', '꼭 챙겨 보세요! 회원님을 위한 콘텐츠');

// nowPlayingMovies
export const useNowPlayingMovies = () => useMoviesQuery('nowPlaying1', 'now_playing', '넷플릭스에 새로 올라온 콘텐츠');

// topRatedMovies
export const useTopRatedMovies = () => useMoviesQuery('topRated1', 'top_rated', '누구나 사랑하는 명작');

// upcomingMovies
export const useUpcomingMovies = () => useMoviesQuery('upcoming1', 'upcoming', '마음에 쏙 드실 거예요');

// -------------------------------- 2차 api
// popularMovies
export const usePopularMovies2 = () => useMoviesQuery('popular2', 'popular', '평단의 찬사를 받은 영화');

// nowPlayingMovies
export const useNowPlayingMovies2 = () => useMoviesQuery('nowPlaying2', 'now_playing', '무료한 당신을 위한 엔터테인먼트');

// topRatedMovies
export const useTopRatedMovies2 = () => useMoviesQuery('topRated2', 'top_rated', '위트 있는 시리즈');

// upcomingMovies
export const useUpcomingMovies2 = () => useMoviesQuery('upcoming2', 'upcoming', '오늘의 발견!');
