import frame1 from "../public/Frame 36.png";
import frame2 from "../public/Frame 37.png";
import frame3 from "../public/Frame 38.png";
import Image from "next/image";
function Categories(){
    return(
        <div className="h-full max-w-full ">
        <div className="text-center font-serif font-bold text-2xl">
            Categories
        </div>
        <div className="text-center font-serif font-light mt-2">Find what you are looking for</div>
        <div className="bg-blue-200 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:decoration-solid">
        <Image src={frame1} alt="Natural-Plants" className="w-auto ml-24 relative -translate-y-10" />
        <div className="font-bold ml-52">Natural Plants</div>
        </div >
<div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:decoration-solid">
         <Image src={frame3} alt="Natural-Plants" className="w-auto ml-24 mt-12"/>
         <div className="font-bold ml-56">Plant Accessories</div>
         <div className="text-gray-950 ml-32">All type of plants Accessories availible there</div>
         <button className="m-10 ml-60 mt-3 px-8 p-2 border-2 bg-blue-100 rounded-md hover:bg-blue-300 hover:transition-transform hover:-translate-y-1 hover:scale-110 duration-300">Explore</button>
</div>

<div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:decoration-solid">
         <Image src={frame2} alt="plants" className="mt-12 ml-12 relative -translate-y-28" />
        <div className="font-bold text-center -m-20">Artificial Plants</div>
        </div>      
        </div>
        </div>
    )
}
export default Categories