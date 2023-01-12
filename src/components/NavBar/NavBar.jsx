import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsCartFill } from 'react-icons/bs'
import { Header, Nav, Ul, NavButton } from './NavBar.styled'
import { CartContext, UserContext } from '../../context'
import logo from '../../assets/logoheader.svg'

export const NavBar = ()=>{
    const { count } = useContext(CartContext)
    const { deleteUser } = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    const showMenu = ()=>setIsOpen(!isOpen)
    const user = localStorage.getItem('user')
    const navigate = useNavigate()
    const logout = ()=>{
        showMenu()
        deleteUser()
        return navigate('/login')
    }
    return (
        <Header>
            <Nav className='flex-container'>
                <div><img src={logo} /></div>
                <NavButton onClick={showMenu}>
                    { !isOpen ? <FaBars /> : <FaTimes /> }
                </NavButton>
                <Ul open={isOpen}>
                    <li><Link to='/' onClick={showMenu}>Inicio</Link></li>
                    {
                        !user ? 
                        <li><Link to='/login' onClick={showMenu}>Iniciar sesiòn</Link></li>
                        :
                        <>
                        <li><Link to='dashboard'onClick={showMenu}>Mi tablero</Link></li>
                        <li onClick={logout}>Cerrar sesión</li>
                        </>
                    }
                    {/*<li><Link to='/cart' className='cart' onClick={showMenu}><BsCartFill /> Carrito {count}</Link></li>*/}
                </Ul>
            </Nav>
        </Header>
    )
}