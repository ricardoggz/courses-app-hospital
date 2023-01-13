import { Title, Container, PaymentForm } from '../../components'
export const PaymentView = ()=>{
    return(
            <Container>
                <Title>Pagar curso</Title>
                <div className='flex-container'>
                    <PaymentForm />
                </div>
            </Container>
    )
}