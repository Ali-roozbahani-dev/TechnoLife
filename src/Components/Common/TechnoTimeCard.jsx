import { MdOutlineTimer } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { applyDiscount } from "../../utils/appUtils";
import { timeLeftHandler } from "../../utils/appUtils";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context";


export default function TechnoTimeCard({id,img,title,price,discount}){
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
        {timeLeft &&
          <div className="TechnoTimeCard yekan-regular" onClick={()=> navigate(`/product/${id}`)}>
            <span className="TechnoTimeLabel yekan-bold">تکنوتایم</span>
            <div className="px-6"><img src={img} alt=""  className="w-full"/></div>
            <div className="px-4 flex flex-col justify-between grow">
                <div className="TechnoTimeTitle">{title}</div>
                <div className="TechnoTimepriceBody">
                    <span className="TechnoTimePercent yekan-bold"><FaPercent size={'11px'}  className="inline-block me-1 text-xs"/> <span className="pt-px">{discount.value.toLocaleString("fa-IR")}</span></span>
                    <div className="yekan-bold">
                        <div>
                            <span className="text-lg ">{applyDis}</span> <span className="text-[11px] inline-block ms-px text-[#717171]">تومان</span>
                        </div>
                        <span className="line-through text-[#848484]">{price.toLocaleString("fa-IR")}</span>
                    </div>
                </div>
                <div className="footerCard">
                    <div className="text-[#606060]"><MdOutlineTimer className="inline-block"/> <span className="text-[13px]">زمان باقی مانده</span></div>
                    <div><span className="text-[#991b21] underline text-[20px] yekan-bold">{timeLeft.hour}:{timeLeft.minutes}:{timeLeft.second}</span></div>
                </div>
            </div>
        </div>}</>
    )
}