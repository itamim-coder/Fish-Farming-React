import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
      <div className="text-center head">
        <h5>Fishing Makes Me Crazy </h5>
        <h3>FishingTastic</h3>
        <Navbar className="" expand="lg">
        <Container>
          <h5>Fish Farming</h5>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Stack direction="horizontal" gap={3}>
            <NavLink  className="nav-button"
  to="/home" 
  activeStyle={{
    fontWeight: "bold",
    color: "skyBlue"
    
  }}
>
  Home
</NavLink >
            <NavLink className="nav-button"
  to="/services" 
  activeStyle={{
    fontWeight: "bold",
    color: "skyBlue"
  }}
>
  Services
</NavLink>
            <NavLink className="nav-button"
  to="/team" 
  activeStyle={{
    fontWeight: "bold",
    color: "skyBlue"
  }}
>
  Team
</NavLink>
            <NavLink className="nav-button"
  to="/contactus" 
  activeStyle={{
    fontWeight: "bold",
    color: "skyBlue"
  }}
>
  Contact Us
</NavLink>
            <NavLink className="nav-button"
  to="/aboutus" 
  activeStyle={{
    fontWeight: "bold",
    color: "skyBlue"
  }}
>
  About Us
</NavLink>
</Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
};

export default Header;