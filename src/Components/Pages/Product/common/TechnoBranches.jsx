import { useEffect, useState } from "react"
import useGet from "../../../../Hooks/useGet"

export default function TechnoBranches(){
    const [branches] = useGet("http://localhost:3001/branches")
    const [selectedId , setSelectedId] = useState(1)
    const [selected , setSelected] = useState(null)
        
    useEffect(()=>{
        setSelected(()=>branches.find((branch) => branch.id === selectedId))
    },[selectedId,branches])

    
    return (
        <div className="md:flex bg-white rtl justify-between items-start md:pt-5">
                <div className="yekan-regular md:w-[38%] border-b border-[#e6e6ff] md:border-0 pb-5 pt-4  text-justify px-3.5 md:p-0">
                    {branches.map((branch)=>(
                    <div key={branch.id} onClick={()=>setSelectedId(branch.id) } className={`${"yekan-bold"} text-[12px] flex items-center md:text-[17px] cursor-pointer rounded-md py-3.5 px-3 shadow-[0_5px_16px_0_#caccce] mb-2.5`}>
                        <input type="radio" name="branch" checked={selectedId === branch.id}  id={branch.id} className="me-2.5 accent-techno w-5 h-5" />
                        <p className={`inline-block ${selectedId === branch.id ? "" : "yekan-regular"}`}>{branch.title}</p>
                    </div> 
                    ))}
                </div>  
                {selected &&
                    <div className="md:w-[57%] md:flex flex-col-reverse">
                        <div className="px-3.5 md:px-0 pt-5 md:pt-0 border-t md:border-0 border-[#e9e9e9] mt-0.75 md:mt-0">
                            <p  className="rounded-md px-4 text-[#2c2c2c] py-3 border border-[#ebebeb] w-full yekan-regular text-sm">
                                <span className="me-2">آدرس فروشگاه :</span>
                                <span className="yekan-bold text-[12px] md:text-[15px]">{selected.address}</span>
                            </p>
                        </div>   
                        <div className="row justify-center md:justify-between gap-x-2.5 md:gap-x-0 gap-y-3 py-4 md:pt-0">
                            {selected.images.map((image)=>(
                                <div key={image.id} className="w-full px-3.5 md:px-0 md:w-[48%] rounded-md">
                                    <img src={image.src} alt="" className="w-full"/>
                                </div>    
                            ))}                        
                        </div>
                    </div>
                }              
            </div>
    )
}