import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export default function Example() {
    return (
        <div className="nav right-0 mr-1 mt-1 fixed">
            <div className="mobile lg:hidden ">
                <div className="logo text-primary text-praise text-[28px] font-bold">Taste Now</div>
                <Menu menuButton={<MenuButton><i class="fa-solid fa-bars text-primary text-[25px]  "></i></MenuButton>} transition>
                    <MenuItem >
                    <div className="home text-[20px] text-poppins text-black font-normal hover:text-primary ">Home</div>
                    </MenuItem>
                    <MenuItem>
                       <div className="home text-[20px] text-poppins text-black font-normal hover:text-primary ">About Us </div>
                    </MenuItem>
                    <MenuItem>
                       <div className="home text-[20px] text-poppins text-black font-normal hover:text-primary ">Blog </div>
                    </MenuItem>
                    <MenuItem>
                       <div className="home text-[20px] text-poppins text-black font-normal hover:text-primary ">Contact Us </div>
                    </MenuItem>
                    <MenuItem>
                       <div className="home "><i class="fa-solid fa-cart-shopping text-[20px]  text-black  hover:text-primary "></i></div>
                    </MenuItem>
                </Menu>
            </div>
            <div className="desktop hidden lg:flex lg:gap-11 lg:mt-3 lg:mr-3 lg:text-abel lg:text-dviolet dark:text-grey lg:text-[16px]">
            </div>

        </div>
    );
}     