import EmptyShoppingBag from "./EmptyShoppingBag"
import Header from "../../layout/Header/Header"
import Footer from "../../layout/Footer/Footer"
import FullShoppingBag from "./FullShoppingBag"
import { useContext } from "react"
import { ShoppingBagContext } from "../../Context/ShoppingBag_Context/shopping-bag.context.jsx"

export default function ShoppingBag(){
    const {bagState , bagStateDispatch} = useContext(ShoppingBagContext)

    return (  
        <>      
        <Header isProductPage={true} isShoppingBagPage={true}/>
        {
        bagState.addedproducts.length ?
        <div className="container-1 md:px-3.5 xl:px-7">
            <div className="flex justify-between items-start">
             <FullShoppingBag bagState={bagState}  bagStateDispatch={bagStateDispatch}/>   
            </div>
        </div> :   
        <EmptyShoppingBag /> 
        }             
        <Footer isShoppingBagPage={true}/>  
        </>                 
        
        
    )
}