import { LuShieldCheck } from "react-icons/lu";


export default function Alert({type , show}){

return (    
    <div className={`${show ? "translate-y-20" : "-translate-y-20"} bg-[rgba(0,0,0,.9)] text-white text-sm md:text-[15px] fixed  py-3 md:py-5 z-2000 -top-15 transition-all duration-200  w-110 rounded-md px-5 right-[calc(50%-220px)]`}>
        <div className="flex-between">
            <p className="yekan-bold">
                {type === "comment" ?
                "نظر شما پس از تایید نمایش داده میشود." :
                "بیمه به کالای شما اضافه شد."
                }
            </p>
            <LuShieldCheck  className="text-[23px] md:text-[25px]"/>            
        </div>               
    </div>
)
}