import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { IoImageOutline } from "react-icons/io5";
import { useState } from 'react';


export default function ImageSlideMobile({images}){
    const [slideNum , setSlideNum] = useState(1)
        
    const slideChangeHandler = (swiper)=>{
        setSlideNum(swiper.activeIndex + 1)
    }

    return (
        images != undefined &&
        <div className='relative'>
        <div className='bg-[#0794ff] z-10 h-6 px-2 rounded-2xl absolute bottom-15 right-3 text-white yekan-bold w-max flex-center'>
            <span className='pt-[5px]'>{slideNum}/{'5'}</span>
            <IoImageOutline className='inline-block ms-2'/>
        </div>
        <Swiper
        slidesPerView={1}
        onSlideChange={slideChangeHandler}
        >
            <SwiperSlide>
                <div>
                    <img src={images} alt="" className='mx-auto'/>
                </div>
            </SwiperSlide> 
            <SwiperSlide>
                <div>
                    <img src={images} alt="" className='mx-auto'/>
                </div>
            </SwiperSlide> 
            <SwiperSlide>
                <div>
                    <img src={images} alt="" className='mx-auto'/>
                </div>
            </SwiperSlide> 
            <SwiperSlide>
                <div>
                    <img src={images} alt="" className='mx-auto'/>
                </div>
            </SwiperSlide>   
            <SwiperSlide>
                <div>
                    <img src={images} alt="" className='mx-auto'/>
                </div>
            </SwiperSlide>          
        </Swiper>
    </div>
            
           
    )
}