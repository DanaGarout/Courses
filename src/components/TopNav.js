import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsCodeSlash} from "react-icons/bs";

export const TopNav = () => {
  return (
    <Container>
      <Navbar id="navbar"  >
        <Container id="upper"> 
          <Navbar.Brand   href="#"><li className="logo"><BsCodeSlash></BsCodeSlash></li></Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  )
}
