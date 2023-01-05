import { useState } from 'react'
import { Button } from '../../components'
import { Form, Input, LoginWrapper } from './Login.styled'

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