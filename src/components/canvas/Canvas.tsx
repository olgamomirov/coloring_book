import React from "react";
import Palette from "../palette/Palette";
import Image from "../image/Image";

function Canvas() {
  return (
    <div className="flex w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white ">
      <Palette />
      <Image />
    </div>
  );
}

export default Canvas;
