import {
    Container,
    Card,
    Title,
    GridContainer,
    Spinner,
    Jumbotron,
    Footer
} from '../../components'
import { useFetch } from '../../hooks'

export const HomeView = ()=>{
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    };
    const [loading, data] = useFetch({
        url: 'https://api.vimeo.com/me/projects/14457817/videos',
        config: config
    })
    return (
            <>
                <Jumbotron />
                <Container>
                 <Title>Nuestros cursos disponibles</Title>
                {
                    loading?
                    <Spinner />
                    :
                    <GridContainer>
                        {
                            data.data.map((course, index)=>(
                                <Card
                                    key={index}
                                    image={course.pictures.base_link}
                                    description={course.name}
                                />
                            ))
                        }
                    </GridContainer>
                }
                </Container>
                <Footer />
            </>
    )
}