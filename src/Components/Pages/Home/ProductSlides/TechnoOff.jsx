import TechnoOffCard from "./TechnoOffCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GrFormPrevious} from "react-icons/gr";
import useGet from "../../../../Hooks/useGet";
import { Context } from "../../../../Context";
import { useContext, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TechnoOff() {
  const [products, loading, error] = useGet("http://localhost:3001/products");
  const { technotimePro, setTechnotimePro } = useContext(Context);

  useEffect(() => {
    setTechnotimePro(products);
  }, [products]);

  return (
    technotimePro.length > 0 && (
      <div className="container-1 lg:px-8 my-10 relative">
        <div className="technoOff lg:px-3 lg:rounded-[20px] lg:border yekan-regular">
          <div className="relative">
            <div className="TechnoOff-header lg:rounded-lg yekan-bold">
              <div className="text-[20px] md:text-[24px]">تکنوآف</div>
              <div>
                <span className="text-[15px] md:text-[18px]">نمایش همه</span>
                <GrFormPrevious className="inline-block text-xl" />
              </div>
            </div>
            <button className="technoOff-prev-btn right-3">
              <FaChevronRight className="mx-auto font-bold" />
            </button>
            <button className="technoOff-next-btn left-3">
              <FaChevronLeft className="mx-auto font-bold" />
            </button>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".technoOff-prev-btn",
                nextEl: ".technoOff-next-btn",
              }}
              breakpoints={{
                400: { slidesPerView: 2.3 },
                640: { slidesPerView: 3.3 },
                740: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
            >
              {technotimePro.map((pro) => (
                <SwiperSlide
                  key={pro.id}
                  className="card-divider last:after:bg-white"
                >
                  <div>
                    <TechnoOffCard {...pro} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    )
  );
}
