import { useContext, useState, useEffect } from "react";
import { Context } from "../../../../Context";
import AddedToCartBtn from "./AddedToCartBtn";
import { FaPercent } from "react-icons/fa";
import { applyDiscount } from "../../../../utils/appUtils";

export default function FooterProductPage() {
  const { productInfoInPage } = useContext(Context);
  const [applyDis, setApplyDis] = useState(null);

  useEffect(() => {
    productInfoInPage.length != 0 &&
      setApplyDis(() =>
        applyDiscount(
          productInfoInPage.price,
          productInfoInPage.discount.value,
        ),
      );
  }, [productInfoInPage]);

  return (
    productInfoInPage.length != 0 && (
      <div className="mobileNavbar sticky md:static bottom-0 right-0 w-full md:border-0">
        <div className="py-3 yekan-regular bg-[#f0f0f0] md:bg-white">
          <div className="flex justify-end items-center px-3">
            <span className="TechnoOffPercent yekan-bold">
              <FaPercent className="inline-block me-1 text-[10px] md:text-[11px]" />{" "}
              <span className="pt-0.5">
                {productInfoInPage.discount.value.toLocaleString("fa-IR")}
              </span>
            </span>
            <div className="yekan-bold">
              <span className="line-through mx-4 text-[#848484] xl:text-[18px]">
                {productInfoInPage.price.toLocaleString("fa-IR")}
              </span>
              <div className="text-lg xl:text-[24px] inline-block text-[#323232]">
                {applyDis && applyDis.toLocaleString("fa-IR")}{" "}
                <span className="text-[13px]">تومان</span>
              </div>
            </div>
          </div>
          <div className="px-3 mt-2">
            <AddedToCartBtn productInfoInPage={productInfoInPage}/>
          </div>
        </div>
      </div>
    )
  );
}
