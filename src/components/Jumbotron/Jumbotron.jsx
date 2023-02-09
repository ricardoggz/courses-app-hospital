import { JumbotronWrapper, JumbotronTitles } from "./Jumbotron.styled"

export const Jumbotron = ()=>{
    return (
        <JumbotronWrapper>
            <JumbotronTitles>
                <h1>Hospital Infantil de México Federico Gómez - oferta académica</h1>
                <cite>80 AÑOS DE CIENCIA, EXCELENCIA Y HUMANISMO</cite>
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