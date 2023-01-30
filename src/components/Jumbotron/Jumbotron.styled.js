import styled from 'styled-components'
import hero_bg from '../../assets/banner-jumbotron.jpg'
export const JumbotronWrapper = styled.section`
    align-items:center ;
    background: url(${hero_bg}) no-repeat;
    background-position: center;
    background-size:cover;
    display:flex;
    height:50vh;
    width:100%;
`
export const JumbotronTitles = styled.div`
    background: #0008;
    color:var(--color-light-primary);
    font-size:1.4rem;
    align-items: center;
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    justify-content: center;
    text-align: center;
    width:100%;
    height:100%;
    img{
        width:276px;
    }
    a{
        background-color: var(--color-light-primary);
        border-radius:30px;
        color:var(--color-green-primary);
        padding:1rem;
        text-decoration:none;
    }
`