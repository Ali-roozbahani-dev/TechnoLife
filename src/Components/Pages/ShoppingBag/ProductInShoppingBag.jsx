import CounterProduct from "./CounterProduct"
import { LuTrash } from "react-icons/lu";
import Price from "./Price";
import InfoProduct from "./InfoProduct";
import { removeFromCart } from "../../Context/ShoppingBag_Context/actionCreator";
import ColorShoppingBag from "./ColorShoppingBag";

export default function ProductInShoppingBag({id , bagState , bagStateDispatch}){
    const product = bagState.addedproducts.find(
        item => item.id === id
    )
    
    const deleteHandler = ()=>{
        bagStateDispatch(removeFromCart(id))        
    }

    return (
        <>
        <div className="relative mb-1 md:mb-6 last:mb-0 px-4 py-8 lg:p-9 border border-[rgb(211,216,228)] border-x-0 md:border-x md:rounded-xl">
            <button onClick={deleteHandler} className="hidden lg:block absolute top-1.5 left-1.5 border rounded-full p-1.75 text-[rgb(211,216,228)]"><LuTrash className="text-[16px] text-[rgb(162,165,169)]"/></button>
            <div>
                <InfoProduct product={product}/>
                <div className="flex-between lg:border px-6 mt-7 py-5 border-[rgb(240,240,240)] rounded-md ">     
                    <ColorShoppingBag color={product.color}/>              
                    <div className="flex-center">
                        <Price product={product}/>                        
                        <CounterProduct deleteHandler={deleteHandler} product={product}  bagStateDispatch={bagStateDispatch}/>
                    </div> 
                </div> 
            </div>
        </div>        
        </>
    )
}