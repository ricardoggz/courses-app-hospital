import styled from 'styled-components'
export const JumbotronWrapper = styled.section`
    align-items:center ;
    background: url('https://i.ibb.co/4ttBHDf/20230123-115824.jpg') no-repeat;
    background-position: center;
    background-size:cover;
    display:flex;
    width:100%;
`
export const JumbotronTitles = styled.div`
    background: #0005;
    color:var(--color-light-primary);
    align-items: center;
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    justify-content: center;
    padding: 9rem 0;
    text-align: center;
    width:100%;
    height:100%;
    a{
        background:var(--color-light-primary);
        border-radius: 8px;
        color:var(--color-green-primary);
        padding:0.5rem;
        text-decoration:none;
        width:30%;
    }
    h1{
        font-size: 40px;
    }
    .jumbotron-buttons{
        align-items: center;
        width:100%;
        display:flex;
        gap:1rem;
        justify-content: center;
    }

    @media (min-width:240px) and (max-width:900px){
        .jumbotron-buttons{
            flex-direction: column;
        }
        a{
            width: 70%;
        }
    }
`