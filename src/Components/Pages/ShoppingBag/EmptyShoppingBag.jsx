import { MdKeyboardArrowLeft } from "react-icons/md";

export default function EmptyShoppingBag(){

    return (
        <div className="yekan-bold container-1 px-3.5 md:px-5 xl:px-8 mb-10 md:mb-20 xl:mb-27">
            <h1 className="pb-2 pt-4 md:px-3 md:text-[18px] xl:text-[20px]">سبد خرید</h1>    
            <div className="py-5 md:py-7 md:rounded-2xl md:border border-[rgb(220,220,220)]">
                <div className="mb-5"><img src="/src/assets/images/ShoppingBag/static_emptyBasket.webp" alt="" className="w-70 md:w-77 mx-auto"/></div>
                <div className="text-center">
                    <h2 className="mb-2 md:text-[20px] xl:text-[24px]">سبد خرید شما خالیه</h2>
                    <p className="yekan-regular text-[13px] md:text-[16px] xl:text-[20px] text-[#626262] mb-5">برای مشاهده تخفیف های امروز روی لینک زیر کلیک کنید.</p>
                    <button className="text-techno">                        
                        <div className="flex-center">
                            <span className="me-2">آیکون</span>
                            <p className="text-xs me-px md:text-[15px]">بیشترین تخفیف های امروز</p>
                            <MdKeyboardArrowLeft className="md:text-[18px]"/>
                        </div>
                    </button>
                </div>
            </div>        
        </div>
    )
}