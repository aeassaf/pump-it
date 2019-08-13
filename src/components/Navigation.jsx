import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-brand {
    color: #ffffff;
  }

  .navbar-brand:hover {
    color: orange;
  }
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;
const Navigation = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Pump It </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/">Home </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/gas">Gas </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/maintenance">Maintenance </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/paint-shops">Paint Shops </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default Navigation;
