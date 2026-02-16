import { useEffect, useState } from "react";
import Alert from "../../../Common/Alert";


export default function InsuranceAlert(){
    const [show , setShow] = useState(false)

    useEffect(()=>{
        const startTimer = setTimeout(() => {
            setShow(true)            
        }, 50);

        const timer = setTimeout(() => {
            setShow(false)
        }, 3000);

        return ()=>{
             clearTimeout(timer)
             clearTimeout(startTimer)
        }

    },[])    
    
    return (
        <Alert for={"insurance"} show={show}/>        
    )
} 