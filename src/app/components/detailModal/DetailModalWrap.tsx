"use client";

// import DetailModal from "./DetailModal";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
    getMovieCredits,
    getMovieDetail,
    getMovieKeywords,
    getMovieVideos,
} from "@/api/tmdb/moviesDetail";
import { DetailModalProps } from "@/types/types";
import { AnimatePresence } from "framer-motion";
import DetailModal from "./DetailModal";
import { CloseDetailModal } from "@/components/ui/DetailModalButton";
import { useContentWrapStore } from "@/store/detailModalStore";

const DetailModalWrap = () => {
    const selecteId = useSearchParams().get("id");
    const [data, setData] = useState<DetailModalProps | null>(null);
    const { setFixed } = useContentWrapStore();

    const fetchData = async () => {
        const data = await getMovieDetail(Number(selecteId));
        const genres = data.genres.map((genre: any) => genre.name);

        const keywordData = await getMovieKeywords(Number(selecteId));
        const keywords = keywordData.keywords.map(
            (keyword: any) => keyword.name
        );

        const credits = await getMovieCredits(Number(selecteId));
        const top10Cast = credits.cast.slice(0, 10);
        const castNames = top10Cast.map((cast: any) => cast.name);

        const videos = await getMovieVideos(Number(selecteId));
        const videoArray = videos.results;
        const teaserVideo = videoArray.find(
            (video: any) => video.type === "Teaser"
        );
        const seletedVideo = teaserVideo || videoArray[0];

        setData({
            ...data,
            genres: genres,
            keyword: keywords,
            videoURL: seletedVideo.key,
            actor: castNames,
            related: "테스트 관련 콘텐츠",
        });
    };

    useEffect(() => {
        if (selecteId) {
            fetchData();
            setFixed();
        } else {
            setData(null);
        }
    }, [selecteId]);

    if (selecteId) {
        return (
            <AnimatePresence>
                <div className="dim">
                    <CloseDetailModal> </CloseDetailModal>
                </div>
                {data && <DetailModal key="detail-modal" data={data} />}
            </AnimatePresence>
        );
    }
};

export default DetailModalWrap;
