import { GiShoppingCart } from "react-icons/gi"
import { Link } from "react-router-dom"
import {ShoppingBagContext} from "../../Context/ShoppingBag_Context/shopping-bag.context.jsx"
import { useContext } from "react";

export default function ShoppingLink({className=""}){
    const {bagState} = useContext(ShoppingBagContext)    

    return (
        <Link to={"/ShoppingBag"} className={`${className} border block border-[#dedede] rounded-[7px] relative`}>
            <div className="block p-1.5"><GiShoppingCart size={'27px'}/></div>
            {bagState.addedproducts.length != 0 &&
            <div className="absolute bottom-0.5 right-0.5 rounded-full w-4.5 h-4.5 text-white text-center pt-px text-[13px] bg-[#14a0de]">{bagState.addedproducts.length}</div>
            }
        </Link>
    )
}