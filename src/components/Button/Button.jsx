import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Button = styled.button`
background: ${(props)=>{
    switch(true){
        case props.blueSecondary : return`
            var(--color-blue-secondary);
            color: var(--color-blue-primary);
        `
        case props.greenPrimary : return`
            var(--color-green-primary);
            color: var(--color-light-primary);
        `
        case props.redPrimary : return`
            var(--color-red-primary);
            color: var(--color-light-primary);
        `
        default : return`
            var(--color-blue-primary);
            color:var(--color-light-primary);
        `
    }
}};
cursor:pointer;
border:none;
padding: 1rem;
width:100%;
`
Button.proptypes ={
    children: PropTypes.node,
    onClick: PropTypes.func
}