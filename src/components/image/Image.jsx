import useStore from "../../zustand";

const reqSvgs = require.context ( '../../svgs/', true, /\.svg$/ );
const allSvgFilepaths = reqSvgs.keys ()
console.log(allSvgFilepaths)
export default function Image() {
    const activeColor = useStore((state) => state.activeColor);

  return <div onClick={(e)=>{
    e.target.style.fill=activeColor;
  }}  style={{width:"50%"}}>
   </div>;
}
