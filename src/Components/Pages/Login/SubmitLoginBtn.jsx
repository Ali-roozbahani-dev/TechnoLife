

export default function SubmitLoginBtn({submitHandler}){

   

    return (
        <button 
            className="py-3.5 mt-16 bg-techno block w-full text-white rounded-lg"
            onClick={submitHandler}
        >
            ادامه            
        </button>
    )
}