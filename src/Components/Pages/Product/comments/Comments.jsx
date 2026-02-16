import CommentCard from "./CommentCard"
import { useContext, useEffect } from "react"
import { commentAlertContext } from "../../../Context/alerts/CommentAlertContext"
import Alert from "../../../Common/Alert"

export default function Comments({className="" , productInfoInPage}){     
    const {show , setShow} = useContext(commentAlertContext)

   useEffect(()=>{    
    show &&
        setTimeout(() => {
            setShow(false)            
        }, 3000);        
   },[show])
        
    
    return (
        <div className={`${className}`}>           
            <div className="px-3.5">
                <div className="h-px bg-[#bfbfbf] w-full"></div>
            </div>
            {productInfoInPage.comments.length ?
                (productInfoInPage.comments.map((comment)=>(
                    <div key={comment.id}>
                        <CommentCard comment={comment}/>
                    </div>)                                        
                )) :
                <div className="border mt-5  border-violet-400 rounded-[10px] yekan-regular text-center p-3 mb-4 leading-7">
                  <p className="text-[15px]">برای راهنمایی دیگران در مورد این کالا نظر دهید.</p>
                  <p className="text-[14px]">برای ثبت نظر نیاز به خرید کالا نیست ; همچنین میتوانید نظرتان را به صورت ناشناس ثبت کنید.</p>
                </div> 
            }
            {show && <Alert type={"comment"} show={show}/>}
            
        </div>
    )
}