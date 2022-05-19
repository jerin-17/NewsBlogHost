
import React from 'react'
import banner from "../Assets/banner.png"
import Bar from '../components/Bar'
import CardPack from '../components/CardPack'
import Image from 'react-bootstrap/Image'

//import { Col, Container, Row } from 'react-bootstrap'


function Home() {
  

  return (
    <div>
      <div className='d-flex justify-content-center mh-100' style={{height: 180}}>
      <Image className='m-auto h-100' src={banner} alt="SCT college" fluid style={{overflow:'hidden'}}/>
      </div>
      <Bar />
      <CardPack />

    

    </div>
  )
}

export default Home