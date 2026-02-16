import { PiCheckFatFill } from "react-icons/pi";




export default function ColorsProduct({className=""}){     

    return (
        <div className={`yekan-regular ${className}`}>
            <div className="my-4"> رنگ : <span className="text-md yekan-bold ms-2">سفید</span></div>
            <div className="row items-center yekan-bold">
                <div className="me-3 border w-max flex items-center border-[rgb(215,222,224)] rounded-md ps-0.75 pe-4 py-0.75 cursor-pointer">
                        <div className={`flex-center border border-[rgb(215,222,224)] w-4.5 h-4.5 rounded-md bg-white`}>
                            <PiCheckFatFill className="text-white text-[10px]"/>
                        </div>
                        <span className="text-xs ms-2 text-[rgb(102,102,102)]">سفید</span>
                    </div>
            </div>
        </div>
    )
} 