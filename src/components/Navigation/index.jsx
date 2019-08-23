import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import './index.css';

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
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="grey" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/" className="white">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/gas" className="white">
              Gas
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/maintenance" className="white">
              Maintenance
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/paint-shops" className="white">
              Paint Shops
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" className="white">
              About
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default withRouter(Navigation);
