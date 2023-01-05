import PropTypes from 'prop-types'
import { ButtonWrapper } from "./Button.styled"

export const Button = ({children, onClick})=>{
    return (
        <ButtonWrapper
            onClick={onClick}
        >
            {children}
        </ButtonWrapper>
    )
}
Button.proptypes ={
    children: PropTypes.node,
    onClick: PropTypes.func
}