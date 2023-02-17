import { useState } from "react"
import { Title, Container } from "../../components"
import './liveVideoView.css'
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
export const LiveVideoView = ()=>{
    const password= '5oCE-03_2023'
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
            <Title>5to Congreso de enfermería</Title>
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
                    <Title>1er día</Title>
                    <div
                        className= 'divFramer'
                    >
                        <iframe
                        src="https://player.vimeo.com/video/799642253?h=3598b05463"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullScreen
                        style={iframeStyle}
                        />
                    </div>
                    <Title>2do día</Title>
                    <div
                        className= 'divFramer'
                    >
                        <iframe
                        src="https://player.vimeo.com/video/799642253?h=3598b05463"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullScreen
                        style={iframeStyle}
                        />
                    </div>
                </>
            }
        </Container>
    )
}