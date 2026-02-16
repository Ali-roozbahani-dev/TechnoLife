export function addToCart(product){
    return ({type : "ADD-TO-CART" , payload : product})
}
export function removeFromCart(id){
    return ({type : "REMOVE-FROM-CART" , payload : id})
}
export function removeAllFromCart(){
    return ({type : "REMOVE-ALL-FROM-CART"})
}
export function addTheQuantity(id){
    return ({type : "ADD-THE-QUANTITY" , payload : id})
}
export function reduceTheQuantity(id){
    return ({type : "REDUCE-THE-QUANTITY" , payload : id})
}