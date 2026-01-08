import NavbarIconProduct from "./common/NavbarIconProduct"
import TimeLeft from "./common/TimeLeft"
import ImageSlideMobile from "./ImageSlideMobile"
import ColorsProduct from "./common/ColorsProduct"
import { useParams } from "react-router-dom"
import useGet from "../../../Hooks/useGet"


export default function MainProductContainer(){
    const {id} = useParams()
    const [product] = useGet(`http://localhost:3001/products/${id}`)



    return (
        <>
        <div className="container-1 mb-5 yekan-regular">
            <NavbarIconProduct />
            <div className="my-4">
              <TimeLeft />             
            </div>
            <ImageSlideMobile />
            <h1 className="yekan-bold mt-3">{product.title}</h1>
            <ColorsProduct className="pb-2"/>
        </div>
        </>               
    )
}