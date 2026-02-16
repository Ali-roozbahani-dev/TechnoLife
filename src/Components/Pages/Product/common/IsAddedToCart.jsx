import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../../Context/ShoppingBag_Context/actionCreator";

export default function IsAddedToCart({productInfoInPage , bagState , bagStateDispatch}){

    const deleteHamdler = ()=> {
        bagStateDispatch(removeFromCart(productInfoInPage.id))
    }

    return (
        <div className="flex text-techno yekan-bold">
            <button className="px-5" onClick={deleteHamdler}>حذف</button>
            <Link to={"/ShoppingBag"}  className="bg-white border-2 flex-1 border-techno px-5 py-2 lg:py-3 rounded-lg flex justify-end items-center cursor-pointer">
                <span className="mx-auto">مشاهده سبد خرید</span>
                <MdKeyboardArrowLeft className="text-[25px]" />
            </Link>
        </div>
        )
}