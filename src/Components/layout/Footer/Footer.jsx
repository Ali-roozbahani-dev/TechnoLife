import { FaAngleUp } from "react-icons/fa6";
import FooterList from "./FooterList";
import FooterContact from "./FooterContact";
import FooterLicense from "./FooterLicense";
import NavMobileMain from "./NavMobileMain";


export default function Footer({isProductPage = false , isShoppingBagPage=false}){


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

    return (
        <>
        <footer className={`yekan-regular px-3 ${isShoppingBagPage ? "hidden md:block" : ""}`}>
            <div className="bg-linear-to-r from-[#0178b0] to-[#1a3771] py-2 w-full rounded-[30px] mb-1">
                <div className="container-1 px-8">
                    <div className="row pt-15 pb-10 justify-between">
                        <div><img src="/static_white_logo_techno.png" alt="" className="block w-[110px] md:w-[180px]"/></div>
                        <div>
                            <button className="bg-amber-50 rounded-lg py-1.5  md:py-2.5 px-5  md:px-10 cursor-pointer" onClick={scrollToTop}><FaAngleUp className="inline-block me-2"/> <span className="text-sm md:text-md">بازگشت به بالا</span></button>
                        </div>
                    </div>
                    <FooterList />
                    <FooterContact />
                    <FooterLicense />
                </div>
            </div>            
        </footer>
        {!isProductPage && <NavMobileMain />}
        </>
    )
}