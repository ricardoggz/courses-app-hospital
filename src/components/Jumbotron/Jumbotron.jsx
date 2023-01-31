import { JumbotronWrapper, JumbotronTitles } from "./Jumbotron.styled"
import logo  from '../../assets/logo_him.jpeg'

export const Jumbotron = ()=>{
    return (
        <JumbotronWrapper>
            <JumbotronTitles>
                <h1>Hospital Infantil de México Federico Gómez</h1>
                <div className="jumbotron-buttons flex-container">
                    <a href="#oferta-educativa">Ver oferta educativa</a>
                    <a
                        href="https://hospitalinfantildemexicofedericogomez.mx/ciclo-de-conferencias-magistrales"
                        target={'_blank'}
                    >
                        Conferencias magistrales
                    </a>
                </div>
            </JumbotronTitles>
        </JumbotronWrapper>
    )
}