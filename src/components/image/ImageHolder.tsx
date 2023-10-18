import Image from "../image/Image";
import svgs from "../../svgs";

export default function ImageHolder() {
  return (
    <div className="flex overflow-auto h-auto desktop:h-full desktop:w-[500px]">
      {svgs.map((svg) => (
        <Image svg={svg} />
      ))}
    </div>
  );
}
