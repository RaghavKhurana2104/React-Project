
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import headphone from './Photos/headphone.png'
import fashion from './Photos/fashion.png'
import toys from './Photos/toys.png'
import grocery from './Photos/grocery.png'
import mobile from './Photos/iphone.png'
import home from './Photos/home.png'
import ad1 from './Photos/ad1.png'
import ad2 from './Photos/ad2.png'
import ad3 from './Photos/ad3.png'
import ad4 from './Photos/ad4.png'

import './Middle.css'

import React, { Component } from 'react'

 class Bichvala extends Component {
  render() {
    return (
      <div>

    <div style={{height:'3.5em'}}></div>
  <nav class="navbar navbar-expand-sm navbar-dark bg-light  justify-content-center" >
    
    <button className='btn1'><img src={mobile} alt="" className='hdr2' /><br />Smartphones </button>
     <button className='btn1'><img src={headphone} alt=""  className='hdr2'/><br />Electronics</button>
     <button className='btn1'><img src={fashion} alt=""  className='hdr2'/><br />Fashion</button>
     <button className='btn1'><img src={toys} alt=""  className='hdr2'/><br />Toys</button>
     <button className='btn1'><img src={grocery} alt=""  className='hdr2'/><br />Grocery</button>
     <button className='btn1'><img src={home} alt=""  className='hdr2'/><br />Home</button>
     
    
  </nav>
  <div style={{marginTop:'0.5em'}} className='bg-light'><Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ad1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ad2}
          
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ad3}
          
          alt="Third slide"
        />

       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ad4}
          
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel></div>
  <div className='bg-light' style={{height:'20em',marginBlock:'1% '}}><h1>Best Deals on Footwear</h1></div>
  <div className='bg-light' style={{height:'20em',marginBlock:'1%'}}><h1>Our Top picks</h1></div>
  <div className='bg-light' style={{height:'20em',marginBlock:'1%'}}><h1>Best choice of PowerBanks</h1></div>
  <div className='bg-light' style={{height:'20em',marginBlock:'1%'}}><h1>Big Discounts</h1></div>
  <div className='bg-light' style={{height:'20em',marginBlock:'1%'}}><h1>Best of Apple</h1></div>
  <div className='bg-light' style={{height:'20em',marginBlock:'1%'}}><h1>Upcoming Deals</h1></div>
  </div> 
  )
}
 }

export default Bichvala
