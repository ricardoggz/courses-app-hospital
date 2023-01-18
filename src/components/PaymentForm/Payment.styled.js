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