import { sumPricesFnc } from "./BillUtills"
import { sumDiscountFnc } from "./BillUtills"
import { finalPriceBillFnc } from "./BillUtills"

export default function Bill({productsInBag}){
    const sumprices = sumPricesFnc(productsInBag)
    const sumDiscount = sumDiscountFnc(productsInBag)
    const finalPriceBill = finalPriceBillFnc(productsInBag)       
   

    return (
        <div className="relative w-full lg:w-3/12">
            <div className="bg-[#edecec] lg:bg-white yekan-bold md:text-[20px] text-[rgb(51,51,51)] sticky top-5 left-0 border-t border-[#858585] lg:border-0 py-2 lg:py-0">
                <h1 className="px-4 pt-2 lg:py-3">صورت حساب</h1>    
                <div className="lg:rounded-xl lg:shadow-[0_1px_8px_2px_#f0f0f0] py-2 lg:py-6 px-4 lg:px-7 pb-10 lg:pb-6">
                    <div className="flex-between text-[12px] lg:text-[14px] mb-2 lg:mb-4">
                        <div>قیمت محصولات</div>
                        <div>{sumprices.toLocaleString("fa-IR")}<span className="ms-0.5">تومان</span></div>
                    </div>                   
                    <div className="flex-between text-[rgb(218,30,40)] text-[12px] lg:text-[14px] mb-2 lg:mb-4">
                        <div>تخفیف محصولات</div>
                        <div>{sumDiscount.toLocaleString("fa-IR")}<span className="ms-0.5">تومان</span></div>
                    </div>
                    <div className="flex-between text-[13px] lg:text-[16px] mb-2 lg:mb-4">
                        <div>جمع کل</div>
                        <div>{finalPriceBill.toLocaleString("fa-IR")}<span className="ms-0.5">تومان</span></div>
                    </div>
                    <div className="bg-[#edecec] lg:bg-white px-5 py-3.5 lg:py-0 lg:px-0 mt-7 w-full border-t lg:border-0 border-[#d9d9d9] fixed md:static bottom-[92px] right-0">
                        <button className="bg-techno text-white text-[15px] py-2.5 md:py-4 rounded-[10px] w-full mx-auto lg:block flex items-center justify-center">
                            <span>ادامه خرید</span> 
                            <div className="w-0.5 h-5 bg-white mx-12 lg:hidden"></div>
                            <div className="lg:hidden"><span>{"35,361,181"}</span><span className="text-[12px] ms-1">تومان</span></div>
                        </button>     
                    </div>
                </div>   
            </div>
        </div>
    )
}