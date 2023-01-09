import styled from 'styled-components'

export const SpinnerWrapper = styled.div`
    align-items: center;
    display:flex;
    justify-content: center;
    padding: 4rem 0;
    width:100%;
`
export const SpinnerLoader =styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 9px solid;
    border-color: #e7e7ea;
    border-right-color: #255280;
    animation: spinner-d3wgkg 1s infinite linear;
    @keyframes spinner-d3wgkg {
    to {
        transform: rotate(1turn);
    }
}
`