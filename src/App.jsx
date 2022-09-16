import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HoverButton from "./components/Hoverbutton";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar"
import Pub from "./components/Pub";


function App() { 
  return (
    <>
      <div className="flex flex-col gap-20">
           <div className="haut flex flex-col gap-20">
             <Navbar/>
             <Header title="Exeprience food" span="Delivery" afterspan="Like no other" pg="We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more." sourcelink="/images/Splashfood.png"/>
           </div>
           <div className="div bg-grey flex flex-col gap-20">
             <div className="categories flex flex-col  gap-3 font-poppins text-center items-center  bg-grey">
              <div className="title text-[28px] font-bold mt-10">
                Our popular <span className="text-primary">Categories</span>
              </div>
              <HoverButton text="Pizzas"/>
              <Menu/>
             </div>
             <Pub source="/images/burger.png" title="Don’t miss out on your favourite food" pg="Sign up now to enjoy your favourite food anywhere, anytime. It is quick, easy and accessible to anyone of any age. Free of charge, taste now is the solution to your every day foods."/>
             <Features/>
             <Footer/>
           </div>
      </div>
    </>

);
}

export default App