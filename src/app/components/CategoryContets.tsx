"use client";

import { useEffect, useMemo, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { categoryType } from "@/types/types";

// data
import {
    useNowPlayingMovies,
    useNowPlayingMovies2,
    usePopularMovies,
    usePopularMovies2,
    useTopRatedMovies,
    useTopRatedMovies2,
    useUpcomingMovies,
    useUpcomingMovies2,
} from "@/api/tmdb/movies";

//component
import CardList from "./CardList";
import getCardListData from "./CardListData";

const CategoryContents = () => {
    const observerRef = useRef<HTMLDivElement | null>(null);

    const { data: popularMovies } = usePopularMovies();
    const { data: nowPlayingMovies } = useNowPlayingMovies();
    const { data: topRatedMovies } = useTopRatedMovies();
    const { data: upcomingMovies } = useUpcomingMovies();
    const { data: popularMovies2 } = usePopularMovies2();
    const { data: nowPlayingMovies2 } = useNowPlayingMovies2();
    const { data: topRatedMovies2 } = useTopRatedMovies2();
    const { data: upcomingMovies2 } = useUpcomingMovies2();

    const settingData = useMemo(() => {
        if (popularMovies && nowPlayingMovies && topRatedMovies) {
            return [popularMovies, nowPlayingMovies, topRatedMovies];
        }
    }, [popularMovies, nowPlayingMovies, topRatedMovies]);

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery({
            queryKey: ["cardList"],
            queryFn: ({ pageParam }) =>
                getCardListData(pageParam, {
                    upcoming: upcomingMovies,
                    popular2: popularMovies2,
                    nowPlaying2: nowPlayingMovies2,
                    topRated2: topRatedMovies2,
                    upcoming2: upcomingMovies2,
                }),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) =>
                allPages.length <= 4 ? allPages.length + 1 : undefined,
        });

    const page = data?.pages.flat() as categoryType[];

    // 무한스크롤 옵저버
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (
                entries[0].isIntersecting &&
                hasNextPage &&
                !isFetchingNextPage
            ) {
                fetchNextPage();
            }
        });

        const currentRef = observerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [fetchNextPage, hasNextPage, isFetchingNextPage, page]);

    return (
        <>
            <section className="sc-contents">
                <h2 className="blind">카테고리별 콘텐츠</h2>
                {settingData &&
                    settingData.map((item: categoryType, index: number) => {
                        return <CardList key={index} items={item} />;
                    })}
                {page
                    ?.filter(Boolean)
                    .map((item: categoryType, index: number) => {
                        return <CardList key={index} items={item} />;
                    })}
            </section>
            {data && hasNextPage && !isFetchingNextPage && (
                <span ref={observerRef}></span>
            )}
        </>
    );
};

export default CategoryContents;
