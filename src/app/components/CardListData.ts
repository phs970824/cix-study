import { categoryType } from "@/types/types";

export default function getCardListData(
    pageParam: number,
    allData: {
        popular2: categoryType | undefined;
        nowPlaying2: categoryType | undefined;
        topRated2: categoryType | undefined;
        upcoming2: categoryType | undefined;
        upcoming: categoryType | undefined;
    }
) {
    const MAX_PAGE = 4;

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (pageParam <= MAX_PAGE) {
                if (pageParam === 1) {
                    res(allData.upcoming);
                } else if (pageParam === 2) {
                    res(allData.popular2);
                } else if (pageParam === 3) {
                    res(allData.nowPlaying2);
                } else if (pageParam === 4) {
                    res(allData.topRated2);
                } else {
                    res(allData.upcoming2); // 기본값
                }
            } else {
                rej(new Error("error"));
            }
        }, 1000);
    });
}
