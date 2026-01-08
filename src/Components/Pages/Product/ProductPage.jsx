import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import BreadCrumbs from "./BreadCrumbs";
import MainProductContainer from "./MainProductContainer";
import SellerSelected from "./SellerSelected";
import Insurance from "./common/Insurance";
import InPersonDeliveryBtn from "./common/InPersonDeliveryBtn";
import BuyOption from "./common/BuyOption";
import MainProperties from "./common/MainProperties";


export default function ProductPage(){

    return (
        <>
        <Header isProductPage={true}/>               
        <BreadCrumbs />
        <div className="container-1 px-3">
            <MainProductContainer />
            <div className="my-5 h-px w-full bg-[#e0e0ff]"></div>
            <SellerSelected  className="mb-3"/> 
            <Insurance className="mb-7"/> 
        </div>
        <div className="container-1">
            <div className="my-5 h-px w-full bg-[#e0e0ff]"></div>
        </div>
        <div className="container-1 px-3">
            <InPersonDeliveryBtn className="mb-3"/>
        </div>
        <BuyOption />
        <MainProperties className={"px-3.5"}/>
        <Footer isProductPage={true}/>
        </>
    )
}