import NavbarIconProduct from "./common/NavbarIconProduct";
import TimeLeft from "./common/TimeLeft";
import ImageSlideMobile from "./ImageSlideMobile";
import ColorsProduct from "./common/ColorsProduct";
import { Context } from "../../../Context";
import { useContext } from "react";

export default function MainProductContainer() {
  const { productInfoInPage } = useContext(Context);

  return (
    <>
      {productInfoInPage ? (
        <div className="container-1 mb-5 yekan-regular">
          <NavbarIconProduct />
          <div className="my-4">
            <TimeLeft product={productInfoInPage} />
          </div>
          <ImageSlideMobile images={productInfoInPage.img} />
          <h1 className="yekan-bold mt-3">{productInfoInPage.title}</h1>
          <ColorsProduct className="pb-2" />
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}
