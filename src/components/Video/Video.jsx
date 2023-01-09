import PropTypes from 'prop-types'
import { VideoWrapper } from "./Video.styled"

export const Video = ({src})=>{
    return (
        <VideoWrapper
        src={src}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen 
        />
    )
}
Video.propTypes ={
    src : PropTypes.string
}