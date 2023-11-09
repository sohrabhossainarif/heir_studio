import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "./menu.css"
const menu = () => {
  return (

        <Navbar bg="light" expand="lg" className='menu-bg'>
        <Container>
          <Navbar.Brand href="#home">
               <img src='images/logo.png' alt='logo'/> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">FEATURES</Nav.Link>
              <Nav.Link href="#link">SERVICES</Nav.Link>
              <Nav.Link href="#link">TESTTMONIALS</Nav.Link>
              <Nav.Link href="#link">MEET US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default menu