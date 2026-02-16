import { useRoutes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import ProductPage from "./Components/Pages/Product/ProductPage";
import ShoppingBag from "./Components/Pages/ShoppingBag/ShoppingBag";


export default function Pages(){
    return (
        useRoutes([
            {path : '/' , element : <Home />}, 
            {path : '/product/:id' , element : <ProductPage />},
            {path : '/ShoppingBag' , element : <ShoppingBag />},
            {path : '*' , element : <Home />}

        ])
    )
}