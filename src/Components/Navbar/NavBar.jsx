import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center"> <Logo /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" activeclassname="active" exact="true" to="/">Home</NavLink>

                        <NavLink className="nav-link" activeclassname="active" exact="true" to="/xbox">Xbox</NavLink>

                        <NavLink className="nav-link" activeclassname="active" exact="true" to="/playstation">PlayStation</NavLink>

                        <NavLink className="nav-link" activeclassname="active" exact="true" to="/nintendo">Nintendo</NavLink>
                    </Nav>
                </Navbar.Collapse>

                <NavLink className="nav-link" to="/cart"> <CartWidget /> </NavLink>

            </Container>
        </Navbar>
    );
}

export default NavBar;
