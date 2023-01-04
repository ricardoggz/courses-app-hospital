import { CardWrapper, CardImage, CardsContainer, CardDescription, CardButton } from './Card.styled'
import image from '../../assets/img.jpeg'
export const Card = ()=>{
    return (
        <CardsContainer className='flex-container'>
            <CardWrapper>
                <CardImage>
                    <img src={image} alt="" />
                </CardImage>
                <CardDescription>
                <p>
                    2º Simposium neonatología HIMFG: Atención multidisciplinaria en el cuidado del prematuro
                </p>
                <span>
                    Del 28 al 30 de noviembre de 2022
                </span>
                </CardDescription>
                <CardButton href='#'>Comprar curso</CardButton>
            </CardWrapper>
            <CardWrapper>
                <CardImage>
                    <img src={image} alt="" />
                </CardImage>
                <CardDescription>
                <p>
                    2º Simposium neonatología HIMFG: Atención multidisciplinaria en el cuidado del prematuro
                </p>
                <span>
                    Del 28 al 30 de noviembre de 2022
                </span>
                </CardDescription>
                <CardButton href='#'>Comprar curso</CardButton>
            </CardWrapper>
            <CardWrapper>
                <CardImage>
                    <img src={image} alt="" />
                </CardImage>
                <CardDescription>
                <p>
                    2º Simposium neonatología HIMFG: Atención multidisciplinaria en el cuidado del prematuro
                </p>
                <span>
                    Del 28 al 30 de noviembre de 2022
                </span>
                </CardDescription>
                <CardButton href='#'>Comprar curso</CardButton>
            </CardWrapper>
        </CardsContainer>
    )
}