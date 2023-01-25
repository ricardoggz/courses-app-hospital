import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
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
                        <LazyLoadImage src={image} alt="" effect='blur'/>
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