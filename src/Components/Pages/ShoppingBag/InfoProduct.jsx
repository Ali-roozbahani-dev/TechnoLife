import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";

export default function InfoProduct({product}){

    return (
        <div className="flex justify-between items-start">
            <div>
                <div className="absolute top-2.5 right-8"><img src="/src/assets/images/ProductPage/statitechnooffnew.svg" alt=""  className="w-16 lg:w-20"/></div>
                <h1 className="mt-3 mb-7 md:text-[19px]">{product.title}</h1>
                <div className="text-xs yekan-regular md:text-[16px]">
                    <div className="my-2.5 lg:my-4"><BsPatchCheck className="text-[rgb(56,80,134)] inline-block text-[20px] lg:text-[25px] me-3"/><p className="inline-block">ضمانت 7  روزه تکنولایف + ضمانت اصالت کالا</p></div>
                    <div className="my-2.5 lg:my-4"><AiOutlineShop className="text-[rgb(56,80,134)] inline-block text-[20px] lg:text-[25px] me-3"/><span>حافظه ایران</span></div>
                    <div className="my-2.5 lg:my-4 text-[rgb(56,80,134)] md:text-[14px]"><AiOutlineFileDone className="inline-block text-[20px] lg:text-[25px] me-3"/><span>موجود در انبار فروشنده</span></div>                        
                </div>
            </div>
            <div>
                <img src={product.img} alt="" className="w-35 md:w-40 lg:w-52"/>
            </div>
        </div>
    )
}