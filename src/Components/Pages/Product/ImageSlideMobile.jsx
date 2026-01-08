import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { IoImageOutline } from "react-icons/io5";
import { useState } from 'react';


export default function ImageSlideMobile(){
    const [slideNum , setSlideNum] = useState(1)
    
    const slideChangeHandler = (swiper)=>{
        setSlideNum(swiper.activeIndex + 1)
    }

    return (
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
                    <img src="/src/assets/images/ProductPage/productImage/color_image_TLP-165568_1a1a1a_810151ac-e124-49ff-935f-00b1d83b5673.webp" alt="" className='mx-auto'/>
                </div>
            </SwiperSlide> 
            <SwiperSlide>
                <div>
                    <img src="/src/assets/images/ProductPage/productImage/gallery-1-TLP-165568_5312c6b7-e188-459f-9a5e-9613b892aa07.webp" alt="" className='mx-auto'/>
                </div>
            </SwiperSlide> 
            <SwiperSlide>
                <div>
                    <img src="/src/assets/images/ProductPage/productImage/gallery-2-TLP-165568_b18ad0da-32e9-4435-8b07-be55f73c6abc.webp" alt="" className='mx-auto'/>
                </div>
            </SwiperSlide> 
            <SwiperSlide>
                <div>
                    <img src="/src/assets/images/ProductPage/productImage/gallery-3-TLP-165568_e0da8166-9cb1-46aa-b4ed-aa4326a87a16.webp" alt="" className='mx-auto'/>
                </div>
            </SwiperSlide>   
            <SwiperSlide>
                <div>
                    <img src="/src/assets/images/ProductPage/productImage/gallery-4-TLP-165568_bcdf051d-ffab-4114-9835-7117b9d6d1a7.webp" alt="" className='mx-auto'/>
                </div>
            </SwiperSlide>          
        </Swiper>
    </div>
    )
}