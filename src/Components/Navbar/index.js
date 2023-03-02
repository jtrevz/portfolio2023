import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './styles.css'

                           
export default function NavBar() {
  return (
    <div id="Navbar">
        <Navbar expand="lg" fixed="top">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">         
                <Nav.Link className="link" href="#about">about</Nav.Link>
                <Nav.Link className="link" href="#work">work</Nav.Link>
                <Nav.Link className="link" href="#skills">skills</Nav.Link>
                <Nav.Link className="link" href="#resume">resume</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
