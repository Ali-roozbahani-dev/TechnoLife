import MainProductContainer from "./MainProductContainer";
import SellerSelected from "./SellerSelected";
import Insurance from "./common/Insurance";
import InPersonDeliveryBtn from "./common/InPersonDeliveryBtn";
import BuyOption from "./common/BuyOption";
import MainProperties from "./common/MainProperties";
import TechnicalSpecifications from "./common/TechnicalSpecifications";
import Rating from "./comments/Rating";
import BuyOption2 from "./common/BuyOption2";
import NavbarProductPropertie from "./common/NavbarProductPropertie"
import FooterProductPage from "./common/FooterProductPage";
import Footer from "../../layout/Footer/Footer";

export default function MobilProductPage({ productInfoInPage }) {
  return (
    <>
      <div className="container-1 px-3">
        <MainProductContainer />
        <div className="my-5 h-px w-full bg-[#e0e0ff]"></div>
        <SellerSelected className="mb-3" />
        <Insurance className="mb-7" />
      </div>
      <div className="container-1">
        <div className="my-5 h-px w-full bg-[#e0e0ff]"></div>
      </div>
      <div className="container-1 px-3">
        <InPersonDeliveryBtn className="mb-3" />
      </div>
      <div className="container-1">
        <BuyOption />
        <MainProperties productInfoInPage={productInfoInPage} className={"px-3.5"} />
        <NavbarProductPropertie />
        <TechnicalSpecifications productInfoInPage={productInfoInPage}/>
      </div>
      <div className="container-1 px-3.5">
        <Rating productInfoInPage={productInfoInPage} />
      </div>      
      <div className="container-1 px-3.5">
        <BuyOption2 className="my-10"/>
      </div>
      <Footer isProductPage={true} />
      <FooterProductPage />
    </>
  );
}
