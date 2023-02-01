import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useOnChange} from '../../hooks'
import { RegisterFormWrapper, RegisterInput, RegisterLabel, RadioInputs } from "./RegisterForm.styled"
import { Button } from '../../components'

export const RegisterForm = ()=>{
    const navigate = useNavigate()
    const [onChange, input, onReset] = useOnChange()
    const api = 'http://localhost:3030/api/auth/create-user'
    const onSubmit = async(evt)=>{
        evt.preventDefault()
        try {
            const resp = await axios.post(api, input)
            if(resp.status === 200){
                navigate('/payment')
            }
            return resp
        } catch (error) {
            throw new Error(error)
        }
    }
    return (
        <RegisterFormWrapper onSubmit={onSubmit}>
            <RegisterLabel>Nombre completo:*</RegisterLabel>
            <RegisterInput
                type='text'
                onChange={onChange}
                required
                name='user_name'
                autoComplete='off'
            />
            <RegisterLabel>Título profesional:*</RegisterLabel>
            <RadioInputs>
                <div>
                    <RegisterLabel>MÉDICO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='Médico'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>PASANTE</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='Pasante'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>EST. MED</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='EST. MED'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>LIC. ENF</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='LIC. ENF'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>ENF. ESP</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='ENF. ESP'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>EST. ENF</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='EST. ENF'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>QUÍMICO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='Químico'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>BIÓLOGO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='Biólogo'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>M. EN C</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='M. EN C'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>PSICÓLOGO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='Psicólogo'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>PEDAGOGO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='Pedagogo'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>TRABAJADOR SOCIAL</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='Trabajador social'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>OTRO</RegisterLabel>
                    <RegisterInput
                        type='text'
                        name='user_profession'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
            </RadioInputs>
            <RegisterLabel>Institución de procedencia:*</RegisterLabel>
            <RadioInputs>
                <div>
                    <RegisterLabel>IMSS</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_institution'
                        value='IMSS'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>SSA</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_institution'
                        value='SSA'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>ISSTE</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_institution'
                        value='ISSTE'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>GDF</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_institution'
                        value='GDF'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>HIMFG</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_institution'
                        value='HIMFG'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>OTRO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_institution'
                        value='otro'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
            </RadioInputs>
            <RegisterLabel>Cargo:*</RegisterLabel>
            <RegisterInput
                type='text'
                name='user_position'
                required
                onChange={onChange}
                autoComplete='off'
            />
            <RegisterLabel>Teléfono:*</RegisterLabel>
            <RegisterInput
                type='text'
                name='user_phone'
                required
                onChange={onChange}
                autoComplete='off'
            />
            <RegisterLabel>Edad:*</RegisterLabel>
            <RegisterInput
                type='number'
                name='user_age'
                required
                onChange={onChange}
                autoComplete='off'
            />
            <RegisterLabel>E-mail:*</RegisterLabel>
            <RegisterInput
                type='email'
                name='user_email'
                required
                onChange={onChange}
                autoComplete='off'
            />
            <RegisterLabel>¿Es egresado de algún programa del HIMFG?</RegisterLabel>
            <RadioInputs>
                <div>
                    <RegisterLabel>Sí</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_recent'
                        value='si'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div>
                    <RegisterLabel>No</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_recent'
                        value='no'
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
            </RadioInputs>
            {
                input.user_recent === 'si'
                ?
                <>
                    <RegisterLabel>¿Cuál?</RegisterLabel>
                    <RadioInputs>
                        <div>
                            <RegisterLabel>Especialidad</RegisterLabel>
                            <RegisterInput
                                type='radio'
                                required
                                name='user_course_recent'
                                value='Especialidad'
                                onChange={onChange}
                                autoComplete='off'
                            />
                        </div>
                        <div>
                            <RegisterLabel>
                                Curso de posgrado para médicos especialistas
                            </RegisterLabel>
                            <RegisterInput
                                type='radio'
                                required
                                name='user_course_recent'
                                value='Curso de posgrado para médicos especialistas'
                                onChange={onChange}
                                autoComplete='off'
                            />
                        </div>
                    </RadioInputs>
                    <RegisterLabel>Año de egreso</RegisterLabel>
                    <RegisterInput
                        type='number'
                        onChange={onChange}
                        name='user_last_year'
                        autoComplete='off'
                    />
                </>
                :
                <></>
            }
            <RegisterLabel>Nacionalidad</RegisterLabel>
            <RegisterInput
                type='text'
                required
                onChange={onChange}
                name='user_nationality'
                autoComplete='off'
            />
            <Button greenPrimary>Continuar</Button>
            <Button redPrimary type='reset' onClick={onReset}>Cancelar</Button>
        </RegisterFormWrapper>
    )
}