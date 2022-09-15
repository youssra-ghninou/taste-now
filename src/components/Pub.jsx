import burger from '/images/burger.png'

const Pub = () => {
    return ( 
        <div className="className bg-primary flex flex-col px-10 py-10 items-center gap-10 justify-center lg:flex-row  font-poppins text-center lg:text-left">
        <div className="img w-fit ">
            <img src={burger} alt="header" className=""/>
        </div>
        <div className="text  ">
            <div className="title text-[28px] text-white font-bold">
            Don’t miss out on your favourite food
            </div>
            <div className="pg text-[16px] text-white font-light ">
            Sign up now to enjoy your favourite food anywhere, anytime. It is quick, easy and accessible to anyone of any age. Free of charge, taste now is the solution to your every day foods.        </div>
            </div>
        </div>

     );
}
 
export default Pub;