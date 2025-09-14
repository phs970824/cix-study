import { create } from "zustand";
import { getMovieKeywords } from "@/api/tmdb/moviesDetail";

export const useSimpleModalStore = create((set) => ({
    isOpen: false,
    data: null,
    isFirst: false,
    isLast: false,
    position: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    },
    openModal: async (data, isFirst, isLast, position) => {
        set({ isOpen: true, data: data, isFirst, isLast, position: position });

        if (data.id) {
            const keywords = await getMovieKeywords(data.id);
            const limitedKeywords =
                keywords.keywords && keywords.keywords.length > 0
                    ? keywords.keywords.slice(0, 3)
                    : [];
            set({ data: { ...data, keywords: limitedKeywords } });
        }
    },
    closeModal: () =>
        set({
            isOpen: false,
            data: null,
            isFirst: false,
            isLast: false,
            position: {
                top: 0,
                left: 0,
                width: 0,
                height: 0,
            },
        }),
}));
