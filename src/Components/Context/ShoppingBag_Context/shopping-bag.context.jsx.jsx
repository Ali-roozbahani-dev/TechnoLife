import { createContext, useReducer, useEffect } from "react"

export const ShoppingBagContext = createContext()

export default function ShoppingBagProvider({ children }) {

    const ShoppingBagReducer = (state, action) => {
        switch (action.type) {
            case "ADD-TO-CART":
                const existProduct = state.addedproducts.find(
                    item => item.id === action.payload.id
                )

                if (!existProduct) {
                    return {
                        ...state,
                        addedproducts: [
                            ...state.addedproducts,
                            { ...action.payload, quantity: 1, color: "سبز" }
                        ]
                    }
                } else {
                    return state
                }

            case "REMOVE-FROM-CART":
                return {
                    ...state,
                    addedproducts: state.addedproducts.filter(
                        item => item.id !== action.payload
                    )
                }

            case "REMOVE-ALL-FROM-CART":
                return { addedproducts: [] }

            case "ADD-THE-QUANTITY":
                return {
                    ...state,
                    addedproducts: state.addedproducts.map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                }

            case "REDUCE-THE-QUANTITY":
                return {
                    ...state,
                    addedproducts: state.addedproducts.map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                }

            default:
                return state
        }
    }

    // گرفتن مقدار اولیه از لوکال استوریج
    const getInitialState = () => {
        const savedBag = localStorage.getItem("shoppingBag")
        return savedBag ? JSON.parse(savedBag) : { addedproducts: [] }
    }

    const [bagState, bagStateDispatch] = useReducer(ShoppingBagReducer, undefined, getInitialState)

    // بروز رسانی لوکال استوریج
    useEffect(() => {
        localStorage.setItem("shoppingBag", JSON.stringify(bagState))
    }, [bagState])

    return (
        <ShoppingBagContext.Provider value={{ bagState, bagStateDispatch }}>
            {children}
        </ShoppingBagContext.Provider>
    )
}