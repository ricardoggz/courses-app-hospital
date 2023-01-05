import styled from "styled-components"

export const ButtonWrapper = styled.button`
    background: ${(props)=>{
        switch(true){
            default : return`
                var(--color-blue-primary);
                color:var(--color-light-primary);
            `
            case props.blueSecondary : return`
                var(--color-blue-secondary);
                color: var(--color-blue-primary);
            `
        }
    }};
    cursor:pointer;
    border:none;
    padding: 1rem;
    width:100%;
`