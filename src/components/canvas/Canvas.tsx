import React, { useRef } from "react";
import Palette from "../palette/Palette";
import ImageHolder from "../image/ImageHolder";
import Draggable from "react-draggable";
import PaletteHistory from "../palette/PaletteHistory";

function Canvas() {
  const palleteRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-full h-auto p-[15%] absolute desktop:left-1/2  desktop:transform desktop:-translate-x-1/2  bg-white flex-col desktop:flex-row rounded-full  desktop:h-[750px] desktop:w-[750px] desktop:p-[110px]">
      <Draggable
        axis="both"
        handle=".handle"
        grid={[25, 25]}
        scale={1}
        onStart={() => {
          if (historyRef.current && palleteRef.current) {
            historyRef.current.style.zIndex = "1";
            palleteRef.current.style.zIndex = "5";
          }
        }}
      >
        <div
          ref={palleteRef}
          className="z-10 flex flex-wrap justify-center p-5 w-[240px] h-[240px] absolute -bottom-48 right-0  desktop:bottom-0  desktop:-right-28 rounded-full bg-yellow-300"
        >
          <div className="handle palette"></div>
          <Palette />
        </div>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        grid={[25, 25]}
        scale={1}
        onStart={(e) => {
          if (historyRef.current && palleteRef.current) {
            palleteRef.current.style.zIndex = "1";
            historyRef.current.style.zIndex = "5";
          }
        }}
      >
        <div
          ref={historyRef}
          className="flex flex-wrap content-start justify-center p-2 w-36 h-36 absolute -bottom-28  desktop:bottom-24  left-0 rounded-full bg-slate-200 border border-red-400"
        >
          <div className="handle history"></div>
          <PaletteHistory />
        </div>
      </Draggable>

      <ImageHolder />
    </div>
  );
}

export default Canvas;
