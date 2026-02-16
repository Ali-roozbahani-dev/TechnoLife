
export default function BuyOption2({className=""}){

    return (
        <div className={`yekan-regular md:flex items-center justify-evenly md:py-7 ${className}`}>
            <div className="flex items-center text-[13px] mb-5">
                <div className="w-9 md:w-17 h-9 md:h-17 bg-sky-500 rounded-sm md:rounded-md me-3 flex-center">
                    <img src="/src/assets/images/ProductPage/static_fast-delivery_new.svg" alt="" className="w-full" />
                </div>
                <div>
                    <div className="yekan-bold md:text-[16px] md:mb-2">ارسال سریع به تهران و خارج از تهران</div>
                    <div className="text-techno">تحویل سریع به مشتریان</div>
                </div>
            </div>
            <div className="flex items-center text-[13px] mb-5">
                <div className="w-9 md:w-17 h-9 md:h-17 bg-sky-500 rounded-sm md:rounded-md me-3 flex-center">
                    <img src="/src/assets/images/ProductPage/static_support_new.svg" alt="" className="w-full"/>
                </div>
                <div>
                    <div className="yekan-bold md:text-[16px] md:mb-2">مشاوره و پشتیبانی</div>
                    <div className="text-techno">7 روز هفته</div>
                </div>
            </div>
            <div className="flex items-center text-[13px] mb-5">
                <div className="w-9 md:w-17 h-9 md:h-17 bg-sky-500 rounded-sm md:rounded-md me-3 flex-center">
                    <img src="/src/assets/images/ProductPage/static_chain-store_new.svg" alt="" className="w-full"/>
                </div>
                <div>
                    <div className="yekan-bold md:text-[16px] md:mb-2">فروشگاه های زنجیره ای</div>
                    <div className="text-techno">در بازار موبایل 1 , اپال</div>
                </div>
            </div>
        </div>
    )
}