import { createContext, useState } from "react"

export const commentAlertContext = createContext()

export default function CommentAlertProvider({children}){
    const [show , setShow] = useState(false)


    return (
        
        <commentAlertContext.Provider  value={{show , setShow}}>
            {children}
        </commentAlertContext.Provider>
    )
}