import { Link, useNavigate } from "react-router-dom"
import Forms from "./Forms"
import SubmitLoginBtn from "./SubmitLoginBtn"
import { useState } from "react"

export default function FormContainer(){
    const navigate = useNavigate()
    const [isSubmit , setIsSubmit] = useState(false)
    const [inpsValue , setInpsValue] = useState({
        userName : "",
        number : ""                
    })


const regex = /^09\d{9}$/;

const checkMobile = (number) => {
  return regex.test(number);
};
    // کنترل نمایش ارور های ولیدیشن اینپوت ها
    const [touched, setTouched] = useState({
            userName: false,
            number: false
        })
    const errors = {
    userName: inpsValue.userName.trim().length < 3,
    number: !checkMobile(inpsValue.number)        
}

    // به دلیل نبود منطق بکند جهت احراز هویت و لاگین اطلاعات صرفا در لوکال استوریج ذخیره میشوند.
    const submitHandler = (e)=>{
        e.preventDefault()
        if(!errors.userName && !errors.number){
            localStorage.setItem("user" , JSON.stringify(inpsValue))            
            navigate("/")     
        }else{
            setTouched({
                userName: true,
                number: true
            })
            setIsSubmit(true)
        }
    }


    return(
        <div className="2xl:w-[42%] yekan-bold">
            <div className="p-8 flex flex-col items-center">
                <Link to={"/"}>
                    <img src="/src/assets/images/login/static_logo_techno_new.svg" alt="" className="w-45"/>
                </Link>
                <h2 className="flex-center lg:text-[22px] my-8">
                    <span className="px-5">ورود</span>
                    <div className="h-5 w-px bg-[black]"></div>
                    <span className="px-5">ثبت نام</span>
                </h2>
                <p>خوش اومدی :)</p>
                <form onSubmit={submitHandler} className="w-full mt-15">
                    <Forms touched={touched} setTouched={setTouched}  isSubmit={isSubmit} errors={errors} inpsValue={inpsValue} setInpsValue={setInpsValue}/>
                    <SubmitLoginBtn submitHandler={submitHandler}/>
                </form>
            </div>
            <p className="text-[13px] text-center p-2 mt-1">
                <span>  ورود | ثبت نام شما به معنای پذیرش  </span> 
                <span className="text-sky-500">قوانین و مقررات </span>
                <span>  و  </span>
                <span className="text-sky-500">حریم خصوصی کاربران </span>
                تکنولایف است.
            </p>
        </div>
    )
}