import PropTypes from 'prop-types'
import { ButtonWrapper } from "./Button.styled"

export const Button = ({title, onClick})=>{
    return (
        <ButtonWrapper
            onClick={onClick}
        >
            {title}
        </ButtonWrapper>
    )
}
Button.proptypes ={
    title: PropTypes.node,
    onClick: PropTypes.func
}