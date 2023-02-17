import { useState } from "react"
import { Title, Container } from "../../components"
import '../LiveVideoView/liveVideoView.css'
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
const iframeStyle={
    width:'100%',
    postion: 'absolute',
    top:'0',
    left:'0',
    height:'100%',
}
export const LiveVideoView2 = ()=>{
    const password= 'CTop_04-2023'
    const [value, setValue] = useState('')
    const [isEqual, setIsEqual] = useState(false)
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
            <Title>Curso-taller de ortopedia pediátrica</Title>
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
                        src="https://vimeo.com/event/2894319/embed"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullScreen
                        style={iframeStyle}
                        />
                    </div>
                    <iframe
                        src="https://vimeo.com/event/2894319/chat/"
                        frameBorder="0"
                        style={
                            {
                                width:'100%',
                                height:'700px',
                                padding:'1rem 0'
                            }
                        }
                        />
                </>
            }
        </Container>
    )
}