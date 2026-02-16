import { useState } from "react";
import ModalCommentBtn from "./ModalCommentBtn"
import Comments from "./Comments";
import AddComment from "./AddComment";
import { calcAverageRating } from "./commentsUtils";
import StarsRating from "./StarsRating";

export default function Rating({className="" , productInfoInPage}){    
    const [showAddComment , setShowAddComment] = useState(false)
    const averageRating = calcAverageRating(productInfoInPage.comments)
     




    return (
        <div className={`${className} yekan-bold scroll-mt-20`} id="Comments">
            <h1 className=" mb-3 lg:text-[22px]">نظرات کاربران</h1>            
            <div className="2xl:flex items-start justify-between relative">
                <div className="flex-1 2xl:pe-10">
                    <Comments productInfoInPage={productInfoInPage}/>
                </div>
                <div className="2xl:w-1/3 2xl:sticky top-30 left-0">
                    <div className="flex lg:block justify-between items-center py-3">
                        <StarsRating rateNum={averageRating} className="text-[35px] flex-center"/>                                               
                        <div className="px-2 text-center">
                            <div className="text-[20px] md:text-[30px] lg:text-[40px]">{averageRating.toFixed(1)}</div>
                            <div className="text-xs text-[18px]">{productInfoInPage.comments.length} نظر</div>
                            <div></div>
                        </div>
                    </div>
                    <ModalCommentBtn showAddComment={showAddComment} setShowAddComment={setShowAddComment}/>
                </div>
            </div>
            {showAddComment && <AddComment setShowAddComment={setShowAddComment} productInfoInPage={productInfoInPage}/>}
        </div>
    )
}