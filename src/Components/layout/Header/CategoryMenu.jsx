import React, { useContext } from "react";
import useGet from "../../../Hooks/useGet";
import CategoryItem from "./CategoryItem";
import "./CategoryMenu.css";
import { MdClose } from "react-icons/md";
import { Context } from "../../../Context";
import { useState } from "react";
import UnderOne from "./UnderOne";
import { scrollHandler } from "../../../utils/appUtils";

export default function CategoryMenu({ isShoppingBagPage }) {
  const [activeItem, setActiveItem] = useState(null);
  const [categories, loading, error] = useGet(
    "http://localhost:3001/categories",
  );
  const { disCategory, setDisCategory, activeCategory, setActiveCategory } =
    useContext(Context);

  const closeCategoryHandler = () => {
    scrollHandler(disCategory);
    activeCategory ? setActiveCategory("") : setActiveCategory("bg-[#f1f8ff]");
    setDisCategory("hidden");
    setActiveItem(null);
  };

  return (
    <div
      className={`${disCategory} fixed z-1000 right-0 ${isShoppingBagPage ? "top-[116px]" : "top-[calc(115px+7vh)]"} bg-[rgba(0,0,0,0.3)] h-screen w-full`}
    >
      <div
        className="flex select-none h-full border-t border-t-stone-300 relative"
        onClick={closeCategoryHandler}
      >
        <div
          className="bg-white h-full py-5"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="w-70 h-120 CategoryMenu-ul overflow-y-scroll">
            {categories.map((category) => (
              <React.Fragment key={category.id}>
                <CategoryItem
                  {...category}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              </React.Fragment>
            ))}
          </ul>
        </div>
        <UnderOne categories={categories} activeItem={activeItem} />
        <button
          className="self-start cursor-pointer mt-3 ms-5"
          onClick={closeCategoryHandler}
        >
          <MdClose color="#ffffff" size={"30px"} />
        </button>
      </div>
    </div>
  );
}
