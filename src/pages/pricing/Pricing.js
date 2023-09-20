
import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/header/Header"
import Footer from "../../components/Footer/Footer"
import Card from './Component3/Card'
 import "./Pricingstyle.css"

 

const Pricing = () => {
  return (
    <>
      <Navbar/>
      <Header heading={"pricing page"}/>
      <Card/>
      <Footer/>
    </>
  )
}


export default Pricing