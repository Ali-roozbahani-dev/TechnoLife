import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";



export default function StarsRating({className="" , rateNum}){       

    return (
        <div className={`ltr mb-2 ${className}`}>
            {[1,2,3,4,5].map((star)=> {
                if(rateNum >= star){
                    return <span key={star} className="me-1 text-yellow-400"><FaStar /></span>            
                } else if(rateNum > star - 1 && rateNum < star){
                    return (
                        <div key={star} className="relative flex-center">
                            <span className="me-1 text-yellow-400"><FaStarHalf className="absolute top-0 left-1"/></span>
                            <span key={star} className="me-1 text-[#dbd9d9]"><FaStar /></span>
                        </div>
                    )
                        
                } else {
                    return <span key={star} className="me-1 text-[#dbd9d9]"><FaStar /></span>
                }
            })}
        </div>
    )
}


