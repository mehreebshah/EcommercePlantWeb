import banner from "../public/hero.png"
import Image from "next/image"
import { MdSearch } from "react-icons/md";
import frame1 from "../public/Frame 9.png"
import frame2 from "../public/Frame 7.png";
import frame3 from "../public/Frame 8.png";


function Hero(){
     return(
      <main>

         <div className="flex h-auto mx-20 rounded-2xl mt-10 bg-blue-200">
          <div>
  
          <h1 className="font-extrabold text-7xl font-serif ml-10 mt-10">Buy your dream Plants </h1>
        <h5 className="font-semibold text-5xl mt-20 ml-14 grid-cols-2">50+</h5>
        <p className="ml-12 mt-2 text-md ">Plant Species</p>
     <form className="w-[440px] relative">
      <div className="relative mt-12 ml-9">
          <input type="search" placeholder="What are you looking for?" className="w-full p-4 rounded-full bg-blue-950" />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-blue-600 rounded-full">
          <MdSearch />
          </button>
      </div>
      </form>  
    
    </div>
       <div>
          
          <Image
          src={banner} alt="banner" width={500} height={500}
         className="bg-black rounded-s-md rounded-t-full rounded-l-full rounded-b-full"
         />
  
          </div>   
         </div>
  
      <div className="bg-transparent h-1/6 flex">
         <div className="mt-20">
         <h3 className="text-2xl font-semibold ml-4 p-4">Best Selling Plants</h3>
         <p className="ml-8">Easiest way to healthy life by 
           <br /> buying your favorite plants</p>
           <button  className="bg-blue-200 m-5 px-8 p-4  rounded-md hover:bg-blue-300 hover:transition-transform hover:-translate-y-1 hover:scale-110 duration-300 ">See More
           </button>
         </div>
      <div className="mt-4 rounded-lg shadow-sm ml-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:decoration-solid">
         <Image
         src={frame1} alt="plants" 
         
         />
         <h4>Natural Plants</h4>
         <p>$1,400.00</p>
         </div> 
         <div className="mt-4 rounded-lg shadow-sm ml-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:decoration-solid">
            <Image 
            src={frame3} alt="frame3"
            />
            <h4>Artificial Plants</h4>
            <p>$900.00</p>
         </div>
      <div className="mt-4 rounded-lg shadow-sm ml-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:decoration-solid">
         <Image 
         src={frame2} alt="plants2" 
         />
         <h4>Artificial Plants</h4>
         <p>$350.00</p>
      </div>
      </div> 
      </main>  
       
    )
}
export default Hero