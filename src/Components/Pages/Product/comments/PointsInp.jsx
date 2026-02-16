import { useState } from "react";
import { GoPlus } from "react-icons/go";
import PointsListItem from "./PointsListItem";

export default function PointsInp({formInfo , focusHandler , inpFocus , setFormInfo}){    
    // مقدار اینپوت های مثبت و منفی
    const [positiveItem , setPositiveItem] = useState("")
    const [negativeItem , setNegativeItem] = useState("")

    // تغییر اینپوت های مثبت و منفی
    const changePositiveList = (e)=>{
        e.target.name === "positivePoints" ?
        setPositiveItem(e.target.value) :
        setNegativeItem(e.target.value)        
    }
   
    // ثبت اینپوت مثبت و منفی
    const submitFnc = (type)=>{
        const id = crypto.randomUUID()
        if(type === "positivePoints"){
            positiveItem.trim() &&
            setFormInfo((prev)=> ({...prev , points : {...prev.points , positivePoints : [...prev.points.positivePoints , {id , text : positiveItem}]}}))  
            setPositiveItem("")  
        
        } else{
            negativeItem.trim() &&
            setFormInfo((prev)=> ({...prev , points : {...prev.points , negativePoints : [...prev.points.negativePoints , {id , text : negativeItem}]}}))  
            setNegativeItem("")  
        }
    }
    const submitHandler = (type)=>{
        submitFnc(type)
    }
    const submitByEnter = (e,type)=>{
        e.key === "Enter" && submitFnc(type)
    }

    // ثبت اینپوت با دکمه اینتر

    return (
    <>
    <div className="relative mt-10">
        <label htmlFor="positivePoints" className={`${inpFocus.positivePoints || positiveItem.trim() ? "-translate-y-12 text-xs" : "translate-y-0 text-[13px]"} transition-all delay-100 absolute top-5.5 right-4`}><span className="text-red-600">*</span>نکات منفی</label>
        <input onKeyDown={(e)=>submitByEnter(e,"positivePoints")} value={positiveItem} onClick={(e)=> e.stopPropagation()} onChange={changePositiveList}  onFocus={()=>focusHandler("positivePoints")} name="positivePoints" id="positivePoints" className="border p-4 rounded-sm block w-full focus:outline-sky-600 focus:shadow-[0_0_0_5px_#83c0f4]"/>
        <button
         onClick={()=>submitHandler("positivePoints")}         
         className={`flex-center text-[13px] absolute z-10 bg-white px-3 py-1 top-4.5 left-4 ${!positiveItem.trim() ? "opacity-40 cursor-not-allowed" : ""}`}>
             ثبت <GoPlus className="text-[18px] ms-px"/>
        </button>
    </div>
    <div className="py-2">
        {formInfo.points.positivePoints.map((item)=> (
            <PointsListItem key={item.id} type={"positivePoints"} setFormInfo={setFormInfo} item={item}/>            
        ))}
    </div>
    <div className="relative mt-10">
        <label htmlFor="negativePoints" className={`${inpFocus.negativePoints || negativeItem.trim() ? "-translate-y-12 text-xs" : "translate-y-0 text-[13px]"} transition-all delay-100 absolute top-5.5 right-4`}><span className="text-red-600">*</span>نکات منفی</label>
        <input onKeyDown={(e)=>submitByEnter(e,"negativePoints")} value={negativeItem} onClick={(e)=> e.stopPropagation()} onChange={changePositiveList}  onFocus={()=>focusHandler("negativePoints")} name="negativePoints" id="negativePoints" className="border p-4 rounded-sm block w-full focus:outline-sky-600 focus:shadow-[0_0_0_5px_#83c0f4]"/>
        <button 
        onClick={()=>submitHandler("negativePoints")}        
        className={`flex-center text-[13px] absolute z-10 bg-white px-3 py-1 top-4.5 left-4 ${!negativeItem.trim() ? "opacity-40 cursor-not-allowed" : ""}`}>
             ثبت <GoPlus className="text-[18px] ms-px"/>
        </button>
    </div>
    <div className="py-2">
        {formInfo.points.negativePoints.map((item)=> (
            <PointsListItem key={item.id} type={"negativePoints"} setFormInfo={setFormInfo} item={item}/>            
        ))}
    </div>
    </>
    )
}