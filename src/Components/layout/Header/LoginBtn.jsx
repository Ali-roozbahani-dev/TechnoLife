import { useState } from "react";
import { Link } from "react-router-dom";
import LogOutConfirm from "../../Common/LogOutConfirm";

export default function LoginBtn(){
    const [user , setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [showConfirm , setShowConfirm] = useState(false)

    const logOutHandler = ()=>{
        localStorage.removeItem("user")
        setUser(null)
        setShowConfirm(false)
    }
    

    return (
        <>
        <div className='w-maxpe-5'>
            {user ?
            <button onClick={()=> setShowConfirm(true)} className='flex justify-center rounded-[7px] border px-3 py-1.5 h-10 cursor-pointer'>
                <span className='block h-full px-3 border-l'>{user.userName}</span>
                <span className='block h-full px-3'>خروج از حساب</span>
            </button> :                      
            <Link to={"/login"} className='flex justify-center rounded-[7px] border px-3 py-1.5 h-10 cursor-pointer'>
                <span className='block h-full px-3 border-l'>ورود</span>
                <span className='block h-full px-3'>ثبت نام</span>
            </Link>  
        }
            
        </div>    
        {showConfirm && <LogOutConfirm logOutHandler={logOutHandler} setShowConfirm={setShowConfirm}/>}    
        </>
    )
} 