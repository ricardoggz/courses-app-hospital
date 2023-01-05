import { Link } from 'react-router-dom'
import { Header, Nav, Ul } from './NavBar.styled'
import logo from '../../assets/logo.png'

export const NavBar = ()=>{
    return (
        <Header>
            <Nav className='flex-container'>
                <div><img src={logo} /></div>
                <Ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/login'>Iniciar sesiòn</Link></li>
                </Ul>
            </Nav>
        </Header>
    )
}