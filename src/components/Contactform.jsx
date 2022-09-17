const Contactform = () => {
    return ( 
        <div className="flex flex-col gap-5 bg-primary px-10 lg:px-20 py-10">
            <div className="text-white font-bold text-[18px] font-poppins">
                  Contact us
            </div>
            <div className="flex flex-col lg:flex-row gap-6  ">
                <form action=""><input type="search"className="  bg-dprimary rounded-lg h-[60px] px-10 " placeholder="Your name" /></form>
                <form action=""><input type="search"className="  bg-dprimary rounded-lg h-[60px] px-10 " placeholder="Phone number" /></form>
                <form action=""><input type="search"className=" bg-dprimary rounded-lg h-[60px] px-10 " placeholder="Your email" /></form>
            </div>
            <form action=""><input type="search"className="bg-dprimary text-white rounded-lg h-[220px] px-10  " placeholder="Your message" /></form>


        </div>
     );
}
 
export default Contactform;