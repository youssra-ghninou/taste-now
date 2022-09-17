import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";

const Blog = () => {
    return ( 
        <div className="flex flex-col gap-24">
           <div className="haut flex flex-col gap-20">
             <Navbar/>
           </div>
           <div className="flex flex-col gap-6">
               <form action="" className="">
                <input type="search" className=" bg-white rounded-3xl border-primary border-2 h-[35px] pl-5 text-primary mx-10" placeholder="Search a blog" />
               </form>
               <Blogs/>
           </div>
           <Footer/>
        </div>
     );
}
 
export default Blog;