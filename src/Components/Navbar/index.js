import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom'
import './styles.css'

                           
export default function NavBar() {
  return (
    <div id="Navbar">
        <Navbar expand="lg" fixed="sticky">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">         
                <Nav.Link as={NavLink} to="/about"className="linkStyle">about</Nav.Link>
                <Nav.Link as={NavLink} to="/work"className="linkStyle">work</Nav.Link>
                <Nav.Link as={NavLink} to="/skills"className="linkStyle">skills</Nav.Link>
                <Nav.Link as={NavLink} to="/resume"className="linkStyle">resume</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
