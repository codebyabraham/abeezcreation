import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import About from "./pages/About.js";

import Home from "./pages/Home.js";
import HomeContent from "./components/HomeContent.js";
import Contact from './pages/Contact.js';
import Footer from "./components/Footer.js";
import Footer2 from "./components/Footer2.js"
import Image from "./pages/Image.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/image" element={<Image />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/footer2" element={<Footer2/>}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path='/homecontent' element={<HomeContent/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      </Router>
  );
}

export default App;
