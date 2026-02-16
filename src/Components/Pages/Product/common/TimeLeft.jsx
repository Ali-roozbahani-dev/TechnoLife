import { useEffect, useState } from "react"
import { timeLeftHandler } from "../../../../utils/appUtils"



export default function TimeLeft({product}){
    const [timeLeft,setTimeLeft] = useState(null)


    useEffect(()=>{              
            const timer = setInterval(()=>{
                setTimeLeft(timeLeftHandler(product.discount.end_at))
            },1000)
    
            return ()=> clearInterval(timer)
        },[product])

    return (
        timeLeft &&
        <div className="row justify-between items-center yekan-bold md:px-5 xl:px-7">
            <div className=""><img src="/src/assets/images/ProductPage/statitechnooffnew.svg" alt=""  className="w-20"/></div>
            <div><span className="text-[#DA1E28] text-[18px]">{timeLeft.hour}:{timeLeft.minutes}:{timeLeft.second}</span></div>
            <div className="h-0.5 md:h-px mt-1 w-full bg-[#DA1E28] rounded-lg"></div>
        </div>               
    )
}