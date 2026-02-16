import { FaPercent } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { applyDiscount } from "../../../../utils/appUtils";
import { timeLeftHandler } from "../../../../utils/appUtils";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../../Context";


export default function TechnoOffCard({id,img,title,price,discount}){
    const {setTechnotimePro} = useContext(Context)
    const [applyDis,setApplyDis] = useState(()=>applyDiscount(price,discount.value))
    const [timeLeft,setTimeLeft] = useState(()=>timeLeftHandler(discount.start_at,discount.end_at))
    const navigate = useNavigate()

    
    
    useEffect(()=>{              
        const timer = setInterval(()=>{
            setTimeLeft(()=>timeLeftHandler(discount.end_at))
        },1000)

        return ()=> clearInterval(timer)
    },[])

    useEffect(()=>{
        !timeLeft && setTechnotimePro((prev)=> prev.filter((pro)=> pro.id != id))        
    },[timeLeft])

    

    return (
        <>
        {!timeLeft.expired &&
          <div className="TechnoOffCard yekan-regular h-90" onClick={()=> navigate(`/product/${id}`)}> 
            <div className="TechnoOffCard-head">
                <span className="text-[15px]">تکنوآف</span>
                <span className="text-lg">{timeLeft.hour}:{timeLeft.minutes}:{timeLeft.second}</span>
                <div></div>
            </div>           
            <div className="px-6"><img src={img} alt=""  className="w-full"/></div>
            <div className="px-4 flex flex-col justify-between grow">
                <div className="TechnoTimeTitle">{title}</div>
                <div className="TechnoTimepriceBody">
                    <span className="TechnoOffPercent yekan-bold"><FaPercent className="inline-block me-1 text-[10px] md:text-[11px]"/> <span className="pt-0.5">{discount.value.toLocaleString("fa-IR")}</span></span>
                    <div className="yekan-bold">
                        <div>
                            <span className="text-lg ">{applyDis.toLocaleString("fa-IR")}</span> <span className="text-[11px] inline-block ms-px text-[#717171]">تومان</span>
                        </div>
                        <span className="line-through text-[#848484]">{price.toLocaleString("fa-IR")}</span>
                    </div>
                </div>                
            </div>
        </div>}</>
    )
}



