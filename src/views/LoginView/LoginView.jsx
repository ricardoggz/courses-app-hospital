import { Navigate } from 'react-router-dom'
import { Container, Login, Title } from '../../components'

export const LoginView = ()=>{
    return (
        <Container>
            <Title>Ingresa en nuestra plataforma de cursos</Title>
            <Login />
        </Container>
    )
}