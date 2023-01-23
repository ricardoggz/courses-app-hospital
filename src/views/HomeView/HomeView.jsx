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
        //url: 'https://api.vimeo.com/me/projects/14457817/videos',
        url: 'http://localhost:3030/api/courses/all-courses'
    })
    console.log(data)
    return (
            <>
                <Jumbotron />
                <Container>
                 <Title>Nuestra oferta educativa</Title>
                {
                    loading?
                    <Spinner />
                    :
                    <GridContainer>
                        {
                            data.map((course, index)=>(
                                <Card
                                    key={index}
                                    name={course.course_name}
                                    price={course.course_price}
                                    startDate={course.course_date}
                                    instructor={course.course_instructor}
                                    place={course.course_place}
                                    modality={course.course_modality}
                                />
                            ))
                        }
                    </GridContainer>
                }
                </Container>
                {/*<Footer />*/}
            </>
    )
}