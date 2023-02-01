import styled from 'styled-components'
export const JumbotronWrapper = styled.section`
    align-items:center ;
    background: url('https://hospitalinfantildemexicofedericogomez.mx/wp-content/uploads/2023/02/banner-jumbotron-scaled.jpg') no-repeat;
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
        background:var(--color-light-primary);
        border-radius: 8px;
        color:var(--color-green-primary);
        padding:0.5rem;
        text-decoration:none;
        width:30%;
    }
    .jumbotron-buttons{
        align-items: center;
        width:100%;
        display:flex;
        gap:1rem;
        justify-content: center;
    }

    @media (min-width:240px) and (max-width:1500px){
        .jumbotron-buttons{
            flex-direction: column;
        }
        a{
            width: 100%;
        }
    }
`