
const Header = (props) => {
    return ( 
        <div className="className Header flex flex-col mb-10 mt-20  gap-3 px-2 font-poppins text-center md:text-left md:flex-row md:px-10 md:items-center">
            <div className="text md:w-1/2">
                 <div className="title text-[28px] font-bold">
                    {props.title} <span className="text-primary">{props.span}</span> {props.afterspan}
                 </div>
                 <div className="pg text-[16px] font-light ">
                     {props.pg}
                 </div>
            </div>
            <div className="img w-fit ">
            <img src={props.sourcelink} alt="header" className="w-[500px] "/>

            </div>
        </div>
     );
}
 
export default Header;