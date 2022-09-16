
const Pub = (props) => {
    return ( 
        <div className="className bg-primary flex flex-col px-10 py-10 items-center gap-10 justify-center lg:flex-row  font-poppins text-center lg:text-left">
        <div className="img w-fit ">
            <img src={props.source} alt="header" className=""/>
        </div>
        <div className="text  ">
            <div className="title text-[28px] text-white font-bold">
                {props.title}
            </div>
            <div className="pg text-[16px] text-white font-light ">
                {props.pg}
            </div>
        </div>
        </div>

     );
}
 
export default Pub;