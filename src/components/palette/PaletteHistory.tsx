import useStore from "../../zustand";

export default function PaletteHistory() {
  const previousColors = useStore((state) => state.previousColors);
  const changeActiveColor = useStore((state) => state.changeActiveColor);
  return (
    <>
      <span className="relative top-12 block w-full text-center">
        Color history
      </span>
      <div className="relative h-fit top-14 flex flex-wrap">
        {previousColors.length > 0
          ? previousColors.map((color, i) => (
              <div
                key={`history${1}`}
                className=" w-4 h-4 rounded-full m-1 border border-slate-500 cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => changeActiveColor(color)}
              ></div>
            ))
          : "start coloring"}
      </div>
    </>
  );
}
