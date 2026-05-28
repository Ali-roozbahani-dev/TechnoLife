import { useState } from "react";
import { BiErrorAlt } from "react-icons/bi";


export default function Forms({inpsValue , setInpsValue , errors , isSubmit , setTouched , touched}){
    // وضعیت باز بودن اینپوت برای کنترل حرکت لیبل    
    const [openInps , setOpenInps] = useState({
        userName : false , 
        number : false       
    })

    // وضعیت اروراستایل اینپوت ها 
    const errorStyle = {
        userName : (errors.userName && isSubmit) && (inpsValue.userName.trim().length < 3 && touched.userName) , 
        number :   (errors.number && isSubmit) && (inpsValue.number.trim().length !== 11 && touched.number)       
    }
    
    const focusHandler = (e)=>{
        setOpenInps((prev)=>({
            ...prev ,
            [e.target.name] : true 
        }))        
    }
    const blurHandler = (e)=>{
        setOpenInps((prev)=>({
            ...prev ,
            [e.target.name] : inpsValue[e.target.name].trim()  
        }))        
    }

    const changeHandler = (e)=>{        
        const {name , value} = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: false
        }))
        setInpsValue((prev)=> ({...prev , [name] : value}))
    }
   

    return (
        <div>
            <div className="relative mb-10">
                <label htmlFor="userName" className={`absolute right-4.5 transition-all delay-100 ${openInps.userName ? "text-[14px] -top-7" : " top-4 text-[16px]"}`}>نام کاربری</label>
                {errorStyle.userName && <BiErrorAlt className={`text-red-400 text-[25px] absolute left-4.5 top-4`}/>}
                <input 
                type="text"
                name="userName" 
                id="userName" 
                value={inpsValue.userName}                 
                className={`${errorStyle.userName ? "border-red-500 focus:border-red-600 " : "border-[#bebebe] focus:border-[#3299ff]"}  block w-full focus:outline-0 focus:border-[#3299ff] focus:shadow-[0_0_0px_3px_#83c0f4] caret-[#4391cc] rounded-md border p-3.5 mb-2`}
                onChange={changeHandler}
                onFocus={focusHandler}
                onBlur={blurHandler}
                />  
                {errors.userName && isSubmit && (
                <p className="text-[13px] text-red-500 px-3.5">
                    {!inpsValue.userName.trim()
                    ? "نام کاربری خود را وارد کنید."
                    : inpsValue.userName.trim().length < 3 && touched.userName
                    ? "نام کاربری باید شامل حداقل 3 کاراکتر باشد"
                    : null}
                </p>
                )}
            </div>
            <div className="relative">
                <label htmlFor="number" className={`absolute right-4.5 transition-all delay-100 ${openInps.number ? "text-[14px] -top-7" : " top-4 text-[16px]"}`}>شماره موبایل</label>
                {errorStyle.number && <BiErrorAlt className={`text-red-400 text-[25px] absolute left-4.5 top-4`}/>}
                <input 
                type="text"
                name="number" 
                id="number" 
                value={inpsValue.number}                
                className={`${errorStyle.number ? "border-red-500 focus:border-red-600 " : "border-[#bebebe] focus:border-[#3299ff]"} block w-full focus:outline-0  focus:shadow-[0_0_0px_3px_#83c0f4] caret-[#4391cc] rounded-md border p-3.5 mb-2`}
                onChange={changeHandler}
                onFocus={focusHandler}
                onBlur={blurHandler}
                />

            </div>           

            {errors.number && isSubmit && (
            <p className="text-[13px] text-red-500 px-3.5">
                {!inpsValue.number.trim()
                ? "شماره موبایل خود را وارد کنید."
                : inpsValue.number.trim().length !== 11 && touched.number
                ? "شماره موبایل معتبر نیست!"
                : null}
            </p>
            )}           
        </div>
    )
}