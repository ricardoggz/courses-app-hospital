import { JumbotronWrapper, JumbotronTitles } from "./Jumbotron.styled"
import logo  from '../../assets/logo.png'

export const Jumbotron = ()=>{
    return (
        <JumbotronWrapper>
            <JumbotronTitles>
                <img src={logo} />
                <h1>
                    Cursos - Hospital Infantil de México
                </h1>
            </JumbotronTitles>
        </JumbotronWrapper>
    )
}