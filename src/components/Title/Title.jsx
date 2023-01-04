import PropTypes from 'prop-types'
import { H1 } from './Title.styled'

export const Title = ({ children })=>{
    return <H1>{children}</H1>
}
Title.propTypes = {
    children: PropTypes.node
}