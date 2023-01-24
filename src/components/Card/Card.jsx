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

export const Card = ({image, description, name, price, instructor, startDate, finishDate, place, modality})=>{
    const {increment} = useContext(CartContext)
    const addCourse = ()=>{
        increment({image, description})
    }
    return (
            <CardWrapper>
                { image ? 
                    <CardImage>
                        <img src={image} alt="" />
                    </CardImage>
                    :
                    <></>
                }
                <CardDescription>
                    <h4>{name}</h4>
                    
                        <p>
                        <span>Impartido por: </span>{instructor}
                        </p>
                        <p>
                            <span>Modalidad: </span>{modality}
                        </p>
                        <p>
                            <span>Fecha: </span>{startDate}
                        </p>
                        <p>
                            <span>SEDE: </span> {place}
                        </p>
                        <p>
                            <span>Precio del curso: </span>${price} MXN
                        </p>
                    
                </CardDescription>
                <CardButtons>
                    <Link to ='/register'>Inscribirme</Link>
                </CardButtons>
            </CardWrapper>
    )
}
Card.propTypes = {
    image : PropTypes.node,
    description : PropTypes.string
}