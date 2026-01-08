
export default function MainProperties({className=""}){

    return (
        <div className={`${className} mb-4`}>            
            <h1 className="yekan-bold text-[15px] py-4">ویژگی های اصلی</h1>
            <ul className="rounded-md border px-3.5 md:pe-5 lg:pe-7 text-[13px] md:text-sm border-[rgb(211,216,228)] mb-4">
                <li className="py-2.5 md:py-3.5 border-b border-dashed last:border-0 border-[rgb(211,216,228)]">
                    <span className="text-[rgb(52,52,52)] yekan-regular me-2">{"نوع شارژ"} : </span>
                    <span className="yekan-bold">{"شارژ دیواری"}</span>
                </li> 
                <li className="py-2.5 md:py-3.5 border-b border-dashed last:border-0 border-[rgb(211,216,228)]">
                    <span className="text-[rgb(52,52,52)] yekan-regular me-2">{"نوع شارژ"} : </span>
                    <span className="yekan-bold">{"شارژ دیواری"}</span>
                </li>
                <li className="py-2.5 md:py-3.5 border-b border-dashed last:border-0 border-[rgb(211,216,228)]">
                    <span className="text-[rgb(52,52,52)] yekan-regular me-2">{"نوع شارژ"} : </span>
                    <span className="yekan-bold">{"شارژ دیواری"}</span>
                </li>               
            </ul>
            <div className="rounded-md border py-2.5 md:py-3.5 px-3.5 md:pe-5 lg:pe-7 text-[13px] md:text-sm border-[rgb(211,216,228)]">
                <h1 className="flex items-center yekan-bold mb-6">
                    <img src="/src/assets/images/ProductPage/static_technopay_square.png" alt="" className="me-2 w-6"/>
                    <p>این محصول را با تسهیلات تکنوپی بخرید!</p>
                </h1>
                <ul className="yekan-regular text-[rgb(82,82,82)]">
                    <li className="mb-2">
                        <span className="bg-[rgb(82,82,82)] w-1.5 h-1.5 rounded-full me-2 inline-block"></span>
                        <p className="inline-block">این کالا را اقساطی بخرید</p>
                    </li>
                    <li>
                        <span className="bg-[rgb(82,82,82)] w-1.5 h-1.5 rounded-full me-2 inline-block"></span>
                        <p className="inline-block">تا 150 میلیون تومان اعتبار با بازپرداخت 36 ماهه</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}