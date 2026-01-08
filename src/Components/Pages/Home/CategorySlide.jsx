import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { GrFormPrevious,GrFormNext } from "react-icons/gr";
import useGet from '../../../Hooks/useGet'

export default function CategorySlide(){
    const [categories] = useGet("http://localhost:3001/categorieSlide")
    
    
    return (
       <div className="container-1 px-4 lg:px-10 my-10">
        <div className="Category-Slide yekan-regular">
            <button className="Category-Slide-prev-btn md:block -right-4"><GrFormNext  size={'15px'} className="mx-auto font-bold"/></button>
            <button className="Category-Slide-next-btn md:block -left-4"><GrFormPrevious  size={'15px'} className="mx-auto font-bold"/></button>
            <Swiper   
            modules={[Navigation,Autoplay]}  
            navigation={{
                prevEl:".Category-Slide-prev-btn",
                nextEl:".Category-Slide-next-btn"
            }}  
            autoplay={{
                delay : 4000,
                disableOnInteraction : false,
                pauseOnMouseEnter : true
            }} 
            loop={true}     
            breakpoints={{
               500 : {slidesPerView:2.8},
               700 : {slidesPerView:3.6},
               992 : {slidesPerView:5.6},
               1200 :{slidesPerView:6}, 
               1400 :{slidesPerView:7}

            }}
            
            >
                {categories.map((item)=>(
                <SwiperSlide key={item.id}>
                    <div className="Category-Slide-Item">
                        <div className='hover:shadow-[inset_0_0_0_4px_#179fdb]'><div><img src={item.src} alt={item.text} /></div></div>
                        <span>{item.text}</span>
                    </div>
                </SwiperSlide> 
                ))}
            </Swiper>
        </div>
       </div>
    )
}