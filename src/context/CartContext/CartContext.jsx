import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children })=>{
    const [ count, setCount ] = useState(0)
    const increment = ()=> setCount(count + 1)
    return (
        <CartContext.Provider value={{count, increment}}>
            { children }
        </CartContext.Provider>
    )
}
