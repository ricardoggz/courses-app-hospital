import { Navigate } from 'react-router-dom';
import { Container, Title } from '../../components'
import { useFetch } from '../../hooks'

export const DashboardUserView = () =>{
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    };
    const [loading, data] = useFetch({url:`https://api.vimeo.com/me/projects/14457817/videos`, config})
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <>
            {
                !user ? <Navigate to ='/login' />
                :
                <Container>
                        <Title>Bienvenido {user.user_user}</Title>
                </Container>
            }
        </>
    )
}