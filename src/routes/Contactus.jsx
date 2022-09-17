import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Workwithus from "../components/Workwithus";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";


const Contactus = () => {
    return ( 
        <div className="flex flex-col gap-24">
           <div className="haut flex flex-col gap-20">
             <Navbar/>
             <Header title="How we can" span="help" pg="We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more." sourcelink="/images/bgcontact.png"/>
           </div>
           <div className="flex flex-col bg-grey gap-20">
              <Contactform/>
              <div className="flex items-center justify-center"><Workwithus/></div>
              <Footer/>
           </div>


        </div>
     );
}
 
export default Contactus;