
export default function BlogCard({img,description}){

    return (
        <div className="w-full yekan-regular">
            <img src={img} className="rounded-t-sm w-full" alt="" />
            <p className="bg-[rgb(51,51,51)] h-15 w-full text-white rounded-b-lg text-[14px] pe-12 pt-3 ps-4">{description}</p>
        </div>
    )
}