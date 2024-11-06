import { create } from "zustand";

interface menuState {
  menu: boolean;
  toggleMenu: () => void;
}

export const useStore = create<menuState>()((set) => ({
  menu: false,
  toggleMenu: () => set((state) => ({ menu: !state.menu })),
}));
