import PropTypes from 'prop-types'
import { VideoWrapper, Iframe } from "./Video.styled"

export const Video = ({src})=>{
    return (
        <VideoWrapper>
            <Iframe
                src={src}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen 
            />
        </VideoWrapper>
    )
}
Video.propTypes ={
    src : PropTypes.string
}