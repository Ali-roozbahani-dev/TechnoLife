import { IoClose } from "react-icons/io5";


export default function PointsListItem({item , type , setFormInfo}){

    const deletePointHandler = () => {
        setFormInfo(prev => ({
        ...prev,
        points: {
            ...prev.points,
            [type]: prev.points[type].filter(point => point.id !== item.id)
        }
        }))
  }


    return (
        <div className="mb-1 rounded-md p-3 shadow-[0_0_5px_0_#cccccc]">
            <div className="mb-1">
                <button onClick={deletePointHandler} className="ms-auto block">
                    <IoClose className="text-[18px]"/>
                </button>
            </div>
            <span>{item.text}</span>
        </div>
    )
}