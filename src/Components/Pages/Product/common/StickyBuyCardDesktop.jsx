import { MdOutlineInventory } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { BsPatchCheck } from "react-icons/bs";
import TimeLeft from "./TimeLeft";
import FooterProductPage from "./FooterProductPage";

export default function StickyBuyCardDesktop({productInfoInPage}){

    return (
        <div className="mt-2 sticky top-47">
            <TimeLeft product={productInfoInPage} />
            <div className="rounded-xl border border-[rgb(220,220,220)] p-5 mb-6 yekan-bold bg">
            <div className="flex-between">
                <div>
                <img
                    src={productInfoInPage.img}
                    alt=""
                    className="w-27"
                />
                </div>
                <div>
                <h1>{productInfoInPage.title}</h1>
                </div>
            </div>
            <div>
                <CiShop className="inline-block text-[22px] text-[#385086] w-13" />
                <span>{"اویدا شاپ"}</span>
            </div>
            <div className="mt-2">
                <MdOutlineInventory className="inline-block text-[15px] text-[#385086] w-13" />
                <span className="text-[#385086] text-xs">
                موجود در انبار تکنولایف (ارسال فوری)
                </span>
            </div>
            <div className="w-full h-[0.5px] my-2 bg-[#dfdfdf]"></div>
            <div className="border-b border-white py-3 text-[13px]">
                <BsPatchCheck className="inline-block text-[18px] text-[#385086] w-13" />
                <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
            </div>
            <FooterProductPage />
            </div>
        </div>        
    )
}