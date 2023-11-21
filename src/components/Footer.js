import React from 'react'
import '../App.css'
import emailjs from 'emailjs-com';



function Footer() {
  const SendEmail =(e) =>{
    e.preventDefault();

    emailjs.sendForm('service_e028x4q', 'template_32vt93n', e.target, 'n6yp0XxF3h9CUUxL7')
    .then((result) => {
      console.log(result.text);
    }, (error)=>{
      console.log(error.text);
    });
  };
  return (
    <>
   <div class=" text-center p-3 bg-dark   " height={'100vh'}>
  <div class="row ">
    <div class="col-12 ">
      <h2 id="h2" class=" text-center text-white fw-bold">UPDATES AND NEW STUFF</h2>
      <p id="h2" class=" text-center text-white ">Sign up here for my newsletter where I let folks know what I'm cooking up</p>
    </div>
  </div>
  <form action="/subscribe" method="post" class="row g-3" onSubmit={SendEmail}>
    <div class="col-sm-4 my-4">
      <input type="text" class="form-control" name="first_name" placeholder="First Name" aria-label="First Name" required/>
    </div>
    <div class="col-sm-4 my-4">
      <input type="text" class="form-control" name="last_name" placeholder="Last Name" aria-label="Last Name" required/>
    </div>
    <div class="col-sm-4 my-4">
      <input type="email" class="form-control" name="email" placeholder="Email Address" aria-label="Email Address" required/>
    </div>
    <div class="row mt-4 my-4">
      <div class="d-flex justify-content-center col-md-5 mx-auto">
        <button type="submit" class="btn btn-light">Sign Up</button>
      </div>
    </div>
  </form>
  <div class="row mt-5 pb-5">
    <div class="col-12 text-center text-muted">
      Copyright &copy; 2023  All rights reserved.
    </div>
  </div>
</div>

    </>
  )
}

export default Footer