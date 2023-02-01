import { useState } from "react";
import { months } from "../../consts";
import {
    Container,
    Card,
    Title,
    GridContainer,
    Spinner,
    Jumbotron,
    MonthBar,
    Footer
} from '../../components'
import { useFetch } from '../../hooks'

const HomeView = ()=>{
    const [selectedTab, setSelectedTab] = useState(months[0]);
    const [loading, data] = useFetch({
        url: `${import.meta.env.VITE_BASE_URL_API}api/courses/all-courses`
    })
    let filteredData;
    if(!loading) filteredData = data.data.filter(course => course.month_id === selectedTab.id)
    
    return (
            <>
                <Jumbotron />
                <Container>
                 <Title>Nuestra oferta educativa - 2023</Title>
                {
                    loading?
                    <Spinner />
                    :
                    <>
                    <MonthBar>
                    {months.map(month=>(
                        <li
                            key={month.id}
                            onClick={()=>setSelectedTab(month)}
                            className={selectedTab.id === month.id ? 'selected' : ''}
                        >
                            {month.name}
                        </li>
                    ))}
                    </MonthBar>
                    <GridContainer>
                        {
                            filteredData.map((course, index)=>(
                                <Card
                                    key={index}
                                    name={course.course_name}
                                    price={course.course_price}
                                    startDate={course.course_date}
                                    place={course.course_place}
                                    modality={course.course_modality}
                                    image={course.course_file}
                                    pdf={course.course_pdf}
                                />
                            ))
                        }
                    </GridContainer>
                    </>
                }
                </Container>
                <Footer />
            </>
    )
}

export default HomeView