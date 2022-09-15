import Tastenow from '/images/Tastenow.png'
import driver from '/images/driver.jpg'
import CommunButton from "./button";

const Features = () => {
    return ( 
    <div className="div flex flex-col gap-20 items-center">
        <div className="className Header flex flex-col  gap-3 lg:flex-row-reverse items-center px-2 font-poppins text-center lg:text-left">
            <div className="img w-fit ">
                <img src={Tastenow} alt="header" className=""/>
            </div>
            <div className="text flex flex-col gap-6 ml-5 lg:pl-10">
                <div className="title text-[28px] font-bold">
                     Food <span className="text-primary">Delivery</span> within 45 minutes
                </div>
                <div className="pg text-[16px] font-light ">
                If your food takes more than 45 minutes, it’s on us. We are proud to say we take delivery very seriously, so that you don’t have to worry about how or when the food gets to you.   
                 </div>
                <div>
                 <CommunButton text="Order Now"/>
                </div>
            </div>
        </div>
        <div className="className Header flex flex-col gap-4  lg:gap-24 lg:flex-row items-center px-2 font-poppins text-center lg:text-left">
            <div className="img w-fit ">
                <img src={driver} alt="header" className="lg:w-[600px]"/>
            </div>
            <div className="text flex flex-col gap-6 lg:pr-10">
                <div className="title text-[28px] font-bold">
                     Work <span className="text-primary">Whenever</span> you want, <span className="text-primary">Wherever</span> you are
                </div>
                <div className="pg text-[16px] font-light ">
                Work with us and accomodate your schedule as you like. Our work rates have never been higher, this is because we give our empoyees several benefits that they enjoy throughout their journey.
                </div>
                <div>
                 <CommunButton text="Join Us"/>
                </div>
            </div>
        </div>
    </div>


     );
}
 
export default Features;