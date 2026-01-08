
export default function BuyOption(){

    return (
        <div className="flex justify-center yekan-regular py-5 lg:py-10 mb-1  border-b md:border-0 border-[#d0d0fa] text-[12px]">
            <div className="px-2 mx-2.5 md:mx-10 flex flex-col justify-center items-center">
                <img src="/src/assets/images/ProductPage/BuyOption/static_original-warranty.svg" alt="" className="w-15 md:w-auto"/>
                <span>7 روز ضمانت بازگشت کالا</span>
            </div>
            <div className="px-2 mx-2.5 md:mx-10 flex flex-col justify-center items-center">
                <img src="/src/assets/images/ProductPage/BuyOption/static_pay-at-home.svg" alt="" className="w-15 md:w-17"/>
                <span>پرداخت اقساطی</span>
            </div>
            <div className="px-2 mx-2.5 md:mx-10 flex flex-col justify-center items-center">
                <img src="/src/assets/images/ProductPage/BuyOption/static_payment-in-installments.svg" alt="" className="w-15 md:w-auto"/>
                <span>ضمانت اصالت کالا</span>
            </div>
            <div className="px-2 mx-2.5 md:mx-10 flex flex-col justify-center items-center">
                <img src="/src/assets/images/ProductPage/BuyOption/static_refund-money.svg" alt="" className="w-15 md:w-auto"/>
                <span>پرداخت در محل</span>
            </div>
        </div>        
    )
}