import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-brand {
    color: #7f00ff;
  }

  .navbar-brand:hover {
    color: yellow;
  }
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`
const Navigation = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Pump It </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/">Home </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/gas">gas </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/maintenance">maintenance </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/paint-shops">paint-shops </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
}

export default Navigation
