import TechnoTimeCard from "./ProductSlides/TechnoTimeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FaGripfire } from "react-icons/fa6";
import useGet from "../../Hooks/useGet";
import { Context } from "../../Context";
import { useContext, useEffect } from "react";

export default function TechnoTime() {
  const [products, loading, error] = useGet("http://localhost:3001/products");
  const { technotimePro, setTechnotimePro } = useContext(Context);

  useEffect(() => {
    setTechnotimePro(products);
  }, [products]);

  return (
    technotimePro.length > 0 && (
      <div className="container-1 px-3 lg:px-8 my-10 relative">
        <div className="technoTime yekan-regular">
          <div className="relative">
            <div className="row px-4 yekan-bold pb-8 py-3 text-white justify-between">
              <div>
                <FaGripfire className="inline-block me-1 md:text-2xl" />{" "}
                <span className="text-md md:text-lg">تکنوتایم</span>
              </div>
              <div>
                <span className="text-sm">نمایش همه</span>{" "}
                <GrFormPrevious className="inline-block ms-1" />
              </div>
            </div>
            <button className="prev-btn right-3 md:block">
              <GrFormNext
                color="white"
                size={"30px"}
                className="mx-auto font-bold"
              />
            </button>
            <button className="next-btn left-3 md:block">
              <GrFormPrevious
                color="white"
                size={"30px"}
                className="mx-auto font-bold"
              />
            </button>
            <Swiper
              spaceBetween={5}
              modules={[Navigation]}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              breakpoints={{
                400: { slidesPerView: 2.3 },
                640: { slidesPerView: 3.3 },
                1200: { slidesPerView: 6 },
              }}
            >
              {technotimePro.map((pro) => (
                <SwiperSlide key={pro.id}>
                  <div>
                    <TechnoTimeCard {...pro} />
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
