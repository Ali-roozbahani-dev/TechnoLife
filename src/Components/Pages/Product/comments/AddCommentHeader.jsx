import { IoCloseCircleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


export default function AddCommentHeader({setShowAddComment}){


    return (
        <div className="border-b lg:border-0 sticky top-0 right-0 bg-white z-30">
            <div className="flex-between px-3.5 lg:px-3 py-3.5 lg:py-4.5">
                <h1 className="lg:text-[20px]">افزودن نظر</h1>
                <button className="flex justify-center items-center lg:hidden" onClick={() => setShowAddComment(false)}>
                <span>بستن</span>
                <IoClose className="ms-1.5 text-[25px]" />
                </button>
                <button className="hidden lg:flex justify-center items-center" onClick={() => setShowAddComment(false)}>                
                <IoCloseCircleOutline className="ms-1.5 text-[30px]" />
                </button>
            </div>
            <div className="hidden lg:block h-[1.5px] w-[91%] bg-[rgb(211,211,212)] mx-auto"></div>
        </div>        
    )
}