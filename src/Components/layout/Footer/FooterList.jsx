import React, { useState } from "react"
import useGet from "../../../Hooks/useGet"
import { FaChevronDown } from "react-icons/fa";
import Offcanvas from "./Offcanvas";


export default function FooterList(){
    const [footerList,loading,error] = useGet('http://localhost:3001/footerList')
    

    return (       
            <div className="row justify-between">
            <div className="h-[0.5px] w-full bg-[#d1d1d1] mb-6"></div>
            {footerList.map((list)=>(
                <div className="FooterList hidden md:block" key={list.id}>
                    <div className="yekan-bold">{list.title}</div>
                    <ul key={list.id}>                    
                        {list.items.map((item)=>(
                            <li key={item.id}><a>{item.text}</a></li>
                        ))}
                    </ul>
                </div>
            ))}  
            {footerList.map((list)=>(
                <React.Fragment key={list.id}>
                    <Offcanvas listId={list.id} title={list.title} items={list.items}/>
                </React.Fragment>
            ))}           
           </div>        
    )
}