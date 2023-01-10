import styled from 'styled-components'

export const CardWrapper = styled.div`
    align-items:center;
    border-radius:10px;
    box-shadow: 1px 2px 10px #0004;
    display:flex;
    flex-direction: column;
    gap:1rem;
    height:100%;
    padding:1rem;
`
export const CardImage = styled.figure`
    height:200px;
    width:100%;
    img{
        height:100%;
        object-fit: cover;
        width:100%;
    }
`
export const CardDescription = styled.div`
    height:100%;
    line-height: 2rem;
    text-align:justify;
    width:100%;
`
export const CardButtons = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    width:100%;
    a, button{
        background: var(--color-blue-primary);
        color:var(--color-light-primary);
        padding: 0.5rem;
        text-align:center;
        text-decoration:none;
        width:100%;
    }
    .button-cart{
        background:var(--color-blue-secondary);
        border:none;
        color:var(--color-light-primary);
    }
    .disabled{
        display:none;
    }
`