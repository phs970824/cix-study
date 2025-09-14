import {
    useNowPlayingMovies,
    usePopularMovies,
    useTopRatedMovies,
    useUpcomingMovies,
} from "@/api/tmdb/movies";

export function cardListData(pageParam: number) {
    const MAX_PAGE = 4;

    const { data: popularMovies } = usePopularMovies();
    const { data: nowPlayingMovies } = useNowPlayingMovies();
    const { data: topRatedMovies } = useTopRatedMovies();
    const { data: upcomingMovies } = useUpcomingMovies();

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (pageParam <= MAX_PAGE) {
                if (pageParam === 1) {
                    res(popularMovies);
                } else if (pageParam === 2) {
                    res(nowPlayingMovies);
                } else if (pageParam === 3) {
                    res(topRatedMovies);
                } else if (pageParam === 4) {
                    res(upcomingMovies);
                } else {
                    res(popularMovies); // 기본값
                }
            } else {
                rej(new Error("error"));
            }
        }, 2000);
    });
}
