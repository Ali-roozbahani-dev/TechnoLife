import { useEffect } from "react"
import useGet from "../../../Hooks/useGet"

export default function BestBaner({categoryName}){
    const [bestAlbum] = useGet(`http://localhost:3001/best_of?title=${categoryName}`)

    


    return (
        bestAlbum[0] && 
        <div className="yekan-regular mt-5 mb-10">
            <h1 className="text-center mb-2 text-xl md:text-[26px] yekan-bold">برترین های {bestAlbum[0].title}</h1>
            <div className="row justify-center items-center">
                {bestAlbum[0].brands.map((brand)=>(
                 <div key={brand.id} className="text-center w-30 md:w-42 text-sm md:text-lg my-3 mx-4">
                    <img src={brand.img} alt={brand.name}  className="w-20 mx-auto md:w-full"/>
                    <h2>{brand.name}</h2>
                 </div>
                ))}                
            </div>
        </div>
    )
}