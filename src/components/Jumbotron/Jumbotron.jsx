import { JumbotronWrapper, JumbotronTitles } from "./Jumbotron.styled"
import logo  from '../../assets/logo_him.jpeg'

export const Jumbotron = ()=>{
    return (
        <JumbotronWrapper>
            <JumbotronTitles>
                <img src={logo} />
            </JumbotronTitles>
        </JumbotronWrapper>
    )
}