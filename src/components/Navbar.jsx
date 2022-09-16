import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import CommunButton from './button';

export default function Example() {
    return (
        <div className="nav right-0 mx-2 mt-1 px-6 flex items-center justify-between ">
            <div className="logo text-primary font-praise lg:text-[36px] text-[28px] w-[150px]  font-bold">Taste now</div>
            <div className="mobile lg:hidden ">
                <Menu menuButton={<MenuButton><i className="fa-solid fa-bars text-primary text-[25px]  "></i></MenuButton>} transition>
                    <MenuItem >
                    <div className="home text-[16px] font-poppins text-black font-normal hover:text-primary ">Home</div>
                    </MenuItem>
                    <MenuItem>
                       <div className="home text-[16px] font-poppins text-black font-normal hover:text-primary ">About Us </div>
                    </MenuItem>
                    <MenuItem>
                       <div className="home text-[16px] font-poppins text-black font-normal hover:text-primary ">Blog </div>
                    </MenuItem>
                    <MenuItem>
                       <div className="home text-[16px] font-poppins text-black font-normal hover:text-primary ">Contact Us </div>
                    </MenuItem>
                    <MenuItem>
                       <div className="home "><i className="fa-solid fa-cart-shopping text-[20px]  text-black  hover:text-primary "></i></div>
                    </MenuItem>
                    <MenuItem>
                    <div className="button">
                        <CommunButton text="Sign up"/>
                    </div>
                    </MenuItem>

                </Menu>
            </div>
            <div className="desktop hidden lg:flex lg:gap-9 lg:mt-3 lg:mr-3 lg:text-abel lg:text-dviolet dark:text-grey lg:text-[16px] lg:items-center ">
                <a href="" className="home text-[20px] text-poppins text-black font-light hover:text-primary"> Home</a>
                <a href="" className="home text-[20px] text-poppins text-black font-light hover:text-primary"> About Us</a>
                <a href="" className="home text-[20px] text-poppins text-black font-light hover:text-primary"> Blog</a>
                <a href="" className="home text-[20px] text-poppins text-black font-light hover:text-primary"> Contact Us </a>
                <div className="home "><i className="fa-solid fa-cart-shopping text-[20px]  text-black  hover:text-primary "></i></div>
                <div className="button">
                        <CommunButton text="Sign up"/>
                </div>

            </div>

        </div>
    );
}     