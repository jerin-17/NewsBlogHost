
import React, { useEffect, useState } from 'react'
import banner from "../Assets/banner.png"
import Bar from '../components/Bar'
import CardPack from '../components/CardPack'
import Image from 'react-bootstrap/Image'
import { getDocs,collection } from 'firebase/firestore'
import { db } from '../firebaseConfig'

//import { Col, Container, Row } from 'react-bootstrap'


function Home() {
  
  // eslint-disable-next-line no-unused-vars
  const [postLists, setPostList ] = useState([]);
  const postCollectionRef = collection(db,"posts");
  
  const getPosts = async () =>{
    const data = await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc)=> ({...doc.data(),id: doc.id})));
  }

  useEffect( () => {
    getPosts();
  },[]);
  return (
    <div>
      <div className='d-flex justify-content-center mh-100' style={{height: 180}}>
      <Image className='m-auto h-100' src={banner} alt="SCT college" fluid style={{overflow:'hidden'}}/>
      </div>
      <Bar />
      <CardPack />
      <div className='cards'>
        
        {postLists.map((post)=> {
          return  <div key={post.id} >{post.title}<br/>{post.imageUrl}<br/>{post.desc}</div>
        })
      }
      </div>

    

    </div>
  )
}

export default Home