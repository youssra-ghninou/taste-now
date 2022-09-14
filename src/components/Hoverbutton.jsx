const HoverButton = (props) => {
    return ( 
        <button type={props.type} className={`bg-white  w-[300px] text-primary h-[46px] text-[16px] px-8 rounded-[5px]  font-light font-poppins hover:bg-primary shadow-lg shadow-grey hover:text-white `+props.className}>
        {props.text}
        
        </button>

     );
}
 
export default HoverButton;