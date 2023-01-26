import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export const HomeView = ()=>{
    let months = [
        {id: 1, name: 'Enero'},{id: 2, name : 'Febrero'},
        {id: 3, name: 'Marzo'},{id: 4, name: 'Abril'},
        {id: 5, name: 'Mayo'},{id:6, name: 'Junio'},
        {id:7, name: 'Julio'},{id:8, name: 'Agosto'},
        {id:9, name:'Septiembre'},{id:10, name:'Octubre'},
        {id:11, name:'Noviembre'},{id:12, name:'Diciembre'}
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
                                />
                            ))
                        }
                    </GridContainer>
                    </>
                }
                </Container>
                {/*<Footer />*/}
            </>
    )
}