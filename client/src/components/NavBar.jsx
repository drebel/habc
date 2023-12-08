import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import {LinkContainer} from 'react-router-bootstrap'

export default function NavBar(){
    
    return(
        <Navbar bg='dark' data-bs-theme='dark' expand='lg' className="px-3">
            <LinkContainer to='/'>
                <NavbarBrand>HABC</NavbarBrand>
            </LinkContainer>
            <Navbar.Toggle  aria-controls='basic-navbar-nav' /> 
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <LinkContainer to='/questionnaire'>
                        <Nav.Link>Questionnaire</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/'>
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/signup'>
                        <Nav.Link>Signup</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}