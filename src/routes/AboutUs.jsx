import Header from "./components/Header";
import Navbar from "./components/Navbar"

const AboutUs = () => {
    return ( 
        <div className="about flex flex-col gap-20">
           <div className="haut flex flex-col gap-20">
             <Navbar/>
             <Header title="We deliver for you to" span="enjoy" pg="We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more." sourcelink="/images/coffe.png"/>
           </div>
           <div className="div bg-grey flex flex-col gap-20">
             <Pub source="/images/ouremployes.png" title="Our employees define who we are" pg="We are proud to have a team of professionals leading our every-day activities and tasks. Collaborative culture of inclusion, growth, and originality are only a few of our beliefs. Join us now, and take your career to the next step."/>
           </div>

        </div>
        
     );
}
 
export default AboutUs;