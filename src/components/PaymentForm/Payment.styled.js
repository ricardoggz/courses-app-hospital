import styled from 'styled-components'

export const PaymentWrapper = styled.form`
    border: 0.5px solid var(--color-green-primary);
    border-radius:10px;
    display:flex;
    flex-direction: column;
    gap:1rem;
    padding:1rem;
    width:100%;
`
export const PaymentInput = styled.input`
    padding:0.5rem;
    width:100%;
`
export const PaymentLabel =styled.label`
    width:100%;
`
export const PaymentButtons = styled.div`
    display:flex;
    gap: 1rem;
    width:100%;

    button{
        border:none;
        border-radius:8px;
        background:none;
        color:var(--color-light-primary);
        padding:0.5rem;
        width:100%;
    }
    .btn-success{
        background: var(--color-green-primary);
    }
    .btn-unsuccess{
        background: var(--color-red-primary);
    }
`