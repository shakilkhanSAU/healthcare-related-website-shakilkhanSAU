import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="me-lg-3 nav-link" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="me-lg-3 nav-link" as={Link} to="/home/#Services">Services</Nav.Link>
                            <Nav.Link className="me-lg-3 nav-link" as={Link} to="/home/#Services">About</Nav.Link>
                            <Nav.Link className="me-lg-3 nav-link" as={Link} to="/home/#Services">Contact</Nav.Link>
                            <Nav.Link className="me-lg-3 nav-link" as={Link} to="/login">Sign In</Nav.Link>
                            <Navbar.Text>
                                <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;