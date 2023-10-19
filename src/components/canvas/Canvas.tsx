import React from "react";
import Palette from "../palette/Palette";
import ImageHolder from "../image/ImageHolder";
import Draggable from "react-draggable";

function Canvas() {
  return (
    <div className="flex w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex-col desktop:flex-row">
      <Draggable axis="both" handle=".handle" grid={[25, 25]} scale={1}>
        <div className="flex flex-wrap justify-center w-[200px] h-[auto] absolute bottom-0 right-0 handle">
          <Palette />
        </div>
      </Draggable>

      <ImageHolder />
    </div>
  );
}

export default Canvas;
