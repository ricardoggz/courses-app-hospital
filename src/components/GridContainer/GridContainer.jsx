import PropTypes from 'prop-types'
import { GridWrapper } from "./GridContainer.styled"

export const GridContainer = ({children})=>{
    return <GridWrapper className='flex-container'>{children}</GridWrapper>
}
GridContainer.proptypes = {
    children : PropTypes.node
}