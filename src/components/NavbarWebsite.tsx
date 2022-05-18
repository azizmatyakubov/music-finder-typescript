import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

interface NavbarWebsiteProps {
    title: string
}

const NavbarWebsite = ({title}:NavbarWebsiteProps) => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">

      {title}
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default NavbarWebsite