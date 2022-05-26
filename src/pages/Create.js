import { Button } from 'react-bootstrap'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InputGroup, FormControl } from 'react-bootstrap'

const Create = () => {

    const navigate = useNavigate();

    const goBack = () =>{
        navigate(`/Users/${localStorage.getItem('userId')}`);

    }
  return (
    <div>
        <Button onClick={goBack} variant='primary' style={{float:"left"}}> Back </Button>
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Title"
      aria-label="Title"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

    </div>
  )
}

export default Create