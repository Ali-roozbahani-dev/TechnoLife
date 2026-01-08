import { LuShieldCheck } from "react-icons/lu";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LuTrash } from "react-icons/lu";



export default function InsuranceDetail({setOpenInsuranceDetail,insuranceStatus,setInsuranceStatus,addInsurance}){
    

    return(
        <div className="bg-[rgba(0,0,0,.3)] z-1000 h-screen w-full fixed top-0 right-0 lg:flex justify-center items-center" onClick={()=>setOpenInsuranceDetail(false)}>
            <div className="bg-white pt-1.5 rounded-t-lg absolute lg:static bottom-0 right-0 w-full lg:w-[770px]" onClick={(e)=>e.stopPropagation()}>
                <div className="lg:px-6">
                    <span className="block lg:hidden mx-auto bg-[rgb(137,137,137)] rounded-2xl h-0.75 w-6"></span>
                    <div className="flex-between yekan-bold py-4 px-3.5 lg:px-0 lg:border-b border-[rgb(145,158,188)] lg:mb-4">
                        <h1 className="text-[rgb(111,111,111)] lg:text-[#2e2e2e] text-[15px] lg:text-[20px]">اطلاعات خرید بیمه نامه</h1>
                        <AiOutlineCloseCircle className="text-[rgb(111,111,111)] text-[20px] md:text-[25px] lg:text-[30px] cursor-pointer" onClick={()=>setOpenInsuranceDetail(false)}/>
                    </div> 
                    <div className="px-3.5">
                        <h1 className="text-sm md:text-[15px] lg:text-[18px] yekan-bold mb-4">جزئيات بیمه</h1>
                        <div className="text-[rgb(0,5,17)] text-xs md:text-sm lg:text-[15px] yekan-regular">
                            <p className="mb-3 lg:mb-4">بیمه سامان بخش زیادی از خسارات حوادث زیر را جبران می‌کند:</p> 
                            <ul className="ps-1 md:ps-3">
                                <li className="mb-3 lg:mb-4"><span className="me-1">۱.</span> سرقت انواع گوشی‌ موبایل، لپ‌تاپ، کنسول بازی و سایر لوازم الکتریکی</li>
                                <li className="mb-3 lg:mb-4"><span className="me-1">۲.</span> انواع صدمات فیزیکی مانند ضربه دیدگی، شکستگی و آب‌خوردگی غیرعمدی</li>
                                <li className="mb-3 lg:mb-4"><span className="me-1">۳.</span> آتش‌سوزی و انفجار‌های غیرعمدی</li>
                                <li className="mb-3 lg:mb-4"><span className="me-1">۴.</span> سوختگی یا نیم‌سوز شدن، القای الکتریکی، اتصال کوتاه و نوسانات ولتاژ غیرعمدی</li>
                            </ul>
                            <p className="text-[rgb(34,60,120)] yekan-bold my-5 lg:my-6">توجه: موبایل‌های رجیستر شده و تبلت‌های سیم کارت خور رجیستر شده شامل پوشش سرقت به هر علت (کف زنی ، قاپ زنی و زورگیری) می‌باشند.</p>
                            <p className="text-[rgb(34,60,120)] yekan-bold mb-5 lg:mb-6">توجه: برای ثبت بیمه وارد پروفایل کاربری خود در سایت تکنولایف شوید و اطلاعات خود شامل کد ملی و تاریخ تولد را تکمیل نمایید</p> 
                        </div>
                    </div>      
                </div>
                <div className="bg-[rgb(243,248,253)] px-3.5 py-4.5 flex-between yekan-bold">
                    <button className={`${insuranceStatus ? "bg-[rgb(189,197,215)]" : ""} relative rounded-md text-techno border border-techno text-sm h-10 lg:h-15 w-50 lg:w-80 flex-center pe-3 ps-5 lg:ps-10 lg:pe-5`} onClick={addInsurance}>
                        <span className={`lg:text-[17px] ${insuranceStatus ? "text-[black]" : ""}`}>{insuranceStatus ? "حذف بیمه" : "افزودن بیمه به کالا"}</span>
                        <div className="absolute top-2.5 left-3 lg:top-4 lg:left-5">
                          {insuranceStatus ? <LuTrash className="inline-block text-[18px] lg:text-[25px]"/> : <LuShieldCheck className="inline-block text-[20px] lg:text-[28px]"/> }   
                        </div>
                    </button>
                    <div className="lg:flex flex-row-reverse items-center">
                        <div className="text-sm mb-1 lg:mb-0">
                            <span className="me-1 lg:text-[19px]">۳۹,۷۱۰</span>
                            <span>تومان</span>                        
                        </div>
                        <div className="text-[rgb(145,158,188)] text-xs lg:text-[16px] text-left">
                            <span className="line-through me-1 lg:me-3">۶۲,۷۰۰</span>
                            <span className="lg:hidden">تومان</span>
                        </div>                        
                    </div>
                </div>
            </div>            
        </div>
    )
}