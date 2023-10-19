import useStore from "../../zustand";

interface Props {
  svg?: JSX.Element;
  key?: string;
}
export default function Image({ svg, key }: Props) {
  const activeColor = useStore((state) => state.activeColor);
  const addToHistory = useStore((state) => state.addToHistory);

  return (
    <div
      key={key}
      onClick={(e) => {
        if ((e.target as HTMLInputElement).style.fill == "rgb(35, 31, 32)")
          return;
        (e.target as HTMLInputElement).style.fill = activeColor;
        addToHistory(activeColor);
      }}
      className="min-w-full  desktop:h-full desktop:w-auto desktop:flex"
    >
      {svg}
    </div>
  );
}
