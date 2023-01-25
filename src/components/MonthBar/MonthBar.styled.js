import styled from 'styled-components'

export const MonthBarWrapper = styled.ul`
    border: 0.5px solid var(--color-green-secondary);
    display:grid;
    grid-template-columns:repeat(12,1fr);
    gap:1rem;
    justify-content: space-between;
    list-style:none;
    margin-bottom:2rem;
    width:100%;
    li{
        color:var(--color-green-secondary);
        cursor:pointer;
        padding:1rem;
        text-align: center;
        text-decoration: underline;
        width:100%;
    }
    li:hover{
        background:var(--color-green-primary);
        color:var(--color-light-primary);
    }

    @media (min-width:240px) and (max-width:880px){
        grid-template-columns: repeat(3,1fr);
    }
`