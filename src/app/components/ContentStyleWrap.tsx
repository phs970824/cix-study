"use client";

import { useContentWrapStore } from "@/store/detailModalStore";

const ContentStyleWrapper = ({ children }: { children: React.ReactNode }) => {
    const { isFixed } = useContentWrapStore();

    // useEffect(() => {
    //     if (!isFixed && top !== null) {
    //         window.scrollTo({ top: top * -1 });
    //         // useContentWrapStore.getState().set({ top: null });
    //     }
    // }, [isFixed, top]);

    return (
        <div
            className={`${isFixed ? "fixed" : ""}`}
            // style={{ top: top ? `${top}px` : "" }}
        >
            {children}
        </div>
    );
};

export default ContentStyleWrapper;
