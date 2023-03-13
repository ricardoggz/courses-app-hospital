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
export const LiveVideoView2 = ()=>{
    const password= 'Spcde-05_2023'
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
            <Title>Simposio: Procesos de  calidad en la desinfección y  esterilización de dispositivos médicos y quirúrgicos</Title>
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
                     <Title>3er día</Title>
                    <div
                        className= 'divFramer'
                    >
                        <iframe
                        src="https://player.vimeo.com/video/806514290?h=02a9f5aa6d&amp"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullScreen
                        />
                    </div>
                    <br />
                    <br />
                    <Title>2do día</Title>
                    <div
                        className= 'divFramer'
                    >
                        <iframe
                        src="https://player.vimeo.com/video/806101635?h=33d974ceb7"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullScreen
                        
                        />
                    </div>
                    <br />
                    <br />
                    <Title>1er día</Title>
                    <div
                        className= 'divFramer'
                    >
                        <iframe
                        src="https://player.vimeo.com/video/805197169?h=8b7cb793fb"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullScreen
                        
                        />
                    </div>
                    <div
                        className= 'divFramer'
                    >
                        <iframe
                        src="https://player.vimeo.com/video/806041569?h=5451ebaf6a"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullScreen
                        
                        />
                    </div>
                </>
            }
        </Container>
    )
}