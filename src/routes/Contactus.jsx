import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Workwithus from "../components/Workwithus";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";
import ContactCard from "../components/ContactCard";


const Contactus = () => {
    return ( 
        <div className="flex flex-col gap-24">
           <div className="haut flex flex-col gap-20">
             <Navbar/>
             <Header title="How we can" span="help" pg="We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more." sourcelink="/images/bgcontact.png"/>
           </div>
           <div className="flex flex-col bg-grey gap-20">
              <div className="flex flex-col lg:flex-row gap-5 px-5 lg:px-10">
                 <ContactCard title="Press" pg="Are you interested in our latest news or working on a TasteNow story and need to get in touch?"/>
                 <ContactCard title="Help & Support" pg="Our support team is spread across the globe to give you answers fast. Ask about anything, at anytime and we’ll be there for you."/>
                 <ContactCard title="Sales" pg="Get in touch with our sales team to see how we can work together. TasteNow is always searching for great candidates to become a part of our family, contact us!"/>
              </div>
              <Contactform/>
              <div className="flex items-center justify-center"><Workwithus/></div>
              <Footer/>
           </div>


        </div>
     );
}
 
export default Contactus;