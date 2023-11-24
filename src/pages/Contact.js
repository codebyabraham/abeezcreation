import React from 'react'
import Navbar from '../components/Navbar'
import Footer2 from '../components/Footer2'

function Contact() {
  return (
    <>
    <Navbar/>
    
  <div id='our-team1' >
  <form class="row g-3 col-6 mx-auto">

<h3 id='book' class='text-center fw-bold text-white  '>BOOK A SESSION TODAY</h3>
<div class="">
    <label id='book1' for="inputState" class="form-label text-white">Categories</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Architectural Photography </option>
      <option>Birthday Photography</option>
      <option>Black and White Photography </option>
      <option>Commercial and Product Photography </option>
      <option>Drone Photography </option>
      <option>Fashion Photography </option>
      <option>Fine Art Photography </option>
      <option>Food Photography </option>
      <option>Landscape and Nature </option>
      <option>Medical and Healthcare Photography </option>
      <option>Photojournalism </option>
      <option>Portraits</option>
      <option>Real Estate Photography </option>
      <option>Sports Photography </option>
      <option>Travel Photography </option>
      <option>Weddings and Events</option>   
    </select>
  </div>
  <div class="">
    <label id='book1' for="inputState" class="form-label text-white">On-location</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Backdrop Choices</option>
      <option>Natural Setting</option> 
      <option>Remote Sessions</option>   
    </select>
  </div>
  <div class="">
    <label id='book1' for="inputState" class="form-label text-white">Number of Outfits</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5 or More...</option>
    </select>
  </div>
<div class="col-md-4">
    <label for="inputPassword4" class="form-label"></label>
    <input  type="email" class="form-control" placeholder='Full Name' name="" id="book1" />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"></label>
    <input type="email" class="form-control" placeholder='Email Address' name="" id="book1" />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"></label>
    <input type="text" class="form-control" placeholder='Phone Number' name="" id="book1" />
    
  </div>
  <div class="col-12">
   <textarea class='form-control' placeholder='Your Message' id="book1"></textarea>
  </div>
 
 
  <div class="col text-center p-4">
    <button id="book1"  type="submit" class="btn btn-dark col-7">Submit</button>
  </div>
</form>
  </div>
  <Footer2/>
    </>
  )
}

export default Contact