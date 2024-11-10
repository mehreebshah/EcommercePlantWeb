import Link from "next/link"
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
function Header(){
    return(
        <header>
        <div>
            {/* logo */}
            <div className="mx-auto flex items-center border-b-2 px-6 py-2 h-24">
                <h1 className="uppercase text-black font-bold cursor-pointer">Greemind</h1>
            <div className="grow">
                <div className="flex items-center justify-center gap-2 md:gap-8 ">

                    <Link href="/" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:decoration-solid hover:bg-blue-300 hover:rounded">Home</Link>
                    <Link href="/About" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300  hover:bg-blue-300 hover:rounded">About</Link>
                    <Link href="/categories" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300  hover:bg-blue-300 hover:rounded">Categories</Link>
                    <Link href="/contact" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300  hover:bg-blue-300 hover:rounded">Contact</Link>
              
            </div>
            </div>
            <IoCartOutline className="mr-6 cursor-pointer" />
            <IoPersonOutline  className="font-bold mr-9 cursor-pointer"/>
            </div>
        </div>
        </header>
    )
}
export default Header