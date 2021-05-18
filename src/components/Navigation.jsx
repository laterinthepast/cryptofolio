import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'


const Navigation = () => {
    return (
    
        <Navbar>
            <Navbar.Brand href="#home">cryptofolio</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <a className="navlink" href="/Login">Login</a>
                    <a className="navlink" href="/Footer">Contact</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}

export default Navigation
