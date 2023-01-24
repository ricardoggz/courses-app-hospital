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
        url: `${import.meta.env.VITE_BASE_URL_API}api/courses/all-courses`
    })
    return (
            <>
                <Jumbotron />
                <Container>
                 <Title>Nuestra oferta educativa - 2023</Title>
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