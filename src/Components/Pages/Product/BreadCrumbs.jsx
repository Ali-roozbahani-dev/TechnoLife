import { Link } from "react-router-dom";

export default function BreadCrumbs({productInfoInPage}){


    return (
        <div className="BreadCrumbs container-1 overflow-scroll py-3 px-2 lg:px-6 yekan-regular">            
            <p className="w-max">
                <Link to={"/"} className="last:text-[rgb(0,0,2)]">فروشگاه اینترنتی تکنولایف</Link> /
                <Link to={`#`} className="last:text-[rgb(0,0,2)]">{productInfoInPage.title}</Link>                
            </p>
        </div>
    )
}