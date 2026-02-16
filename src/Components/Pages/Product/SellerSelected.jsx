import { CiShop } from "react-icons/ci";
import { MdOutlineInventory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPatchCheck } from "react-icons/bs";
import { MdChevronLeft } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";


export default function SellerSelected({className=""}){

    return (
        <div className={`bg-[rgb(243,248,253)] rounded-md pe-3 yekan-bold text-[#5d5d5d] ${className}`}>
            <div className="border-b border-white py-3 text-[13px]">
                <div className="flex justify-between items-center">
                    <div>
                        <CiShop className="inline-block text-[22px] text-[#385086] w-13"/>
                        <span>{"اویدا شاپ"}</span>
                    </div>
                    <div>
                        <span className="text-[#385086]">همه فروشندگان ( {"27"} )</span>  
                        <MdChevronLeft className="inline-block text-[20px] text-[#385086]"/>
                    </div>                    
                </div>
                <div className="mt-2">
                    <MdOutlineInventory className="inline-block text-[15px] text-[#385086] w-13"/>
                    <span className="text-[#385086] text-xs">موجود در انبار تکنولایف (ارسال فوری)</span>
                </div>
            </div>
            <div className="border-b border-white py-3 text-[13px] row justify-between items-center">
                <div>
                    <div>
                        <LuCalendarDays className="inline-block text-[18px] text-[#385086] w-13"/>
                        <span>فروشندگان طرف قرارداد اقساطی و اعتباری</span>
                    </div>
                                        
                </div>
                <div>
                    <span className="text-[#385086]">مشاهده</span>
                    <MdChevronLeft className="inline-block text-[20px] text-[#385086]"/>
                </div> 
                <div className="w-full ps-4 mt-2">
                    <p className="text-orange-500 bg-orange-100 px-2 rounded-sm py-1">خرید قسطی / اعتباری فقط از میان فروشندگان طرف قرارداد قسطی / اعتباری امکان پذیر است.</p>
                </div>
                               
            </div>
            <div className="border-b border-white py-3 text-[13px]">
                <IoSettingsOutline className="inline-block text-[20px] text-[#385086] w-13"/>
                <span>ارزیابی عملکرد : </span>
                <span className="ms-3">{'عالی'}</span>                
            </div>
            <div className="border-b border-white py-3 text-[13px]">
                <BsPatchCheck className="inline-block text-[18px] text-[#385086] w-13"/>  
                <span>گارانتی اصالت و سلامت فیزیکی کالا</span>                              
            </div>            
        </div>
    )
}