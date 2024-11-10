import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
function Footer(){
    return(
        <div className="h-96 bg-blue-200">
            <div className="text-2xl m-10 font-bold  font-serif uppercase ml-12 text-black">GREEMIND</div>
        <p className="ml-12 text-gray-600">We help you Find
                <br />your dream plant

         </p>
<div>

</div>
<table className="table-fixed md:float-right mr-20 mt-20">
        <thead>
        <tr className="text-black font-bold">
            <th>Information</th>
            <th>Company</th>
            <th>Contact</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border border-blue-200 p-2">About</td>
                <td className="border border-blue-200  p-2">Community</td>
                <td className="border border-blue-200  p-2">Getting Started</td>
            </tr>
            <tr>
                <td className="border border-blue-200 p-2">Product</td>
                <td className="border border-blue-200  p-2">Career</td>
                <td className="border border-blue-200  p-2">Pricing</td>
            </tr>
            <tr>
                <td className="border border-blue-200  p-2">Blog</td>
                <td className="border border-blue-200  p-2">Our story</td>
                <td className="border border-blue-200  p-2">Rescources</td>
            </tr>
        </tbody>


       </table>


            <div className="flex">
            <div className="grid grid-cols-3 gap-4">
            <CiFacebook className="text-3xl ml-14 mt-6  text-gray-600" />
            <CiTwitter className="text-3xl ml-14 mt-6  text-gray-600"/>
            <FaInstagram className="text-3xl ml-14 mt-6  text-gray-600"/>
            </div>
            </div>
        <p className="mt-36 ml-20 text-gray-600">2024 all Right Reserved Term of use GREEMIND</p>
        
        
        </div>
    )
}
export default Footer