import { createContext } from "react";
import { useState } from "react";

export const Context = createContext()

export default function ContextProvider({children}){
    const [disCategory , setDisCategory] = useState('hidden')
    const [activeCategory , setActiveCategory] = useState('')
    const [technotimePro , setTechnotimePro] = useState([])
    const [productInfoInPage , setProductInfoInPage] = useState([])

    return (
        <Context.Provider value={{
            disCategory,
            setDisCategory,
            activeCategory,
            setActiveCategory,
            technotimePro,
            setTechnotimePro,
            productInfoInPage,
            setProductInfoInPage            
            }}>
            {children}
        </Context.Provider>        
    )

}