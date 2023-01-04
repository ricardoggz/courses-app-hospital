import PropTypes from 'prop-types'
import { Section } from './Container.styled'

export const Container = ({children})=>{
    return <Section>{children}</Section>
}

Container.propTypes={
    children : PropTypes.node,
}