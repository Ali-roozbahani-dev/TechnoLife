import { useEffect, useState } from "react"

export default function NavbarProductPropertie(){
    const [active, setActive] = useState("TechnicalSpecifications")

    // تغییر حالت اکتیو با اسکرول
    useEffect(() => {
        const sections = ["TechnicalSpecifications", "Comments"]

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id)
                    }
                })
            },
            {
                rootMargin: "-40% 0px -40% 0px",
            }
        )

        // وصل کردن المنت ها به ناظر
        sections.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    // اسکرول با کلیک
    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
        setActive(id)
    }

    return (
        <div className="yekan-bold text-[13px] border-b w-full lg:sticky lg:top-30 z-100 right-0 border-sky-500 mb-1 flex items-center bg-blue-50">
            
            <button 
                className="relative mx-4 py-3 lg:py-4.5 lg:text-[15px] block h-full text-[#717171]"
                onClick={() => scrollToSection("TechnicalSpecifications")}
            >
                <span>مشخصات فنی</span>                
                {active === "TechnicalSpecifications" && 
                    <div className="h-1.25 w-full bg-black rounded-2xl absolute bottom-0 right-0"></div>
                }                
            </button>

            <button 
                className="relative mx-4 py-3 lg:py-4.5 lg:text-[15px] block h-full text-[#717171]"
                onClick={() => scrollToSection("Comments")}
            >
                <span>نظرات کاربران</span>
                {active === "Comments" && 
                    <div className="h-1.25 w-full bg-black rounded-2xl absolute bottom-0 right-0"></div>
                }         
            </button>                

        </div>
    )
}

