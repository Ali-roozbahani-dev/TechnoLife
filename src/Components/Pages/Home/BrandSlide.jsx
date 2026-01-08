import useGet from "../../../Hooks/useGet"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { GrFormPrevious,GrFormNext } from "react-icons/gr";

export default function BrandSlide(){
    const [brands] = useGet("http://localhost:3001/brands-img")

    return (
        <div className="container-1 lg:px-8 my-15 yekan-bold">
            <div className="lg:rounded-3xl overflow-hidden lg:flex justify-between border-2 border-[rgb(208,208,208)]">
                <div className="text-white flex-1 flex justify-center items-center text-lg lg:text-xl xxl:text-2xl bg-linear-to-r from-[#0178b0] to-[#1a3771]"><span className="py-1">برند های منتخب</span></div>
                <div className="w-full lg:w-11/13 py-5 relative">
                    <button className="BrandSlide-prev-btn ProductSlider-prev-btn top-12 right-3"><GrFormNext color="rgb(27,53,112)" size={'30px'} className="mx-auto font-bold"/></button>
                    <button className="BrandSlide-next-btn ProductSlider-next-btn top-12 left-3"><GrFormPrevious color="rgb(27,53,112)" size={'30px'} className="mx-auto font-bold"/></button>
                    <Swiper                    
                    modules={[Navigation,Pagination]}
                    navigation={{
                            prevEl:".BrandSlide-prev-btn",
                            nextEl:".BrandSlide-next-btn"
                        }}  
                        breakpoints={{
                            400:{slidesPerView:2.4},
                            640:{slidesPerView:3.4},
                            740:{slidesPerView:4.4},
                            1024:{slidesPerView:6.4}
                        }} 
                    >
                        {brands.map((brand)=>(
                            <SwiperSlide className="border-l-2 last:border-0 border-[rgb(208,208,208)]" key={brand.id}>
                                <div className="w-full px-10"><img src={brand.img} alt="" className="w-full"/></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                </div>
            </div>
        </div>
    )
}