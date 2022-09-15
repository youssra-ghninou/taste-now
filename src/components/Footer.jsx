const Footer = () => {
    return (  
        <div className="container bg-primary flex flex-col  lg:flex-row justify-between px-10">
            <div className="logo text-white font-praise lg:text-[36px] text-[28px] w-[150px]  font-bold">Taste now</div>
            <div className="text flex gap-10">
                <div className="flex flex-col font-poppins text-left gap-2">
                    <div className="pri text-white font-light">Privacy policy</div>
                    <div className="pri text-white font-light">Terms of service</div>
                </div>
                <div className="flex flex-col font-poppins text-left gap-2">
                    <div className="pri text-white font-light">Blog</div>
                    <div className="pri text-white font-light">About us</div>
                </div>
                <div className="flex flex-col font-poppins text-left gap-2">
                    <div className="pri text-white font-light">Help</div>
                    <div className="pri text-white font-light">Contact Us</div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;