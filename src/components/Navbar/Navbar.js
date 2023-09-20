import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={color ? "color" : ""}>
      <div className='logo'>
        <h1>GLX TRVL</h1>
      </div>
      <div className={click ? "menu active" : "menu"}>
        <Link to='/'>Home</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/trining'>Training</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes style={{ color: 'white' }} />) : (<FaBars style={{ color: 'white' }} />)}
      </div>
    </nav>
  )
}

export default Navbar;
