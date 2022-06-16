/* eslint-disable no-unused-vars */
import { Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Form} from 'react-bootstrap'
import { addDoc, collection ,setDoc} from 'firebase/firestore'
import { auth,db, storage } from "../firebaseConfig"
import { ref,getDownloadURL, uploadBytes } from 'firebase/storage'
import {v4} from 'uuid'


const Create = () => {
  const [title,setTitle] = useState("");
  const[desc,setDesc] = useState("");
  const [imagetoUpload, setImagetoUpload] = useState(null);
  const [imageUrl,setImageUrl] = useState('');
  const [ isFirstMount , setIsFirstMount] = useState(true);
  const navigate = useNavigate();

    const goBack = () =>{
        navigate(`/Users/${localStorage.getItem('userId')}`);

    }

    const removeImage = () => {
      setImagetoUpload(null);
  };

    const uploadImage = async()=> {
      if(imagetoUpload == null) return ;
      const storageRef = ref(storage,`images/${imagetoUpload.name + v4()}`);
       uploadBytes(storageRef, imagetoUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
          console.log("image set");
          setImageUrl(url);
          removeImage();
        })
      })

       
        }

    
    
    const updateTitle = ev =>{
        setTitle(ev.target.value); 
    } 

    const updateDesc =  ev =>{
      setDesc(ev.target.value); 
  } 


  useEffect(() => {
    if(isFirstMount){
      setIsFirstMount(false);
    }
    else{
      createPost();
    }
    
  }, [imageUrl])
  
   
    
    const postCollectionRef = collection(db,"posts");
    const createPost = async() =>{
    await addDoc(postCollectionRef, {title,
        imageUrl : imageUrl ,
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
    <Form.Control type="file" onChange={ (ev) => {setImagetoUpload(ev.target.files[0])}} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
    
    <Form.Control as="textarea" rows={3} onChange={updateDesc} value={desc} />
  </Form.Group>
</Form>

<Button variant='primary' type='button' onClick={uploadImage} >Submit</Button>
    </div>
  )
}

export default Create