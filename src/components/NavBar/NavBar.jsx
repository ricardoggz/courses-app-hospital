import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Header, Nav, Ul, NavButton } from './NavBar.styled'
import logo from '../../assets/logo.png'

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
                    <li><Link to='/' onClick={showMenu}>Inicio</Link></li>
                    <li><Link to='/login' onClick={showMenu}>Iniciar sesiòn</Link></li>
                </Ul>
            </Nav>
        </Header>
    )
}