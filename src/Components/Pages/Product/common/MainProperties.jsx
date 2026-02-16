import InstallmentPurchase from "./InstallmentPurchase"

export default function MainProperties({className="" , productInfoInPage}){
    

    return (
        <div className={`${className} mb-4`}>            
            <h1 className="yekan-bold text-[15px] py-4">ویژگی های اصلی</h1>
            <ul className="rounded-md border px-3.5 md:pe-5 lg:pe-7 text-[13px] md:text-sm border-[rgb(211,216,228)] mb-4">
                {productInfoInPage.main_features && productInfoInPage.main_features.map((item,index)=> (
                 <li key={index} className="py-2.5 md:py-3.5 border-b border-dashed last:border-0 border-[rgb(211,216,228)]">
                    <span className="text-[rgb(52,52,52)] yekan-regular me-2">{item.title} : </span>
                    <span className="yekan-bold">{item.value}</span>
                 </li> 
                ))}                                               
            </ul>
            <InstallmentPurchase />            
        </div>
    )
}