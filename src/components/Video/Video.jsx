import PropTypes from 'prop-types'
import { VideoWrapper } from "./Video.styled"

export const Video = ({src})=>{
    return (
        <VideoWrapper src={src} controls></VideoWrapper>
    )
}
Video.propTypes ={
    src : PropTypes.string
}