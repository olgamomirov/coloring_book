import { create } from "zustand";
interface States {
  activeColor: string;
  changeActiveColor: (color: string) => void;
}
const useStore = create<States>((set) => ({
  activeColor: "#000000",
  changeActiveColor: (color) => set(() => ({ activeColor: color })),
}));

export default useStore;
