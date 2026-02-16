import NavbarIconProduct from "./common/NavbarIconProduct";
import TimeLeft from "./common/TimeLeft";
import ColorsProduct from "./common/ColorsProduct";
import SellerSelected from "./SellerSelected";
import FooterProductPage from "./common/FooterProductPage";
import Insurance from "./common/Insurance";
import InPersonDeliveryBtn from "./common/InPersonDeliveryBtn";
import MainProperties from "./common/MainProperties";
import BuyOption from "./common/BuyOption";
import TechnicalSpecifications from "./common/TechnicalSpecifications";
import BuyOption2 from "./common/BuyOption2";
import Footer from "../../layout/Footer/Footer";
import Rating from "./comments/Rating";
import StickyBuyCardDesktop from "./common/StickyBuyCardDesktop";
import NavbarProductPropertie from "./common/NavbarProductPropertie";


export default function DesktopProductPage({productInfoInPage}) {
     

  return productInfoInPage.lenght != 0 ? (
    <>
      <div className="container-1 px-3.5 lg:px-5 xl:px-7">
        <div className="flex items-start justify-between pb-8">
          <div className="flex-1">
            <div className="flex justify-between items-start rounded-xl border border-[rgb(220,220,220)] p-8">
              <div className="w-1/2">
                <h1 className="yekan-bold mt-3">{productInfoInPage.title}</h1>
                <ColorsProduct className="my-10" />
                <MainProperties  productInfoInPage={productInfoInPage}/>
              </div>
              <div className="w-1/3">
                <NavbarIconProduct />
                <div className="w-full">
                  <img
                    src={productInfoInPage.img}
                    alt=""
                    className="w-ful"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-110 ps-10">
            <TimeLeft product={productInfoInPage} />
            <div className="rounded-xl border border-[rgb(220,220,220)] p-6 mb-6">
              <Insurance className="mb-4"/>
              <SellerSelected />
              <FooterProductPage />
            </div>
            <div className="rounded-xl border border-[rgb(220,220,220)] p-6">
              <InPersonDeliveryBtn />
            </div>
          </div>
        </div>
        <BuyOption />
        <div className="flex flex-wrap justify-between relative mb-10">
            <NavbarProductPropertie />
          <div className="flex-1">
            <TechnicalSpecifications productInfoInPage={productInfoInPage}/>
            <Rating productInfoInPage={productInfoInPage}/>            
          </div>
          <div className="w-110 ps-10 relative">
            <StickyBuyCardDesktop productInfoInPage={productInfoInPage}/>
          </div>
        </div>
      </div>
      <div className="container-1">
        <BuyOption2 className={"my-5"} />
        <Footer isProductPage={true} />
      </div>
    </>
  ) : (
    <div>loading</div>
  );
}
