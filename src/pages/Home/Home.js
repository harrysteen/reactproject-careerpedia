import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Hero from "./component2/Hero"
import About from './component2/About'
import Services from './component2/Services'
import Calltoaction from './Calltoaction'
import Models from './Models'
import Faq from './component2/Faq'
import Footer from '../../components/Footer/Footer'
import img3 from "../../assets/img4.jpg"
 




const home = () => {
  return (
    <div>

        <Navbar/>
        <Hero/>
        <About heading={"Abot us"} img1={<img src={img3} alt='kk'/>}   />

        <Services/>
        <Calltoaction/>
        <Models/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default home