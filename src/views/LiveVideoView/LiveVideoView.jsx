import { Title, Container } from "../../components"

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
export const LiveVideoView = ()=>{
    return (
        <Container>
            <Title>5to Congreso de enfermería</Title>
            <form className="flex-container" style={style}>
                <label>Escriba la contraseña para acceder al curso</label>
                <input type='text' placeholder="contraseña" required style={styleInput}/>
                <button style={styleButton}>Ingresar</button>
            </form>
        </Container>
    )
}