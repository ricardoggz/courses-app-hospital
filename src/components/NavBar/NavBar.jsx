import { Header, Nav, Ul } from './NavBar.styled'

export const NavBar = ()=>{
    return (
        <Header>
            <Nav className='flex-container'>
                <Ul>
                    <li>Iniciar sesión</li>
                    <li>Registrarse</li>
                </Ul>
            </Nav>
        </Header>
    )
}