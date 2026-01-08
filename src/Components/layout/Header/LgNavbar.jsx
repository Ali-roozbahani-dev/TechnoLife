import {CiPercent,CiShoppingBasket,CiGift,CiWallet,CiCoinInsert } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { PiCoinsLight } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context";
import { scrollHandler } from "../../../utils/appUtils";



export default function LgNavbar(){
    const {disCategory,setDisCategory,activeCategory,setActiveCategory} = useContext(Context);
    const [isScroll , setIsScroll] = useState(false)

    useEffect(()=>{
        const scrollHandler = () => {
    const shouldScroll = window.scrollY > 1;

    setIsScroll(prev => {
      if (prev === shouldScroll) return prev;
      return shouldScroll;
    });
  };

        window.addEventListener("scroll",scrollHandler);

        return ()=>{
            document.body.classList.remove('overflow-hidden')
            window.removeEventListener("scroll",scrollHandler);
        }
    },[])

    const categoryBtnHandler = ()=>{
        activeCategory ? setActiveCategory('') : setActiveCategory('bg-[#f1f8ff]')
        scrollHandler(disCategory)
        disCategory === 'hidden' ? setDisCategory('block') : setDisCategory('hidden')            
               
    }
    

    return (
        <nav className={`hidden yekan-bold overflow-hidden transition-all duration-200 lg:block  select-none ${isScroll ? "h-0" : "h-11"}`}>
            <div className="row px-2">
                <div className={`cursor-pointer rounded-md ${activeCategory}`} onClick={categoryBtnHandler}>
                    <div className="py-2 px-3 xl:px-5"><AiOutlineMenu  color="#696969" className="inline-block text-lg xl:text-xl me-1.5"/> <span className="text-[#696969]  text-sm">دسته بندی محصولات</span></div>
                </div>
                <ul className="self-stretch">
                    <li className="inline-block h-full px-1">
                        <a href="" className="block h-full text-[13px] xl:text-sm py-2 px-3 xl:px-5">
                        <CiPercent  color="#696969" className="inline-block text-lg xl:text-[22px] me-1.5"/> <span className="text-[#696969]">تونل زمان</span></a>
                        </li>
                    <li className="inline-block h-full px-1">
                        <a href="" className="inline-block h-full text-[13px] xl:text-sm py-2 px-3 xl:px-5">
                        <CiShoppingBasket  color="#696969" className="inline-block text-lg xl:text-2xl me-1.5"/> <span className="text-[#696969]">خرید سازمانی</span></a>
                        </li>
                    <li className="inline-block h-full px-1">
                        <a href="" className="inline-block h-full text-[13px] xl:text-sm py-2 px-3 xl:px-5">
                        <CiGift  color="#696969" className="inline-block text-lg xl:text-2xl me-1.5"/> <span className="text-[#696969]">کارت هدیه</span></a>
                        </li>
                    <li className="inline-block h-full px-1">
                        <a href="" className="inline-block h-full text-[13px] xl:text-sm py-2 px-3 xl:px-5">
                        <CiWallet  color="#696969" className="inline-block text-lg xl:text-2xl me-1.5"/> <span className="text-[#696969]">خرید اقساطی</span></a>
                        </li>
                    <li className="inline-block h-full px-1">
                        <a href="" className="inline-block h-full text-[13px] xl:text-sm py-2 px-3 xl:px-5">
                        <PiCoinsLight  color="#696969" className="inline-block text-lg xl:text-2xl me-1.5"/> <span className="text-[#696969]">خرید طلای دیجیتال</span> <span className="ms-1 px-2 text-xs rounded-xl bg-[#ffd6e8] text-[#9f1853]">جدید</span></a>
                        </li>                        
                    <li className="inline-block h-full px-3">
                        <a href="" className="block h-9/10 text-[13px] xl:text-sm py-2 px-3 xl:px-5">                        
                        <span className="text-[#696969]">فروشنده شو</span>
                        </a>
                        </li>
                </ul>
            </div>
        </nav>
    )
}