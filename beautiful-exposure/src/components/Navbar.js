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
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href='/#'>contact</a>
        <a href='/#'>contact</a>
        <a href='/#'>contact</a>
        <a href='/#'>contact</a>
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
