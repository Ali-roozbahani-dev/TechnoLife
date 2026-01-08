import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function Offcanvas({title,items}){
    const [isOpenMenu,setIsOpenMenu] = useState(false)

    const offcanvasHandler = ()=>{
        isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true)
    }

    return (
        <div className="FooterListMobile md:hidden">
            <div className="yekan-bold" onClick={offcanvasHandler}><span>{title}</span> <FaChevronDown size={'12px'} className={isOpenMenu ? 'rotate-180' : ''}/></div>
            <ul className={isOpenMenu ? '' : 'hidden'}>                    
                {items.map((item)=>(
                    <li key={item.id}><a className="cursor-pointer">{item.text}</a></li>
                ))}
            </ul>
        </div>
    )
}