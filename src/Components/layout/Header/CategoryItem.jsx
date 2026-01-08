import { FaChevronLeft } from "react-icons/fa";
export default function CategoryItem({src,text,id,activeItem,setActiveItem}){    
    const isActive = activeItem === id;    
    
    return (
        <li className="li_category" onMouseEnter={()=>setActiveItem(id)}>
            <a className={`flex cursor-pointer rounded-sm items-center py-2.5 pe-2 ps-4 ${isActive ? 'bg-[#f3f8fc]' : 'bg-transparent'}`}>
            <div className="p-1 bg-white rounded-full shadow-xl me-3">
            <img src={src} alt="آیکون" />  
            </div>
            <span className={`text-[14px] text-[#4a4a4a] yekan-bold ${isActive ? 'text-[15px] text-[black]': ''}`}>{text}</span>
            {isActive && <FaChevronLeft color="#223c78" size={'12px'}  className="ms-auto"/> }                     
            </a>
        </li>
    )
}