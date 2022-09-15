import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HoverButton from "./components/Hoverbutton";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar"
import Pub from "./components/Pub";


function App() { 
  return (
      <div className="flex flex-col gap-20">
           <div className="haut flex flex-col gap-20">
             <Navbar/>
             <Header/>
           </div>
           <div className="div bg-grey flex flex-col gap-20">
             <div className="categories flex flex-col  gap-3 font-poppins text-center items-center  bg-grey">
              <div className="title text-[28px] font-bold mt-10">
                Our popular <span className="text-primary">Categories</span>
              </div>
              <HoverButton text="Pizzas"/>
              <Menu/>
             </div>
             <Pub/>
             <Features/>
             <Footer/>
           </div>

      </div>

);
}

export default App