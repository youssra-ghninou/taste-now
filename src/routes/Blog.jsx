import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import BlogHeader from "../components/BlogHeader";

const Blog = () => {
    return ( 
        <div className="flex flex-col gap-24">
           <div className="haut flex flex-col gap-20">
             <Navbar/>
           </div>
           <BlogHeader title1="Join our" title2="community" title3="blogs and be a part of" title4="us" pg="Discover new blogs every week, and share your knowledge with the community. Be a part of our everyday blogs within the TasteNow community."/>
           <div className="flex flex-col gap-6 bg-grey pt-10">
              <form action="" className="">
                <input type="search" className=" bg-white rounded-3xl border-primary border-2 h-[35px] pl-5 text-primary mx-10" placeholder="Search a blog" />
              </form>
              <Blogs/>
              <Footer/>
           </div>
           
        </div>
     );
}
 
export default Blog;