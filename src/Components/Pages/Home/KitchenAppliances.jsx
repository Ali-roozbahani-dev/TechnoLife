import useGet from "../../../Hooks/useGet"

export default function KitchenAppliances(){
    const [appliances] = useGet("http://localhost:3001/kitchenAppliances")

    return (
        <div className="container-1 px-8 yekan-regular my-8">
            <h1 className="text-[22px] font-bold mb-2"> لوازم خانگی <span className="font-normal text-[18px] px-px">خانه و آشپزخانه</span></h1>
            <div className="row justify-center items-center">
                {appliances.map((appliance)=>(
                    <div key={appliance.id} className="p-6 w-1/3 md:w-1/4 lg:w-1/7 overflow-hidden">
                        <div className="KitchenAppliances-item">
                            <img src={appliance.img}  alt="" />
                            <p className="yekan-bold lg:py-2 lg:text-md">{appliance.title}</p>
                        </div>
                    </div>
                ))}  
            </div>
        </div>
    )
}