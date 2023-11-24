import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import six from '../images/6.jpg'
import seven from '../images/7.jpg'
import eight from '../images/8.jpg'
import nine from '../images/9.jpg'
import ten from '../images/10.jpg'
import eleven from '../images/11.jpg'
import twelve from '../images/12.jpg'
import teen1 from '../images/13.jpg'
import teen2 from '../images/14.jpg'
import twenty from '../images/20.jpg'
import twentyone from '../images/21.jpg'



function Image() {
  return (
   <>
   <Navbar/>
   <div class="container">
  <div class="row">
    <div class="col-md-6">
      <img src={one} class="img-fluid rounded float-start" alt="Image One"/>
    </div>
    <div class="col-md-6">
      <img src={two} class="img-fluid rounded float-end" alt="Image Two"/>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <img src={three} class="img-fluid rounded float-start" alt="Image One"/>
    </div>
    <div class="col-md-6">
      <img src={four} class="img-fluid rounded float-end" alt="Image Two"/>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <img src={five} class="img-fluid rounded float-start" alt="Image One"/>
    </div>
    <div class="col-md-6">
      <img src={six} class="img-fluid rounded float-end" alt="Image Two"/>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <img src={seven} class="img-fluid rounded float-start" alt="Image One"/>
    </div>
    <div class="col-md-6">
      <img src={eight} class="img-fluid rounded float-end" alt="Image Two"/>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <img src={nine} class="img-fluid rounded float-start" alt="Image One"/>
    </div>
    <div class="col-md-6">
      <img src={ten} class="img-fluid rounded float-end" alt="Image Two"/>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <img src={eleven} class="img-fluid rounded float-start" alt="Image One"/>
    </div>
    <div class="col-md-6">
      <img src={twelve} class="img-fluid rounded float-end" alt="Image Two"/>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <img src={teen1} class="img-fluid rounded float-start" alt="Image One"/>
    </div>
    <div class="col-md-6">
      <img src={teen2} class="img-fluid rounded float-end" alt="Image Two"/>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <img src={twenty} class="img-fluid rounded float-start" alt="Image One"/>
    </div>
    <div class="col-md-6">
      <img src={twentyone} class="img-fluid rounded float-end" alt="Image Two"/>
    </div>
  </div>
</div>

   </>
  )
}

export default Image