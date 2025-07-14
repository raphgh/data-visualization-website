import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavBar() {
  return (
    <>
      <Navbar className='NavBar'>
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="NavBarBrand">Music Canada Stats</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/analysis">Analysis</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About MCanadaStats</Nav.Link>
            <Nav.Link as={NavLink} to="/surveyprogram">Survey Programs</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;