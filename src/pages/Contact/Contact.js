import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/header/Header"
import Footer from "../../components/Footer/Footer"
import Form from './component3/Form'
 import "./Contact.css"
 

const Contact= () => {
  return (
    <>
    <Navbar/>    
    <Header  heading={"contact page"}/>
    <Form/>
    <Footer/>
    
    </>
  )
}

export default Contact