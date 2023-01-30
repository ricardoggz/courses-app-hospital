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

export const Card = ({image, name, price, startDate, place, modality, pdf})=>{
    return (
            <CardWrapper>
                { image ? 
                    <CardImage>
                        <LazyLoadImage src={image} alt="" effect='blur'/>
                    </CardImage>
                    :
                    <CardImage>
                        <LazyLoadImage src={'https://hospitalinfantildemexicofedericogomez.mx/wp-content/uploads/2023/01/Banner-01-scaled.jpg'} effect='blur'/>
                    </CardImage>
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
                {
                    pdf ?
                    <CardButtons>
                        <a href={pdf} target={'_blank'}>Consultar informaciòn</a>
                        <Link to='/register'>Inscribirme</Link>
                    </CardButtons>
                    :
                    <p className='disabled-link'>Informaciòn no disponible</p>
                }
            </CardWrapper>
    )
}
Card.propTypes = {
    image : PropTypes.node,
    description : PropTypes.string
}