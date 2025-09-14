"use client";

import { useEffect, useMemo, useRef } from "react";

// data
import {
    useNowPlayingMovies,
    usePopularMovies,
    useTopRatedMovies,
    useUpcomingMovies,
} from "@/api/tmdb/movies";

//component
import { cardListData } from "./CardListData";
import { useInfiniteQuery } from "@tanstack/react-query";
import { categoryType } from "@/types/types";

// style
import CardList from "./CardList";

const CategoryContents = () => {
    const observerRef = useRef<HTMLDivElement | null>(null);

    const { data: popularMovies } = usePopularMovies();
    const { data: nowPlayingMovies } = useNowPlayingMovies();
    const { data: topRatedMovies } = useTopRatedMovies();

    const settingData = useMemo(() => {
        if (popularMovies && nowPlayingMovies && topRatedMovies) {
            return [popularMovies, nowPlayingMovies, topRatedMovies];
        }
    }, [popularMovies, nowPlayingMovies, topRatedMovies]);

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery({
            queryKey: ["cardList"],
            queryFn: ({ pageParam }) => cardListData(pageParam),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) =>
                allPages.length <= 4 ? allPages.length + 1 : undefined,
        });

    const page = data?.pages.flat() as categoryType[];

    // 무한스크롤 옵저버
    useEffect(() => {
        console.log(hasNextPage);
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
                {/* {page?.map((item: categoryType, index: number) => {
                    return <CardList key={index} items={item} />;
                })} */}
            </section>
            {data && hasNextPage && !isFetchingNextPage && (
                <span ref={observerRef}></span>
            )}
        </>
    );
};

export default CategoryContents;
