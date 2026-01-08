export default function FooterContact(){

    return (
        <div className="row justify-between text-white">
            <div className="h-[0.5px] w-full bg-[#d1d1d1] my-10"></div>
            <div className="w-full lg:w-[30%]">
                <p className="yekan-bold mb-4 text-[18px]">ارتباط با ما</p>
                <div className="mb-4"> تلفن : <a href="" className="inline-block ms-3">۰۲۱ - ۹۱۰۷۷۵۰۰</a></div>
                <div className="mb-4">ایمیل : <a href="" className="inline-block ms-3">info@technolife.com</a></div>
            </div>
            <div className="w-full lg:w-[30%]">
                <div className="flex flex-wrap items-center pb-5">
                    <p className="md:w-full pe-8 yekan-bold md:mb-4 text-[18px]">شبکه های اجتماعی</p>
                    <a href="" className="inline-block me-5 md:me-8">
                        <img src="/footerImgsnd3HZ.webp" alt="" />
                    </a>
                    <a href="" className="inline-block me-5 md:me-8">
                        <img src="/footerImgLueLo3.webp" alt="" />
                    </a>
                    <a href="" className="inline-block me-5 md:me-8">
                        <img src="/footerImgcHi6f1.webp" alt="" />
                    </a>
                    <a href="" className="inline-block me-5 md:me-8">
                        <img src="/footerImg7ujbp2.webp" alt="" />
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-[30%]">
                <p className="yekan-bold mb-4 text-[18px]">دانلود اپلیکیشن ما از :</p>
                <div className="flex flex-wrap w-full">
                    <a href="" className="bg-white rounded-sm mb-4 me-4 py-2 inline-block h-12 w-40">
                        <img src="/footerBazzar.png" alt="" className="block mx-auto"/>
                    </a>
                    <a href="" className="bg-white rounded-sm mb-4 me-4  py-2 inline-block h-12 w-40">
                        <img src="/footerSibapp.png" alt="" className="block mx-auto"/>
                    </a>
                    <a href="" className="bg-white rounded-sm py-2 inline-block h-12 w-40">
                        <img src="/footerMayket.png" alt="" className="block mx-auto"/>
                    </a>
                </div>
            </div>
            <div className="h-[0.5px] w-full bg-[#d1d1d1] my-10"></div>
        </div>
    )
}