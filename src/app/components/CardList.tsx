"use client";

import { useRef } from "react";
import CardItem from "@/components/ui/CardItem";
import { categoryType } from "@/types/types";

// style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const CardList = ({ items }: { items: categoryType }) => {
    const paginationRef = useRef<HTMLDivElement | null>(null);
    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <div className="card-list">
            <div className="flex">
                <h3>{items.title}</h3>
                <a href="">
                    모두 보기 <span className="arrow"></span>
                </a>
            </div>
            <div className="contents">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation, Pagination]}
                    slidesPerView={6}
                    slidesPerGroup={6}
                    navigation
                    pagination={{ el: paginationRef.current, clickable: true }}
                    className="swiper"
                >
                    {items.data.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <CardItem
                                data={item}
                                isFirst={index % 6 === 0}
                                isLast={index % 6 === 5}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div ref={paginationRef}></div>
            </div>
        </div>
    );
};

export default CardList;
