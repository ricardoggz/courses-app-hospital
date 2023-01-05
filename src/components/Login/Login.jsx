import { useState } from 'react'
import { Button } from '../../components'
import { Form, Input, LoginWrapper, LoginImage } from './Login.styled'
import logo from '../../assets/logo.png'

export const Login = ()=>{
    const [user, setUser] = useState(null);
    const onChange = (evt)=>{
        const {target} = evt
        return setUser({
            ...user,
            [target.name]: target.value 
        })
    }
    return (
            <LoginWrapper>
                <LoginImage>
                            <img src={logo} alt='Hospital infantil federico gomez'/>
                </LoginImage>
                <Form>
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