import React from "react";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar({ currentUser, logout}) {
  const loginLinks = (
    <>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
    </>);

  const userLinks = (
    <>
      <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
      <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link>
    </>
  )

  return (
    <div>
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
          <Navbar.Brand as={Link} to="/">Jobly</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/companies">Companies</Nav.Link>
              <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
              {currentUser ? userLinks: loginLinks}
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  );
}

export default NavBar;