import { NavLink } from "react-router-dom"
import { GrHomeRounded } from "react-icons/gr";
import { TbCategory2 } from "react-icons/tb";
import {CiShoppingBasket} from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { LuLogs } from "react-icons/lu";

export default function NavMobileMain(){

    return (
        <div className="mobileNavbar sticky bottom-0 right-0 w-full md:hidden">          
            <nav className="yekan-bold pb-3">
                <ul>
                    <li><NavLink to={'/'}><GrHomeRounded size={'24px'}/> <span>خانه</span></NavLink></li>
                    <li><NavLink to={'/1'}><TbCategory2 size={'28px'}/> <span>دسته بندی</span></NavLink></li>
                    <li><NavLink to={'/ShoppingBag'}><CiShoppingBasket size={'30px'}/> <span>سبد خرید</span></NavLink></li>
                    <li><NavLink to={'/3'}><LuLogs size={'30px'}/> <span>بلاگ</span></NavLink></li>
                    <li><NavLink to={'/4'}><GoPerson size={'30px'}/> <span>ورود</span></NavLink></li>
                </ul>
            </nav>                     
        </div>
    )
}