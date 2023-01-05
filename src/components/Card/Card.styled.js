import styled from 'styled-components'

export const CardWrapper = styled.div`
    align-items:center;
    border-radius:10px;
    box-shadow: 1px 2px 10px #0004;
    display:flex;
    flex-direction: column;
    gap:1rem;
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
    line-height: 2rem;
    text-align:justify;
    width:100%;
`
export const CardButton = styled.a`
    background: var(--color-blue-primary);
    color:var(--color-light-primary);
    padding: 1rem;
    text-align:center;
    text-decoration:none;
    width:100%;
`