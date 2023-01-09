import { NavBar, Container, Card, Title, GridContainer, Spinner } from '../../components'
import { useFetch } from '../../hooks'

export const HomeView = ()=>{
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    };
    const [loading, data] = useFetch({
        url: 'https://api.vimeo.com/me/videos?fields=pictures,title,name,player_embed_url&page=1',
        config: config
    })
    return (
            <Container>
                <Title>Nuestros cursos disponibles</Title>
                <GridContainer>
                    {
                        loading?
                        <Spinner />
                        :
                        data.data.map((course, index)=>(
                            <Card
                                key={index}
                                image={course.pictures.base_link}
                                description={course.name}
                            />
                        ))
                    }
                </GridContainer>
            </Container>
    )
}