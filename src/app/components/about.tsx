import { PiPottedPlantThin } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";
function AboutPage(){
    return(
        <div className="h-screen bg-transparent">
            <h1 className="text-4xl font-bold mt-20 text-center">About us</h1>
            <p className="text-center mt-4">order now and apperciate the beauty of Nature</p>
        <div className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16">
            <div className="mx-auto  p-4  w-72 ">
        <PiPottedPlantThin className=" w-24 h-20 bg-blue-200 rounded-full" />
            <div className="font-bold mt-4">
            Large Assortment
            </div>     
            <div className="whitespace-pre mt-2 font-serif text-gray-600">we offer many different types of product 
            <br />with fewer variation in each category.</div>
        </div>
        <div className="m-20 mx-auto  p-4 w-72  mt-2">
        <CiDeliveryTruck className=" w-24 h-20 bg-blue-200 rounded-full"/>
        <div className="font-bold mt-4">
            Fast & Free Shipping
            </div>
            
            <div className="whitespace-pre mt-2 font-serif text-gray-600">4-day or less delivery time, Free shipping 
            <br />and an expedited delivery option.</div>
        </div>
        <div className="m-20 mx-auto  p-4 w-72  mt-2">
        <PiPhoneCallThin  className=" w-24 h-20 bg-blue-200 rounded-full"/>
        <div className="font-bold mt-4">
            24/7 Support
            </div>
            
            <div className="whitespace-pre mt-2 font-serif  text-gray-600">answers to any business related inquiry
            <br />24/7 and in real-time.</div>
        </div>

        </div>
        </div>
        

    )
}

export default AboutPage