export type heroContType = {
    id: string;
    title: string;
    titleImage: string;
    image: string;
    video: string;
    videoPoster: string;
    description: string;
};

export type cardItemType = {
    id: number;
    title: string;
    backdrop_path: string;
};

export type categoryType = {
    title: string;
    data: cardItemType[];
};

export type DetailModalProps = {
    title: string;
    genres: string[];
    actor: string[];
    keyword: string[];
    backdrop_path: string;
    videoURL: string;
    adult: boolean;
    runtime: string;
    release_date: string;
    overview: string;
    related: string;
};
