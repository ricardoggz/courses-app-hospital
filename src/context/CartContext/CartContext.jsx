import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children })=>{
    const [ count, setCount ] = useState(0)
    const [ disabled, setDisabled ] = useState('')
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
        setDisabled('disabled')
    }
    return (
        <CartContext.Provider value={{count, increment, coursesList, disabled}}>
            { children }
        </CartContext.Provider>
    )
}
