import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NavBar() {
    return (
        // <Switch >
        //   <Route path='/navbar'>
            <nav id='nav-bar' className='bg-dark'>
                <div className='container bg-dark'>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home"><h3>Tosin</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#servce">Service</Nav.Link>                    
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link eventKey={2} href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </nav>
        //   </Route>
        // </Switch>
        
    )
}

export default NavBar
