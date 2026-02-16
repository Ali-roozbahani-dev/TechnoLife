import { FaRegComments } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import Alert from "../../../Common/Alert";

export default function ModalCommentBtn({setShowAddComment}){     
      

    return (        
        <div>
            <div onClick={()=> setShowAddComment(true)} className="flex lg:block justify-between items-start shadow-[0px_3px_10px_0px_#cccccc] p-3 lg:p-5 lg:px-7 rounded-lg mb-5 bg-white cursor-pointer">
                <div className="flex items-center w-1/2 lg:w-full lg:mb-3">
                    <FaRegComments className="text-[20px] lg:text-[25px]"/>
                    <p className="px-2 text-[14px]">نظر خود را درباره این محصول بنویسید ...</p>
                </div>
                <div className="lg:mx-auto lg:w-full flex-center pe-1.5 ps-2.5 py-px lg:py-2.5 text-white bg-techno rounded-sm lg:rounded-lg">
                    <span className="yekan-regular text-[13px] lg:text-[18px]">افزودن نظر</span>
                    <GoPlus className="ms-2"/>
                </div>
            </div>                        
        </div>         
    )
}