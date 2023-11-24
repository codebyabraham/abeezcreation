import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import Logo from '../images/Logo.jpg'



function Navbar() {
  return (
    <>
   <nav class="navbar navbar-expand-lg  custom-navbar">
  <div class="container ">
    {/* <h2 id='h2' class="navbar-brand fw-bolder text-dark" to="/">ABEEZCREATION</h2> */}
    <Link id='logo' to="/">
      <img src={Logo} class="img-fluid"  alt="" />
    </Link>
    <button class="navbar-toggler navbar-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" >
          <Link class="nav-link active fw-bold text-dark" to="/" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link fw-bold text-dark" to="/image" href="#">Image</Link>
        </li>
        <li class="nav-item " >
          <Link class="nav-link fw-bold text-dark" to="/about" href="#">About</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link fw-bold text-dark" to="/contact" href="#">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar