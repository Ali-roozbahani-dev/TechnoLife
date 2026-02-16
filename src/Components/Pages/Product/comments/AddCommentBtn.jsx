import axios from "axios"
import { useContext} from "react"
import { commentAlertContext } from "../../../Context/alerts/CommentAlertContext"

export default function AddCommentBtn({formInfo , errorFormHandler , setShowAddComment , setIsSubmit}){ 
    const {show , setShow} = useContext(commentAlertContext)    

        
    const sendCommentHandler = ()=>{
        if(formInfo.text.trim() && formInfo.ratingNumber){
            const date = new Date() 
            axios.post("http://localhost:3001/comments" , 
                {...formInfo , date : date.toLocaleDateString('fa-IR-u-ca-persian')}
            )
            .then((res)=>{
                // بستن مودال و نمایش الرت ارسال                
                setShowAddComment(false)
                setShow(true)
            })
            .catch((error)=>{
                console.log(error)
            })
        }else{
            errorFormHandler()
            setIsSubmit(true)            
        }
    }

    return (       
        <button className="yekan-bold text-white py-2 bg-techno rounded-md w-full" onClick={sendCommentHandler}>
            ثبت نظر
        </button>
        
    )
}