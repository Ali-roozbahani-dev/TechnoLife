import { GoPlus } from "react-icons/go";
import { LuTrash } from "react-icons/lu";
import { addTheQuantity } from "../../Context/ShoppingBag_Context/actionCreator";
import { reduceTheQuantity } from "../../Context/ShoppingBag_Context/actionCreator";


export default function CounterProduct({product , deleteHandler , bagStateDispatch}){   

    
    const increaseHandler = ()=>{
        bagStateDispatch(addTheQuantity(product.id))
    }

    const decreaseHandler = ()=>{
        bagStateDispatch(reduceTheQuantity(product.id))
    } 
    
    return (
        <div className="flex-center">
            <button onClick={increaseHandler} className="bg-white rounded-sm p-1 lg:p-2 shadow-[0_1px_8px_0_#caccce] w-7 h-7 lg:w-10 lg:h-10 flex-center"><GoPlus className="text-[22px]"/></button>
            <div className="mx-4 lg:mx-8 text-center">
                <span className="block text-[13px] text-[rgb(156,157,158)] my-1 lg:my-2">حداکثر</span>
                <span className="text-[15px] lg:text-[20px] my-1 lg:my-2">{product.quantity.toLocaleString("fa-IR")}</span>
            </div>
            {
            product.quantity > 1 ?
            <button onClick={decreaseHandler} className="bg-white rounded-sm p-1 lg:p-2 shadow-[0_1px_8px_0_#caccce] w-7 h-7 lg:w-10 lg:h-10 flex-center"><span className="text-[20px]">-</span></button> :
            <button onClick={deleteHandler} className="bg-white rounded-sm p-1 lg:p-2 shadow-[0_1px_8px_0_#caccce] w-7 h-7 lg:w-10 lg:h-10 flex-center"><LuTrash className="text-[19px] text-[rgb(56,80,134)]"/></button>
            }

        </div>
    )
}