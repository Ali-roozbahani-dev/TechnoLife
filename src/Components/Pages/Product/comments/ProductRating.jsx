import { useEffect } from "react"


export default function ProductRating({formInfo , setFormInfo , formError}){

    const ratingHandler = (num)=>{    
    setFormInfo(prev => ({
        ...prev,
        ratingNumber : num
    }))
}


    return (
        <>
        <h4 className="text-[13px] lg:text-[15px] yekan-bold text-center mt-6 mb-3 lg:mb-4">
            <span className="text-red-500">*</span>
            به این کالا امتیاز دهید
        </h4>
        {formError.ratingError && <p className="text-center text-[13px] text-red-500 yekan-regular mb-2">این قسمت را انتخاب کنید</p>}
        <div className="flex-center mb-4">
            <button className="mx-1.5 text-[13px]" onClick={()=>ratingHandler(5)}>
                {formInfo.ratingNumber === 5 ?
                <img src="/src/assets/images/ProductPage/Comments/static_cexcellent.webp" alt="عالی" /> :
                <img src="/src/assets/images/ProductPage/Comments/static_excellent.png" alt="عالی"  className={`rounded-2xl border ${formError.ratingError ? "border-red-500" : ""}`}/>                
                }
            </button>
            <button className="mx-1.5 text-[13px]" onClick={()=>ratingHandler(4)}>
                {formInfo.ratingNumber === 4 ?
                <img src="/src/assets/images/ProductPage/Comments/static_cgood.webp" alt="خوب" /> :
                <img src="/src/assets/images/ProductPage/Comments/static_good.webp" alt="خوب" className={`rounded-2xl border ${formError.ratingError ? "border-red-500" : ""}`}/>                
                }
            </button>
            <button className="mx-1.5 text-[13px]" onClick={()=>ratingHandler(3)}>
                {formInfo.ratingNumber === 3 ?
                <img src="/src/assets/images/ProductPage/Comments/static_cmedium.webp" alt="متوسط" /> :
                <img src="/src/assets/images/ProductPage/Comments/static_medium.webp" alt="متوسط" className={`rounded-2xl border ${formError.ratingError ? "border-red-500" : ""}`}/>                
                }
            </button>
            <button className="mx-1.5 text-[13px]" onClick={()=>ratingHandler(2)}>
                {formInfo.ratingNumber === 2 ?
                <img src="/src/assets/images/ProductPage/Comments/static_cweak.webp" alt="ضعیف" /> :
                <img src="/src/assets/images/ProductPage/Comments/static_weak.webp" alt="ضعیف" className={`rounded-2xl border ${formError.ratingError ? "border-red-500" : ""}`}/>                
                }
            </button>
            <button className="mx-1.5 text-[13px]" onClick={()=>ratingHandler(1)}>
                {formInfo.ratingNumber === 1 ?
                <img src="/src/assets/images/ProductPage/Comments/static_cbad.webp" alt="بد" /> :
                <img src="/src/assets/images/ProductPage/Comments/static_bad.webp" alt="بد" className={`rounded-2xl border ${formError.ratingError ? "border-red-500" : ""}`}/>                
                }
            </button>
        </div>
        </>
    )

}