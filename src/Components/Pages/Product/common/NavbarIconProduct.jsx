import { CiHeart } from "react-icons/ci";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegComments } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";


export default function NavbarIconProduct(){

    return (
        <div className="NavbarIconProduct yekan-bold">
            <div>
                <span>اشتراک گذاری</span>
                <div className="text-[20px]"><BsShare /></div>
            </div>
            <div>
                <span>نظرات کاربران</span>
                <div className="text-[23px]"><FaRegComments /></div>
            </div>
            <div>
                <span>مقایسه کالا</span>
                <div className="text-[23px]"><IoIosGitCompare /></div>
            </div>
            <div>
                <span>اطلاع رسانی تکنوآف</span>
                <div className="text-[23px]"><HiOutlineBellAlert /></div>
            </div>
            <div>
                <span>مورد علاقه</span>
                <div className="text-[25px]"><CiHeart color="red"/></div>
            </div>
        </div>                
    )
}