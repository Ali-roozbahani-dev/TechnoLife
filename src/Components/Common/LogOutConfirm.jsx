import { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuTrash } from "react-icons/lu";


export default function LogOutConfirm({logOutHandler , setShowConfirm}){

    useEffect(()=>{
        document.body.classList.add("overflow-hidden")

        return () =>  document.body.classList.remove("overflow-hidden")
    },[])

return (
    <div className="h-screen w-full  bg-[rgba(0,0,0,0.3)] absolute top-0 right-0 z-1000 flex-center yekan-bold">
        <div className="bg-white w-100 lg-w-120 py-3 px-4.5 rounded-lg">
            <div className="flex-between py-3 mb-2">
                <div className="flex-center text-[rgb(102,102,102)]">                    
                    <span className="text-[18px]">خروج از حساب</span>
                </div>
                <div>
                    <IoIosCloseCircleOutline onClick={()=> setShowConfirm(false)} className="text-[30px] cursor-pointer"/>
                </div>
            </div>
            <div className="px-3.5">
                <div className="border-t-2 border-[rgb(181,181,181)] py-4">
                    <p className="text-[15px] md:text-[18px] yekan-regular mb-10">آیا میخواهید از حساب خود خارج شوید؟</p>
                    <div className="flex-between">
                        <div className="w-1/2 px-2">
                            <button onClick={()=> setShowConfirm(false)} className="w-full rounded-lg py-3 hover:bg-[#e9e9e9]">انصراف</button>                                
                        </div>
                        <div className="w-1/2 px-2">
                            <button onClick={logOutHandler} className="bg-techno text-white rounded-lg py-3 w-full">بله</button>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}