import React from 'react'
import "./Header.css"
import img from "../../assets/img2.jpg"
const Header = ( {heading}) => {
  return (
    
    <section className='header' style={{backgroundImage:`url(${img})`,backgroundSize:"cover",backgroundPosition:"fixed"}}>
        <h1>
          {
            heading
          }
        </h1>

        <p>Corrects anxiety neurosis, stress related disorders Corrects anxiety </p>
    </section>
  )
}

export default Header