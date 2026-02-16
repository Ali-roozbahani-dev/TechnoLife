import { useEffect, useState } from "react";
import PointsInp from "./PointsInp";

export default function CommentForm({formInfo , setFormInfo , formError }){       
    const [inpFocus , setInpFocus] = useState({
        text : false,  
        positivePoints : false, 
        negativePoints : false
    })    

    const closeEmtyInp = ()=>{
        setInpFocus({
        text : false,  
        positivePoints : false, 
        negativePoints : false      
    })
    } 

    const focusHandler = (inpName)=>{      
        closeEmtyInp()  
        setInpFocus((prev)=> ({...prev , [inpName] : true}))
    }

    const changeFormInfo = (e)=>{
        const { name, type, value, checked } = e.target
        setFormInfo(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))        
}

    useEffect(()=>{
        document.body.addEventListener("click", closeEmtyInp)

        return ()=> document.body.removeEventListener("click", closeEmtyInp)
    },[])    
    

    return (
        <div className="yekan-bold">
            <div className="relative my-10">
                <label htmlFor="text" className={`${inpFocus.text || formInfo.text ? "-translate-y-10 text-xs" : "translate-y-0 text-[13px]"} transition-all delay-100 absolute top-4 right-4`}><span className="text-red-600">*</span>نظر شما</label>
                <textarea value={formInfo.text} onClick={(e)=> e.stopPropagation()} onChange={changeFormInfo}  onFocus={()=>focusHandler("text")} name="text" id="text" className={`border ${formError.textError ? "border-red-500" : ""} p-4 rounded-sm block w-full h-25 focus:outline-sky-600 focus:shadow-[0_0_0_5px_#83c0f4]`}/>
                 {formError.textError && <p className="text-[rgb(237,96,96)] mt-1 text-[13px] lg:text-[15px]">این قسمت را تکمیل کنید</p> }   
            </div>
            <PointsInp setFormInfo={setFormInfo} inpFocus={inpFocus} formInfo={formInfo} focusHandler={focusHandler}/>             
            <div className="flex my-5">
                <input checked={formInfo.unknownUser} onChange={changeFormInfo} type="checkBox" name="unknownUser" id="unknownUser" className="w-4 h-4 me-2"/>
                <label htmlFor="unknownUser" className="text-sm">کاربر ناشناس</label>
            </div>           
            
        </div>
    )
}