import { Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Form} from 'react-bootstrap'
import { addDoc, collection } from 'firebase/firestore'
import { auth,db, storage } from "../firebaseConfig"
import { ref } from 'firebase/storage'
import {v4} from 'uuid'

const Create = () => {
  const [title,setTitle] = useState("");
  const[desc,setDesc] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [url,setUrl] = useState('')
 // const [ imageList , setImageList ] = useState([]);
  //const imageListRef = ref(storage,"images/")
  const navigate = useNavigate();

    const goBack = () =>{
        navigate(`/Users/${localStorage.getItem('userId')}`);

    }

    const uploadImage = ()=> {
      if(imageUpload == null) return ;
      ref(`/images/${imageUpload.name + v4()}`).put(imageUpload)
      .on("state_changed", alert("success"), alert, () => {
  
        // Getting Download Link
        storage.ref("images").child(imageUpload.name).getDownloadURL()
          .then((url) => {
            setUrl(url);
          })
      });
  
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

    
    const postCollectionRef = collection(db,"posts");
    const createPost = async() =>{
      uploadImage();
      await addDoc(postCollectionRef, {title,
        imageUrl : url ,
         desc ,
         author:{ name: auth.currentUser.displayName , id : auth.currentUser.uid }
        })
        navigate('/');

    }

  return (
    <div>
        <Button onClick={goBack} variant='primary' style={{float:"left"}}> Back </Button>
        
        <Form>
  <Form.Group className="mb-3" controlId="Form.ControlInput1">
    <Form.Control type="text" placeholder="Title" value={title} onChange={updateTitle} />
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control type="file" onChange={ (ev) => {setImageUpload(ev.target.files[0])}} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
    
    <Form.Control as="textarea" rows={3} onChange={updateDesc} value={desc} />
  </Form.Group>
</Form>

<Button variant='primary' type='button' onClick={createPost} >Submit</Button>
    </div>
  )
}

export default Create