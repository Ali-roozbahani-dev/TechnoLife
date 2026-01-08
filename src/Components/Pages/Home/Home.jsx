import Header from "../../layout/Header/Header"
import Footer from "../../layout/Footer/Footer"
import TechnoTime from "../../Common/TechnoTime"
import Baner from "../../layout/Baner/Baner"
import CategorySlide from "./CategorySlide"
import TwinsBaner from "./TwinsBaner"
import TriplexBaner from "./TriplexBaner"
import ProductSlider from "./ProductSlider"
import TechnoOff from "./TechnoOff"
import BestBaner from "./BestBaner"
import AboutShoping from "./AboutShoping"
import BlogSlide from "./BlogSlide"
import KitchenAppliances from "./KitchenAppliances"
import BrandSlide from "./BrandSlide"

export default function Home(){

    return (
        <>
        <Header/> 
        <Baner /> 
        <CategorySlide />
        <TechnoTime />
        <TriplexBaner 
        img1={"./src/assets/images/triplexBaner/1/banner_CenterTripletBanners_cdikC3_d156689f-b6e9-497e-9f31-8410d61ee22b.webp"} 
        img2={"./src/assets/images/triplexBaner/1/banner_CenterTripletBanners_rBp2Je_73382f90-7f30-4b5a-b7b8-e05ea751e500.webp"} 
        img3={"./src/assets/images/triplexBaner/1/banner_CenterTripletBanners_rBp2Je_73382f90-7f30-4b5a-b7b8-e05ea751e500.webp"} />
        <ProductSlider title={"پرچمداران هوشمند"} uniqClass={"ProductSlider1"}/>       
        <TechnoOff />
        <TriplexBaner 
        img1={"./src/assets/images/triplexBaner/2/banner_SecondTripletBanners_V6pmGn_23e6e4a4-18a8-4c4c-bb25-defd2f4492ec.png"} 
        img2={"./src/assets/images/triplexBaner/2/banner_SecondTripletBanners_6DZIiY_24d5e01d-4267-48e2-959a-bea7961a8734.png"} 
        img3={"./src/assets/images/triplexBaner/2/banner_SecondTripletBanners_5uFiwB_c89dff1a-34c1-4668-a6e4-0406efe27966.png"} />
        <BestBaner categoryName={"موبایل"}/>
        <div className="hidden lg:block container-1 mb-10 px-8"><img src="./src/assets/images/banner_SingleFullWidthBanner_zMg29E_09446b4c-4452-470f-940f-47b3174de800.png" alt="" className="w-full rounded-[20px]"/></div>
        <ProductSlider title={"لپ‌تاپ‌ها در تکنولایف"} uniqClass={"ProductSlider2"}/>
        <BestBaner categoryName={"لپ تاپ"}/>
        <TwinsBaner 
        img1={"./src/assets/images/twinsBaner/1/banner_FirstTwinBanners_O2.png"} 
        img2={"./src/assets/images/twinsBaner/1/banner_FirstTwinBanners_MB.png"}/>
        <ProductSlider title={"ابزارآلات"} uniqClass={"ProductSlider3"}/>
        <BestBaner categoryName={"هندزفری"}/> 
        <BrandSlide />        
        <ProductSlider title={"کامپیوتر و تجهیزات"} uniqClass={"ProductSlider4"}/>         
        <TwinsBaner 
        img1={"./src/assets/images/twinsBaner/2/banner_SecondTwinBanners_3qGpZe_82783aee-815b-43a8-8a3c-53b87017d20f.png"} 
        img2={"./src/assets/images/twinsBaner/2/banner_SecondTwinBanners_OgJ6NB_6d2374f3-7e10-4437-a115-9b7d05bc2de9.png"}/>
        <KitchenAppliances />
        <TwinsBaner 
        img1={"./src/assets/images/twinsBaner/3/banner_ThirdTwinBanners_Awtfze_4d7819d6-2744-49dd-8e8f-c1005b3b30fd.png"} 
        img2={"./src/assets/images/twinsBaner/3/banner_ThirdTwinBanners_T0pb4X_60144b3d-f6fb-4a0f-a487-9123245419ad.png"}/>
        <ProductSlider title={"لوازم جانبی منتخب"} uniqClass={"ProductSlider5"}/>
        <ProductSlider title={"لوازم خانگی تکنولایف"} uniqClass={"ProductSlider6"}/>
        <BlogSlide title={"از وبلاگ تکنولایف"}/>
        <AboutShoping />                     
        <Footer />     
        </>
    )
}