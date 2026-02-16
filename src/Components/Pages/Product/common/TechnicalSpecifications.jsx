
export default function TechnicalSpecifications({className="" , productInfoInPage}){    


    return (
        <div className={`mb-7 scroll-mt-15 yekan-bold ${className}`}  id="TechnicalSpecifications">            
            <div className="px-2">
                <h1 className="py-3.5 lg:py-5 lg:text-[18px]">مشخصات فنی</h1>
                <div className="px-1">
                    {productInfoInPage.technical_specs &&
                    productInfoInPage.technical_specs.map((item,index)=> (
                        <div key={index} className="rounded-lg p-3 bg-blue-50 text-xs lg:text-[16px] mb-[5px] last:mb-0">
                            <span className="mb-2 block">{item.title}</span>
                            <span className="yekan-regular text-neutral-600">{item.value}</span>
                        </div>
                    ))
                    }                                        
                </div>                
            </div>
        </div>
    )
}