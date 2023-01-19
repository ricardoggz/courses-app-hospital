import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useOnChange} from '../../hooks'
import { UserContext } from '../../context'
import { RegisterFormWrapper, RegisterInput, RegisterLabel, RadioInputs } from "./RegisterForm.styled"
import { Button } from '../../components'

export const RegisterForm = ()=>{
    const {saveUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [onChange, input, onReset] = useOnChange()
    const api = 'http://localhost:3030/api/auth/create-user'
    const onSubmit = async(evt)=>{
        evt.preventDefault()
        saveUser(input)
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
            />
            <RegisterLabel>Título profesional:*</RegisterLabel>
            <RadioInputs>
                <div>
                    <RegisterLabel>MÉDICO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='medico'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>PASANTE</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='pasante'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>EST. MED</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='est-med'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>LIC. ENF</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='lic-enf'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>ENF. ESP</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='enf-esp'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>EST. ENF</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='est-enf'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>QUÍMICO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='quimico'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>BIÓLOGO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='biologo'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>M. EN C</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='m-en-c'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>PSICÓLOGO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='psicologo'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>PEDAGOGO</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='pedagogo'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>TRABAJADOR SOCIAL</RegisterLabel>
                    <RegisterInput
                        type='radio'
                        required
                        name='user_profession'
                        value='trabajador-social'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <RegisterLabel>OTRO</RegisterLabel>
                    <RegisterInput
                        type='text'
                        name='user_profession'
                        onChange={onChange}
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
                    />
                </div>
            </RadioInputs>
            <RegisterLabel>Cargo:*</RegisterLabel>
            <RegisterInput
                type='text'
                name='user_position'
                required
                onChange={onChange}
            />
            <RegisterLabel>Teléfono:*</RegisterLabel>
            <RegisterInput
                type='text'
                name='user_phone'
                required
                onChange={onChange}
            />
            <RegisterLabel>Edad:*</RegisterLabel>
            <RegisterInput
                type='number'
                name='user_age'
                required
                onChange={onChange}
            />
            <RegisterLabel>E-mail:*</RegisterLabel>
            <RegisterInput
                type='email'
                name='user_email'
                required
                onChange={onChange}
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
                            />
                        </div>
                    </RadioInputs>
                    <RegisterLabel>Año de egreso</RegisterLabel>
                    <RegisterInput
                        type='number'
                        onChange={onChange}
                        name='user_nationality'
                    />
                </>
                :
                <></>
            }
            <Button greenPrimary>Continuar</Button>
            <Button redPrimary type='reset' onClick={onReset}>Cancelar</Button>
        </RegisterFormWrapper>
    )
}