import React from "react"
import logo from "../assets/logo.svg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link} from "react-router-dom"

const NavbarComponent = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img alt="" src={logo} className="d-inline-block align-top" width="30" height="30" />
        {' '}
        React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <NavDropdown title="Tools" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/login"}>Login/Register</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/form"}>Form</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/crud"}>CRUD</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarComponent;