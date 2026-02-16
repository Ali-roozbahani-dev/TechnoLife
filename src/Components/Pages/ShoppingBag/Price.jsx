import { FaPercent } from "react-icons/fa";
import { applyDiscount } from "../../../utils/appUtils";

export default function Price({product}){  
    const discountPercent = product.discount.value
    const price = product.price * product.quantity
    const finalPrice = applyDiscount(product.price , product.discount.value) * product.quantity


    return (        
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center px-3 mx-4">
            <span className="TechnoOffPercent yekan-bold ms-auto lg:ms-0"><FaPercent className="inline-block me-1 text-[10px] md:text-[11px]"/> <span className="pt-0.5">{discountPercent.toLocaleString("fa-IR")}</span></span>
            <div className="yekan-bold w-full lg:w-auto lg:flex items-center pb-1 lg:pb-0">                    
                <div className="w-full lg:w-auto"><span className="line-through lg:mx-4 text-[#848484] text-[12px] lg:text-[14px]">{price.toLocaleString("fa-IR")}</span><span className="text-[12px] ms-1 lg:hidden">تومان</span></div>
                <div className="inline-block w-full lg:w-auto text-[#323232]"><span className="text-[14px] lg:text-lg">{finalPrice.toLocaleString("fa-IR")}</span> <span className="text-[12px] ms-px">تومان</span></div>                                        
            </div>
        </div>
    )
}