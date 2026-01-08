import { useRef, useState } from "react";
import { PiCheckFatFill } from "react-icons/pi";




export default function ColorsProduct({className=""}){
    const colors = [
        {id : 1 , value : 'green' , name : 'سبز'} ,
        {id : 2 , value : 'red' , name : 'قرمز'} ,
        {id : 3 , value : 'blue' , name : 'آبی'} ,
        {id : 4 , value : 'yellow' , name : 'زرد'} ,
        {id : 5 , value : 'orange' , name : 'نارنجی'}
        ]
    const [activeColor , setActiveColor] = useState(1)
    const [selectedColor , setSelectedColor] = useState(colors[0].name)
    

    const changeColorHandler = (id)=>{
        setActiveColor(id) 
        const selected = colors.find((color)=> color.id === id)
        setSelectedColor(selected.name)
              
    }

    return (
        <div className={`yekan-regular ${className}`}>
            <div className="my-4"> رنگ : <span className="text-md yekan-bold ms-2">{selectedColor}</span></div>
            <div className="row items-center yekan-bold">
                {colors.map((color)=>(
                    <div key={color.id} id={color.id} onClick={()=>changeColorHandler(color.id)} className="me-3 border w-max flex items-center border-[rgb(215,222,224)] rounded-md ps-0.75 pe-4 py-0.75 cursor-pointer">
                        <div className={`flex-center border border-[rgb(215,222,224)] w-4.5 h-4.5 rounded-md`} style={{backgroundColor : color.value}}>
                            {activeColor === color.id && <PiCheckFatFill className="text-white text-[10px]"/>}
                        </div>
                        <span className="text-xs ms-2 text-[rgb(102,102,102)]">{color.name}</span>
                    </div>  
                ))}
            </div>
        </div>
    )
} 