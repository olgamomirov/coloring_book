import React from "react";
import Palette from "../palette/Palette";
import ImageHolder from "../image/ImageHolder";
import Draggable from "react-draggable";

function Canvas() {
  return (
    <div className="flex w-full h-auto p-[15%] absolute desktop:left-1/2  desktop:transform desktop:-translate-x-1/2  bg-white flex-col desktop:flex-row rounded-full  desktop:h-[750px] desktop:w-[750px] desktop:p-[110px]">
      <Draggable axis="both" handle=".handle" grid={[25, 25]} scale={1}>
        <div className="flex flex-wrap justify-center p-5 w-[240px] h-[240px] absolute -bottom-48  desktop:bottom-0  desktop:-right-28 rounded-full bg-yellow-300">
          <div className="handle"></div>

          <Palette />
        </div>
      </Draggable>

      <ImageHolder />
    </div>
  );
}

export default Canvas;
