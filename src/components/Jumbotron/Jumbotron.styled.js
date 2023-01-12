import styled from 'styled-components'
import hero_bg from '../../assets/banner_web.jpeg'
export const JumbotronWrapper = styled.section`
    background: url(${hero_bg}) no-repeat;
    background-position: center;
    background-size:cover;
    padding: 4rem 0;
    width:100%;
`
export const JumbotronTitles = styled.div`
    color:var(--color-dark-primary);
    font-size:1.4rem;
    align-items: center;
    display:flex;
    flex-direction:column;
    justify-content: center;
    text-align: center;
    width:100%;
    img{
        width:276px;
    }
`