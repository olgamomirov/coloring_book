import Image from "../image/Image";
import svgs from "../../svgs";

export default function ImageHolder() {
  return (
    <div className="flex overflow-auto h-1/2">
      {svgs.map((svg) => (
        <Image svg={svg} />
      ))}
    </div>
  );
}
