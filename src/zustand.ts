import { create } from "zustand";
interface States {
  activeColor: string;
  previousColors: Array<string>;
  changeActiveColor: (color: string) => void;
  addToHistory: (color: string) => void;
}
const useStore = create<States>((set, get) => ({
  activeColor: "#000000",
  changeActiveColor: (color) => set(() => ({ activeColor: color })),

  previousColors: [],
  addToHistory: (color) => {
    if (!get().previousColors.includes(color)) {
      set((state) => ({
        previousColors:
          state.previousColors.length < 5
            ? [...state.previousColors, color]
            : [...state.previousColors.slice(1), color],
      }));
    }
  },
}));

export default useStore;
