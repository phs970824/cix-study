import axios from "axios";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/movie";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_KEY}`,
    },
};

const optionsLanguage = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_KEY}`,
    },
    params: {
        language: "ko-KR",
    },
};

// 키워드
export const getMovieKeywords = async (movieId: number) => {
    const url = `${BASE_URL}/${movieId}/keywords`;
    const { data } = await axios.get(url, options);

    return data;
};

// 유투브 key
export const getMovieVideos = async (movieId: number) => {
    const url = `${BASE_URL}/${movieId}/videos`;
    const { data } = await axios.get(url, options);

    return data;
};

// 상세 정보
export const getMovieDetail = async (movieId: number) => {
    const url = `${BASE_URL}/${movieId}`;
    const { data } = await axios.get(url, optionsLanguage);

    return data;
};

// 출연진
export const getMovieCredits = async (movieId: number) => {
    const url = `${BASE_URL}/${movieId}/credits`;
    const { data } = await axios.get(url, options);

    return data;
};
