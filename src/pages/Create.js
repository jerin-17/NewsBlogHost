import { Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Form} from 'react-bootstrap'

const Create = () => {
  const [title,setTitle] = useState("");
  const[desc,setDesc] = useState("");
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(`/Users/${localStorage.getItem('userId')}`);

    }

    
   
    const updateTitle = ev =>{
        setTitle(ev.target.value); 
    } 

    const updateDesc =  ev =>{
      setDesc(ev.target.value); 
  } 

    useEffect(() => {
      console.log(title,desc);
    }, [title,desc])
    

  return (
    <div>
        <Button onClick={goBack} variant='primary' style={{float:"left"}}> Back </Button>
        <h1>{title}</h1>
        <Form>
  <Form.Group className="mb-3" controlId="Form.ControlInput1">
    <Form.Control type="text" placeholder="Title" value={title} onChange={updateTitle} />
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
    <h1> {desc}</h1>
    <Form.Control as="textarea" rows={3} onChange={updateDesc} value={desc} />
  </Form.Group>
</Form>
    </div>
  )
}

export default Create