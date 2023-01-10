import { useContext } from 'react'
import { CartContext } from '../../context'

export const CartView = ()=>{
    const {count} = useContext(CartContext)
    return (
        <div>{count}</div>
    )
}