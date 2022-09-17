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
           <BlogHeader/>
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