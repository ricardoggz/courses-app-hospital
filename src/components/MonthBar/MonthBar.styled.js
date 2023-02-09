import styled from 'styled-components'

export const MonthBarWrapper = styled.ul`
    box-shadow: 1px 2px 10px #0003;
    display:grid;
    gap:0.2rem;
    grid-template-columns:repeat(6,1fr);
    justify-content: space-between;
    list-style:none;
    padding:0.5rem;
    margin-bottom:2rem;
    width:90%;
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
    .selected{
        background:var(--color-green-primary);
        color:var(--color-light-primary);
    }
    @media (min-width:240px) and (max-width:1000px){
        grid-template-columns: repeat(3,1fr);
    }
`