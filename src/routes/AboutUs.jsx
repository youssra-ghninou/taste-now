import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Pub from "../components/Pub";
import Footer from "../components/Footer";
import Gettoknow from "../components/Gettoknow";
import Workwithus from "../components/Workwithus";



const AboutUs = () => {
    return ( 
        <div className="about flex flex-col gap-20">
           <div className="haut flex flex-col gap-20">
             <Navbar/>
             <Header title="We deliver for you to" span="enjoy" pg="We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more." sourcelink="/images/coffe.png"/>
           </div>
           <div className="div bg-grey flex flex-col gap-16">
               <div className="flex flex-col gap-4">
                   <div className="title text-[32px] font-bold mt-10 lg:pl-20">
                       Get to know <span className="text-primary">us</span>
                   </div>
                   <Gettoknow/>
               </div>
               <Pub source="/images/ouremployes.png" title="Our employees define who we are" pg="We are proud to have a team of professionals leading our every-day activities and tasks. Collaborative culture of inclusion, growth, and originality are only a few of our beliefs. Join us now, and take your career to the next step."/>
               <div className="flex items-center justify-center"><Workwithus/></div>
               <Footer/>
           </div>

        </div>
        
     );
}
 
export default AboutUs;