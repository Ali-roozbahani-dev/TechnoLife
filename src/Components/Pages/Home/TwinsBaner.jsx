export default function TwinsBaner({img1,img2}){
    
    return (
        <div className="w-full">
            <div className="container-1 px-1 pb-5">
                <div className="row justify-between">
                    <div className="w-full md:w-1/2 px-7 mb-3"><img src={img1} alt="" className="w-full rounded-lg md:rounded-2xl"/></div>
                    <div className="w-full md:w-1/2 px-7 mb-3"><img src={img2} alt="" className="w-full rounded-lg md:rounded-2xl"/></div>
                </div>
            </div>
        </div>
    )
}