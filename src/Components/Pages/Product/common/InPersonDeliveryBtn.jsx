import { MdKeyboardArrowLeft } from "react-icons/md";
import InPersonDelivery from "./InPersonDelivery";
import { useState } from "react";

export default function InPersonDeliveryBtn({className=""}){
    const [openModal , setOpenModal] = useState(false)

        
     return (

        <>
        <div onClick={()=>setOpenModal(true)} className={`flex-between border cursor-pointer border-[rgb(185,227,245)] bg-[rgb(232,246,252)] rounded-lg px-3 py-1 yekan-bold ${className}`}>
            <div>
                <img src="/src/assets/images/ProductPage/static_shopping.webp" alt="" className="inline-block w-10"/>
                <span className="text-xs ms-2 text-[rgb(51,51,51)]">تحویل حضوری در شعب تکنولایف</span>
            </div>
            <MdKeyboardArrowLeft />
        </div>
        {openModal && <InPersonDelivery setOpenModal={setOpenModal}/>}
        </>
     )
}