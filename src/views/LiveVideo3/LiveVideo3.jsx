import '../LiveVideoView/liveVideoView.css'

import { useState } from "react"
import { Title, Container, GridContainer, Spinner } from "../../components"
import '../LiveVideoView/liveVideoView.css'
import { useFetch } from "../../hooks"
const style={
    border: '1px solid #000',
    display:'flex',
    flexDirection:'column',
    gap:'16px',
    padding:'30px',
    textAlign:'center'
}
const styleInput = {
    padding: '8px'
}
const styleButton = {
    backgroundColor: 'var(--color-green-primary)',
    color:'#fff',
    padding: '8px'
}
export const LiveVideoView3 = ()=>{
    const password= 'Cmeca_06_2023'
    const [value, setValue] = useState('')
    const [isEqual, setIsEqual] = useState(false)
    const [loading, data] = useFetch({
        url: `https://api.vimeo.com/me/folders/15473924/videos`,
        config: {
            headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
        }
    })
    const onChange = (evt)=> setValue(evt.target.value)
    const onSubmit = (evt)=>{
        evt.preventDefault()
        if(value === password){
            setIsEqual(true)
        }
        else{
            alert('Contraseña incorrecta')
        }
    }
       return (
        <Container>
            <Title>
                Curso Monográfico de Estomatología, conceptos actuales de cirugía maxilofacial, ortodoncia y estomatología pediátrica
            </Title>
            {
                !isEqual
                ?
                <form className="flex-container" style={style} onSubmit>
                <label>Escriba la contraseña para acceder al curso</label>
                <input
                type='password'
                placeholder="contraseña"
                required
                style={styleInput}
                onChange={onChange}
                />
                <button style={styleButton} onClick={onSubmit}>Ingresar</button>
                </form>
                :
                <>
                    <div
                        className= 'divFramer'
                    >
                        <iframe
                        src="https://vimeo.com/event/3167600/embed"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullScreen
                        />
                    </div>
                    <br />
                    <br/>
                    <div className= 'divFramer'>
                        <iframe
                            src="https://vimeo.com/event/3167600/chat/"
                            width="100%"
                            height="100%"
                            frameborder="0"
                        />
                    </div>
                    <br />
                    <Title>Transmisiones anteriores</Title>
                    <GridContainer>
                    {
                    !loading ?
                        data.data.data.map((video, i)=>(
                            <div>
                                <iframe
                                key={i}
                                src={video.player_embed_url}
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullscreen 
                                />
                                <br />
                                <span>{video.name}</span>
                            </div>
                        ))
                    : <Spinner />
                    }
                    </GridContainer>
                </>
            }
        </Container>
    )
}