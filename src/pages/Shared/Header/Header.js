import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import './Header.css'
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut();
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img src={logo} className="img-fluid" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="me-lg-3 nav-link" as={Link} to="/home">Home</Link>
                        <Nav.Link className="me-lg-3 nav-link" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="me-lg-3 nav-link" as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="me-lg-3 nav-link" as={Link} to="/contact">Contact</Nav.Link>
                        {
                            user.email ?
                                <Nav.Link as={Link} to="/home" className="me-lg-3" onClick={handleLogOut}>Sign Out</Nav.Link> :
                                <Nav.Link className="me-lg-3 nav-link" as={Link} to="/login">Sign In</Nav.Link>
                        }
                        <Navbar.Text>
                            <Link to="/user">
                                {
                                    user?.photoURL ? <img className="user-img" src={user?.photoURL} alt="" /> :
                                        <span className="user-logo"><i className="fas fa-user"></i></span>
                                }
                            </Link>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;