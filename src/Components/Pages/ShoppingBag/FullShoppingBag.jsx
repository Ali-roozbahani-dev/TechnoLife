import { LuTrash } from "react-icons/lu";
import ProductInShoppingBag from "./ProductInShoppingBag";
import { removeAllFromCart } from "../../Context/ShoppingBag_Context/actionCreator";
import Bill from "./Bill";
import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

export default function FullShoppingBag({bagState , bagStateDispatch}){
    const [showConfirmDelete , setShowConfirmDelete] = useState(false)

    const deleteAllHandler = ()=>{
        bagStateDispatch(removeAllFromCart())        
    }

    return (
        <>
        <div className="row justify-between pb-15">
            <div className="yekan-bold w-full lg:w-7/10">
                <div className="flex-between py-2 md:py-3 px-3.5">
                    <div className="text-[14px] md:text-[20px]">سبد خرید شما <span className="text-xs md:text-[15px] ms-1 md:ms-2">{bagState.addedproducts.length} عدد کالا</span></div>
                    <button onClick={()=> setShowConfirmDelete(true)} className="flex-center">
                        <span className="text-[12px] md:text-[14px] text-[rgb(0,5,17)]">حذف کل سبد خرید</span>
                        <LuTrash className="ms-1 md:ms-1.5 text-[16px] md:text-[18px]"/>
                    </button>
                </div>
                {
                    bagState.addedproducts.map((product)=> (
                        <React.Fragment key={product.id}>
                            <ProductInShoppingBag id={product.id} bagState={bagState}  bagStateDispatch={bagStateDispatch}/>
                        </React.Fragment>
                    ))
                }               
                
            </div>
            <Bill productsInBag={bagState.addedproducts}/>
        </div>
        {showConfirmDelete && <ConfirmDelete deleteAllHandler={deleteAllHandler} setShowConfirmDelete={setShowConfirmDelete}/>}
        </>
    )
}