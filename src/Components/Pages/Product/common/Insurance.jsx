import { useState } from "react";
import { LuShieldCheck } from "react-icons/lu";
import { MdChevronLeft } from "react-icons/md";
import { LuTrash } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import InsuranceAlert from "./InsuranceAlert";
import InsuranceDetail from "./InsuranceDetail";


export default function Insurance({className=""}){
    const [insuranceStatus, setInsuranceStatus] = useState(false)   
    const [openInsuranceDetail , setOpenInsuranceDetail] = useState(false) 


    const addInsurance = ()=>{
        insuranceStatus ? setInsuranceStatus(false) : setInsuranceStatus(true)        
    }

    return (    
        <>
        <div className={`rounded-sm yekan-bold shadow-[0px_2px_10px_0px_rgba(0,0,0,.12)] px-3 ${className}`}>
            <div className="flex-between py-2">
                <div className="text-[rgb(34,60,120)]">
                    <LuShieldCheck className={`inline-block me-3 lg:text-[22px] ${insuranceStatus ? "text-[#009700]" : ""}`}/>
                    <span>{insuranceStatus ? "بیمه به کالا اضافه شد" : "خرید بیمه برای کالا"}</span>
                </div>
                <button className="text-[rgb(0,75,104)]" onClick={()=>setOpenInsuranceDetail(true)}>
                    <span className="text-xs">نمایش جزییات</span>
                    <MdChevronLeft className="inline-block ms-1"/>
                </button>
            </div>
            <div className="flex-between py-2">
                <button onClick={addInsurance} className={`text-[rgb(34,60,120)] flex-between px-3 h-8 rounded-md border ${insuranceStatus ? "border-[red]" : "border-[rgb(34,60,120)]"}`}>
                    <span className={`text-xs ${insuranceStatus ? "text-[#303030]" : ""}`}>{insuranceStatus ? "حذف بیمه" : "بیمه میخواهم"}</span>
                    <span className="ms-3 text-xl">{insuranceStatus ? <LuTrash className="text-[#f92b2b]"/> : <GoPlus size={'18px'}/>}</span>
                </button>
                <div>
                    <span className=" me-1 ms-3">{"170,981"}</span>
                    <span className="line-through rgb(240,240,240) text-xs">{'269,970'}</span>
                    <span className="text-xs text-[#303030]">تومان</span>
                </div>
            </div>
        </div> 
        {insuranceStatus && <InsuranceAlert />}   
        {openInsuranceDetail && <InsuranceDetail 
        insuranceStatus={insuranceStatus}
        setInsuranceStatus={setInsuranceStatus}
        setOpenInsuranceDetail={setOpenInsuranceDetail}
        addInsurance={addInsurance} 
          />}            
        </>    
        
    )
}