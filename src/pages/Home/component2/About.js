import React from 'react'
import img from "../../../assets/img1.jpg"
import "./About.css"

const About = ({heading,img1}) => {
  return (

    <> 
    <h1 className='heading'>  {heading} </h1>  
    <section className='about'>

        <img src={img} alt="kk"></img>

        <div className='content2'>
            <h2>Lonley</h2>

            <p>Sometimes, reaching out to loved ones and having a conversation can make a big difference. Sharing your feelings with someone you trust can provide emotional support.</p>

            <p>Take care of yourself physically and mentally. Engage in activities that you enjoy, eat well, get regular exercise, and prioritize self-care.</p>

            <p> Setting achievable goals, even small ones, can give you a sense of purpose and accomplishment. This can be especially helpful when you're feeling isolated</p>
        </div>
         
    </section>

    </>
  )
}

export default About