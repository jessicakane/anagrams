import React from 'react'
import { NavItem } from './NavItem';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="navContainer bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Annagrams</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


