import { useContext } from 'react'
import { CartContext } from '../../context'
import { Title, Container } from '../../components'

export const CartView = ()=>{
    const {count} = useContext(CartContext)
    return (
        <Container>
            { count ? <Title>{count} productos agregados</Title> : <Title>Sin productos</Title> }
        </Container>
    )
}