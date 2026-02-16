import { RiSearch2Line } from "react-icons/ri";
import LgNavbar from './LgNavbar';
import CategoryMenu from './CategoryMenu';
import { Link } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import ShoppingLink from "./ShoppingLink";



export default function Header({isProductPage = false ,isShoppingBagPage=false}){

    

    return (
        <>
        <header className={`w-full yekan-regular ${isShoppingBagPage ? "" : "sticky"} top-0 z-50 bg-white border-b border-[#dcdcdc]`}>
        {!isShoppingBagPage && <div className="w-full"><a href="" className="w-screen"><img className="w-screen" src="/banner_TopGifDesktop_u1tGHg_cbfa1438-005e-4b71-853f-b7a878fdc77e.gif"/></a></div>}
        <div className='container-1'>
            <div className="row justify-between items-center py-2 px-5">
                <div className='w-full md:w-max flex justify-between items-center'>
                    <div className="flex justify-between items-center">
                        <Link to={'/'} className='inline-block'><IoCloseOutline  className={`${isProductPage ? "md:hidden" : "hidden"} text-[25px] text-[#404040]`}/>
                        <img src="/static_logo_techno_new.svg" alt="" className={isProductPage ? "hidden  md:block" : ""}/>
                        </Link>
                    </div>

                    <div className="bg-[#f0f0f0] px-3 w-[400px] lg:w-[500px] xl:w-[660px] ms-10 hidden md:flex justify-center items-center rounded-sm">
                        <button className="btn_search"><RiSearch2Line  size={'30px'} color='#8a8a8a'/></button>
                        <input type="search" name="" id="" className="header_search" placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"/>
                    </div> 
                    <div className='md:hidden'>
                        <div className='p-1.5 text-[#404040] flex justify-between items-center'>
                            <RiSearch2Line  className="text-[25px]"/>
                            <div className="relative">
                              {!isShoppingBagPage && <ShoppingLink className={`text-[27px]  ms-4 ${isProductPage ? "border-0" : "hidden"}`}/>}
                            </div>
                        </div>
                    </div>            
                </div>
                <div className='hidden md:flex w-maxjustify-end'>
                <div className='w-maxpe-5'>
                    <div className='flex justify-center rounded-[7px] border px-3 py-1.5 h-10 cursor-pointer'>
                        <span className='block h-full px-3 border-l'>ورود</span>
                        <span className='block h-full px-3'>ثبت نام</span>
                    </div>
                </div>
                <div className='w-max ms-5'>
                    <ShoppingLink />
                </div>            
                </div>
            </div>
            <LgNavbar />
        </div>
        </header>        
        <CategoryMenu isShoppingBagPage={isShoppingBagPage}/>
        </>
    )
}