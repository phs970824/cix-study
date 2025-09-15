import { create } from 'zustand';
import { getMovieKeywords } from '@/api/tmdb/moviesDetail';

export const useSimpleModalStore = create((set) => ({
    isOpen: false,
    data: null,
    isFirst: false,
    isLast: false,
    isLoading: false,
    position: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    },
    openModal: async (data, isFirst, isLast, position) => {
        set({ isLoading: true });

        const [allData] = await Promise.all([getMovieKeywords(data.id)]);

        const limitedKeywords = allData.keywords && allData.keywords.length > 0 ? allData.keywords.slice(0, 3) : [];

        const finalData = {
            ...data,
            keywords: limitedKeywords,
        };

        set({ isOpen: true, data: finalData, isFirst, isLast, isLoading: false, position: position });
    },
    closeModal: () =>
        set({
            isOpen: false,
            data: null,
            isFirst: false,
            isLast: false,
            isLoading: false,
            position: {
                top: 0,
                left: 0,
                width: 0,
                height: 0,
            },
        }),
}));
