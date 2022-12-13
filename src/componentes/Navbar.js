import React from 'react';
import '../Navbar.css';
import Img from './Cartwidget';


function Navbar() {
    return (
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        );
    }






function MyNavbar() {
        return (
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">My Brand</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem href="#">
                Home
              </NavItem>
              <NavItem href="#">
                About
              </NavItem>
              <NavItem href="#">
                FAQ
              </NavItem>
              <NavItem href="#">
                Contact Us
              </NavItem>
            </Nav>
          </Navbar>
        );
    }


export default Navbar