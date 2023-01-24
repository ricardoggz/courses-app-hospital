import styled from 'styled-components'

export const CardWrapper = styled.div`
    align-items:center;
    box-shadow:1px 2px 10px #0003;
    display:flex;
    flex-direction: column;
    gap:1rem;
    height:100%;
    padding:1rem;
`
export const CardImage = styled.figure`
    height:300px;
    width:100%;
    img{
        border-radius:10px;
        height:100%;
        object-fit: cover;
        object-position:top;
        width:100%;
    }
`
export const CardDescription = styled.div`
    display:flex;
    flex-direction: column;
    gap:0.5rem;
    height:100%;
    line-height: 2rem;
    width:100%;
    h4{
        text-align: center;
    }
    span{
        color:var(--color-green-secondary);
    }
    p{
        color:var(--color-light-secondary);
        font-style: italic;
    }
`
export const CardButtons = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    justify-content: end;
    align-items: end;
    width:100%;
    a, button{
        background: var(--color-green-primary);
        border-radius:30px;
        color:var(--color-light-primary);
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