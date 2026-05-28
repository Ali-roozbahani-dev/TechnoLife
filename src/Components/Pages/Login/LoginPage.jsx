import LoginImages from "./LoginImages"
import FormContainer from "./FormContainer"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function LoginPage(){
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("user")) navigate("/")
    },[])

    return (
        <div className="mx-auto  max-w-400">
            <div className="flex justify-center items-start">
                <FormContainer />
                <LoginImages /> 
            </div>
        </div>
    )
}