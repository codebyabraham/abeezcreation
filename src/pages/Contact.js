import React from 'react'
import Navbar from '../components/Navbar'
import Footer2 from '../components/Footer2'

function Contact() {
  return (
    <>
    <Navbar/>
    
  <div id='our-team1' class='mb-4'   >
  <form class="row g-3 col-8 mx-auto ">

<h3 id='book' class='text-center fw-bold text-dark  '>BOOK A SESSION TODAY</h3>
<div class="">
    <label for="inputState" class="form-label">Categories</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Portrait</option>
      <option>Wedding</option>
      <option>Birthday</option>
    </select>
  </div>
  <div class="">
    <label for="inputState" class="form-label">Studio or Outdoor</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Studio</option>
      <option>Outdoor</option>   
    </select>
  </div>
  <div class="">
    <label for="inputState" class="form-label">Number of Outfits</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5 or More</option>
    </select>
  </div>
<div class="col-md-4">
    <label for="inputPassword4" class="form-label"></label>
    <input type="email" class="form-control" placeholder='Full Name' name="" id="" />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"></label>
    <input type="email" class="form-control" placeholder='Email Address' name="" id="" />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"></label>
    <input type="text" class="form-control" placeholder='Phone Number' name="" id="" />
    
  </div>
  <div class="col-12">
   <textarea class='form-control' placeholder='Your Message' id="floatingTextarea"></textarea>
  </div>
 
 
  <div class="col text-center p-5">
    <button type="submit" class="btn btn-dark col-5">Submit</button>
  </div>
</form>
  </div>
  <Footer2/>
    </>
  )
}

export default Contact