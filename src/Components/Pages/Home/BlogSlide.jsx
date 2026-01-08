import useGet from "../../../Hooks/useGet"
import BlogCard from "./BlogCard"
import { GrFormPrevious } from "react-icons/gr"
import { FaChevronRight,FaChevronLeft } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function BlogSlide({title}){
    const [blogs] = useGet("http://localhost:3001/blogs")

    return (         
            blogs.length && 
            <div className="container-1 px-3 lg:px-8 my-10 relative">            
            <div className="ProductSlider yekan-regular">
                <div className="relative pb-6">
                    <div className="ProductSlider-header mb-5 yekan-bold">
                        <div className="text-[19px] md:text-[22px]">{title}</div>
                        <div className="text-[rgb(34,60,120)]"><span className="text-[15px] md:text-[16px]">نمایش بیشتر در بلاگ</span><GrFormPrevious  className="inline-block text-xl"/></div>
                    </div>                    
                    <button className="ProductSlider-prev-btn BlogSlide-prev-btn right-3" id="BlogSlide"><FaChevronRight className="mx-auto font-bold"/></button>
                    <button className="ProductSlider-next-btn BlogSlide-next-btn left-3" id="BlogSlide"><FaChevronLeft className="mx-auto font-bold"/></button>
                    <Swiper
                        spaceBetween={30}
                        modules={[Navigation]}
                        navigation={{
                            prevEl:".BlogSlide-prev-btn",
                            nextEl:".BlogSlide-next-btn"
                        }}  
                        breakpoints={{
                            400:{slidesPerView:1},
                            640:{slidesPerView:2},
                            740:{slidesPerView:3},
                            1024:{slidesPerView:5}
                        }}                  
                        >
                        {blogs.map((blog)=>(
                            <SwiperSlide key={blog.id}><div><BlogCard img={blog.img} description={blog.description}/></div></SwiperSlide>  
                        ))}
                    </Swiper> 
                </div>
            </div>
        </div> 
    )
}