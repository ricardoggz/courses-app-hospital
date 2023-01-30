import { JumbotronWrapper, JumbotronTitles } from "./Jumbotron.styled"
import logo  from '../../assets/logo_him.jpeg'

export const Jumbotron = ()=>{
    return (
        <JumbotronWrapper>
            <JumbotronTitles>
                <h1>Hospital Infantil de México Federico Gómez</h1>
                <a href="/">Ver oferta educativa</a>
            </JumbotronTitles>
        </JumbotronWrapper>
    )
}