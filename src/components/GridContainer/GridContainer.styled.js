import styled from 'styled-components'

export const GridWrapper = styled.div`
    display:grid;
    gap:1rem;
    grid-template-columns: repeat(3,1fr);
    
    @media (min-width:240px) and (max-width:880px){
        grid-template-columns: 1fr;
    }
`