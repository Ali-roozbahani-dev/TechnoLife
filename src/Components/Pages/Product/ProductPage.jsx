import MobilProductPage from "./MobilProductPage";
import DesktopProductPage from "./DesktopProductPage";
import Header from "../../layout/Header/Header";
import BreadCrumbs from "./BreadCrumbs";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context";
import useGet from "../../../Hooks/useGet";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const [windowSize, setWindowSize] = useState(() => {
    return window.innerWidth < 768 ? "mobile" : "desktop";
  });
  const { id } = useParams();
  const [product] = useGet(`http://localhost:3001/products/${id}`);
  const { setProductInfoInPage, productInfoInPage } = useContext(Context);

  // دریافت کامنت ها  
  const [comments] = useGet(`http://localhost:3001/comments?productId=${id}`) 


  useEffect(() => {
    const media = window.matchMedia("(max-width : 992px)");

    const handlerResize = () => {
      setWindowSize(media.matches ? "mobile" : "desktop");
    };
    handlerResize();
    media.addEventListener("change", handlerResize);

    return () => media.removeEventListener("change", handlerResize);
  }, []);

  useEffect(() => {
    setProductInfoInPage(product);

    return () => setProductInfoInPage([]);
  }, [product]);

  return (
    <>
      <Header isProductPage={true} />
      <BreadCrumbs productInfoInPage={productInfoInPage}/>
      {windowSize === "mobile" ? <MobilProductPage productInfoInPage={{...productInfoInPage , comments}}/> : <DesktopProductPage productInfoInPage={{...productInfoInPage , comments}}/>}
    </>
  );
}
