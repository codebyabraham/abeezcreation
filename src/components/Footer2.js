import React from 'react'

function Footer2() {
  return (
    <>
   <footer class="bg-dark text-white py-5">
  <div class="container">
    <div class="row">
    <div className="col-md-3">
          <h3 id='parag' style={{color:'#ffff', fontWeight:'800'}}>Services</h3>
            <ul id='parag' className="list-unstyled fs-5">
              <li>Photo Session</li>
              <li>Professional Retouching</li>
              <li>Frame</li>
            </ul>
          </div>
          <div className="col-md-3">
          <h3 id='parag'  style={{color:'#ffff', fontWeight:'800'}}>Connect with Us</h3>
            <ul id='parag' className="list-unstyled fs-5">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div class="row mt-5">
    <div class="col-12 text-center text-muted">
      Copyright &copy; 2023  All rights reserved.
    </div>
  </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer2