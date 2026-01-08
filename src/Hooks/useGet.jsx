import axios from "axios";
import { useEffect, useState } from "react";

export default function useGet(url){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)

    useEffect(()=>{
        const getFunc = async () => {
            try{
                const res = await axios.get(url)
                setData(res.data)
                setLoading(false)                                
            }catch(e){
                console.log(e)
                setError(true)
            }            
        }
        getFunc()
    },[url])
    return [data,loading,error];
}