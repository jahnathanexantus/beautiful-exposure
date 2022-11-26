import React from 'react';
import {useRef} from "react";
import {FaBars,FaTimes} from "react-icons/fa";



export default function Navbar() {
   const navRef = useRef();
const showNavbar = () => {
  navRef.current.classList.toggle("responsive_nav")
}

  return (
    <header>
      
      <nav ref={navRef}>
      <a href="/">Home</a>
      <a href='/AboutUs'>About Beautiful Exposure</a>
        <a href="/ContactInfo">Contact</a>
        
       
        {/* <a href='/#'>contact</a> */}
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
        <button className='nav-btn ' onClick={showNavbar}>
          <FaBars/>
        </button>
    </header>
  );
}
