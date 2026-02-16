import { useContext, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { ShoppingBagContext } from "../../../Context/ShoppingBag_Context/shopping-bag.context.jsx";
import { addToCart } from "../../../Context/ShoppingBag_Context/actionCreator.js";
import IsAddedToCart from "./IsAddedToCart.jsx";

export default function AddedToCartBtn({productInfoInPage}){
    const {bagState , bagStateDispatch} = useContext(ShoppingBagContext)         
     
    const isAddedProduct = bagState.addedproducts.find(
        item => item.id === productInfoInPage.id
    )

    const addToCartBtnHandler = ()=> {        
        bagStateDispatch(addToCart(productInfoInPage))
    }

    return (
        !isAddedProduct ?
        <div onClick={addToCartBtnHandler} className="bg-[#212f6d] px-5 py-2 lg:py-3 rounded-lg flex justify-end items-center text-white cursor-pointer">
            <span className="mx-auto">افزودن به سبد خرید</span>
            <GiShoppingCart className="text-[25px]" />
        </div> :
        <IsAddedToCart productInfoInPage={productInfoInPage} bagState={bagState} bagStateDispatch={bagStateDispatch}/>
       
    )
}