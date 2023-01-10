import { useContext } from 'react'
import { CartContext } from '../../context'
import { Title, Container, GridContainer, Card } from '../../components'

export const CartView = ()=>{
    const {count, coursesList} = useContext(CartContext)
    return (
        <Container>
            { count ? <Title>{count} productos agregados</Title> : <Title>Sin productos</Title> }
            {
                coursesList ?
                <GridContainer>
                    {
                        coursesList.map(({description, image}, index)=>(
                            <Card
                                key={index}
                                image={image}
                                description={description}
                            />
                        ))
                    }
                </GridContainer>
                :
                <></>
            }
        </Container>
    )
}