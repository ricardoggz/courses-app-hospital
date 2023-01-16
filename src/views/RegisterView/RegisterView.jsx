import { RegisterForm, Container, Title } from "../../components"
export const RegisterView = ()=>{
    return (
        <Container>
            <Title>Registro</Title>
            <div className="flex-container">
                <RegisterForm />
            </div>
        </Container>
    )
}