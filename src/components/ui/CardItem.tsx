"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSimpleModalStore } from "@/store/simpleModalStore";
import { cardItemType } from "@/types/types";
import { OpenDetailModal } from "./DetailModalButton";

interface CardItemProps {
    data: cardItemType;
    className?: string;
    ref?: React.RefObject<HTMLDivElement | null> | null;
    isFirst: boolean;
    isLast: boolean;
}

// 마우츠 n초 머문 뒤 simpleModal 열리도록 상수 설정
const HOVER_DELAY = 500;

const CardItem = ({ data, isFirst = false, isLast = false }: CardItemProps) => {
    const cardItemRef = useRef<HTMLDivElement>(null);
    const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
    const { openModal, setData } = useSimpleModalStore();

    const handleMouseEnter = async () => {
        if (hoverTimer) {
            clearTimeout(hoverTimer);
        }

        const timerId = setTimeout(() => {
            if (cardItemRef.current) {
                const rect = cardItemRef.current.getBoundingClientRect();
                const scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop;
                const scrollLeft =
                    window.pageXOffset || document.documentElement.scrollLeft;

                openModal(data, isFirst, isLast, {
                    top: rect.top + scrollTop,
                    left: rect.left + scrollLeft,
                    width: rect.width,
                    height: rect.height,
                });
            }
        }, HOVER_DELAY);

        setHoverTimer(timerId);
    };

    const handleMouseLeave = () => {
        if (hoverTimer) {
            clearTimeout(hoverTimer);
        }
    };
    useEffect(() => {
        return () => {
            // 타이머 정리
            if (hoverTimer) {
                clearTimeout(hoverTimer);
            }
        };
    }, [hoverTimer]);

    return (
        <div
            ref={cardItemRef}
            className="card-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <OpenDetailModal id={data.id}>
                <Image
                    className="card-item__img"
                    src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
                    alt={data.title}
                    width={1920}
                    height={1080}
                />
                <strong className="card-item__tit">{data.title}</strong>
            </OpenDetailModal>
        </div>
    );
};

export default CardItem;
