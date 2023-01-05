import { NavBar, Container, Card, Title, GridContainer } from '../../components'

export const HomeView = ()=>{
    return (
        <>
            <NavBar />
            <Container>
                <Title>Nuestros cursos disponibles</Title>
                <GridContainer><Card /></GridContainer>
            </Container>
        </>
    )
}