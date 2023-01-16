import styled from 'styled-components'

export const RegisterFormWrapper = styled.form`
    border:1px solid var(--color-green-primary);
    border-radius:10px;
    display:flex;
    flex-direction: column;
    gap:1rem;
    padding:1rem;
    width:100%;
`
export const RegisterInput = styled.input`
    padding:0.5rem;
    width:100%;
`
export const RegisterLabel = styled.label`
    width:100%;
`
export const RadioInputs = styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap:1rem;
    width:100%;

    div{
        border:1px solid var(--color-green-primary);
        padding:0.5rem;
        text-align: center;
    }

    @media (min-width:240px) and (max-width:880px){
        grid-template-columns: 1fr;
    }
`