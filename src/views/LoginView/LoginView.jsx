import { Navigate } from 'react-router-dom'
import { Container, Login, Title } from '../../components'

export const LoginView = ()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        !user ?
        <Container>
            <Title>Ingresa en nuestra plataforma de cursos</Title>
            <Login />
        </Container>
        :
        <>
            <Navigate to ="/dashboard" />
        </>
    )
}