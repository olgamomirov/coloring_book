import styles from "./palette.module.css";
import useStore from "../../zustand";

export default function Palette() {
  const changeActiveColor = useStore((state) => state.changeActiveColor);
  const activeColor = useStore((state) => state.activeColor);

  return (
    <div className="flex flex-wrap justify-center w-auto h-1/2 absolute bottom-0 right-0">
      <img src="color-palette.png" />
      {/* red */}
      <div
        className="bottom-[8%] left-[29%]  w-[16%]  h-[16%] absolute cursor-pointer"
        onClick={() => changeActiveColor("#d13b2c")}
      ></div>
      {/* yellow */}
      <div
        className="bottom-[8%] right-[28%]  w-[23%]  h-[25%] absolute cursor-pointer"
        onClick={() => changeActiveColor("#f6ca43")}
      ></div>
      {/*  light-blue */}
      <div
        className="bottom-[19%] left-[13%]  w-[13%]  h-[12%] absolute cursor-pointer"
        onClick={() => changeActiveColor("#40b8ea")}
      ></div>
      {/* green */}
      <div
        className="bottom-[27%] left-[28%]  w-[22%]  h-[22%] absolute cursor-pointer"
        onClick={() => changeActiveColor("#9fcc3b")}
      ></div>
      {/* purple */}
      <div
        className="bottom-[37%] left-[6%]  w-[19%]  h-[17%] absolute cursor-pointer"
        onClick={() => changeActiveColor("#6b40ab")}
      ></div>
      {/* dark-blue */}
      <div
        className="top-[23%] left-[13%]  w-[19%]  h-[17%] absolute cursor-pointer"
        onClick={() => changeActiveColor("#3062c3")}
      ></div>
      {/* orange */}
      <div
        className="top-[8%] left-[33%]  w-[22%]  h-[22%] absolute cursor-pointer"
        onClick={() => changeActiveColor("#fba540")}
      ></div>
      {/* top-blue */}
      <div
        className="top-[16%] right-[22%]  w-[22%]  h-[20%] absolute cursor-pointer"
        onClick={() => changeActiveColor("#00beca")}
      ></div>
      {/* color picker */}
      <input
        type="color"
        className="top-[41%] right-[33%]  w-[14%]  h-[17%] absolute cursor-pointer opacity-0"
        onChange={(e) => changeActiveColor(e.target.value)}
        value={activeColor}
      />
    </div>
  );
}
