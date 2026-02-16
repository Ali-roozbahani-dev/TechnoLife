import { useEffect } from "react"
import { LuTrash } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function ConfirmDelete({deleteAllHandler , setShowConfirmDelete}){

    useEffect(()=>{
        document.body.classList.add('overflow-hidden');

        return ()=> document.body.classList.remove('overflow-hidden');
    },[]) 

    
    return (
        <div className="h-screen w-full  bg-[rgba(0,0,0,0.3)] absolute top-0 right-0 z-1000 flex-center yekan-bold">
            <div className="bg-white w-100 lg-w-120 py-3 px-4.5 rounded-lg">
                <div className="flex-between py-3 mb-2">
                    <div className="flex-center text-[rgb(102,102,102)]">
                        <LuTrash className="text-[22px] me-3"/>
                        <span className="text-[18px]">حذف سبد خرید</span>
                    </div>
                    <div>
                        <IoIosCloseCircleOutline onClick={()=> setShowConfirmDelete(false)} className="text-[30px] cursor-pointer"/>
                    </div>
                </div>
                <div className="px-3.5">
                    <div className="border-t-2 border-[rgb(181,181,181)] py-4">
                        <p className="text-[15px] md:text-[18px] yekan-regular mb-10">آیا از حذف کردن همه محصولات از سبد خرید مطمئن هستید؟</p>
                        <div className="flex-between">
                            <div className="w-1/2 px-2">
                                <button onClick={()=> setShowConfirmDelete(false)} className="w-full rounded-lg py-3 hover:bg-[#e9e9e9]">انصراف</button>                                
                            </div>
                            <div className="w-1/2 px-2">
                                <button onClick={deleteAllHandler} className="bg-techno text-white rounded-lg py-3 w-full">حذف</button>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}