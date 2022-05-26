import { Button } from 'react-bootstrap';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import banner from "../Assets/banner.png"
//import {useParams} from 'react-router-dom';
const Users = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  let navigate = useNavigate();
  let uId = localStorage.getItem('userId');

   const logOut = () =>{
    localStorage.clear();
    navigate('/');

   }
  
  const goToHome = () =>{
     navigate('/');
    
  }
  
  const goToCreate= () => {
    navigate(`/Create/${uId}`);
  }

  return (
    <div >
      <div className='m-3'>
        <Button variant="primary" type='button' style={{float:'left'}} onClick={goToHome}>Home</Button>
        <Button variant="danger" type='button' style={{float:'right'}} onClick={logOut} >Log out</Button>
        </div>
        <div className='d-flex justify-content-center mh-100' style={{height: 180}}>
      <Image className='m-auto h-100' src={banner} alt="SCT college" fluid style={{overflow:'hidden'}}/>
      </div>
    
      <Button type='button' onClick={goToCreate} > Create </Button>
    
       
    </div>
  )
}

export default Users