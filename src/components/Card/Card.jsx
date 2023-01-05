import PropTypes from 'prop-types'
import {
    CardWrapper,
    CardImage,
    CardDescription,
    CardButton 
} from './Card.styled'

export const Card = ({image, description})=>{
    return (
            <CardWrapper>
                <CardImage>
                    <img src={image} alt="" />
                </CardImage>
                <CardDescription>{description}</CardDescription>
                <CardButton href='#'>Comprar curso</CardButton>
            </CardWrapper>
    )
}
Card.propTypes = {
    image : PropTypes.node,
    description : PropTypes.string
}