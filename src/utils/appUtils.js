export function scrollHandler(state){
    state === 'hidden'?
     document.body.classList.add('overflow-hidden') :
      document.body.classList.remove('overflow-hidden')                      
       
}

// محاسبه تخفیف روی محصول

export function applyDiscount(price,percent){
    const finalPrice = price * (100-percent) / 100
    return finalPrice.toLocaleString("fa-IR")
}

function zeroBefore(num){
   return num < 10 ? `0${num}`: num
}

// محاسبه ساعت دقیقه و ثانیه تخفیف
export function timeLeftHandler(end){       
    const now = Math.floor(Date.now() / 1000)
    const diff = Math.max(0,end - now)
    const left = {}
    left.second = zeroBefore(Math.floor(diff % 60))
    left.minutes = zeroBefore(Math.floor((diff % 3600) / 60))
    left.hour = zeroBefore(Math.floor(diff / 36000))
    
    if(left.second === '00' && left.minutes === '00' && left.hour === '00'){
        return false 
    }
    else{return left}

}