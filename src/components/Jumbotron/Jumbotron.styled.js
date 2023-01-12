import styled from 'styled-components'
import hero_bg from '../../assets/hero-bg.jpg'
export const JumbotronWrapper = styled.section`
    background: url(${hero_bg}) no-repeat;
    background-position: center;
    background-size:cover;
    height:50vh;
    width:100%;
`
export const JumbotronTitles = styled.div`
    background: #2553809c;
    color:var(--color-light-primary);
    font-size:1.4rem;
    align-items: center;
    display:flex;
    justify-content: center;
    text-align: center;
    width:100%;
    height:100%;
`