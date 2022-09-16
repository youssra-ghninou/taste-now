const TeamCard = (props) => {
    return ( 
        <div className="container mx-2 flex flex-col gap-2 rounded-sm shadow-xl ">
        <div className="img  ">
            <img src={props.source} alt="header" className=" w-[100%]"/>
        </div>
        <div className="field text-primary font-light font-poppins px-6 py-4">
           {props.text}
        </div>
        </div>
     );
}
 
export default TeamCard;