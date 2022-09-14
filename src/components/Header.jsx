import Headerbg from '/images/Headerbg.png'
const Header = () => {
    return ( 
        <div className="className Header flex flex-col  gap-3 px-2 font-poppins text-center lg:text-left">
            <div className="title text-[28px] font-bold">
                 Experience food <span className="text-primary">Delivery</span> like no other
            </div>
            <div className="pg text-[16px] font-light ">
                 We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.
            </div>
            <div className="img w-fit ">
            <img src={Headerbg} alt="header" className=""/>
            </div>
        </div>
     );
}
 
export default Header;