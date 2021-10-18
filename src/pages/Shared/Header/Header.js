import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut();
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="me-lg-3 nav-link" as={Link} to="/home">Home</Link>
                        <Nav.Link className="me-lg-3 nav-link" as={Link} to="/home/#Services">Services</Nav.Link>
                        <Nav.Link className="me-lg-3 nav-link" as={Link} to="/home/#Services">About</Nav.Link>
                        <Nav.Link className="me-lg-3 nav-link" as={Link} to="/home/#Services">Contact</Nav.Link>
                        {
                            user.email ?
                                <Nav.Link as={Link} to="/home" className="me-lg-3" onClick={handleLogOut}>Sign Out</Nav.Link> :
                                <Nav.Link className="me-lg-3 nav-link" as={Link} to="/login">Sign In</Nav.Link>
                        }
                        <Navbar.Text>
                            <a href="#login">
                                {
                                    user.displayName && <img className="user-img" src={user.photoURL} alt="" />
                                }
                            </a>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;