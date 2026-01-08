import { useState } from "react";
import useGet from "../../../Hooks/useGet"
import {FaChevronDown} from "react-icons/fa";

export default function AboutShoping(){
    const [articles] = useGet("http://localhost:3001/aboutShoping")
    const [isOpen,setIsOpen] = useState(false)

    const openHandler = ()=>{
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <>
        <div className="container-1 text-justify mb-10 px-8">
           <div className={`border-t yekan-regular border-[rgb(215,222,224)] py-9 overflow-hidden ${isOpen ? '' : "h-85"}`}>
            {articles.map((article)=>(
                <div key={article.id} className="mb-8">
                    <h1 className="text-[rgb(51,51,51)] mb-5 text-[16px]">{article.title}</h1>
                    <p className="text-[rgb(95,95,95)] leading-8 text-sm yekan-regular">{article.content}</p>
                </div>
            ))}           
           </div>
           <button className="py-4" onClick={openHandler}>
            <span className="text-[rgb(34,60,120)] text-[18px]">{isOpen ? "بستن" : "نمایش بیشتر"}</span>
            <FaChevronDown className={`text-[rgb(34,60,120)] ms-1.5 inline-block text-[10px] ${isOpen ? "rotate-180" : ""}`}/>
           </button>
        </div>
        </>
    )
}