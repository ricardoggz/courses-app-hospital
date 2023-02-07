import styled from 'styled-components'

export const CardWrapper = styled.div`
    align-items:center;
    box-shadow:1px 2px 10px #0003;
    display:flex;
    flex-direction: column;
    gap:1rem;
    height:100%;
    padding:1rem;
    .disabled-link{
        color:var(--color-red-primary);
        font-size: 0.9rem;
        font-style: italic;
        text-align: center;
        width:100%;
    }
`
export const CardImage = styled.figure`
    height:300px;
    width:100%;
    span{
        height:100%;
        width:100%;
    }
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
    gap:1rem;
    height:100%;
    line-height: 2rem;
    width:100%;
    h4{
        color:var(--color-green-secondary);
        text-align: center;
    }
    span{
        color:var(--color-green-secondary);
    }
    p{
        color:var(--color-light-secondary);
        font-style: italic;
    }
    .course-free{
        color:var(--color-blue-secondary);
        font-size: 1.5rem;
        font-weight: 800;
    }
`
export const CardButtons = styled.div`
    display:flex;
    flex-direction: column;
    gap:0.5rem;
    justify-content: center;
    align-items: end;
    width:100%;
    a, button{
        background: var(--color-green-primary);
        border-radius:30px;
        color:var(--color-light-primary);
        cursor:pointer;
        padding: 0.5rem;
        text-align:center;
        text-decoration:none;
        width:100%;
    }
`
export const ModalContent = styled.div`
    padding:1rem;
    width:100%;
`