import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Photos/shophub4.png'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/sharp-solid-svg-icons';



import React, { Component } from 'react'

 class Header extends Component {
  render() {
    return (
      <>
    <nav >
        <div>
            
        <Navbar  id="nav1" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img className='logo' src={img1} alt=""  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', width: '78%',
            marginLeft: '20%'
         }}
            navbarScroll
          >
              <Form className="d-flex" style={{width: '53%', marginRight:'30%'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button style={{backgroundColor:'black',borderColor:'black'}}><FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
          </Form>
           
            
            <NavDropdown title="Cart" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My WishList</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                My Orders
              </NavDropdown.Item>
              
             
            </NavDropdown>
            <Nav.Link href="" style={{color:'white'}}><b>Home</b> </Nav.Link>
            <Nav.Link href="" style={{color:'white'}}><b>Contact_Us</b></Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    </nav>
  
</>
  )
}
}

export default Header
