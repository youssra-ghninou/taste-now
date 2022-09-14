
const CommunButton = (props) => {
    return (
                <button type={props.type} className={`bg-primary px-8  text-white h-[46px] text-[16px] rounded-[5px] font-light font-poppins`+props.className}>
                {props.text}
                
                </button>
    );
}
 
export default CommunButton;