import { MdOutlineTimer } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { useContext, useEffect, useState, useCallback } from "react";
import { applyDiscount, timeLeftHandler } from "../../../../utils/appUtils";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../../Context";

export default function TechnoTimeCard({ id, img, title, price, discount }) {
  const { setTechnotimePro } = useContext(Context);
  const [timeLeft, setTimeLeft] = useState(() => timeLeftHandler(discount.end_at));
  const navigate = useNavigate();
  const applyDis = applyDiscount(price, discount.value);

  const handleClick = useCallback(() => {
    navigate(`/product/${id}`);
  }, [navigate, id]);

 useEffect(() => {
  const timer = setInterval(() => {
    const updatedTime = timeLeftHandler(discount.end_at);

    if (!updatedTime.expired) {
      setTimeLeft(updatedTime);
    } else {
      // زمان تخفیف اکسپایر شد، به صورت رندوم بین 1 تا 24 ساعت تمدید شود
      const randomHours = Math.floor(Math.random() * 24) + 1; 
      const newEndAt = Math.floor(Date.now() / 1000) + randomHours * 3600;

      discount.end_at = newEndAt;
      
      const newTimeLeft = timeLeftHandler(newEndAt);
      setTimeLeft(newTimeLeft);
    }
  }, 1000);

  return () => clearInterval(timer);
}, [discount, setTechnotimePro]);

  if (timeLeft.expired) return null;

  return (
    <div className="TechnoTimeCard yekan-regular" onClick={handleClick}>
      <span className="TechnoTimeLabel yekan-bold">تکنوتایم</span>

      <div className="px-6">
        <img src={img} alt={title} className="w-full" />
      </div>

      <div className="px-4 flex flex-col justify-between grow">
        <div className="TechnoTimeTitle">{title}</div>

        <div>
          <div className="TechnoTimepriceBody">
            <span className="TechnoTimePercent yekan-bold">
              <FaPercent size="11px" className="inline-block me-1 text-xs" />{" "}
              <span className="pt-px">{discount.value.toLocaleString("fa-IR")}</span>
            </span>

            <div className="yekan-bold">
              <div>
                <span className="text-lg">{applyDis.toLocaleString("fa-IR")}</span>{" "}
                <span className="text-[11px] inline-block ms-px text-[#717171]">تومان</span>
              </div>
              <span className="line-through text-[#848484]">{price.toLocaleString("fa-IR")}</span>
            </div>
          </div>

          <div className="footerCard">
            <div className="text-[#606060]">
              <MdOutlineTimer className="inline-block" />{" "}
              <span className="text-[13px]">زمان باقی مانده</span>
            </div>
            <div>
              <span className="text-[#991b21] underline text-[20px] yekan-bold">
                {timeLeft.hour}:{timeLeft.minutes}:{timeLeft.second}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
