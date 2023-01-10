import { useContext } from 'react'
import { CartContext } from '../../context'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill } from 'react-icons/bs'
import {
    CardWrapper,
    CardImage,
    CardDescription, 
    CardButtons
} from './Card.styled'

export const Card = ({image, description})=>{
    const {increment} = useContext(CartContext)
    const addCourse = ()=>{
        increment({image, description})
    }
    return (
            <CardWrapper>
                <CardImage>
                    <img src={image} alt="" />
                </CardImage>
                <CardDescription>{description}</CardDescription>
                <CardButtons>
                    <Link to ='/'>Comprar curso</Link>
                    <Link to ='/' className='button-cart' onClick={addCourse}>
                        <BsFillCartPlusFill /> Agregar al carrito
                    </Link>
                </CardButtons>
            </CardWrapper>
    )
}
Card.propTypes = {
    image : PropTypes.node,
    description : PropTypes.string
}