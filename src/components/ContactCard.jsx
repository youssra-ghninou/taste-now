import CommunButton from './button';

const ContactCard = (props) => {
    return ( 
      
        <div className="div flex flex-col shadow-xl rounded-[20px] mt-20 lg:w-[373px] ">
            <div className="h-6 rounded-t-[20px] bg-primary  "></div>
            <div className="flex flex-col gap-10 justify-center  px-3 py-10  ">
                  <div className="flex flex-col gap-3 pt-5">
                      <div className="text-black font-bold text-[22px]">
                        {props.title}
                      </div>
                      <div className="text-black font-light text-[18px]">
                        {props.pg}
                      </div>
                  </div>
                  <div className="button mt-10">
                        <CommunButton text="Visit Press Page"/>
                  </div>
            </div>
        </div>
     );
}
 
export default ContactCard;