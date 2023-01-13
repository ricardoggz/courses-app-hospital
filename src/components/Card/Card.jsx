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

export const Card = ({image, description, disabled, idVideo})=>{
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
                    <Link to ='/payment'>Comprar curso</Link>
                    { idVideo ? <Link to ={`video/${idVideo}`}>Ver curso</Link> : <></> }
                    {/*<button className={`button-cart ${disabled}`} onClick={addCourse}>
                        <BsFillCartPlusFill /> Agregar al carrito
                    </button>*/}
                </CardButtons>
            </CardWrapper>
    )
}
Card.propTypes = {
    image : PropTypes.node,
    description : PropTypes.string
}