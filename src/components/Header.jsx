import Splashfood from '/images/Splashfood.png'

const Header = () => {
    return ( 
        <div className="className Header flex flex-col mb-10 gap-3 px-2 font-poppins text-center md:text-left md:flex-row md:px-10 md:items-center">
            <div className="text md:w-1/2">
                 <div className="title text-[28px] font-bold">
                      Experience food <span className="text-primary">Delivery</span> like no other
                 </div>
                 <div className="pg text-[16px] font-light ">
                      We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.
                 </div>
            </div>
            <div className="img w-fit ">
            <img src={Splashfood} alt="header" className="w-[500px] "/>

            </div>
        </div>
     );
}
 
export default Header;