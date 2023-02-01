import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Header, Nav, Ul, NavButton } from './NavBar.styled'
import logo from '../../assets/logoheader.svg'

export const NavBar = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const showMenu = ()=>setIsOpen(!isOpen)
    return (
        <Header>
            <Nav className='flex-container'>
                <div><img src={logo} /></div>
                <NavButton onClick={showMenu}>
                    { !isOpen ? <FaBars /> : <FaTimes /> }
                </NavButton>
                <Ul open={isOpen}>
                    <li><Link to='/' onClick={showMenu}>Oferta educativa</Link></li>
                </Ul>
            </Nav>
        </Header>
    )
}