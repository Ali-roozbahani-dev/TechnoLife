import { useEffect, useState } from "react";
import ProductRating from "./ProductRating";
import CommentForm from "./CommentForm";
import AddCommentHeader from "./AddCommentHeader";
import AddCommentBtn from "./AddCommentBtn";

export default function AddComment({ setShowAddComment, productInfoInPage }) {
  const [isSubmit , setIsSubmit] = useState(false)
  const [formError, setFormError] = useState({
    textError: false,
    ratingError: false,
  });
  const [formInfo, setFormInfo] = useState({
    productId: productInfoInPage.id,
    text: "",
    points : {
      positivePoints : [] ,
      negativePoints : [] 
    },
    ratingNumber: 0,
    unknownUser: false,
  });

  // تشخیص ارور اینپوت ها
  const errorFormHandler = () => {
    !formInfo.text.trim()
      ? setFormError((prev) => ({ ...prev, textError: true }))
      : setFormError((prev) => ({ ...prev, textError: false }));

    !formInfo.ratingNumber
      ? setFormError((prev) => ({ ...prev, ratingError: true }))
      : setFormError((prev) => ({ ...prev, ratingError: false }));
  };

  useEffect(()=>{
    isSubmit && errorFormHandler() 
},[formInfo])

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    productInfoInPage && (
      <div className="w-full h-screen fixed top-0 right-0 z-1000 flex-center bg-[rgba(0,0,0,0.3)]">
        <div className="h-full w-full lg:h-[650px] lg:w-116 container-1 bg-white lg:rounded-xl ltr overflow-y-scroll">
          <div className="rtl">
            <AddCommentHeader setShowAddComment={setShowAddComment} />
            <div className="px-3.5 lg:px-5">
              <div className="flex items-center mt-5 h-20 px-4 rounded-md bg-white shadow-[0px_3px_10px_0px_#cccccc]">
                <img src={productInfoInPage.img} alt="" className="w-15 me-2" />
                <h4 className="text-[13px]">{productInfoInPage.title}</h4>
              </div>
              <ProductRating
                formInfo={formInfo}
                setFormInfo={setFormInfo}
                formError={formError}
              />
              <p className="text-[13px] yekan-bold">
                نظر خود را درباره این محصول بنویسید.
              </p>
              <CommentForm
                formInfo={formInfo}
                setFormInfo={setFormInfo}
                formError={formError}
                errorFormHandler={errorFormHandler}
              />
              <div className="border-t lg:border-0 px-3.5 py-3">
                <p className="yekan-regular mb-3 text-[13px] text-center">
                  با ثبت نظر موافت خود را با
                  <span className="underline yekan-bold text-sky-600 mx-1">
                    قوانین انتشار نظرات
                  </span>
                  در تکنولایف اعلام میکنم
                </p>
                <AddCommentBtn
                  formInfo={formInfo}
                  setFormInfo={setFormInfo}
                  errorFormHandler={errorFormHandler}
                  setShowAddComment={setShowAddComment}
                  setIsSubmit={setIsSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
