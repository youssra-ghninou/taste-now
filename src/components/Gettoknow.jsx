import gettoknow from '/images/gettoknow.png'
import team from '/images/team.png'


const Gettoknow = () => {
    return ( 
        <div className="div flex flex-col gap-20 items-center">
        <div className="className Header flex flex-col  gap-4 lg:gap-18 lg:flex-row-reverse items-center px-2 font-poppins text-center lg:text-left">
            <div className="img w-fit lg:pr-10 ">
                <img src={gettoknow} alt="header" className="lg:w-[950px] lg:h-[290px]"/>
            </div>
            <div className="text flex flex-col gap-6 ml-5 lg:pl-10">
                <div className="title text-[28px] font-bold">
                     <span className="text-primary">Teamwork</span> is the key to our sucess
                </div>
                <div className="pg text-[16px] font-light ">
                   At TasteNow we make sure that every decision is determined by a team of us. Everyone´s opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work 
                </div>
            </div>
        </div>
        <div className="className Header flex flex-col gap-4  lg:gap-18 lg:flex-row items-center px-2 font-poppins text-center lg:text-left">
            <div className="img w-fit px-10 ">
                <img src={team} alt="header" className="lg:w-[950px] lg:h-[290px]"/>
            </div>
            <div className="text flex flex-col gap-6 lg:pr-10">
                <div className="title text-[28px] font-bold">
                   We are all in for the <span className="text-primary">enviroment</span> 
                </div>
                <div className="pg text-[16px] font-light ">
                   TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world. 
                </div>
            </div>
        </div>
    </div>


     );
}
 
export default Gettoknow;