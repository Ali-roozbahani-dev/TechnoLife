import { applyDiscount } from "../../../utils/appUtils"

// قیمت کسر شده

export function deductedPrice(price,percent){
    const deducted = price - (price * (100-percent) / 100)
    return deducted
}

// مجموع قیمت ها
export function sumPricesFnc(products){
  return  products.reduce((acc,cur)=>{
            return acc + (cur.price * cur.quantity)            
        },0)
}

// مجموع قیمت کسر شده
export function sumDiscountFnc(products){
  return  products.reduce((acc,cur)=>{
            return acc + (deductedPrice(cur.price , cur.discount.value) * cur.quantity)            
        },0)
}

// مجموع قیمت نهایی
export function finalPriceBillFnc(products){
  return  products.reduce((acc,cur)=>{
            return acc + (applyDiscount(cur.price , cur.discount.value) * cur.quantity)            
        },0)
}



