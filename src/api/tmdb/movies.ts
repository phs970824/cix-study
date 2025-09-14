import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/movie";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_KEY}`,
    },
    params: {
        language: "ko-KR",
        page: 1,
    },
};

// 공통 fetch 함수
const fetchMovies = async (endpoint: string) => {
    const url = `${BASE_URL}/${endpoint}`;
    const { data } = await axios.get(url, options);

    // return data.results;

    const shuffledResults = data.results.sort(() => Math.random() - 0.5);

    return shuffledResults;
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
export const usePopularMovies = () =>
    useMoviesQuery(
        "popular",
        "popular",
        "꼭 챙겨 보세요! 회원님을 위한 콘텐츠"
    );

// nowPlayingMovies
export const useNowPlayingMovies = () =>
    useMoviesQuery(
        "nowPlaying",
        "now_playing",
        "넷플릭스에 새로 올라온 콘텐츠"
    );

// topRatedMovies
export const useTopRatedMovies = () =>
    useMoviesQuery("topRated", "top_rated", "누구나 사랑하는 명작");

// upcomingMovies
export const useUpcomingMovies = () =>
    useMoviesQuery("upcoming", "upcoming", "마음에 쏙 드실 거예요");

// -------------------------------- 2차 api
// popularMovies
export const usePopularMovies2 = () =>
    useMoviesQuery("popular", "popular", "평단의 찬사를 받은 영화");

// nowPlayingMovies
export const useNowPlayingMovies2 = () =>
    useMoviesQuery(
        "nowPlaying",
        "now_playing",
        "무료한 당신을 위한 엔터테인먼트"
    );

// topRatedMovies
export const useTopRatedMovies2 = () =>
    useMoviesQuery("topRated", "top_rated", "위트 있는 시리즈");

// upcomingMovies
export const useUpcomingMovies2 = () =>
    useMoviesQuery("upcoming", "upcoming", "오늘의 발견!");
