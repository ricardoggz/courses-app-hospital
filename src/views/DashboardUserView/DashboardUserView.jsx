import { NavBar, Video } from '../../components'
import { useFetch } from '../../hooks'

export const DashboardUserView = () =>{
    const [loading, data] = useFetch({url:`http://localhost:3030/courses`})
    console.log(data)
    return (
        loading ? <p>Cargando video...</p>
        :
        <>
            {data.map((item, index)=> <Video key={index} src={item.course_file}/>)}
        </>
    )
}