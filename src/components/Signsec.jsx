import CommunButton from "./button";


const BlogHeader = () => {

    return ( 
        <div className="text flex flex-col gap-6  mb-10  text-left ">
        <div className="title text-[28px] font-bold lg:w-[400px]">
             Work <span className="text-primary">whenever</span> you want, <span className="text-primary">wherever</span> you are
        </div>
        <div className="pg text-[16px] font-light pr-10 ">
        Work with us and accomodate your schedule as you like. Our work rates have never been higher, this is because we give our empoyees several benefits that they enjoy throughout their journey.        </div>
        <div>
         <CommunButton text="Join Us"/>
        </div>
    </div>
);
}
 
export default BlogHeader;