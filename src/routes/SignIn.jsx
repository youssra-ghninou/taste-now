import Forms from "../components/Forms";
import Signsec from "../components/Signsec";
import Navbar from "../components/Navbar";

const SignIn = () => {
    return (  
        <div className="flex flex-col lg:flex-row   ">
           <div className="haut flex flex-col justify-between">
             <Navbar/>
           </div>
            <div className="flex flex-col bg-white w-full pl-10 gap-14 lg:gap-28 py-36">
                <Forms/>
                <Signsec/>
            </div>
            <div className="hidden lg:flex items-center justify-center w-full bg-primary">
                <img src="/images/burger.png" alt=""/>
            </div>
        </div>
    );
}
 
export default SignIn;