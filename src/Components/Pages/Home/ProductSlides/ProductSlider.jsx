import TechnoOffCard from "./TechnoOffCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import useGet from "../../../../Hooks/useGet";
import { Context } from "../../../../Context";
import { useContext, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProductSlider({ title, uniqClass }) {
  const [products, loading, error] = useGet("http://localhost:3001/products");
  const { technotimePro, setTechnotimePro } = useContext(Context);

  useEffect(() => {
    setTechnotimePro(products);
  }, [products]);

  return (
    technotimePro.length > 0 && (
      <div className="container-1 lg:px-8 my-10 relative">
        <div className="ProductSlider lg:border lg:rounded-[20px] yekan-regular">
          <div className="relative">
            <div className="ProductSlider-header yekan-bold">
              <div className="text-[19px] md:text-[22px]">{title}</div>
              <div className="text-[rgb(34,60,120)]">
                <span className="text-[15px] md:text-[16px]">نمایش همه</span>
                <GrFormPrevious className="inline-block text-xl" />
              </div>
            </div>
            <button
              className={`${uniqClass}-prev-btn ProductSlider-prev-btn md:block right-3`}
            >
              <FaChevronRight className="mx-auto font-bold" />
            </button>
            <button
              className={`${uniqClass}-next-btn ProductSlider-next-btn md:block left-3`}
            >
              <FaChevronLeft className="mx-auto font-bold" />
            </button>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: `.${uniqClass}-prev-btn`,
                nextEl: `.${uniqClass}-next-btn`,
              }}
              breakpoints={{
                400: { slidesPerView: 2.2 },
                640: { slidesPerView: 3 },
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
