import React from "react"

export default function UnderOne({categories,activeItem}){
    const target = categories.find((cat)=> cat.id === activeItem)

    

    return (
        target && <div className="w-70 px-6.5 pt-4 bg-white yekan-bold">
                    <h3 className="py-1.5 pe-2 ps-4 font-bold rounded-sm bg-[#f3f8fc]">{target.text}</h3>
                  </div>      
    )
}