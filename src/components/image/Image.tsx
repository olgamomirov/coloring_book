import useStore from "../../zustand";

interface Props {
  svg?: JSX.Element;
}
export default function Image({ svg }: Props) {
  const activeColor = useStore((state) => state.activeColor);

  return (
    <div
      onClick={(e) => {
        if ((e.target as HTMLInputElement).style.fill == "rgb(35, 31, 32)")
          return;
        (e.target as HTMLInputElement).style.fill = activeColor;
      }}
      className="min-w-full  desktop:h-full desktop:w-auto desktop:flex"
    >
      {svg}
    </div>
  );
}
