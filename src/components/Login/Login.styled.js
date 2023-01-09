import styled from 'styled-components'

export const Form = styled.form`
    border-radius: 10px;
    box-shadow: 1px 2px 10px #0004;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    padding:1rem;
    width:30%;
    @media (min-width:240px) and (max-width:880px){
        width:90%;
    }
`
export const Input = styled.input`
    padding:1rem;
    width:100%;
`
export const LoginWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
`
export const LoginImage = styled.figure`
    align-items:center;
    display:flex;
    height:200px;
    justify-content: center;
    width:100%;

    img{ 
        object-fit: contain;
        width:100%;
        height:100%;
    }
`