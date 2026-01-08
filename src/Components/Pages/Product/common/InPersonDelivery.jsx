import { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { FaChevronRight } from "react-icons/fa";
import TechnoBranches from "./TechnoBranches";



export default function InPersonDelivery({setOpenModal}){
    const [showBranches , setShowBranches] = useState(false)
    const images = [
        {id : 1 , addres : "/src/assets/images/ProductPage/InDersonDelivery/static_Arsh-Ajudanieh-shopping-center-1.webp"},
        {id : 2 , addres : "/src/assets/images/ProductPage/InDersonDelivery/static_Iran's-mobile-market-one-2.webp"},
        {id : 3 , addres : "/src/assets/images/ProductPage/InDersonDelivery/static_Iran's-mobile-market-two-1.webp"},
        {id : 4 , addres : "/src/assets/images/ProductPage/InDersonDelivery/static_koorosh-shopping-center-1.webp"},
        {id : 5 , addres : "/src/assets/images/ProductPage/InDersonDelivery/static_Motahari-Center-1.webp"},
        {id : 6 , addres : "/src/assets/images/ProductPage/InDersonDelivery/static_Opal-shopping-center-1.webp"}
    ]

    useEffect(()=>{
        document.body.classList.add('overflow-hidden');

        return ()=> document.body.classList.remove('overflow-hidden');
    },[])

    return (
        <div className="fixed z-1000 top-0 right-0 w-full h-screen overflow-y-scroll ltr flex-center bg-[rgba(0,0,0,0.3)] md:px-7" onClick={()=>setOpenModal(false)}>        
        <div className="md:rounded-lg pb-15 md:px-5 rtl w-full md:max-w-[1000px] h-full md:h-auto text-[rgb(37,37,37)] bg-white" onClick={(e)=>e.stopPropagation()}>
            <div className="flex-between md:mb-3 py-3 md:py-6 px-3.5 md:px-0 yekan-bold border-b border-[rgb(145,158,188)]">
                <div>
                    {showBranches && <><FaChevronRight onClick={()=>setShowBranches(false)} className="inline-block md:hidden text-[15px] text-[#6f6f6f] me-2 cursor-pointer"/>
                     <TfiArrowCircleRight onClick={()=>setShowBranches(false)} className="hidden md:inline-block text-[22px] text-[#6f6f6f] me-5 cursor-pointer"/></>}
                    <span className="text-md md:text-xl text-[#383838]">{showBranches ? "شعب تکنولایف" : "تحویل حضوری"}</span>
                </div>
                <button onClick={()=>setOpenModal(false)}>
                    <span className="text-sm md:hidden">بستن</span>
                    <IoClose className="inline-block text-[22px] ms-1 md:hidden"/>
                    <IoIosCloseCircleOutline className="hidden md:inline-block text-[#6f6f6f] text-[30px]"/>
                </button>
            </div>
            {!showBranches ?
            // محتوای اول
            <div className="md:flex flex-row-reverse justify-between items-start">
                <div className="md:w-3/10">
                    <div className="row justify-center md:justify-between gap-x-2.5 md:gap-x-0 gap-y-3 py-4">
                        {images.map((image)=>(
                            <div key={image.id} className="w-3/10 md:w-[48%] rounded-md">
                                <img src={image.addres} alt="" className="w-full"/>
                            </div>
                        ))}
                    </div>
                    <div className="px-3.5 md:px-0">
                        <button onClick={()=>setShowBranches(true)} className="rounded-sm text-white py-2 bg-[rgb(34,60,120)] w-full yekan-regular text-sm">مشاهده شعب تکنولایف</button>
                    </div>   
                </div>
                <div className="yekan-regular md:w-[55%]  text-justify px-3.5 md:p-0">
                    <p className="yekan-bold text-[14px] md:text-[16px] py-5 text-[#333333]">شما می‌توانید علاوه بر اینکه سفارش‌های خود را در محل موردنظرتان تحویل بگیرید، این امکان فراهم است که سفارش‌تان را در یکی از شعب تکنولایف در شهر تهران دریافت فرمایید.</p>
                    <p className="yekan-regular text-[13px] md:text-[14px] ps-2">کارشناسان ما در شعب تحویل حضوری تکنولایف آماده پاسخگویی و راهنمایی به شما برای خرید هستند.</p>
                </div>                
            </div> :
            // محتوای دوم
            <TechnoBranches />
            }
        </div>        
        </div>
    )
}