import React from 'react'
import { Link } from 'react-router-dom'
import video from "../../../assets/video2.mp4"
import "./Homestyles.css"
const Hero = () => {
  return (
    <div className='hero'>
        <video src={video} autoPlay loop muted ></video>

        <div className='content'>
            <h1>TRAVEL GALEXY</h1>

            <p>To resolve this issue, you should check the import path and your project's file structur</p>

            <div className='button'>
                <Link to="/trining" >TRANING</Link>
                <Link to="/pricing" >PRICING</Link>
            </div>
        </div>


    </div>
  )
}

export default Hero