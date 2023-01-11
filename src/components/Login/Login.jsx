import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import { Form, Input, LoginWrapper, LoginImage } from './Login.styled'
import logo from '../../assets/logo.png'
import { login } from '../../services'
import { UserContext } from '../../context'

export const Login = ()=>{
    const navigate = useNavigate()
    const { saveUser } = useContext(UserContext)
    const [input, setInput] = useState(null);
    const onChange = (evt)=>{
        const {target} = evt
        return setInput({
            ...input,
            [target.name]: target.value 
        })
    }
    const onSubmit = (evt)=>{
        evt.preventDefault()
        const response = login(input)
        response.then(({data}) => {
            if(data[0]){
                saveUser(data[0])
                navigate('/')
            }
        })
        .catch(err =>{ throw new Error(err)})
        return response
    }
    return (
            <LoginWrapper>
                <LoginImage>
                    <img src={logo} alt='Hospital infantil federico gomez'/>
                </LoginImage>
                <Form onSubmit={onSubmit}>
                    <label>Nombre de usuario</label>
                    <Input
                        type='text'
                        required
                        name='user_user'
                        onChange={onChange}
                        />
                    <label>Contraseña</label>
                    <Input
                    type='password'
                        required
                        name='user_password'
                        onChange={onChange}
                    />
                    <Button>Iniciar sesiòn</Button>
                </Form>
            </LoginWrapper>
    )
}