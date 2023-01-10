import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children })=>{
    const [ count, setCount ] = useState(0)
    const [coursesList, setCoursesList ] = useState([])
    const increment = (courseName)=> {
        setCount(()=>{
            return count + 1
        })
        setCoursesList(()=>{
            let courses = []
            courses.push(courseName)
            return [...coursesList, ...courses]
        })
    }
    return (
        <CartContext.Provider value={{count, increment, coursesList}}>
            { children }
        </CartContext.Provider>
    )
}
