import CommunButton from "./button";


const Forms = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <div className="title text-[28px] font-bold lg:w-[400px]">
                 Sign up
            </div>
            <div className="pg text-[16px] font-light pr-10 ">
                 Sign up using social networks
            </div>
            <div className="socials flex gap-2 items-center">
                <img src="/images/gmailg.png" alt=""/>
                <img src="/images/fb.png" alt="socials"/>
                <img src="/images/link.png" alt="socials"/>
            </div>
            <div className="flex items-center gap-1">
              <img src="/images/line.png" alt=""/>
                 Or
              <img src="/images/line.png" alt=""/>
            </div>
            <div className=" flex flex-col gap-4 ">
              <form action="" className="">
                <input type="search" className=" bg-white rounded-lg border-primary border-2 h-[35px] py-5 pl-5 pr-10 text-primary " placeholder="Email" />
              </form>
              <form action="" className="">
                <input type="search" className=" bg-white rounded-lg border-primary border-2 h-[35px] py-5 pl-5 pr-10 text-primary " placeholder="Password" />
              </form>
              <div>
                   <CommunButton text="Sign up"/>
              </div>
            </div>
        </div>

     );
}
 
export default Forms;