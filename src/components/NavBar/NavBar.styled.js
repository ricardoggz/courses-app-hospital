import styled from 'styled-components'

export const Header = styled.header`
    background: var(--color-green-primary);
    padding: 1rem;
    width:100%;
`
export const Nav = styled.nav`
    align-items:center;
    display:flex;
    justify-content:space-between;
    div img{
        width:40%;
    }
`
export const Ul = styled.ul`
    color:var(--color-light-primary);
    display:flex;
    gap:1rem;
    list-style: none;

    li a{
        color:var(--color-light-primary);
        text-decoration:none;
    }
    .cart{
        background:var(--color-light-primary);
        border-radius:5px;
        color:var(--color-blue-primary);
        padding:0.5em;
    }

    @media (min-width:240px) and (max-width:880px){
        background: var(--color-blue-primary);
        gap: 2rem;
        left: 0;
        right: 0;
        position: absolute;
        top: 4rem;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 500ms all ease-in-out;
        transform: translateX(${({ open }) => (open ? "0" : "-100%")});
        z-index: 100;
        li{
        width:90%;
        border-bottom:1px solid var(--color-light-primary);
        text-align:center;
        padding: 1rem 0;
        }
    }
`
export const NavButton = styled.button`
    background:none;
    border:none;
    color:var(--color-light-primary);
    font-size:2rem;
    display:none;

    @media (min-width: 240px) and (max-width:880px){
        display:block;
    }

`