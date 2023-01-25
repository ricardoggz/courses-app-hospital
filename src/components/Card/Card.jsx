import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
    CardWrapper,
    CardImage,
    CardDescription, 
    CardButtons
} from './Card.styled'

export const Card = ({image, name, price, startDate, place, modality})=>{
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
                    <Link to ='/'>Consultar</Link>
                </CardButtons>
            </CardWrapper>
    )
}
Card.propTypes = {
    image : PropTypes.node,
    description : PropTypes.string
}