import { create } from "zustand";

export const useDetailModalStore = create((set) => ({
    scrollPosition: 0,
    setScrollPosition: (scrollY) => set({ scrollPosition: scrollY }),
}));

export const useContentWrapStore = create((set) => ({
    isFixed: false,
    top: null,
    setFixed: () => {
        set({ isFixed: true });
    },
    setReset: () => {
        set({ isFixed: false });
    },
}));
