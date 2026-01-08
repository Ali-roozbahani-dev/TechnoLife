import { createContext } from "react";
import { useState } from "react";

export const Context = createContext()

export default function ContextProvider({children}){
    const [disCategory,setDisCategory] = useState('hidden')
    const [activeCategory,setActiveCategory] = useState('')
    const [technotimePro,setTechnotimePro] = useState([])

    return (
        <Context.Provider value={{
            disCategory,
            setDisCategory,
            activeCategory,
            setActiveCategory,
            technotimePro,
            setTechnotimePro
            }}>
            {children}
        </Context.Provider>        
    )

}