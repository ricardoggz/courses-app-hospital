import { Video, Container, Title, Spinner } from '../../components'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks'

export const VideoView = ()=>{
    const params = useParams()
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    };
    const [loading, data] = useFetch({
        url: `https://api.vimeo.com/me/videos/${params.id}`,
        config: config
    })
    return (
        <>
            {
                !data ? <Spinner />
                :
                <Container>
                    <Title>{data.name}</Title>
                    <Video src={data.player_embed_url} />
                </Container>
            }
        </>
    )
}