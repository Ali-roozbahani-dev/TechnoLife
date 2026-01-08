import { Swiper,SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { GrFormPrevious,GrFormNext } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";



export default function Baner(){

    return (
        <div className="baner-container">
            <div className="btn-parent hidden lg:block">
                <button className="baner-prev-btn"><FaPlay className="text-[#ffffff] text-[50px]"/><GrFormNext className="mx-auto text-[25px] absolute right-4 top-1/4"/></button>
                <button className="baner-next-btn"><FaPlay className="text-[white] text-[50px] rotate-180"/><GrFormPrevious  className="mx-auto text-[25px] absolute left-4 top-1/4"/></button>
            </div>
            <Swiper  slidesPerView={1}
            modules={[Pagination,Navigation,Autoplay]}
            autoplay={{
                delay : 3000,
                disableOnInteraction : false,
                pauseOnMouseEnter : true
            }}
            loop={true}
            speed={800}
            pagination={{clickable:true}}
            navigation={{
                prevEl:'.baner-container .baner-prev-btn',
                nextEl:'.baner-container .baner-next-btn'
            }}
            >
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner1.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner2.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner3.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner4.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner5.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner6.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner7.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner8.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner9.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner10.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner11.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner12.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src="./src/assets/images/Baner/baner13.webp" alt="" /></div></SwiperSlide>
            </Swiper>
        </div>
    )
}