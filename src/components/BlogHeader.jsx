import CommunButton from "./button";


const BlogHeader = () => {

    return ( 
        <div className="text flex flex-col gap-6  mb-5 items-center justify-center text-center  mx-5 lg:mx-20 ">
        <div className="title text-[28px] font-bold lg:w-[400px]">
             Join our <span className="text-primary">community</span> blogs and be a part of <span className="text-primary">us</span> 
        </div>
        <div className="pg text-[16px] font-light lg:w-[600px] ">
             Discover new blogs every week, and share your knowledge with the community. Be a part of our everyday blogs within the TasteNow community.
        </div>
        <div>
         <CommunButton text="Create a blog"/>
        </div>
    </div>
);
}
 
export default BlogHeader;