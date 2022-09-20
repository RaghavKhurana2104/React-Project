import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import headphone from './Photos/headphone.png'
import home from './Photos/home.png'
import fashion from './Photos/fashion.png'
import toys from './Photos/toys.png'
import grocery from './Photos/grocery.png'
import mobile from './Photos/iphone.png'
import './Middle.css'
function Bichvala() {
  return (
   <div>
  <nav class="navbar navbar-expand-sm navbar-dark bg-secondary  justify-content-center" >
    
    <button className='btn1'><img src={mobile} alt="" className='hdr2' /><br />Smartphones </button>
     <button className='btn1'><img src={headphone} alt=""  className='hdr2'/><br />Electronics</button>
     <button className='btn1'><img src={fashion} alt=""  className='hdr2'/><br />Fashion</button>
     <button className='btn1'><img src={toys} alt=""  className='hdr2'/><br />Toys</button>
     <button className='btn1'><img src={grocery} alt=""  className='hdr2'/><br />Grocery</button>
   
     
    
  </nav>
  
  </div> 
  )
}

export default Bichvala
