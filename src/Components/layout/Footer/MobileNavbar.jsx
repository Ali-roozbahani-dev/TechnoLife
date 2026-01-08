import { NavLink } from "react-router-dom"
import { GrHomeRounded } from "react-icons/gr";
import { TbCategory2 } from "react-icons/tb";
import {CiShoppingBasket} from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { LuLogs } from "react-icons/lu";
import { GiShoppingCart } from "react-icons/gi";
import { FaPercent } from "react-icons/fa";

export default function MobileNavbar({isProductPage = false}){

    return (
        <div className="mobileNavbar sticky bottom-0 right-0 w-full md:hidden">
            {isProductPage ?

            // نمایش قیمت در صفحه محصولات 
        <div className="py-3 yekan-regular bg-[#f0f0f0]">
            <div className="flex justify-end items-center px-3">
                <span className="TechnoOffPercent yekan-bold"><FaPercent className="inline-block me-1 text-[10px] md:text-[11px]"/> <span className="pt-0.5">{'22'}</span></span>
                <div className="yekan-bold">                    
                    <span className="line-through mx-4 text-[#848484]">{"2222222222"}</span>
                    <div className="text-lg inline-block text-[#323232]">{"33333333"} <span className="text-sm">تومان</span></div>                                        
                </div>
            </div>
            <div className="px-3 mt-2">
                <div className="bg-[#212f6d] px-5 py-2 rounded-lg flex justify-end items-center text-white">
                    <span className="mx-auto">افزودن به سبد خرید</span>
                    <GiShoppingCart className="text-[25px]"/>
                </div>
            </div>
        </div> :
        
        // نمایش ناوبری در صفحه اصلی
            <nav className="yekan-bold">
                <ul>
                    <li><NavLink to={'/'}><GrHomeRounded size={'24px'}/> <span>خانه</span></NavLink></li>
                    <li><NavLink to={'/1'}><TbCategory2 size={'28px'}/> <span>دسته بندی</span></NavLink></li>
                    <li><NavLink to={'/2'}><CiShoppingBasket size={'30px'}/> <span>سبد خرید</span></NavLink></li>
                    <li><NavLink to={'/3'}><LuLogs size={'30px'}/> <span>بلاگ</span></NavLink></li>
                    <li><NavLink to={'/4'}><GoPerson size={'30px'}/> <span>ورود</span></NavLink></li>
                </ul>
            </nav>
        }
        </div>
    )
}