import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    let months = [
        {id: 1, name: 'Enero'},{id: 2, name : 'Febrero'},
        {id: 3, name: 'Marzo'},{id: 4, name: 'Abril'},
        {id: 5, name: 'Mayo'},{id:6, name: 'Junio'}
    ];
    const [selectedTab, setSelectedTab] = useState(months[0]);
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    };
    const [loading, data] = useFetch({
        //url: 'https://api.vimeo.com/me/projects/14457817/videos',
        url: `${import.meta.env.VITE_BASE_URL_API}api/courses/all-courses`
    })
    let filteredData;
    if(!loading) filteredData = data.data.filter(course => course.month_id === selectedTab.id)
    
    return (
            <>
                <Jumbotron />
                <Container>
                 <Title>Nuestra oferta educativa - 2023</Title>
                 <ul>
                    {months.map(month=>(
                        <li
                            key={month.id}
                            onClick={()=>setSelectedTab(month)}
                        >
                            {month.name}
                        </li>
                    ))}
                 </ul>
                {
                    loading?
                    <Spinner />
                    :
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