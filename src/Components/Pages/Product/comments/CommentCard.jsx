import StarsRating from "./StarsRating";



export default function CommentCard({comment}){    
    

    return (
        <div className="border-b border-[#bfbfbf]">
            <div className="py-4 px-3.5">
                <div className="pb-0.5 flex-between">
                    <span className="font-regular text-[13px]">کاربر ناشناس</span>
                    <StarsRating className="flex items-center" rateNum={comment.ratingNumber}/>                
                </div>
                <span className="yekan-bold text-[#8a8ab0]">{comment.date}</span>
                <p className="yekan-regular lg:text-[18px] py-3 text-techno">{comment.text}</p>
                <div className="text-[15px] lg:text-[16px] yekan-regular">
                    {comment.points.positivePoints.map((point=> (
                        <p key={point.id}><span className="text-[green] me-1 text-[18px]">{"+"}</span> {point.text}</p>
                    )))}
                    {comment.points.negativePoints.map((point=> (
                        <p key={point.id}><span className="text-[red] me-1 text-[18px]">{"+"}</span> {point.text}</p>
                    )))}
                </div>
            </div>
        </div>
    )
}


