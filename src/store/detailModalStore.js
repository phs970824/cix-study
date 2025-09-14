import { create } from "zustand";

export const useDetailModalStore = create((set) => ({
    scrollPosition: 0,
    setScrollPosition: (scrollY) => set({ scrollPosition: scrollY }),
}));

export const useContentWrapStore = create((set, get) => ({
    isFixed: false,
    top: null,
    setFixed: () => {
        const scrollY = window.scrollY * -1;
        set({ isFixed: true });
    },
    setReset: () => {
        set({ isFixed: false });
    },
}));
