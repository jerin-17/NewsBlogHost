import { Button, Nav } from 'react-bootstrap'
import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import google from '../Assets/google.png'
import { Image } from 'react-bootstrap'
import { provider,auth } from '../firebaseConfig'
import {signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {

  let navigate = useNavigate();


  const signInWithGoogle = ()=>{
    // eslint-disable-next-line no-unused-vars
    signInWithPopup(auth, provider).then((result)=>{
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate('/Users');

    }
    )  } 
  return (
   <Container className='mt-5 shadow shadow-5 '>
     <Row >
       <Col className='d-flex justify-content-center align-items-center'>
       <h1 className='mt-3 p-2'> Login to Continue </h1>
       </Col>
       </Row>
       <Row>
         <Col className='d-flex justify-content-center mt-1 p-2'>
         <small style={{color:'blue'}}>Login with Google</small>
         </Col>
       </Row>
       <Row>
         <Col className='d-flex justify-content-center mt-2 p-5'>
         < Image  src={google} alt="Google Icon" style={{ height:'100px'}} />
         </Col>
       </Row>
       
       
       
       <Row>
         <Col className='d-grid gap-2 mt-4 pt-3'>
           
           <Button className='w-50 m-auto' variant='primary' size='lg' type='button' name='login' onClick={signInWithGoogle}> Login </Button>
         </Col></Row>  
     <Row>
       <Col className='d-flex justify-content-center m-2 pb-2'>
         <small> <Nav.Link href='/'> Return to Home</Nav.Link> </small>
       </Col>
     </Row>
   </Container>
  
  )
}

export default Login