import styled from 'styled-components'

export const CardWrapper = styled.div`
    align-items:center;
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
        border-radius:10px;
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
    justify-content: end;
    align-items: end;
    width:100%;
    a, button{
        background: var(--color-red-primary);
        border-radius:30px;
        color:var(--color-light-secondary);
        padding: 0.5rem;
        text-align:center;
        text-decoration:none;
        width:50%;
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