import { NavBar, Video, Spinner } from '../../components'
import { useFetch } from '../../hooks'

export const DashboardUserView = () =>{
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    };
    const [loading, data] = useFetch({url:`https://api.vimeo.com/me/projects/14457817/videos`, config})
    console.log(data)
    return (
        loading ? <Spinner />
        :
        <>
            {data.data.map((item, index)=> <Video key={index} src={item.player_embed_url}/>)}
        </>
    )
}