import React from 'react'
import Navbar from '../components/Navbar'
import Footer2 from '../components/Footer2'
import { Link } from 'react-router-dom'
import ac from "../images/A.C.jpg"
import '../App.css'

function About() {
  return (
   <>
   <Navbar/>
   <div style={{margin:'4.5rem 0rem '}} class="p-3 col-10 row mx-auto text-start align-items-center">
            <div class="col-lg-5">
              {/* <h4 id='primary1' class="fs-6 my-3 text-dark">SHAPING A BRIGHT FUTURE.</h4> */}
                <h1 id='primary' class="fs-3 my-4 mt-2 fw-bold ">ABOUT ABEEZCREATION</h1>
               <p id='parag' >ABEEZCREATION is a photography brand that was founded in 2018 by Abraham Yusuf. The brand is based in Abuja, Nigeria, and specializes in wedding, portrait, and fashion photography. ABEEZCREATION has a team of experienced photographers who are passionate about capturing the beauty of the world around them.</p>

<p id='parag'><span className='fw-bold'>ABEEZCREATION'S SERVICES</span> <br />
ABEEZCREATION offers a wide range of photography services, including:
<li>Wedding photography</li> <li>Portrait photography</li> <li>Fashion photography</li><li>Event photography</li><li>Commercial photography</li></p>
<p id='parag'>The brand also offers a variety of photo editing services, as well as album design and printing services.</p>
<p id='parag'>ABEEZCREATION's pricing is competitive and affordable. The brand offers a variety of packages to suit different budgets. You can get a quote by contacting the brand directly.</p>
        
            </div>
            <div class="col-lg-5 mx-auto">
          
  <img src={ac} class="card-img-top" alt="..."/>
  </div>
            </div>
<Footer2/>
   </>
  )
}

export default About