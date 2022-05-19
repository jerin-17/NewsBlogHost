import { Button, Nav } from 'react-bootstrap'
import React from 'react'
import { Navbar,Container } from 'react-bootstrap';




const Bar = () => {
    const isAuth = localStorage.getItem('isAuth');  
  return (
    <Navbar bg="light" variant='light' sticky='top'>
  <Container >
    <Button variant='light'> Home </Button>
    <Button variant='light'> College </Button>
    <Button variant='light'> IEEE </Button>
    <Button variant='light'> NSS </Button>
    <Button variant='light'> IEDC  </Button>
    <Button variant='light'> Student Union</Button>
    <Button variant='light'>About Us</Button> 
   { !isAuth && <Nav.Link href='/Login' >Login</Nav.Link> } 

    
  </Container>
</Navbar>
  )
}

export default Bar