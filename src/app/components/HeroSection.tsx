"use client";

import Image from "next/image";
import { useGetTrending } from "@/api/tmdb/trending";

// style
import IconTextButton from "@/components/ui/IconTextButton";
import { useRef } from "react";
import { OpenDetailModal } from "@/components/ui/DetailModalButton";

const HeroSection = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    const { data } = useGetTrending();
    // const data = {
    //     id: 1311031,
    //     title: "The Thursday Murder Club",
    //     backdrop_path: "/4KN06gns94rQFoYQWDGunK7Cob4.jpg",
    //     overview:
    //         "A group of senior sleuths passionate about solving cold cases get plunged into a real-life murder mystery in this comic crime caper.",
    // };

    // useEffect(() => {
    //     const tl = gsap.timeline();

    //     tl.to(titleRef.current, {
    //         scale: 0.8,
    //         y: (): number => {
    //             if (descRef.current) {
    //                 const height =
    //                     descRef.current.getBoundingClientRect().height;
    //                 return height;
    //             }
    //             return 0;
    //         },
    //         duration: 2,
    //         delay: 3,
    //     }).to(descRef.current, { scale: 0, duration: 2 }, "<");
    // }, [data]);

    return (
        <section className="sc-hero">
            <h2 className="blind">특별 소개 콘텐츠</h2>
            {data && (
                <div className="hero__inner">
                    <div className="i-box">
                        <Image
                            src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
                            alt={data.title}
                            width={1280}
                            height={720}
                        />
                        <span className="layer-l"></span>
                        <span className="layer-b"></span>
                    </div>
                    <div className="t-box">
                        <div ref={titleRef} className="hero__tit">
                            <strong>{data.title}</strong>
                        </div>
                        <p ref={descRef} className="hero__desc">
                            {data.overview}
                        </p>
                        <div className="b-box">
                            <IconTextButton
                                text="재생"
                                className="hero__play"
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        data-icon="PlayStandard"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                }
                            />

                            <OpenDetailModal id={data.id}>
                                <IconTextButton
                                    text="상세 정보"
                                    className="hero__more"
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            data-icon="CircleIStandard"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    }
                                />
                            </OpenDetailModal>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
