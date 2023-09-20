import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import img1 from "../../assets/fb.jpg";
import img2 from "../../assets/insta.webp";
import img3 from "../../assets/twitter.jpg";

const Footer = () => {
  const social = [img1, img2, img3];

  return (
    <footer>
      <h1>GLX TRAVEL</h1>

      <div className='links'>
        <h3>useful links</h3>

        <Link to='/'>Home</Link> 
        <Link to='./pricing'>Pricing</Link>
        <Link to='./Trining'>Trining</Link>
        <Link to='/Contact'>Contact</Link>
      </div>

      <div className='social'>
        {social.map((item, index) => (
          <img src={item} alt='' key={index} width={50} height={50} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
